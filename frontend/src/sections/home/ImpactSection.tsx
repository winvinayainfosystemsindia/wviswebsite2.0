import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Avatar, Button, SectionHeading, Stat } from '../../components'
import { impact } from '../../data'

const QuotePanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: 720,
  margin: '0 auto',
  padding: theme.spacing(4, 5),
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  '& .quote-mark': {
    color: alpha(theme.palette.accent.main, 0.25),
    fontSize: '3rem',
  },
}))

/**
 * "Our Impact" stats band + testimonial teaser. Stats currently render
 * placeholder em dashes (see `data/home/impact.ts`) with a small, honest
 * note rather than fabricated numbers — swap in verified figures once the
 * Impact > Success Stories content is finalized.
 */
export const ImpactSection = () => (
  <Box component="section" aria-labelledby="impact-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading headingId="impact-heading" eyebrow={impact.eyebrow} heading={impact.heading} maxWidth={560} />

        <Stack spacing={2}>
          <Grid container spacing={4}>
            {impact.stats.map((stat) => (
              <Grid key={stat.id} size={{ xs: 6, md: 3 }}>
                <Stat value={stat.value} label={stat.label} />
              </Grid>
            ))}
          </Grid>
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
            {impact.placeholderNote}
          </Typography>
        </Stack>

        <QuotePanel>
          <FormatQuoteRoundedIcon className="quote-mark" aria-hidden="true" />
          <Stack spacing={3}>
            <Typography variant="h6" component="blockquote" sx={{ fontStyle: 'italic', fontWeight: 500, m: 0 }}>
              {impact.testimonial.quote}
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Avatar name={impact.testimonial.name} size="sm" />
              <Stack spacing={0}>
                <Typography variant="subtitle2">{impact.testimonial.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {impact.testimonial.organization}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </QuotePanel>

        <Box sx={{ textAlign: 'center' }}>
          <Button tone="primary" variant="text" href={impact.cta.href} endIcon={<ArrowForwardIcon />}>
            {impact.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
