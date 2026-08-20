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
import { Button, Chip } from '../../components'
import { aboutTeaser } from '../../data'

const Highlight = styled(Box)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.accent.main}`,
  paddingLeft: theme.spacing(2.5),
  backgroundColor: alpha(theme.palette.accent.main, 0.05),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingRight: theme.spacing(2),
  borderRadius: `0 ${Number(theme.shape.borderRadius)}px ${Number(theme.shape.borderRadius)}px 0`,
}))

const PillarCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px -4px ${alpha(theme.palette.common.black, 0.06)}`,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.4),
    boxShadow: `0 12px 24px -6px ${alpha(theme.palette.accent.main, 0.12)}`,
    transform: 'translateY(-2px)',
  },
}))

export const AboutTeaserSection = () => (
  <Box component="section" aria-labelledby="about-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        {/* Left Column: Story & Narrative */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3.5}>
            <Chip
              label={aboutTeaser.eyebrow}
              tone="accent"
              variant="outlined"
              size="small"
              sx={{ alignSelf: 'flex-start', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem', fontWeight: 700 }}
            />
            <Typography id="about-heading" variant="h2">
              {aboutTeaser.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              {aboutTeaser.body}
            </Typography>
            <Highlight>
              <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary', fontWeight: 600 }}>
                {aboutTeaser.highlight}
              </Typography>
            </Highlight>
            <Box>
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
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  display: 'flex',
                  alignSelf: 'flex-start',
                })}
              >
                <VisibilityOutlinedIcon />
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                  Authentic Lived-Experience Testing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Over 50% of our testing specialists are Persons with Disabilities (PwDs). We test with native screen readers, keyboard navigation, and braille displays to ensure real usability.
                </Typography>
              </Stack>
            </PillarCard>

            <PillarCard>
              <Box
                sx={(theme) => ({
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.accent.main, 0.1),
                  color: theme.palette.accent.main,
                  display: 'flex',
                  alignSelf: 'flex-start',
                })}
              >
                <AutoAwesomeOutlinedIcon />
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                  Enterprise AI & Digital Engineering
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  From accessible Power BI dashboards to custom AI agents, we build solutions engineered for strict WCAG 2.1/2.2 AA & AAA standards from day one.
                </Typography>
              </Stack>
            </PillarCard>

            <PillarCard>
              <Box
                sx={(theme) => ({
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.success.main, 0.1),
                  color: theme.palette.success.main,
                  display: 'flex',
                  alignSelf: 'flex-start',
                })}
              >
                <GroupsOutlinedIcon />
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                  Social Impact Partnership
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Directly linked to WinVinaya Foundation, our social-impact arm that trains and places PwDs in tech careers, driving inclusive economic empowerment.
                </Typography>
              </Stack>
            </PillarCard>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
)
