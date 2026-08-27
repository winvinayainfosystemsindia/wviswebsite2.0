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
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { categoryService } from '../../services'
import type { Category } from '../../models'

interface CategoryFormState {
  id?: string
  name: string
  slug: string
  type: string
  description: string
}

const initialFormState: CategoryFormState = {
  name: '',
  slug: '',
  type: 'blog',
  description: '',
}

export const AdminCategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<CategoryFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadCategories = async () => {
    setLoading(true)
    try {
      const res = await categoryService.getAdminCategories()
      if (res.data) {
        setCategories(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin categories:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage Taxonomy & Categories | WinVinaya Admin'
    loadCategories()
  }, [])

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (item: Category) => {
    setFormData({
      id: item.id,
      name: item.name,
      slug: item.slug,
      type: item.type || 'blog',
      description: item.description || '',
    })
    setIsEditing(true)
    setOpenDialog(true)
  }

  const handleNameChange = (newName: string) => {
    setFormData((prev) => {
      const generatedSlug = !isEditing
        ? newName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        : prev.slug
      return { ...prev, name: newName, slug: generatedSlug }
    })
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setStatusMessage(null)

    const payload = {
      name: formData.name,
      slug: formData.slug,
      type: formData.type,
      description: formData.description || null,
    }

    try {
      if (isEditing && formData.id) {
        await categoryService.updateCategory(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'Category updated successfully!' })
      } else {
        await categoryService.createCategory(payload as any)
        setStatusMessage({ type: 'success', text: 'Category created successfully!' })
      }
      setOpenDialog(false)
      loadCategories()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save category.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await categoryService.deleteCategory(id)
      setStatusMessage({ type: 'success', text: 'Category deleted successfully.' })
      setDeleteConfirmId(null)
      loadCategories()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete category.' })
    }
  }

  return (
    <AdminLayout title="Taxonomy & Content Categories">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Content Categories & Taxonomy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Organize articles, resources, and career domains by structured taxonomy tags.
            </Typography>
          </Box>

          <Button tone="primary" variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate} sx={{ fontWeight: 800 }}>
            Create Category
          </Button>
        </Stack>

        {statusMessage && (
          <Alert severity={statusMessage.type} onClose={() => setStatusMessage(null)}>
            {statusMessage.text}
          </Alert>
        )}

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
                Loading categories...
              </Typography>
            </Box>
          ) : categories.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Categories Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Create your first taxonomy category.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Create Category
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="categories table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Category Name</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Slug</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Description</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {item.name}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <code>{item.slug}</code>
                      </TableCell>

                      <TableCell>
                        <Chip label={item.type || 'blog'} size="small" color="primary" sx={{ fontWeight: 700, fontSize: '0.725rem' }} />
                      </TableCell>

                      <TableCell sx={{ maxWidth: 320 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.description || '—'}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="Edit Category">
                            <IconButton size="small" onClick={() => handleOpenEdit(item)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Category">
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
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="xs" fullWidth>
          <Box component="form" onSubmit={handleSave}>
            <DialogTitle sx={{ fontWeight: 900 }}>
              {isEditing ? 'Edit Category' : 'Create New Category'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="Category Name"
                  required
                  fullWidth
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="e.g., Accessibility & Tech"
                />

                <TextField
                  label="URL Slug"
                  required
                  fullWidth
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  helperText="Lowercase letters, numbers, hyphens"
                />

                <TextField
                  select
                  label="Category Type / Scope"
                  required
                  fullWidth
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <MenuItem value="blog">Blog Articles</MenuItem>
                  <MenuItem value="ebook">eBooks & Guides</MenuItem>
                  <MenuItem value="story">Success Stories</MenuItem>
                  <MenuItem value="career">Career Tracks</MenuItem>
                  <MenuItem value="general">General</MenuItem>
                </TextField>

                <TextField
                  label="Description (Optional)"
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2.5 }}>
              <Button tone="secondary" variant="outlined" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button tone="primary" variant="contained" type="submit" loading={saving} sx={{ fontWeight: 800 }}>
                {isEditing ? 'Update Category' : 'Create Category'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this category?
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

export default AdminCategoriesPage
