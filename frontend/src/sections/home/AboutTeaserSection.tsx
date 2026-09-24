import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded'
import { Button, SectionHeading } from '../../components'
import { aboutTeaser } from '../../data'

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FCFAF6' : '#14100D',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(9, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(13, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '12%',
    width: '450px',
    height: '450px',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: '8%',
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const MainStoryBento = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(3.5),
  padding: theme.spacing(4.5),
  borderRadius: 22,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 10px 32px -6px ${alpha(theme.palette.text.primary, 0.05)}`,
  overflow: 'hidden',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent.main} 100%)`,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.4),
    boxShadow: `0 16px 40px -8px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const HighlightQuote = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(2.25, 2.75),
  borderRadius: 14,
  backgroundColor: alpha(theme.palette.accent.main, 0.06),
  borderLeft: `4px solid ${theme.palette.accent.main}`,
  borderTop: `1px solid ${alpha(theme.palette.accent.main, 0.12)}`,
  borderRight: `1px solid ${alpha(theme.palette.accent.main, 0.12)}`,
  borderBottom: `1px solid ${alpha(theme.palette.accent.main, 0.12)}`,
}))

const BentoPillarCard = styled(Box)<{ colorScheme: 'primary' | 'accent' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      primary: theme.palette.primary.main,
      accent: theme.palette.accent.main,
      info: theme.palette.info.main,
    }
    const targetColor = colorMap[colorScheme]

    return {
      padding: theme.spacing(3.5),
      borderRadius: 18,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.85),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.03)}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
      '&:hover': {
        borderColor: alpha(targetColor, 0.45),
        boxShadow: `0 12px 28px -6px ${alpha(targetColor, 0.14)}`,
        transform: 'translateY(-3px)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2.5),
      },
    }
  }
)

const IconBox = styled(Box)<{ colorScheme: 'primary' | 'accent' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      primary: { bg: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main },
      accent: { bg: alpha(theme.palette.accent.main, 0.12), color: theme.palette.accent.main },
      info: { bg: alpha(theme.palette.info.main, 0.1), color: theme.palette.info.main },
    }
    const cur = colorMap[colorScheme]

    return {
      width: 44,
      height: 44,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: cur.bg,
      color: cur.color,
      flexShrink: 0,
    }
  }
)

export const AboutTeaserSection = () => (
  <SectionWrapper aria-labelledby="who-we-are-heading">
    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        {/* Section Heading */}
        <SectionHeading
          headingId="who-we-are-heading"
          eyebrow="Who We Are"
          heading="Where Engineering Precision Meets Authentic Accessibility"
          description="We empower global enterprises to build compliant, high-performing, and inclusive digital products — engineered with precision and validated by specialists with lived experience."
          maxWidth={820}
        />

        {/* 2-Column Asymmetric Bento Story Grid */}
        <Grid container spacing={{ xs: 3.5, lg: 4 }} sx={{ width: '100%', alignItems: 'stretch' }}>
          {/* Left Column: Narrative Hero Story Card */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainStoryBento>
              <Stack spacing={3}>
                {/* Header Badge */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.5,
                      py: 0.45,
                      borderRadius: 1.5,
                      bgcolor: alpha(theme.palette.accent.main, 0.1),
                      color: theme.palette.accent.dark,
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                    })}
                  >
                    <VerifiedOutlinedIcon sx={{ fontSize: '1rem', color: 'accent.main' }} />
                    <span>Pioneering Digital Inclusion & AI Engineering</span>
                  </Box>
                </Box>

                {/* Narrative Text */}
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontSize: '1.0625rem', lineHeight: 1.8, fontWeight: 500 }}
                >
                  {aboutTeaser.storyParagraph1}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '0.96875rem', lineHeight: 1.75 }}
                >
                  {aboutTeaser.storyParagraph2}
                </Typography>

                {/* Impact Quote */}
                <HighlightQuote>
                  <FormatQuoteRoundedIcon
                    sx={{
                      color: 'accent.main',
                      fontSize: '1.75rem',
                      opacity: 0.85,
                      flexShrink: 0,
                      mt: -0.25,
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      lineHeight: 1.6,
                      fontSize: '0.9375rem',
                      fontStyle: 'italic',
                    }}
                  >
                    "{aboutTeaser.highlight}"
                  </Typography>
                </HighlightQuote>

                {/* Compliance Badges Ribbon */}
                <Stack spacing={1.25} sx={{ pt: 0.5 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                    }}
                  >
                    Global Standards & Certifications:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.85 }}>
                    {aboutTeaser.complianceTags.map((tag) => (
                      <Box
                        key={tag}
                        sx={(theme) => ({
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.6,
                          px: 1.2,
                          py: 0.45,
                          borderRadius: 1,
                          fontSize: '0.78125rem',
                          fontWeight: 600,
                          bgcolor: alpha(theme.palette.primary.main, 0.07),
                          color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
                        })}
                      >
                        <CheckCircleRoundedIcon sx={{ fontSize: '0.875rem', color: 'primary.main' }} />
                        <span>{tag}</span>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </Stack>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ pt: 2.5, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}
              >
                <Button
                  tone="accent"
                  variant="contained"
                  href={aboutTeaser.cta.href}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ py: 1.35, px: 3, fontWeight: 600 }}
                >
                  {aboutTeaser.cta.label}
                </Button>
                <Button
                  tone="primary"
                  variant="outlined"
                  href={aboutTeaser.ctaSecondary.href}
                  sx={{ py: 1.35, px: 2.5, fontWeight: 600 }}
                >
                  {aboutTeaser.ctaSecondary.label}
                </Button>
              </Stack>
            </MainStoryBento>
          </Grid>

          {/* Right Column: 3-Tier Asymmetric Bento Pillar Stack */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={2.5} sx={{ height: '100%', justifyContent: 'space-between' }}>
              {/* Pillar 1: Lived-Experience Audits (Flagship with Audio Wave Badge) */}
              <BentoPillarCard colorScheme="accent">
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <IconBox colorScheme="accent">
                        <VisibilityOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                      </IconBox>
                      <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                        Lived-Experience Accessibility Audits
                      </Typography>
                    </Box>

                    <Box
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1,
                        py: 0.35,
                        borderRadius: 1,
                        fontSize: '0.71875rem',
                        fontWeight: 700,
                        bgcolor: alpha(theme.palette.accent.main, 0.12),
                        color: theme.palette.accent.dark,
                        border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                      })}
                    >
                      <GraphicEqRoundedIcon sx={{ fontSize: '0.875rem' }} />
                      <span>50%+ PwD QA Team</span>
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.90625rem' }}>
                    Manual testing conducted by certified engineers who are Persons with Disabilities using NVDA, JAWS, VoiceOver, TalkBack, and Refreshable Braille. Eliminating false sense of security.
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 0.5 }}>
                    {['#WCAG2.2', '#ScreenReaders', '#ZeroFalsePositives', '#ManualQA'].map((kw) => (
                      <Typography
                        key={kw}
                        variant="caption"
                        sx={(theme) => ({
                          fontSize: '0.71875rem',
                          fontWeight: 600,
                          color: 'text.secondary',
                          bgcolor: alpha(theme.palette.background.default, 0.9),
                          px: 0.85,
                          py: 0.25,
                          borderRadius: 0.75,
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                        })}
                      >
                        {kw}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </BentoPillarCard>

              {/* Pillar 2: Accessible AI & Digital Engineering */}
              <BentoPillarCard colorScheme="primary">
                <Stack spacing={1.75}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <IconBox colorScheme="primary">
                      <AutoAwesomeOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                    </IconBox>
                    <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                      Accessible AI & Enterprise Engineering
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.875rem' }}>
                    Full-stack enterprise web applications, intelligent AI workflows, and certified Power BI dashboards architected with inclusive design principles from line one.
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {['#AccessibleAI', '#PowerBI', '#EnterpriseApps', '#InclusiveDesign'].map((kw) => (
                      <Typography
                        key={kw}
                        variant="caption"
                        sx={(theme) => ({
                          fontSize: '0.71875rem',
                          fontWeight: 600,
                          color: 'text.secondary',
                          bgcolor: alpha(theme.palette.background.default, 0.9),
                          px: 0.85,
                          py: 0.25,
                          borderRadius: 0.75,
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                        })}
                      >
                        {kw}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </BentoPillarCard>

              {/* Pillar 3: WinVinaya Foundation Synergy */}
              <BentoPillarCard colorScheme="info">
                <Stack spacing={1.75}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <IconBox colorScheme="info">
                      <VolunteerActivismOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                    </IconBox>
                    <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                      Social Impact Foundation Synergy
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.875rem' }}>
                    Directly linked to our non-profit arm, creating dignified IT careers for Persons with Disabilities, neurodivergent talent, and women in technology.
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {['#ESGLeadership', '#InclusiveHiring', '#4000+Careers', '#DEIImpact'].map((kw) => (
                      <Typography
                        key={kw}
                        variant="caption"
                        sx={(theme) => ({
                          fontSize: '0.71875rem',
                          fontWeight: 600,
                          color: 'text.secondary',
                          bgcolor: alpha(theme.palette.background.default, 0.9),
                          px: 0.85,
                          py: 0.25,
                          borderRadius: 0.75,
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                        })}
                      >
                        {kw}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </BentoPillarCard>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </SectionWrapper>
)
