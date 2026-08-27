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
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { contactService } from '../../services'
import type { ContactInquiryItem } from '../../models'

export const AdminInquiriesPage = () => {
  const [inquiries, setInquiries] = useState<ContactInquiryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('ALL')
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiryItem | null>(null)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const loadInquiries = async () => {
    setLoading(true)
    try {
      const query: any = { limit: 100 }
      if (statusFilter !== 'ALL') query.status = statusFilter
      if (search) query.search = search

      const res = await contactService.getAdminInquiries(query)
      if (res.data) {
        setInquiries(res.data)
      }
    } catch (err) {
      console.warn('Error loading admin inquiries:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.title = 'Contact Inquiries & Leads | WinVinaya Admin'
    loadInquiries()
  }, [statusFilter]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadInquiries()
  }

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await contactService.updateInquiryStatus(id, newStatus)
      setStatusMessage({ type: 'success', text: `Inquiry status marked as ${newStatus}` })
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus as any } : inq))
      )
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status: newStatus as any })
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to update status.' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await contactService.deleteInquiry(id)
      setStatusMessage({ type: 'success', text: 'Inquiry deleted.' })
      setDeleteConfirmId(null)
      if (selectedInquiry?.id === id) setSelectedInquiry(null)
      loadInquiries()
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to delete inquiry.' })
    }
  }

  const getStatusStyles = (status: string, theme: any) => {
    switch (status) {
      case 'NEW':
        return {
          bgcolor: alpha(theme.palette.error?.main || '#d32f2f', 0.12),
          color: theme.palette.error?.dark || '#c62828',
          borderColor: alpha(theme.palette.error?.main || '#d32f2f', 0.3),
        }
      case 'IN_PROGRESS':
        return {
          bgcolor: alpha(theme.palette.warning?.main || '#ed6c02', 0.12),
          color: theme.palette.warning?.dark || '#e65100',
          borderColor: alpha(theme.palette.warning?.main || '#ed6c02', 0.3),
        }
      case 'RESOLVED':
        return {
          bgcolor: alpha(theme.palette.success?.main || '#2e7d32', 0.12),
          color: theme.palette.success?.dark || '#1b5e20',
          borderColor: alpha(theme.palette.success?.main || '#2e7d32', 0.3),
        }
      case 'ARCHIVED':
      default:
        return {
          bgcolor: alpha(theme.palette.text?.primary || '#333', 0.08),
          color: theme.palette.text?.secondary || '#666',
          borderColor: alpha(theme.palette.text?.primary || '#333', 0.2),
        }
    }
  }

  return (
    <AdminLayout title="Contact Inquiries & Leads">
      <Stack spacing={3.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>
              Contact Inquiries & Messages
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Review and manage incoming messages from clients, candidates, and partners.
            </Typography>
          </Box>

          <Button tone="secondary" variant="outlined" size="small" onClick={loadInquiries} startIcon={<RefreshIcon />}>
            Refresh Inquiries
          </Button>
        </Stack>

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
            flexWrap: 'wrap',
          }}
        >
          <TextField
            size="small"
            placeholder="Search by sender name, email, or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, minWidth: 240 }}
            slotProps={{
              input: {
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />,
              },
            }}
          />

          <Stack direction="row" spacing={1}>
            {['ALL', 'NEW', 'IN_PROGRESS', 'RESOLVED', 'ARCHIVED'].map((st) => (
              <Chip
                key={st}
                label={st}
                clickable
                color={statusFilter === st ? 'primary' : 'default'}
                variant={statusFilter === st ? 'filled' : 'outlined'}
                onClick={() => setStatusFilter(st)}
                sx={{ fontWeight: 700, fontSize: '0.75rem' }}
              />
            ))}
          </Stack>
        </Paper>

        {/* Inquiries Table */}
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
                Loading inquiries...
              </Typography>
            </Box>
          ) : inquiries.length === 0 ? (
            <Box sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                No Inquiries Found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                No messages matching this filter.
              </Typography>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="contact inquiries table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Sender</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Reason / Service</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Message Excerpt</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Received At</TableCell>
                    <TableCell sx={{ fontWeight: 800, textAlign: 'right' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inquiries.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                          {row.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {row.email}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip label={row.reason} size="small" sx={{ fontWeight: 700, fontSize: '0.725rem' }} />
                      </TableCell>

                      <TableCell sx={{ maxWidth: 260 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        >
                          {row.message}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <FormControl size="small">
                          <Select
                            value={row.status}
                            onChange={(e) => handleUpdateStatus(row.id, e.target.value)}
                            sx={(theme) => {
                              const style = getStatusStyles(row.status, theme)
                              return {
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                height: 28,
                                bgcolor: style.bgcolor,
                                color: style.color,
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: style.borderColor,
                                },
                              }
                            }}
                          >
                            <MenuItem value="NEW">NEW</MenuItem>
                            <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                            <MenuItem value="RESOLVED">RESOLVED</MenuItem>
                            <MenuItem value="ARCHIVED">ARCHIVED</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(row.createdAt).toLocaleDateString()}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                          <Tooltip title="View Message Details">
                            <IconButton size="small" onClick={() => setSelectedInquiry(row)} sx={{ color: 'primary.main' }}>
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Inquiry">
                            <IconButton size="small" onClick={() => setDeleteConfirmId(row.id)} sx={{ color: 'error.main' }}>
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

        {/* View Details Dialog */}
        <Dialog open={Boolean(selectedInquiry)} onClose={() => setSelectedInquiry(null)} maxWidth="sm" fullWidth>
          {selectedInquiry && (
            <>
              <DialogTitle sx={{ fontWeight: 900 }}>
                Inquiry from {selectedInquiry.name}
              </DialogTitle>
              <DialogContent dividers>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                      Email Address:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedInquiry.email}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                      Subject / Service Reason:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedInquiry.reason}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                      Received Date & Time:
                    </Typography>
                    <Typography variant="body2">
                      {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </Typography>
                  </Box>

                  <Box sx={{ p: 2, bgcolor: (theme) => alpha(theme.palette.text.primary, 0.03), borderRadius: 1.5 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
                      Full Message Content:
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                      {selectedInquiry.message}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                      Update Status:
                    </Typography>
                    <FormControl size="small">
                      <Select
                        value={selectedInquiry.status}
                        onChange={(e) => handleUpdateStatus(selectedInquiry.id, e.target.value)}
                        sx={{ fontSize: '0.8125rem', fontWeight: 800 }}
                      >
                        <MenuItem value="NEW">NEW</MenuItem>
                        <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                        <MenuItem value="RESOLVED">RESOLVED</MenuItem>
                        <MenuItem value="ARCHIVED">ARCHIVED</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
              </DialogContent>
              <DialogActions sx={{ p: 2 }}>
                <Button tone="secondary" variant="outlined" onClick={() => setSelectedInquiry(null)}>
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={Boolean(deleteConfirmId)} onClose={() => setDeleteConfirmId(null)}>
          <DialogTitle sx={{ fontWeight: 900 }}>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to delete this contact message?
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

export default AdminInquiriesPage
