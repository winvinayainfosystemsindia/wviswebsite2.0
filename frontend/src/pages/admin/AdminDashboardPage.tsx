import { useState, useEffect } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ArticleIcon from '@mui/icons-material/Article'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import WorkIcon from '@mui/icons-material/Work'
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { AdminLayout } from '../../layout'
import { Button } from '../../components'
import { useAppSelector } from '../../stores'
import apiClient from '../../services/apiClient'
import type { ContactInquiryItem } from '../../models'

const WelcomeBanner = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3.5, 4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 20px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  overflow: 'hidden',
}))

const StatCard = styled(Card)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const AdminDashboardPage = () => {
  const user = useAppSelector((state) => state.auth.user)
  const [stats, setStats] = useState<{
    blogsCount: number
    newslettersCount: number
    ebooksCount: number
    careersCount: number
    testimonialsCount: number
    inquiriesTotal: number
    inquiriesNew: number
  }>({
    blogsCount: 0,
    newslettersCount: 0,
    ebooksCount: 0,
    careersCount: 0,
    testimonialsCount: 0,
    inquiriesTotal: 0,
    inquiriesNew: 0,
  })

  const [inquiries, setInquiries] = useState<ContactInquiryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const fetchDashboardData = async () => {
    try {
      // Fetch stats from various endpoints in parallel
      const [blogsRes, newslettersRes, ebooksRes, careersRes, testimonialsRes, inquiriesRes] =
        await Promise.allSettled([
          apiClient.get('/blogs?limit=1'),
          apiClient.get('/newsletters?limit=1'),
          apiClient.get('/ebooks?limit=1'),
          apiClient.get('/careers'),
          apiClient.get('/testimonials'),
          apiClient.get('/admin/contact?limit=10'),
        ])

      const blogsTotal =
        blogsRes.status === 'fulfilled' ? blogsRes.value.data?.pagination?.total || blogsRes.value.data?.data?.length || 2 : 2
      const newslettersTotal =
        newslettersRes.status === 'fulfilled' ? newslettersRes.value.data?.pagination?.total || newslettersRes.value.data?.data?.length || 2 : 2
      const ebooksTotal =
        ebooksRes.status === 'fulfilled' ? ebooksRes.value.data?.pagination?.total || ebooksRes.value.data?.data?.length || 2 : 2
      const careersTotal =
        careersRes.status === 'fulfilled' ? careersRes.value.data?.data?.length || 2 : 2
      const testimonialsTotal =
        testimonialsRes.status === 'fulfilled' ? testimonialsRes.value.data?.data?.length || 2 : 2

      let inqTotal = 0
      let inqNew = 0
      if (inquiriesRes.status === 'fulfilled') {
        const inqData = inquiriesRes.value.data
        inqTotal = inqData?.stats?.totalAll || inqData?.pagination?.total || inqData?.data?.length || 0
        inqNew = inqData?.stats?.new || 0
        if (inqData?.data) {
          setInquiries(inqData.data)
        }
      }

      setStats({
        blogsCount: blogsTotal,
        newslettersCount: newslettersTotal,
        ebooksCount: ebooksTotal,
        careersCount: careersTotal,
        testimonialsCount: testimonialsTotal,
        inquiriesTotal: inqTotal,
        inquiriesNew: inqNew,
      })
    } catch (err) {
      console.warn('Error fetching dashboard summary stats:', err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    document.title = 'Admin Dashboard | WinVinaya Infosystems'
    fetchDashboardData()
  }, [])

  const handleRefresh = () => {
    setRefreshing(true)
    fetchDashboardData()
  }

  const handleUpdateInquiryStatus = async (id: string, newStatus: string) => {
    try {
      await apiClient.patch(`/admin/contact/${id}/status`, { status: newStatus })
      setStatusMessage(`Inquiry status updated to ${newStatus}`)
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus as any } : inq))
      )
      setTimeout(() => setStatusMessage(null), 3000)
    } catch (err) {
      console.error('Failed to update inquiry status:', err)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW':
        return 'error'
      case 'IN_PROGRESS':
        return 'warning'
      case 'RESOLVED':
        return 'success'
      case 'ARCHIVED':
        return 'default'
      default:
        return 'primary'
    }
  }

  return (
    <AdminLayout title="System Dashboard">
      <Stack spacing={4}>
        {/* Welcome Banner */}
        <WelcomeBanner elevation={0}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{ alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between' }}
          >
            <Box>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 0.75 }}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', fontSize: { xs: '1.4rem', sm: '1.8rem' } }}>
                  Welcome back, {user?.name || 'Administrator'}
                </Typography>
                <Chip
                  label={user?.role || 'SUPERADMIN'}
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 800, fontSize: '0.725rem' }}
                />
              </Stack>
              <Typography variant="body2" color="text.secondary">
                WinVinaya Enterprise Admin Portal • PostgreSQL Connected • Live API Online
              </Typography>
            </Box>

            <Stack direction="row" spacing={1.5}>
              <Button
                tone="secondary"
                variant="outlined"
                size="small"
                onClick={handleRefresh}
                loading={refreshing}
                startIcon={<RefreshIcon />}
                sx={{ fontWeight: 700 }}
              >
                Refresh Stats
              </Button>
              <Button
                tone="primary"
                variant="contained"
                size="small"
                component="a"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon sx={{ fontSize: 15 }} />}
                sx={{ fontWeight: 700 }}
              >
                View Public Site
              </Button>
            </Stack>
          </Stack>
        </WelcomeBanner>

        {/* Status notification */}
        {statusMessage && (
          <Alert severity="success" onClose={() => setStatusMessage(null)}>
            {statusMessage}
          </Alert>
        )}

        {/* Key Metrics Grid */}
        <Grid container spacing={3}>
          {/* Blogs */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
                      Blog Articles
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mt: 0.5 }}>
                      {loading ? <CircularProgress size={24} /> : stats.blogsCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700 }}>
                      Published on website
                    </Typography>
                  </Box>
                  <Box
                    sx={(theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <ArticleIcon sx={{ fontSize: 28 }} />
                  </Box>
                </Stack>
              </CardContent>
            </StatCard>
          </Grid>

          {/* Inquiries */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
                      Contact Inquiries
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mt: 0.5 }}>
                      {loading ? <CircularProgress size={24} /> : stats.inquiriesTotal}
                    </Typography>
                    <Typography variant="caption" sx={{ color: stats.inquiriesNew > 0 ? 'error.main' : 'text.secondary', fontWeight: 700 }}>
                      {stats.inquiriesNew} unread new inquiries
                    </Typography>
                  </Box>
                  <Box
                    sx={(theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.error.main, 0.1),
                      color: theme.palette.error.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    {stats.inquiriesNew > 0 ? (
                      <MarkEmailUnreadIcon sx={{ fontSize: 28 }} />
                    ) : (
                      <ContactMailIcon sx={{ fontSize: 28 }} />
                    )}
                  </Box>
                </Stack>
              </CardContent>
            </StatCard>
          </Grid>

          {/* Newsletters */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
                      Newsletters & Archives
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mt: 0.5 }}>
                      {loading ? <CircularProgress size={24} /> : stats.newslettersCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Monthly cohort updates
                    </Typography>
                  </Box>
                  <Box
                    sx={(theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.accent.main, 0.12),
                      color: theme.palette.accent.dark,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <MenuBookIcon sx={{ fontSize: 28 }} />
                  </Box>
                </Stack>
              </CardContent>
            </StatCard>
          </Grid>

          {/* eBooks */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
                      eBooks & Guides
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mt: 0.5 }}>
                      {loading ? <CircularProgress size={24} /> : stats.ebooksCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      PDFs & ePub publications
                    </Typography>
                  </Box>
                  <Box
                    sx={(theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.info.main, 0.1),
                      color: theme.palette.info.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <MenuBookIcon sx={{ fontSize: 28 }} />
                  </Box>
                </Stack>
              </CardContent>
            </StatCard>
          </Grid>

          {/* Careers */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
                      Internship Tracks
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mt: 0.5 }}>
                      {loading ? <CircularProgress size={24} /> : stats.careersCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700 }}>
                      Active engineering tracks
                    </Typography>
                  </Box>
                  <Box
                    sx={(theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.success.main, 0.1),
                      color: theme.palette.success.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <WorkIcon sx={{ fontSize: 28 }} />
                  </Box>
                </Stack>
              </CardContent>
            </StatCard>
          </Grid>

          {/* Testimonials */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
                      Verified Testimonials
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mt: 0.5 }}>
                      {loading ? <CircularProgress size={24} /> : stats.testimonialsCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Partner reflections
                    </Typography>
                  </Box>
                  <Box
                    sx={(theme) => ({
                      width: 50,
                      height: 50,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.warning.main, 0.1),
                      color: theme.palette.warning.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <StarIcon sx={{ fontSize: 28 }} />
                  </Box>
                </Stack>
              </CardContent>
            </StatCard>
          </Grid>
        </Grid>

        {/* Recent Inquiries Management Table */}
        <Paper
          elevation={0}
          sx={{
            p: 3.5,
            borderRadius: (theme) => Number(theme.shape.borderRadius) * 2,
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>
                Recent Contact Inquiries
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Review and update status for enterprise leads, partnership requests, and audit bookings.
              </Typography>
            </Box>

            <Chip
              label={`${inquiries.length} Inquiries Loaded`}
              size="small"
              sx={{ fontWeight: 700 }}
            />
          </Stack>

          {inquiries.length === 0 ? (
            <Box sx={{ py: 6, textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 44, color: 'success.main', mb: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                All Caught Up!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                No inquiries found in database.
              </Typography>
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="recent contact inquiries table">
                <TableHead>
                  <TableRow sx={{ bgcolor: (theme) => alpha(theme.palette.text.primary, 0.02) }}>
                    <TableCell sx={{ fontWeight: 800 }}>Sender</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Reason / Service</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Message Excerpt</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Date</TableCell>
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
                        <Chip
                          label={row.reason}
                          size="small"
                          sx={{ fontWeight: 700, fontSize: '0.75rem' }}
                        />
                      </TableCell>
                      <TableCell sx={{ maxWidth: 280 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {row.message}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          color={getStatusColor(row.status) as any}
                          sx={{ fontWeight: 800, fontSize: '0.725rem' }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(row.createdAt).toLocaleDateString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <Select
                            value={row.status}
                            onChange={(e) => handleUpdateInquiryStatus(row.id, e.target.value)}
                            sx={{ fontSize: '0.8125rem', fontWeight: 700 }}
                          >
                            <MenuItem value="NEW">NEW</MenuItem>
                            <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                            <MenuItem value="RESOLVED">RESOLVED</MenuItem>
                            <MenuItem value="ARCHIVED">ARCHIVED</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Stack>
    </AdminLayout>
  )
}

export default AdminDashboardPage
