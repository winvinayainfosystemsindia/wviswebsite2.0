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
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { careersService } from '../../services'
import type { CareerDomain } from '../../models'

interface CareerFormState {
  id?: string
  title: string
  department: string
  type: string
  location: string
  description: string
  skills: string
  responsibilities: string
  requirements: string
  isPublished: boolean
  sortOrder: number
}

const initialFormState: CareerFormState = {
  title: '',
  department: 'Engineering',
  type: 'Internship',
  location: 'Bengaluru / Hybrid',
  description: 'Hands-on practical training track designed for Persons with Disabilities, focusing on production skills and corporate readiness.',
  skills: 'React, TypeScript, WCAG 2.2, Node.js, Git',
  responsibilities: 'Participate in live client sprints\nBuild accessible web components\nCollaborate across multidisciplinary teams',
  requirements: 'Basic programming aptitude\nPassion for continuous learning and technology\nCommitment to full internship duration',
  isPublished: true,
  sortOrder: 0,
}

export const AdminCareersPage = () => {
  const [careers, setCareers] = useState<CareerDomain[]>([])
  const [loading, setLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<CareerFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadCareers = async () => {
    setLoading(true)
    try {
      const res = await careersService.getAdminCareers()
      if (res.data) {
        setCareers(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin careers:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage Careers & Tracks | WinVinaya Admin'
    loadCareers()
  }, [])

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (item: CareerDomain) => {
    setFormData({
      id: item.id,
      title: item.title,
      department: item.department || 'Engineering',
      type: item.type || 'Internship',
      location: item.location || 'Bengaluru / Hybrid',
      description: item.description,
      skills: Array.isArray(item.skills) ? item.skills.join(', ') : '',
      responsibilities: Array.isArray(item.responsibilities) ? item.responsibilities.join('\n') : '',
      requirements: Array.isArray(item.requirements) ? item.requirements.join('\n') : '',
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
      department: formData.department,
      type: formData.type,
      location: formData.location,
      description: formData.description,
      skills: formData.skills.split(',').map((s) => s.trim()).filter(Boolean),
      responsibilities: formData.responsibilities.split('\n').map((r) => r.trim()).filter(Boolean),
      requirements: formData.requirements.split('\n').map((r) => r.trim()).filter(Boolean),
      isPublished: formData.isPublished,
      sortOrder: Number(formData.sortOrder) || 0,
    }

    try {
      if (isEditing && formData.id) {
        await careersService.updateCareer(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'Career track updated successfully!' })
      } else {
        await careersService.createCareer(payload as any)
        setStatusMessage({ type: 'success', text: 'Career track created successfully!' })
      }
      setOpenDialog(false)
      loadCareers()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save career track.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await careersService.deleteCareer(id)
      setStatusMessage({ type: 'success', text: 'Career track deleted successfully.' })
      setDeleteConfirmId(null)
      loadCareers()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete career track.' })
    }
  }

  return (
    <AdminLayout title="Careers & Internship Tracks">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Career Tracks & Opportunities
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Configure engineering tracks, skill sets, and internship onboarding pathways.
            </Typography>
          </Box>

          <Button tone="primary" variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate} sx={{ fontWeight: 800 }}>
            Add Career Track
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
                Loading career tracks...
              </Typography>
            </Box>
          ) : careers.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Career Tracks Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Add your first engineering or internship track.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Add Track
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="careers table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Track Title</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Department</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Skills & Tools</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {careers.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.location}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip label={item.department} size="small" sx={{ fontWeight: 700 }} />
                      </TableCell>

                      <TableCell>
                        <Chip label={item.type} size="small" color="primary" sx={{ fontWeight: 700, fontSize: '0.725rem' }} />
                      </TableCell>

                      <TableCell sx={{ maxWidth: 260 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {item.skills.map((s, idx) => (
                            <Chip key={idx} label={s} size="small" sx={{ fontSize: '0.675rem' }} />
                          ))}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={item.isPublished !== false ? 'Active' : 'Archived'}
                          size="small"
                          color={item.isPublished !== false ? 'success' : 'default'}
                          sx={{ fontWeight: 800, fontSize: '0.7rem' }}
                        />
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="Edit Track">
                            <IconButton size="small" onClick={() => handleOpenEdit(item)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Track">
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
              {isEditing ? 'Edit Career Track' : 'Create New Career Track'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="Track Title"
                  required
                  fullWidth
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Software Engineering & Accessible Frontend"
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    select
                    label="Department"
                    required
                    fullWidth
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  >
                    <MenuItem value="Engineering">Engineering</MenuItem>
                    <MenuItem value="Quality Assurance">Quality Assurance</MenuItem>
                    <MenuItem value="Data & BI">Data & BI</MenuItem>
                    <MenuItem value="Operations">Operations</MenuItem>
                  </TextField>

                  <TextField
                    select
                    label="Type"
                    required
                    fullWidth
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <MenuItem value="Internship">Internship</MenuItem>
                    <MenuItem value="Full-time">Full-time</MenuItem>
                    <MenuItem value="Apprenticeship">Apprenticeship</MenuItem>
                  </TextField>
                </Stack>

                <TextField
                  label="Location"
                  required
                  fullWidth
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Bengaluru / Hybrid / Remote"
                />

                <TextField
                  label="Description"
                  required
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />

                <TextField
                  label="Skills / Technologies (Comma-separated)"
                  required
                  fullWidth
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="React, TypeScript, WCAG 2.2, Node.js"
                />

                <TextField
                  label="Responsibilities (One per line)"
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                />

                <TextField
                  label="Requirements / Eligibility (One per line)"
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.isPublished}
                      onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    />
                  }
                  label="Active and Accepting Candidates"
                />
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2.5 }}>
              <Button tone="secondary" variant="outlined" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button tone="primary" variant="contained" type="submit" loading={saving} sx={{ fontWeight: 800 }}>
                {isEditing ? 'Update Track' : 'Save Track'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this career track?
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

export default AdminCareersPage
