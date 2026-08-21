import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { aboutTeaser } from '../../data'

const Highlight = styled(Box)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.accent.main}`,
  paddingLeft: theme.spacing(2.5),
  backgroundColor: alpha(theme.palette.accent.main, 0.06),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(2.5),
  borderRadius: `0 ${Number(theme.shape.borderRadius) * 1.2}px ${Number(theme.shape.borderRadius) * 1.2}px 0`,
}))

const PillarCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.25),
  padding: theme.spacing(2.75),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px -4px ${alpha(theme.palette.text.primary, 0.05)}`,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.45),
    boxShadow: `0 14px 28px -6px ${alpha(theme.palette.accent.main, 0.15)}`,
    transform: 'translateY(-3px)',
  },
}))

export const AboutTeaserSection = () => (
  <Box
    component="section"
    aria-labelledby="about-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="about-heading"
          eyebrow={aboutTeaser.eyebrow}
          heading={aboutTeaser.heading}
          maxWidth={720}
        />

        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ width: '100%', alignItems: 'center' }}>
          {/* Left Column: Story & Narrative */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3.5}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
                {aboutTeaser.body}
              </Typography>
              <Highlight>
                <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary', fontWeight: 600, lineHeight: 1.6 }}>
                  {aboutTeaser.highlight}
                </Typography>
              </Highlight>
              <Box sx={{ pt: 1 }}>
                <Button tone="accent" variant="contained" href={aboutTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
                  {aboutTeaser.cta.label}
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: 3 Core Pillars */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <PillarCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  })}
                >
                  <VisibilityOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    Authentic Lived-Experience Testing
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Over 50% of our testing specialists are Persons with Disabilities (PwDs). We test with native screen readers, keyboard navigation, and braille displays to ensure real usability.
                  </Typography>
                </Stack>
              </PillarCard>

              <PillarCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(theme.palette.accent.main, 0.12),
                    color: theme.palette.accent.main,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
                  })}
                >
                  <AutoAwesomeOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    Enterprise AI & Digital Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    From accessible Power BI dashboards to custom AI agents, we build solutions engineered for strict WCAG 2.1/2.2 AA & AAA standards from day one.
                  </Typography>
                </Stack>
              </PillarCard>

              <PillarCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(theme.palette.success.main, 0.12),
                    color: theme.palette.success.main,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  })}
                >
                  <GroupsOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    Social Impact Partnership
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Directly linked to WinVinaya Foundation, our social-impact arm that trains and places PwDs in tech careers, driving inclusive economic empowerment.
                  </Typography>
                </Stack>
              </PillarCard>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Box>
)
