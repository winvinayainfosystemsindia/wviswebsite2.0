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
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { FileUploadField } from '../../components/admin'
import { storiesService } from '../../services'
import type { Story } from '../../models'

interface StoryFormState {
  id?: string
  title: string
  slug: string
  personName: string
  personRole: string
  organization: string
  disabilityType: string
  summary: string
  image: string
  videoUrl: string
  isFeatured: boolean
  isPublished: boolean
  sortOrder: number
}

const initialFormState: StoryFormState = {
  title: '',
  slug: '',
  personName: '',
  personRole: 'Accessibility QA Engineer',
  organization: 'Enterprise Tier-1 Partner',
  disabilityType: 'Deaf / Hard of Hearing',
  summary: 'Transformed foundational digital skills into high-impact accessibility testing and remediation expertise, leading automated audits across 20+ applications.',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
  videoUrl: '',
  isFeatured: false,
  isPublished: true,
  sortOrder: 0,
}

export const AdminStoriesPage = () => {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState<StoryFormState>(initialFormState)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadStories = async () => {
    setLoading(true)
    try {
      const res = await storiesService.getAdminStories({ search: search || undefined })
      if (res.data) {
        setStories(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin stories:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Manage Success Stories | WinVinaya Admin'
    loadStories()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadStories()
  }

  const handleOpenCreate = () => {
    setFormData(initialFormState)
    setIsEditing(false)
    setOpenDialog(true)
  }

  const handleOpenEdit = (item: Story) => {
    setFormData({
      id: item.id,
      title: item.title,
      slug: item.slug,
      personName: item.personName || '',
      personRole: item.personRole || '',
      organization: item.organization || '',
      disabilityType: item.disabilityType || '',
      summary: item.summary || '',
      image: item.image || '',
      videoUrl: item.videoUrl || '',
      isFeatured: item.isFeatured || false,
      isPublished: item.isPublished !== false,
      sortOrder: item.sortOrder || 0,
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
      personName: formData.personName,
      personRole: formData.personRole,
      organization: formData.organization || null,
      disabilityType: formData.disabilityType || null,
      summary: formData.summary,
      image: formData.image || null,
      videoUrl: formData.videoUrl || null,
      isFeatured: formData.isFeatured,
      isPublished: formData.isPublished,
      sortOrder: Number(formData.sortOrder) || 0,
    }

    try {
      if (isEditing && formData.id) {
        await storiesService.updateStory(formData.id, payload as any)
        setStatusMessage({ type: 'success', text: 'Success story updated!' })
      } else {
        await storiesService.createStory(payload as any)
        setStatusMessage({ type: 'success', text: 'Success story published!' })
      }
      setOpenDialog(false)
      loadStories()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to save story.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await storiesService.deleteStory(id)
      setStatusMessage({ type: 'success', text: 'Story deleted successfully.' })
      setDeleteConfirmId(null)
      loadStories()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete story.' })
    }
  }

  return (
    <AdminLayout title="Success Stories & Case Studies">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Candidate Journeys & Impact Stories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Celebrate career milestones, candidate transformations, and partner success stories.
            </Typography>
          </Box>

          <Button tone="primary" variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate} sx={{ fontWeight: 800 }}>
            Add Story
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
            placeholder="Search stories by candidate name or title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />,
              },
            }}
          />
          <Button tone="secondary" variant="outlined" size="small" onClick={loadStories} startIcon={<RefreshIcon />}>
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
                Loading stories...
              </Typography>
            </Box>
          ) : stories.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Success Stories Found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Publish your first candidate journey story.
              </Typography>
              <Button tone="primary" variant="contained" size="small" onClick={handleOpenCreate}>
                Add Story
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="stories table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Story Title</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Candidate & Role</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Organization</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Disability Type</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Featured</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stories.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          /{item.slug}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                          {item.personName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.personRole}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography variant="body2">{item.organization || '—'}</Typography>
                      </TableCell>

                      <TableCell>
                        {item.disabilityType ? (
                          <Chip label={item.disabilityType} size="small" sx={{ fontWeight: 700, fontSize: '0.725rem' }} />
                        ) : (
                          '—'
                        )}
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
                          <Tooltip title="Edit Story">
                            <IconButton size="small" onClick={() => handleOpenEdit(item)} sx={{ color: 'primary.main' }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Story">
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
              {isEditing ? 'Edit Success Story' : 'Add New Success Story'}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ mt: 1 }}>
                <TextField
                  label="Story Title"
                  required
                  fullWidth
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g., From Engineering Trainee to Lead Accessibility Auditor"
                />

                <TextField
                  label="URL Slug"
                  required
                  fullWidth
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Candidate Name"
                    required
                    fullWidth
                    value={formData.personName}
                    onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                    placeholder="e.g., Anil Kumar"
                  />

                  <TextField
                    label="Candidate Role"
                    required
                    fullWidth
                    value={formData.personRole}
                    onChange={(e) => setFormData({ ...formData, personRole: e.target.value })}
                    placeholder="e.g., QA Specialist"
                  />
                </Stack>

                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Placed Organization"
                    fullWidth
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Global Fintech Corp"
                  />

                  <TextField
                    label="Disability Spectrum"
                    fullWidth
                    value={formData.disabilityType}
                    onChange={(e) => setFormData({ ...formData, disabilityType: e.target.value })}
                    placeholder="e.g., Deaf / Hearing Impairment"
                  />
                </Stack>

                <TextField
                  label="Story Summary / Narrative"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                />

                <FileUploadField
                  label="Candidate Photo"
                  folder="stories"
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                  helperText="Upload JPG/PNG candidate photo"
                />

                <TextField
                  label="Video Testimonial URL (Optional)"
                  fullWidth
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
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
                {isEditing ? 'Update Story' : 'Save Story'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this success story?
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

export default AdminStoriesPage
