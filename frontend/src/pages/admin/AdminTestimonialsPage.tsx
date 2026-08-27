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
import Rating from '@mui/material/Rating'
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
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { FileUploadField } from '../../components/admin'
import { testimonialsService } from '../../services'
import type { Testimonial } from '../../models'

interface TestimonialFormState {
  id?: string
  name: string
  role: string
  organization: string
  avatar: string
  content: string
  rating: number
  category: string
  isFeatured: boolean
  isPublished: boolean
  sortOrder: number
}

const initialFormState: TestimonialFormState = {
  name: '',
  role: 'Head of Quality Assurance & Compliance',
  organization: 'Fintech Enterprise Partner',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  content: 'WinVinaya delivered thorough accessibility audit reports that empowered our engineering team to remediate 100+ compliance gaps ahead of our regulatory audit.',
  rating: 5,
  category: 'Accessibility',
  isFeatured: false,
  isPublished: true,
  sortOrder: 0,
}

export const AdminTestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<TestimonialFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadTestimonials = async () => {
    setLoading(true)
    try {
      const res = await testimonialsService.getAdminTestimonials()
      if (res.data) {
        setTestimonials(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin testimonials:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage Testimonials | WinVinaya Admin'
    loadTestimonials()
  }, [])

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (item: Testimonial) => {
    setFormData({
      id: item.id,
      name: item.name || (item as any).author || '',
      role: item.role || (item as any).title || '',
      organization: item.organization || (item as any).organizationName || '',
      avatar: item.avatar || (item as any).avatarUrl || '',
      content: item.content || (item as any).quote || '',
      rating: item.rating || 5,
      category: item.category || (item as any).serviceCategory || 'Accessibility',
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
      name: formData.name,
      role: formData.role,
      organization: formData.organization,
      avatar: formData.avatar || null,
      content: formData.content,
      rating: Number(formData.rating) || 5,
      category: formData.category,
      isFeatured: formData.isFeatured,
      isPublished: formData.isPublished,
      sortOrder: Number(formData.sortOrder) || 0,
    }

    try {
      if (isEditing && formData.id) {
        await testimonialsService.updateTestimonial(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'Testimonial updated successfully!' })
      } else {
        await testimonialsService.createTestimonial(payload as any)
        setStatusMessage({ type: 'success', text: 'Testimonial created successfully!' })
      }
      setOpenDialog(false)
      loadTestimonials()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save testimonial.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await testimonialsService.deleteTestimonial(id)
      setStatusMessage({ type: 'success', text: 'Testimonial deleted successfully.' })
      setDeleteConfirmId(null)
      loadTestimonials()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete testimonial.' })
    }
  }

  return (
    <AdminLayout title="Testimonials & Endorsements">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Partner Endorsements & Testimonials
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage client feedback, verified reviews, and enterprise sponsor endorsements.
            </Typography>
          </Box>

          <Button tone="primary" variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate} sx={{ fontWeight: 800 }}>
            Add Testimonial
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
                Loading testimonials...
              </Typography>
            </Box>
          ) : testimonials.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Testimonials Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Add your first client endorsement.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Add Testimonial
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="testimonials table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Client & Company</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Quote Excerpt</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Rating</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Featured</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testimonials.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {item.name || (item as any).author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.role || (item as any).title} • {item.organization || (item as any).organizationName}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip label={item.category || (item as any).serviceCategory || 'Client'} size="small" sx={{ fontWeight: 700 }} />
                      </TableCell>

                      <TableCell sx={{ maxWidth: 260 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          "{item.content || (item as any).quote}"
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Rating value={item.rating || 5} readOnly size="small" />
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
                          <Chip label="Spotlight" size="small" color="primary" sx={{ fontWeight: 800, fontSize: '0.7rem' }} />
                        ) : (
                          <Typography variant="caption" color="text.secondary">Standard</Typography>
                        )}
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="Edit Testimonial">
                            <IconButton size="small" onClick={() => handleOpenEdit(item)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Testimonial">
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
              {isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="Client / Partner Name"
                  required
                  fullWidth
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Priya Sharma"
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Role / Designation"
                    required
                    fullWidth
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., VP of Engineering"
                  />

                  <TextField
                    label="Organization / Company"
                    required
                    fullWidth
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Global Fintech Corp"
                  />
                </Stack>

                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <TextField
                    select
                    label="Category / Domain"
                    required
                    fullWidth
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <MenuItem value="Accessibility">Accessibility Audits</MenuItem>
                    <MenuItem value="Corporate Training">Corporate Training</MenuItem>
                    <MenuItem value="Power Platform">Power Platform & BI</MenuItem>
                    <MenuItem value="Document Remediation">Document Remediation</MenuItem>
                    <MenuItem value="Custom Engineering">Custom AI & Engineering</MenuItem>
                  </TextField>

                  <Box sx={{ minWidth: 140 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
                      Rating (Stars):
                    </Typography>
                    <Rating
                      value={formData.rating}
                      onChange={(_e, val) => setFormData({ ...formData, rating: val || 5 })}
                    />
                  </Box>
                </Stack>

                <FileUploadField
                  label="Avatar / Headshot Photo"
                  folder="testimonials"
                  value={formData.avatar}
                  onChange={(url) => setFormData({ ...formData, avatar: url })}
                  helperText="Upload JPG/PNG client or partner avatar"
                />

                <TextField
                  label="Endorsement / Quote Content"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write the full partner testimonial quote..."
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
                {isEditing ? 'Update Testimonial' : 'Save Testimonial'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this testimonial?
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

export default AdminTestimonialsPage
