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
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { FileUploadField } from '../../components/admin'
import { ebookService } from '../../services'
import type { Ebook } from '../../models'

interface EbookFormState {
  id?: string
  title: string
  category: string
  author: string
  description: string
  tileImage: string
  pdfUrl: string
  epubUrl: string
  isFeatured: boolean
  isPublished: boolean
  sortOrder: number
}

const initialFormState: EbookFormState = {
  title: '',
  category: 'accessibility',
  author: 'WinVinaya Practice Leads',
  description: 'A comprehensive handbook outlining industry benchmarks, testing protocols, and remediation pathways.',
  tileImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
  pdfUrl: 'https://winvinayainfosystems.com/assets/ebooks/digital-accessibility-handbook-2026.pdf',
  epubUrl: '',
  isFeatured: false,
  isPublished: true,
  sortOrder: 0,
}

export const AdminEbooksPage = () => {
  const [ebooks, setEbooks] = useState<Ebook[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<EbookFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadEbooks = async () => {
    setLoading(true)
    try {
      const res = await ebookService.getAdminEbooks({ limit: 50, search: search || undefined })
      if (res.data) {
        setEbooks(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin ebooks:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage eBooks & Guides | WinVinaya Admin'
    loadEbooks()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadEbooks()
  }

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (item: Ebook) => {
    setFormData({
      id: item.id,
      title: item.title,
      category: item.category,
      author: item.author,
      description: item.description,
      tileImage: item.tileImage,
      pdfUrl: item.pdfUrl,
      epubUrl: item.epubUrl || '',
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
      category: formData.category,
      author: formData.author,
      description: formData.description,
      tileImage: formData.tileImage,
      pdfUrl: formData.pdfUrl,
      epubUrl: formData.epubUrl || null,
      isFeatured: formData.isFeatured,
      isPublished: formData.isPublished,
      sortOrder: Number(formData.sortOrder) || 0,
    }

    try {
      if (isEditing && formData.id) {
        await ebookService.updateEbook(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'eBook updated successfully!' })
      } else {
        await ebookService.createEbook(payload as any)
        setStatusMessage({ type: 'success', text: 'eBook published successfully!' })
      }
      setOpenDialog(false)
      loadEbooks()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save eBook.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await ebookService.deleteEbook(id)
      setStatusMessage({ type: 'success', text: 'eBook deleted successfully.' })
      setDeleteConfirmId(null)
      loadEbooks()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete eBook.' })
    }
  }

  return (
    <AdminLayout title="eBooks & Guides Management">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              eBooks & Whitepapers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload, edit, and distribute authoritative guides, accessibility toolkits, and whitepapers.
            </Typography>
          </Box>

          <Button tone="primary" variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate} sx={{ fontWeight: 800 }}>
            Add New eBook
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
            placeholder="Search eBooks by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />,
              },
            }}
          />
          <Button tone="secondary" variant="outlined" size="small" onClick={loadEbooks} startIcon={<RefreshIcon />}>
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
                Loading eBooks...
              </Typography>
            </Box>
          ) : ebooks.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No eBooks Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Upload your first guide or whitepaper.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Add eBook
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="ebooks table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Title & Author</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Featured</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Downloads</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ebooks.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          By {item.author}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip label={item.category} size="small" sx={{ fontWeight: 700 }} />
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
                          <Chip label="Featured" size="small" color="primary" sx={{ fontWeight: 800, fontSize: '0.7rem' }} />
                        ) : (
                          <Typography variant="caption" color="text.secondary">
                            Standard
                          </Typography>
                        )}
                      </TableCell>

                      <TableCell>
                        <Tooltip title="Download PDF">
                          <IconButton size="small" component="a" href={item.pdfUrl} target="_blank" color="error">
                            <PictureAsPdfIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="Edit eBook">
                            <IconButton size="small" onClick={() => handleOpenEdit(item)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete eBook">
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
              {isEditing ? 'Edit eBook / Guide' : 'Add New eBook / Guide'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="eBook Title"
                  required
                  fullWidth
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Digital Accessibility Implementation Handbook"
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    select
                    label="Category"
                    required
                    fullWidth
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <MenuItem value="accessibility">Accessibility & Tech</MenuItem>
                    <MenuItem value="workplace-inclusion">Workplace Inclusion</MenuItem>
                    <MenuItem value="community-training">Community & Training</MenuItem>
                    <MenuItem value="sign-language">Sign Language & ISL</MenuItem>
                    <MenuItem value="tech-engineering">Tech & Engineering</MenuItem>
                  </TextField>

                  <TextField
                    label="Author / Team"
                    required
                    fullWidth
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                </Stack>

                <TextField
                  label="Description / Abstract"
                  required
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />

                <FileUploadField
                  label="Cover / Tile Image"
                  required
                  value={formData.tileImage}
                  onChange={(url) => setFormData({ ...formData, tileImage: url })}
                  helperText="Upload JPG/PNG eBook cover image"
                />

                <FileUploadField
                  label="PDF Document File"
                  required
                  fileType="document"
                  accept=".pdf,application/pdf"
                  value={formData.pdfUrl}
                  onChange={(url) => setFormData({ ...formData, pdfUrl: url })}
                  helperText="Upload primary eBook PDF publication"
                />

                <FileUploadField
                  label="EPUB Document File (Optional)"
                  fileType="document"
                  accept=".epub,application/epub+zip"
                  value={formData.epubUrl}
                  onChange={(url) => setFormData({ ...formData, epubUrl: url })}
                  helperText="Upload optional mobile EPUB format"
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
                {isEditing ? 'Update eBook' : 'Save eBook'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this eBook?
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

export default AdminEbooksPage
