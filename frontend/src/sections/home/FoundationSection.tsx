import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, IconBadge, SectionHeading } from '../../components'
import { foundationTeaser } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.08),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const IMPACT_HIGHLIGHTS = [
  'Skilling & Training PwDs in IT',
  'Industry Job Placement Support',
  'Inclusive Career Mentorship',
]

/** "WinVinaya Foundation" teaser — the social-impact tie-in, given a warm accent-tinted band. */
export const FoundationSection = () => (
  <Root aria-labelledby="foundation-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 720, mx: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <IconBadge icon={<Diversity2OutlinedIcon />} tone="accent" size="lg" />
        <SectionHeading
          headingId="foundation-heading"
          eyebrow={foundationTeaser.eyebrow}
          heading={foundationTeaser.heading}
          description={foundationTeaser.body}
          maxWidth={720}
        />

        {/* Impact Highlights */}
        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, py: 1 }}>
          {IMPACT_HIGHLIGHTS.map((item, idx) => (
            <Box
              key={idx}
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                py: 0.75,
                px: 1.75,
                borderRadius: 999,
                bgcolor: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
                boxShadow: `0 2px 8px -2px ${alpha(theme.palette.common.black, 0.04)}`,
              })}
            >
              <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.8rem' }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Button tone="accent" variant="contained" size="large" href={foundationTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
          {foundationTeaser.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
