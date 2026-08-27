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
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { FileUploadField } from '../../components/admin'
import { newsletterService } from '../../services'
import type { Newsletter } from '../../models'

interface NewsletterFormState {
  id?: string
  title: string
  publishedDate: string
  year: string
  excerpt: string
  coverImage: string
  pdfUrl: string
  isFeatured: boolean
  isPublished: boolean
  sortOrder: number
}

const initialFormState: NewsletterFormState = {
  title: '',
  publishedDate: 'January 2026 Edition',
  year: '2026',
  excerpt: 'Highlights of candidate placements, assistive tech milestones, and partner endorsements.',
  coverImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80',
  pdfUrl: 'https://winvinayainfosystems.com/assets/newsletters/2026-01-newsletter.pdf',
  isFeatured: false,
  isPublished: true,
  sortOrder: 0,
}

export const AdminNewslettersPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<NewsletterFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadNewsletters = async () => {
    setLoading(true)
    try {
      const res = await newsletterService.getAdminNewsletters({ limit: 50, search: search || undefined })
      if (res.data) {
        setNewsletters(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin newsletters:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage Newsletters | WinVinaya Admin'
    loadNewsletters()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadNewsletters()
  }

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (item: Newsletter) => {
    setFormData({
      id: item.id,
      title: item.title,
      publishedDate: item.publishedDate,
      year: item.year,
      excerpt: item.excerpt,
      coverImage: item.coverImage,
      pdfUrl: item.pdfUrl,
      isFeatured: item.isFeatured || false,
      isPublished: item.isPublished !== false,
      sortOrder: item.sortOrder || 0,
    })
    setIsEditing(true)
    setOpenDialog(true)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setStatusMessage(null)

    const payload = {
      title: formData.title,
      publishedDate: formData.publishedDate,
      year: formData.year,
      excerpt: formData.excerpt,
      coverImage: formData.coverImage,
      pdfUrl: formData.pdfUrl,
      isFeatured: formData.isFeatured,
      isPublished: formData.isPublished,
      sortOrder: Number(formData.sortOrder) || 0,
    }

    try {
      if (isEditing && formData.id) {
        await newsletterService.updateNewsletter(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'Newsletter updated successfully!' })
      } else {
        await newsletterService.createNewsletter(payload as any)
        setStatusMessage({ type: 'success', text: 'Newsletter published successfully!' })
      }
      setOpenDialog(false)
      loadNewsletters()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save newsletter.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await newsletterService.deleteNewsletter(id)
      setStatusMessage({ type: 'success', text: 'Newsletter deleted successfully.' })
      setDeleteConfirmId(null)
      loadNewsletters()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete newsletter.' })
    }
  }

  return (
    <AdminLayout title="Newsletters Management">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Newsletters & Archives
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload, manage, and publish monthly cohort newsletters and archive editions.
            </Typography>
          </Box>

          <Button tone="primary" variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate} sx={{ fontWeight: 800 }}>
            Publish Newsletter
          </Button>
        </Stack>

        {statusMessage && (
          <Alert severity={statusMessage.type} onClose={() => setStatusMessage(null)}>
            {statusMessage.text}
          </Alert>
        )}

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
            placeholder="Search newsletters by title or year..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />,
              },
            }}
          />
          <Button tone="secondary" variant="outlined" size="small" onClick={loadNewsletters} startIcon={<RefreshIcon />}>
            Refresh
          </Button>
        </Paper>

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
                Loading newsletters...
              </Typography>
            </Box>
          ) : newsletters.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Newsletters Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Publish your first monthly newsletter edition.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Publish Newsletter
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="newsletters table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Newsletter Edition</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Year</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Featured</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>PDF Link</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newsletters.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.publishedDate}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip label={item.year} size="small" sx={{ fontWeight: 700 }} />
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={item.isPublished !== false ? 'Published' : 'Draft'}
                          size="small"
                          color={item.isPublished !== false ? 'success' : 'default'}
                          sx={{ fontWeight: 800, fontSize: '0.7rem' }}
                        />
                      </TableCell>

                      <TableCell>
                        {item.isFeatured ? (
                          <Chip label="Featured Spotlight" size="small" color="primary" sx={{ fontWeight: 800, fontSize: '0.7rem' }} />
                        ) : (
                          <Typography variant="caption" color="text.secondary">
                            Standard
                          </Typography>
                        )}
                      </TableCell>

                      <TableCell>
                        <Tooltip title="Open PDF">
                          <IconButton size="small" component="a" href={item.pdfUrl} target="_blank" color="error">
                            <PictureAsPdfIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="Edit Newsletter">
                            <IconButton size="small" onClick={() => handleOpenEdit(item)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Newsletter">
                            <IconButton size="small" onClick={() => setDeleteConfirmId(item.id)} sx={{ color: 'error.main' }}>
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

        {/* Create / Edit Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <Box component="form" onSubmit={handleSave}>
            <DialogTitle sx={{ fontWeight: 900 }}>
              {isEditing ? 'Edit Newsletter Edition' : 'Publish Newsletter Edition'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="Newsletter Title"
                  required
                  fullWidth
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., WinVinaya Inclusion Digest - January 2026"
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Published Date String"
                    required
                    fullWidth
                    value={formData.publishedDate}
                    onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                    placeholder="e.g., January 2026 Edition"
                  />

                  <TextField
                    label="Year"
                    required
                    fullWidth
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="2026"
                  />
                </Stack>

                <TextField
                  label="Excerpt / Summary"
                  required
                  multiline
                  rows={2}
                  fullWidth
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                />

                <FileUploadField
                  label="Cover Image"
                  required
                  value={formData.coverImage}
                  onChange={(url) => setFormData({ ...formData, coverImage: url })}
                  helperText="Upload JPG/PNG newsletter edition cover"
                />

                <FileUploadField
                  label="PDF Newsletter Document"
                  required
                  fileType="document"
                  accept=".pdf,application/pdf"
                  value={formData.pdfUrl}
                  onChange={(url) => setFormData({ ...formData, pdfUrl: url })}
                  helperText="Upload monthly edition PDF document"
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
                    label="Featured Edition"
                  />
                </Stack>
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2.5 }}>
              <Button tone="secondary" variant="outlined" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button tone="primary" variant="contained" type="submit" loading={saving} sx={{ fontWeight: 800 }}>
                {isEditing ? 'Update Newsletter' : 'Publish Newsletter'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this newsletter edition?
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

export default AdminNewslettersPage
