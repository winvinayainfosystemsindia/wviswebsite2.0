import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { SectionHeading } from '../../../components'
import { eduConnectAcademicData } from '../../../data/impact/clientsPartners'

const AcademicCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const EduConnectAcademicPartnersSection = () => (
  <Box
    component="section"
    aria-labelledby="educonnect-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="educonnect-heading"
          eyebrow={eduConnectAcademicData.eyebrow}
          heading={eduConnectAcademicData.heading}
          description={eduConnectAcademicData.description}
          maxWidth={780}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {eduConnectAcademicData.institutions.map((inst) => (
            <Grid key={inst.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <AcademicCard>
                <Stack spacing={1.5}>
                  {/* Top Row: Icon & Badge */}
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        p: 1,
                        borderRadius: Number(theme.shape.borderRadius) * 0.1,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                      })}
                    >
                      <SchoolOutlinedIcon sx={{ fontSize: 22 }} />
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.2,
                        py: 0.35,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        color: theme.palette.accent.dark,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      })}
                    >
                      {inst.badge}
                    </Box>
                  </Stack>

                  {/* Institution Name & Location */}
                  <Box sx={{ pt: 0.5 }}>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'text.primary', mb: 0.25 }}>
                      {inst.name}
                    </Typography>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
                        {inst.location}
                      </Typography>
                    </Stack>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                    {inst.description}
                  </Typography>
                </Stack>

                {/* Focus Pill Footer */}
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    pt: 1.5,
                    mt: 1.5,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  })}
                >
                  <CheckCircleOutlinedIcon sx={{ fontSize: 15, color: 'accent.main', flexShrink: 0 }} />
                  <Typography variant="caption" sx={(theme) => ({ color: theme.palette.accent.dark, fontWeight: 700, fontSize: '0.75rem' })}>
                    {inst.focus}
                  </Typography>
                </Box>
              </AcademicCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
