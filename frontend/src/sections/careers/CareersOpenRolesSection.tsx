import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SendIcon from '@mui/icons-material/Send'
import { Button } from '../../components'
import { openRolesData } from '../../data/careers/careers'
import type { CareerDomain } from '../../models'

const RoleCard = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  border: `1.5px solid ${theme.palette.divider}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const StatusBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6, 4),
  borderRadius: Number(theme.shape.borderRadius) * 2.2,
  backgroundColor: theme.palette.background.paper,
  border: `1.5px dashed ${theme.palette.divider}`,
  maxWidth: 760,
  margin: '0 auto',
  boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.03)}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2.5),
  },
}))

interface CareersOpenRolesSectionProps {
  roles?: CareerDomain[]
}

export const CareersOpenRolesSection = ({ roles = [] }: CareersOpenRolesSectionProps) => {
  const hasActiveRoles = roles && roles.length > 0

  const talentMailto = `mailto:${openRolesData.contactEmail}?subject=${encodeURIComponent(
    openRolesData.emailSubject,
  )}`

  return (
    <Box
      component="section"
      id="open-roles"
      aria-labelledby="open-roles-heading"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 8, md: 12 },
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Stack spacing={2.5} sx={{ textAlign: 'center', alignItems: 'center', mb: 6 }}>
          <Box
            sx={(theme) => ({
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
            {openRolesData.badge}
          </Box>

          <Typography
            id="open-roles-heading"
            variant="h2"
            sx={{
              fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.75rem' },
              fontWeight: 800,
              color: 'text.primary',
              letterSpacing: '-0.01em',
            }}
          >
            {hasActiveRoles ? 'Current Full-Time & Lateral Opportunities' : openRolesData.heading}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              fontSize: { xs: '1rem', sm: '1.0625rem' },
              lineHeight: 1.7,
            }}
          >
            {hasActiveRoles
              ? 'Join our mission-driven team building accessible tech architectures, enterprise auditing suites, and inclusive workplace systems.'
              : 'We periodically hire full-stack software engineers, accessibility consultants, and corporate trainers.'}
          </Typography>
        </Stack>

        {hasActiveRoles ? (
          <Stack spacing={6}>
            {/* Active Full-Time Job Cards */}
            <Grid container spacing={4}>
              {roles.map((role) => {
                const applyMailto = `mailto:${openRolesData.contactEmail}?subject=${encodeURIComponent(
                  `Application for ${role.title} (${role.department || 'Full-Time'})`,
                )}&body=${encodeURIComponent(
                  `Hi WinVinaya Talent Team,\n\nI am writing to express my strong interest in the ${role.title} position (${role.location || 'Bengaluru / Hybrid'}).\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]\n[Your Phone Number]`,
                )}`

                return (
                  <Grid key={role.id} size={{ xs: 12, md: 6 }}>
                    <RoleCard>
                      <Stack spacing={3}>
                        {/* Top Pills */}
                        <Stack
                          direction="row"
                          spacing={1.5}
                          sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}
                        >
                          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                            <Chip
                              icon={<BusinessOutlinedIcon sx={{ fontSize: '15px !important' }} />}
                              label={role.department}
                              size="small"
                              sx={{
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                color: 'primary.main',
                              }}
                            />
                            <Chip
                              label={role.type || 'Full-time'}
                              size="small"
                              sx={{
                                fontWeight: 800,
                                fontSize: '0.725rem',
                                bgcolor: (theme) => alpha(theme.palette.accent.main, 0.15),
                                color: 'accent.dark',
                              }}
                            />
                          </Stack>

                          {role.location && (
                            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                              <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
                              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                {role.location}
                              </Typography>
                            </Stack>
                          )}
                        </Stack>

                        {/* Title & Description */}
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1.5 }}>
                            {role.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                            {role.description}
                          </Typography>
                        </Box>

                        {/* Skills & Tools */}
                        {role.skills && role.skills.length > 0 && (
                          <Box>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                display: 'block',
                                mb: 1,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                fontSize: '0.75rem',
                              }}
                            >
                              Required Skills & Technologies:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                              {role.skills.map((skill, idx) => (
                                <Chip
                                  key={idx}
                                  label={skill}
                                  size="small"
                                  sx={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    bgcolor: (theme) => alpha(theme.palette.text.primary, 0.04),
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        )}

                        {/* Responsibilities */}
                        {role.responsibilities && role.responsibilities.length > 0 && (
                          <Box sx={{ pt: 1 }}>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                display: 'block',
                                mb: 1,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                fontSize: '0.75rem',
                              }}
                            >
                              Key Responsibilities:
                            </Typography>
                            <Stack spacing={1}>
                              {role.responsibilities.map((resp, rIdx) => (
                                <Stack key={rIdx} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'primary.main', mt: 0.35, flexShrink: 0 }} />
                                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', lineHeight: 1.55 }}>
                                    {resp}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                          </Box>
                        )}

                        {/* Requirements */}
                        {role.requirements && role.requirements.length > 0 && (
                          <Box sx={{ pt: 1 }}>
                            <Typography
                              variant="caption"
                              sx={{
                                fontWeight: 800,
                                color: 'text.primary',
                                display: 'block',
                                mb: 1,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                fontSize: '0.75rem',
                              }}
                            >
                              Qualifications & Requirements:
                            </Typography>
                            <Stack spacing={1}>
                              {role.requirements.map((req, reqIdx) => (
                                <Stack key={reqIdx} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main', mt: 0.35, flexShrink: 0 }} />
                                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', lineHeight: 1.55 }}>
                                    {req}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                          </Box>
                        )}
                      </Stack>

                      {/* Action Button */}
                      <Box sx={{ mt: 4, pt: 3, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                        <Button
                          tone="primary"
                          variant="contained"
                          component="a"
                          href={applyMailto}
                          startIcon={<SendIcon />}
                          fullWidth
                          sx={{ py: 1.2, fontWeight: 800 }}
                        >
                          Apply for this Position
                        </Button>
                      </Box>
                    </RoleCard>
                  </Grid>
                )
              })}
            </Grid>

            {/* Talent Network Sub-Card */}
            <Box
              sx={(theme) => ({
                p: { xs: 3, sm: 4 },
                borderRadius: Number(theme.shape.borderRadius) * 1.8,
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                textAlign: 'center',
                maxWidth: 780,
                mx: 'auto',
              })}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
                Don't See Your Specific Profile?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, maxWidth: 560, mx: 'auto', lineHeight: 1.6 }}>
                We are always excited to connect with talented Persons with Disabilities and allies in software engineering, QA, design, and sign language interpretation.
              </Typography>
              <Button
                tone="primary"
                variant="outlined"
                component="a"
                href={talentMailto}
                startIcon={<EmailOutlinedIcon />}
                sx={{ px: 3, py: 1, fontWeight: 700 }}
              >
                Send General Application to Talent Network
              </Button>
            </Box>
          </Stack>
        ) : (
          <StatusBox>
            <Box
              sx={(theme) => ({
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2.5,
              })}
            >
              <WorkOutlineOutlinedIcon sx={{ fontSize: 32 }} />
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1.5 }}>
              {openRolesData.noRolesTitle}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: '1rem',
                mb: 3.5,
              }}
            >
              {openRolesData.noRolesDescription}
            </Typography>

            <Box
              sx={(theme) => ({
                pt: 3,
                borderTop: `1px solid ${theme.palette.divider}`,
                maxWidth: 520,
                mx: 'auto',
              })}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
                {openRolesData.talentNetworkTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                {openRolesData.talentNetworkDescription}
              </Typography>

              <Button
                tone="primary"
                variant="outlined"
                size="medium"
                component="a"
                href={talentMailto}
                startIcon={<EmailOutlinedIcon />}
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 700,
                }}
              >
                Submit Resume to Talent Network
              </Button>
            </Box>
          </StatusBox>
        )}
      </Container>
    </Box>
  )
}

export default CareersOpenRolesSection
