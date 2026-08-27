import { useState, useEffect } from 'react'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { FileUploadField } from '../../components/admin'
import { blogService } from '../../services'
import type { BlogPost } from '../../models'

interface BlogFormState {
  id?: string
  title: string
  slug: string
  excerpt: string
  category: string
  categoryLabel: string
  author: string
  authorRole: string
  publishedDate: string
  readTime: string
  tileImage: string
  bannerImage: string
  isFeatured: boolean
  isPublished: boolean
  tags: string
  highlightBadge: string
  paragraphs: string
}

const initialFormState: BlogFormState = {
  title: '',
  slug: '',
  excerpt: '',
  category: 'accessibility',
  categoryLabel: 'Accessibility & Tech',
  author: 'WinVinaya Editorial Team',
  authorRole: 'Accessibility & Digital Inclusion Practice',
  publishedDate: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
  readTime: '4 min read',
  tileImage: '',
  bannerImage: '',
  isFeatured: false,
  isPublished: true,
  tags: '',
  highlightBadge: '',
  paragraphs: '',
}

export const AdminBlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<BlogFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadBlogs = async () => {
    setLoading(true)
    try {
      const res = await blogService.getAdminBlogs({ limit: 50, search: search || undefined })
      if (res.data) {
        setBlogs(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin blogs:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage Blogs & Articles | WinVinaya Admin'
    loadBlogs()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadBlogs()
  }

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (blog: BlogPost) => {
    const allParagraphs = blog.sections
      ? blog.sections.flatMap((s) => s.paragraphs || []).join('\n\n')
      : ''

    setFormData({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      category: blog.category,
      categoryLabel: blog.categoryLabel,
      author: blog.author,
      authorRole: blog.authorRole,
      publishedDate: blog.publishedDate,
      readTime: blog.readTime,
      tileImage: blog.tileImage,
      bannerImage: blog.bannerImage,
      isFeatured: blog.isFeatured || false,
      isPublished: blog.isPublished !== false,
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
      highlightBadge: blog.highlightBadge || '',
      paragraphs: allParagraphs,
    })
    setIsEditing(true)
    setOpenDialog(true)
  }

  const handleTitleChange = (newTitle: string) => {
    setFormData((prev) => {
      const generatedSlug = !isEditing
        ? newTitle
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        : prev.slug
      return { ...prev, title: newTitle, slug: generatedSlug }
    })
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setStatusMessage(null)

    const payload = {
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      category: formData.category,
      categoryLabel: formData.categoryLabel,
      author: formData.author,
      authorRole: formData.authorRole,
      publishedDate: formData.publishedDate,
      readTime: formData.readTime,
      tileImage: formData.tileImage,
      bannerImage: formData.bannerImage,
      isFeatured: formData.isFeatured,
      isPublished: formData.isPublished,
      highlightBadge: formData.highlightBadge || null,
      tags: formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      sections: [
        {
          heading: 'Overview & Analysis',
          paragraphs: formData.paragraphs
            .split('\n\n')
            .map((p) => p.trim())
            .filter(Boolean),
        },
      ],
    }

    try {
      if (isEditing && formData.id) {
        await blogService.updateBlog(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'Article updated successfully!' })
      } else {
        await blogService.createBlog(payload as any)
        setStatusMessage({ type: 'success', text: 'Article created and published!' })
      }
      setOpenDialog(false)
      loadBlogs()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save article.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await blogService.deleteBlog(id)
      setStatusMessage({ type: 'success', text: 'Article deleted successfully.' })
      setDeleteConfirmId(null)
      loadBlogs()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete article.' })
    }
  }

  return (
    <AdminLayout title="Blogs & Articles Management">
      <Stack spacing={3.5}>
        {/* Header Actions */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Blog Articles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create, edit, feature, and manage insights and knowledge base publications.
            </Typography>
          </Box>

          <Button
            tone="primary"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenCreate}
            sx={{ fontWeight: 800 }}
          >
            Create New Article
          </Button>
        </Stack>

        {/* Status Alerts */}
        {statusMessage && (
          <Alert severity={statusMessage.type} onClose={() => setStatusMessage(null)}>
            {statusMessage.text}
          </Alert>
        )}

        {/* Filter & Search Bar */}
        <Paper
          component="form"
          onSubmit={handleSearchSubmit}
          elevation={0}
          sx={{
            p: 2,
            borderRadius: (theme) => Number(theme.shape.borderRadius) * 0.1,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            size="small"
            placeholder="Search articles by title, author, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />,
              },
            }}
          />

          <Button tone="secondary" variant="outlined" size="small" onClick={loadBlogs} startIcon={<RefreshIcon />}>
            Refresh
          </Button>
        </Paper>

        {/* Articles Table */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: (theme) => Number(theme.shape.borderRadius) * 0.1,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            overflow: 'hidden',
          }}
        >
          {loading ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <CircularProgress size={36} />
              <Typography variant="body2" sx={{ mt: 1.5, color: 'text.secondary' }}>
                Loading articles...
              </Typography>
            </Box>
          ) : blogs.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Articles Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Click below to write your first article.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Create Article
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="blog articles table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Article Title & Author</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Featured</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {blogs.map((blog) => (
                    <TableRow key={blog.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {blog.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          By {blog.author} • {blog.readTime}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip label={blog.categoryLabel || blog.category} size="small" sx={{ fontWeight: 700, fontSize: '0.725rem' }} />
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={blog.isPublished !== false ? 'Published' : 'Draft'}
                          size="small"
                          color={blog.isPublished !== false ? 'success' : 'default'}
                          sx={{ fontWeight: 800, fontSize: '0.7rem' }}
                        />
                      </TableCell>

                      <TableCell>
                        {blog.isFeatured ? (
                          <Chip label="Spotlight" size="small" color="primary" sx={{ fontWeight: 800, fontSize: '0.7rem' }} />
                        ) : (
                          <Typography variant="caption" color="text.secondary">
                            Standard
                          </Typography>
                        )}
                      </TableCell>

                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {blog.publishedDate}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="View Live Page">
                            <IconButton
                              size="small"
                              component="a"
                              href={`/resources/blogs/${blog.slug}`}
                              target="_blank"
                              sx={{ color: 'text.secondary' }}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Edit Article">
                            <IconButton size="small" onClick={() => handleOpenEdit(blog)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Article">
                            <IconButton size="small" onClick={() => setDeleteConfirmId(blog.id)} sx={{ color: 'error.main' }}>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>

        {/* Create / Edit Article Dialog Form */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
          <Box component="form" onSubmit={handleSave}>
            <DialogTitle sx={{ fontWeight: 900, pb: 1 }}>
              {isEditing ? 'Edit Blog Article' : 'Create New Blog Article'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="Article Title"
                  required
                  fullWidth
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g., WCAG 2.2 AA Compliance Guide for Modern Web Apps"
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    label="URL Slug"
                    required
                    fullWidth
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    helperText="URL identifier: /resources/blogs/[slug]"
                  />

                  <TextField
                    select
                    label="Category"
                    required
                    fullWidth
                    value={formData.category}
                    onChange={(e) => {
                      const cat = e.target.value
                      const labels: Record<string, string> = {
                        'workplace-inclusion': 'Workplace Inclusion',
                        accessibility: 'Accessibility & Tech',
                        'community-training': 'Community & Training',
                        'sign-language': 'Sign Language & ISL',
                        'tech-engineering': 'Tech & Engineering',
                      }
                      setFormData({ ...formData, category: cat, categoryLabel: labels[cat] || cat })
                    }}
                  >
                    <MenuItem value="accessibility">Accessibility & Tech</MenuItem>
                    <MenuItem value="workplace-inclusion">Workplace Inclusion</MenuItem>
                    <MenuItem value="community-training">Community & Training</MenuItem>
                    <MenuItem value="sign-language">Sign Language & ISL</MenuItem>
                    <MenuItem value="tech-engineering">Tech & Engineering</MenuItem>
                  </TextField>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    label="Author Name"
                    required
                    fullWidth
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />

                  <TextField
                    label="Author Role / Designation"
                    required
                    fullWidth
                    value={formData.authorRole}
                    onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    label="Published Date String"
                    required
                    fullWidth
                    value={formData.publishedDate}
                    onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                    placeholder="e.g., March 2026"
                  />

                  <TextField
                    label="Read Time"
                    required
                    fullWidth
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g., 5 min read"
                  />
                </Stack>

                <TextField
                  label="Short Excerpt (Summary)"
                  required
                  multiline
                  rows={2}
                  fullWidth
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="A concise summary of the key findings or takeaways..."
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <FileUploadField
                    label="Tile / Card Image"
                    required
                    folder="blogs"
                    value={formData.tileImage}
                    onChange={(url) => setFormData({ ...formData, tileImage: url })}
                    helperText="Upload JPG/PNG for article cards & thumbnails"
                  />

                  <FileUploadField
                    label="Banner Header Image"
                    required
                    folder="blogs"
                    value={formData.bannerImage}
                    onChange={(url) => setFormData({ ...formData, bannerImage: url })}
                    helperText="Upload high-res banner for article detail header"
                  />
                </Stack>

                <TextField
                  label="Article Content (Paragraphs)"
                  required
                  multiline
                  rows={6}
                  fullWidth
                  value={formData.paragraphs}
                  onChange={(e) => setFormData({ ...formData, paragraphs: e.target.value })}
                  helperText="Separate paragraphs with a blank line."
                />

                <TextField
                  label="Tags (Comma-separated)"
                  fullWidth
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="WCAG, Accessibility, Testing, Audits"
                />

                <Stack direction="row" spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.isPublished}
                        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                      />
                    }
                    label="Published on Website"
                  />

                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      />
                    }
                    label="Featured Spotlight"
                  />
                </Stack>
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2.5 }}>
              <Button tone="secondary" variant="outlined" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button tone="primary" variant="contained" type="submit" loading={saving} sx={{ fontWeight: 800 }}>
                {isEditing ? 'Update Article' : 'Publish Article'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this article? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button tone="secondary" variant="outlined" onClick={() => setDeleteConfirmId(null)}>
              Cancel
            </Button>
            <Button
              tone="accent"
              variant="contained"
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
              sx={{ bgcolor: 'error.main', color: '#fff', '&:hover': { bgcolor: 'error.dark' } }}
            >
              Delete Permanently
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </AdminLayout>
  )
}

export default AdminBlogsPage
