import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import { Button } from '../../components'
import { internshipProgramData } from '../../data/careers/careers'

const NoticeBox = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(3.5, 4),
  backgroundColor: alpha(theme.palette.accent.main, 0.08),
  border: `1.5px solid ${alpha(theme.palette.accent.main, 0.35)}`,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5, 2.5),
  },
}))

const DomainCard = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  padding: theme.spacing(3.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

const BenefitCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  backgroundColor: alpha(theme.palette.primary.main, 0.04),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
}))

export const CareersInternshipSection = () => {
  const mailtoUrl = `mailto:${internshipProgramData.applyEmail}?subject=${encodeURIComponent(
    internshipProgramData.applySubject,
  )}`

  return (
    <Box
      component="section"
      id="internships"
      aria-labelledby="internships-heading"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.accent.light, 0.03),
        py: { xs: 8, md: 12 },
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* Header */}
          <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Box
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1.5,
                py: 0.5,
                borderRadius: 99,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                fontSize: '0.8125rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              })}
            >
              <SchoolOutlinedIcon sx={{ fontSize: 16 }} />
              {internshipProgramData.badge}
            </Box>

            <Typography
              id="internships-heading"
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 800,
                color: 'text.primary',
                letterSpacing: '-0.01em',
              }}
            >
              {internshipProgramData.heading}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.15rem' },
                color: 'text.secondary',
                maxWidth: 800,
                lineHeight: 1.7,
              }}
            >
              {internshipProgramData.subheading}
            </Typography>
          </Stack>

          {/* CRITICAL IMPORTANT NOTICE CALLOUT */}
          <NoticeBox>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', color: 'accent.dark' }}>
                <WarningAmberIcon sx={{ fontSize: 28, color: 'accent.main', flexShrink: 0 }} />
                <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '1.05rem', sm: '1.2rem' } }}>
                  {internshipProgramData.importantNotice.title}
                </Typography>
              </Stack>

              <Stack spacing={1.5} sx={{ pl: { xs: 0, sm: 5 } }}>
                {internshipProgramData.importantNotice.points.map((point, idx) => {
                  const colonIdx = point.indexOf(':')
                  const leadText = colonIdx > -1 ? point.substring(0, colonIdx + 1) : ''
                  const restText = colonIdx > -1 ? point.substring(colonIdx + 1) : point

                  return (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'accent.main', mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.65, fontSize: '0.95rem' }}>
                        {leadText && <strong>{leadText}</strong>}
                        {restText}
                      </Typography>
                    </Box>
                  )
                })}
              </Stack>
            </Stack>
          </NoticeBox>

          {/* Internship Domains Grid */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                color: 'text.primary',
                mb: 3.5,
              }}
            >
              Internship Tracks & Engineering Domains
            </Typography>

            <Grid container spacing={3.5}>
              {internshipProgramData.domains.map((domain) => (
                <Grid key={domain.id} size={{ xs: 12, md: 6, lg: 4 }}>
                  <DomainCard>
                    <Stack spacing={2}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.15rem' }}>
                        {domain.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                        {domain.description}
                      </Typography>
                    </Stack>

                    <Box sx={{ mt: 3, pt: 2, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
                        Tools & Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {domain.skills.map((skill, sIdx) => (
                          <Box
                            key={sIdx}
                            sx={(theme) => ({
                              px: 1,
                              py: 0.35,
                              borderRadius: 1,
                              bgcolor: alpha(theme.palette.text.primary, 0.04),
                              border: `1px solid ${theme.palette.divider}`,
                              color: theme.palette.text.primary,
                              fontSize: '0.75rem',
                              fontWeight: 600,
                            })}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </DomainCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Benefits & What You Gain */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                color: 'text.primary',
                mb: 3.5,
              }}
            >
              What You Gain from This Internship
            </Typography>

            <Grid container spacing={3}>
              {internshipProgramData.benefits.map((benefit, bIdx) => (
                <Grid key={bIdx} size={{ xs: 12, sm: 6 }}>
                  <BenefitCard>
                    <Box
                      sx={(theme) => ({
                        width: 44,
                        height: 44,
                        borderRadius: 1.5,
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      })}
                    >
                      {bIdx === 0 && <WorkspacePremiumOutlinedIcon sx={{ fontSize: 24 }} />}
                      {bIdx === 1 && <CodeOutlinedIcon sx={{ fontSize: 24 }} />}
                      {bIdx === 2 && <SchoolOutlinedIcon sx={{ fontSize: 24 }} />}
                      {bIdx === 3 && <GroupsOutlinedIcon sx={{ fontSize: 24 }} />}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </BenefitCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Eligibility & Application Callout */}
          <Box
            sx={(theme) => ({
              p: { xs: 3.5, sm: 5 },
              borderRadius: Number(theme.shape.borderRadius) * 0.1,
              bgcolor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: `0 12px 32px ${alpha(theme.palette.text.primary, 0.05)}`,
            })}
          >
            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 2 }}>
                  {internshipProgramData.eligibility.title}
                </Typography>
                <Stack spacing={1.25}>
                  {internshipProgramData.eligibility.items.map((req, rIdx) => (
                    <Box key={rIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'primary.main', mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9375rem' }}>
                        {req}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={(theme) => ({
                    p: 3.5,
                    borderRadius: Number(theme.shape.borderRadius) * 0.1,
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    border: `1.5px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    textAlign: 'center',
                  })}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
                    Ready to Build Real Software?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                    Email your updated resume, GitHub profile/portfolio link, and preferred track to our hiring team.
                  </Typography>

                  <Button
                    tone="primary"
                    variant="contained"
                    size="large"
                    component="a"
                    href={mailtoUrl}
                    startIcon={<EmailOutlinedIcon />}
                    fullWidth
                    sx={{
                      py: 1.4,
                      fontWeight: 800,
                      fontSize: '0.9375rem',
                    }}
                  >
                    Apply for Internship
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
