import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Button } from '../../components'
import { openRolesData } from '../../data/careers/careers'

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

export const CareersOpenRolesSection = () => {
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
        py: { xs: 8, md: 10 },
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={4} sx={{ textAlign: 'center', alignItems: 'center', mb: 5 }}>
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
            }}
          >
            {openRolesData.heading}
          </Typography>
        </Stack>

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
      </Container>
    </Box>
  )
}
