import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Chip } from '../../components'
import { heroContent } from '../../data'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `radial-gradient(120% 100% at 100% 0%, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 55%), radial-gradient(120% 100% at 0% 100%, ${alpha(theme.palette.accent.light, 0.12)} 0%, transparent 55%)`,
}))

const CardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(16px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  boxShadow: `0 24px 48px -12px ${alpha(theme.palette.common.black, 0.12)}`,
}))

const ShowcaseBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 14px -2px ${alpha(theme.palette.common.black, 0.06)}`,
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 10px 24px -4px ${alpha(theme.palette.primary.main, 0.15)}`,
  },
}))

export const HeroSection = () => (
  <Root aria-labelledby="hero-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3.5} sx={{ maxWidth: 660 }}>
            <Chip
              label={heroContent.eyebrow}
              tone="accent"
              variant="outlined"
              size="small"
              sx={{ alignSelf: 'flex-start', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem', fontWeight: 700 }}
            />
            <Typography id="hero-heading" variant="display" component="h1">
              {heroContent.headline}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.65 }}>
              {heroContent.subheadline}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button tone="primary" variant="contained" href={heroContent.primaryCta.href} size="large" endIcon={<ArrowForwardIcon />}>
                {heroContent.primaryCta.label}
              </Button>
              <Button tone="primary" variant="outlined" href={heroContent.secondaryCta.href} size="large">
                {heroContent.secondaryCta.label}
              </Button>
            </Stack>

            {/* Key feature pills */}
            <Stack direction="row" spacing={2} sx={{ pt: 1, flexWrap: 'wrap', gap: 1.5 }}>
              {heroContent.badges.map((badge, idx) => (
                <Box
                  key={idx}
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.75,
                    px: 1.5,
                    borderRadius: 999,
                    bgcolor: alpha(theme.palette.primary.main, 0.06),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  })}
                >
                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    {badge.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    • {badge.sublabel}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <CardContainer>
            <ShowcaseBadge>
              <Box
                sx={(theme) => ({
                  p: 1.25,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.success.main, 0.12),
                  color: theme.palette.success.main,
                  display: 'flex',
                })}
              >
                <CheckCircleOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  WCAG 2.1 & 2.2 AA / AAA Compliance
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  50+ Checkpoints Verified for Web & Mobile Apps
                </Typography>
              </Box>
            </ShowcaseBadge>

            <ShowcaseBadge>
              <Box
                sx={(theme) => ({
                  p: 1.25,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.accent.main, 0.12),
                  color: theme.palette.accent.main,
                  display: 'flex',
                })}
              >
                <RecordVoiceOverOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  Lived-Experience Assistive Tech Validation
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Tested by NVDA, JAWS, VoiceOver & TalkBack Experts
                </Typography>
              </Box>
            </ShowcaseBadge>

            <ShowcaseBadge>
              <Box
                sx={(theme) => ({
                  p: 1.25,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.info.main, 0.12),
                  color: theme.palette.info.main,
                  display: 'flex',
                })}
              >
                <ShieldOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  Enterprise VPAT & ACR Documentation
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Audit-Ready Voluntary Product Accessibility Templates
                </Typography>
              </Box>
            </ShowcaseBadge>
          </CardContainer>
        </Grid>
      </Grid>
    </Container>
  </Root>
)
