import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Avatar, Button, SectionHeading, Stat } from '../../components'
import { impact } from '../../data'

const StatCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: alpha(theme.palette.primary.main, 0.3),
    boxShadow: `0 10px 24px -6px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}))

const QuotePanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(4, 5),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 16px 36px -12px ${alpha(theme.palette.common.black, 0.08)}`,
  '& .quote-mark': {
    color: alpha(theme.palette.accent.main, 0.3),
    fontSize: '3.5rem',
  },
}))

export const ImpactSection = () => (
  <Box component="section" aria-labelledby="impact-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading
          headingId="impact-heading"
          eyebrow={impact.eyebrow}
          heading={impact.heading}
          description={impact.subheading}
          maxWidth={620}
        />

        <Grid container spacing={3}>
          {impact.stats.map((stat) => (
            <Grid key={stat.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard>
                <Stat value={stat.value} label={stat.label} />
              </StatCard>
            </Grid>
          ))}
        </Grid>

        <QuotePanel>
          <FormatQuoteRoundedIcon className="quote-mark" aria-hidden="true" />
          <Stack spacing={3}>
            {/* 5-star rating */}
            <Stack direction="row" spacing={0.5} sx={{ color: 'accent.main' }}>
              {[...Array(5)].map((_, i) => (
                <StarRoundedIcon key={i} fontSize="small" />
              ))}
            </Stack>

            <Typography variant="h6" component="blockquote" sx={{ fontStyle: 'italic', fontWeight: 500, m: 0, lineHeight: 1.65 }}>
              "{impact.testimonial.quote}"
            </Typography>

            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', pt: 1 }}>
              <Avatar name={impact.testimonial.name} size="md" />
              <Stack spacing={0.25}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {impact.testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {impact.testimonial.role} • {impact.testimonial.organization}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </QuotePanel>

        <Box sx={{ textAlign: 'center' }}>
          <Button tone="primary" variant="outlined" href={impact.cta.href} endIcon={<ArrowForwardIcon />}>
            {impact.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
