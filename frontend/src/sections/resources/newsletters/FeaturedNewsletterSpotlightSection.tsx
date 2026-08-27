import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Button } from '../../../components'
import { latestNewsletter } from '../../../data/resources/newsletters'

const SpotlightContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  padding: theme.spacing(4.5),
  backgroundColor: theme.palette.background.paper,
  border: `1.5px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  boxShadow: `0 20px 48px -12px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  overflow: 'hidden',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 24px 54px -10px ${alpha(theme.palette.primary.main, 0.2)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const ImageWrapper = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.06)}`,
  backgroundColor: theme.palette.background.default,
  height: '100%',
  minHeight: 280,
  maxHeight: 380,
  display: 'flex',
}))

const FeaturedImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}))

interface FeaturedNewsletterSpotlightSectionProps {
  item?: any
}

export const FeaturedNewsletterSpotlightSection = ({ item: propItem }: FeaturedNewsletterSpotlightSectionProps = {}) => {
  const item = propItem || latestNewsletter

  const handleOpenPdf = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(item.pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box
      component="section"
      aria-labelledby="featured-newsletter-heading"
      sx={{ bgcolor: 'background.default', pb: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="xl">
        <SpotlightContainer>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            {/* Left Featured Cover Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ImageWrapper>
                <FeaturedImage
                  src={item.coverImage}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageWrapper>
            </Grid>

            {/* Right Details & CTA */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.75}>
                {/* Badge */}
                <Box
                  sx={(theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 99,
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                    fontSize: '0.8125rem',
                    fontWeight: 800,
                    alignSelf: 'flex-start',
                  })}
                >
                  <AutoAwesomeIcon sx={{ fontSize: 16 }} />
                  Latest Issue
                </Box>

                {/* Title */}
                <Typography
                  id="featured-newsletter-heading"
                  variant="h3"
                  sx={(theme) => ({
                    fontSize: { xs: '1.6rem', sm: '2rem', md: '2.25rem' },
                    lineHeight: 1.25,
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                  })}
                >
                  {item.title}
                </Typography>

                {/* Excerpt Description */}
                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    fontSize: { xs: '0.975rem', sm: '1.05rem' },
                  })}
                >
                  {item.excerpt}
                </Typography>

                {/* Published Date */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'text.secondary', fontSize: '0.875rem' }}>
                  <CalendarTodayIcon sx={{ fontSize: 16 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Published {item.publishedDate}
                  </Typography>
                </Box>

                {/* Action Button */}
                <Box sx={{ pt: 1 }}>
                  <Button
                    tone="primary"
                    variant="contained"
                    size="large"
                    component="a"
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon />}
                    onClick={handleOpenPdf}
                    sx={{
                      px: 3.5,
                      py: 1.25,
                      fontWeight: 800,
                      textTransform: 'none',
                      fontSize: '0.9375rem',
                      boxShadow: (theme) => `0 4px 14px ${alpha(theme.palette.primary.main, 0.35)}`,
                    }}
                  >
                    Read Newsletter
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </SpotlightContainer>
      </Container>
    </Box>
  )
}
