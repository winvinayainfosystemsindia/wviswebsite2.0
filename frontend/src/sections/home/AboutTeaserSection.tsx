import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Chip } from '../../components'
import { aboutTeaser } from '../../data'

const Highlight = styled(Box)(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.accent.main}`,
  paddingLeft: theme.spacing(2.5),
}))

/**
 * "Who We Are" teaser: mission narrative with a pull-quote highlight,
 * centered — deliberately text-first rather than photo-paired, since the
 * only real photography planned for this page belongs in the hero.
 */
export const AboutTeaserSection = () => (
  <Box component="section" aria-labelledby="about-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ maxWidth: 760, mx: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <Chip
          label={aboutTeaser.eyebrow}
          tone="accent"
          variant="outlined"
          size="small"
          sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}
        />
        <Typography id="about-heading" variant="h2">
          {aboutTeaser.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {aboutTeaser.body}
        </Typography>
        <Highlight sx={{ textAlign: 'left', alignSelf: 'stretch' }}>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary' }}>
            {aboutTeaser.highlight}
          </Typography>
        </Highlight>
        <Button tone="accent" variant="text" href={aboutTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
          {aboutTeaser.cta.label}
        </Button>
      </Stack>
    </Container>
  </Box>
)
