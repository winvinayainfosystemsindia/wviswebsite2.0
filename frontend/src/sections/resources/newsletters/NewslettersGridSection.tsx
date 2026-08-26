import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import type { NewsletterItem } from '../../../data/resources/newsletters'

const NewsletterCard = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  textDecoration: 'none',
  color: 'inherit',
  overflow: 'hidden',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
    '& .read-pdf-icon': {
      transform: 'translate(2px, -2px)',
      color: theme.palette.primary.main,
    },
    '& .card-image': {
      transform: 'scale(1.05)',
    },
  },
}))

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 210,
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}))

const CardImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  }),
}))

interface NewslettersGridSectionProps {
  newsletters: NewsletterItem[]
}

export const NewslettersGridSection = ({ newsletters }: NewslettersGridSectionProps) => (
  <Box
    component="section"
    id="newsletters-grid"
    aria-labelledby="newsletters-grid-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      py: { xs: 8, md: 10 },
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl">
      {/* Section Subtitle & Heading */}
      <Box sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'primary.main',
            display: 'block',
            mb: 0.5,
          }}
        >
          Browse The Archive
        </Typography>
        <Typography
          id="newsletters-grid-heading"
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2.125rem' },
            color: 'text.primary',
          }}
        >
          Past Issues
        </Typography>
      </Box>

      {newsletters.length === 0 ? (
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            py: 10,
            px: 3,
            bgcolor: theme.palette.background.paper,
            borderRadius: Number(theme.shape.borderRadius) * 2,
            border: `1px dashed ${theme.palette.divider}`,
            maxWidth: 600,
            mx: 'auto',
          })}
        >
          <SearchOffIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
            No Issues Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stay tuned for upcoming newsletter editions.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3.5}>
          {newsletters.map((newsletter) => (
            <Grid key={newsletter.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <NewsletterCard
                href={newsletter.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${newsletter.title} (opens PDF in a new tab)`}
              >
                {/* Clean Image Cover without text overlays */}
                <ImageContainer>
                  <CardImage
                    className="card-image"
                    src={newsletter.coverImage}
                    alt={newsletter.title}
                    loading="lazy"
                  />
                </ImageContainer>

                {/* Card Content */}
                <Box sx={{ p: 3.5, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <Stack spacing={2}>
                    {/* Date */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: '0.78125rem' }}>
                      <CalendarTodayIcon sx={{ fontSize: 14 }} />
                      <span>Published {newsletter.publishedDate}</span>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={(theme) => ({
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        lineHeight: 1.35,
                      })}
                    >
                      {newsletter.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.65,
                        fontSize: '0.8875rem',
                      }}
                    >
                      {newsletter.excerpt}
                    </Typography>
                  </Stack>

                  {/* Footer Action */}
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pt: 2.5,
                      mt: 2.5,
                      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.75rem' }}>
                      Adobe PDF
                    </Typography>

                    <Box
                      component="span"
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                        '& .read-pdf-icon': {
                          transition: theme.transitions.create(['transform', 'color']),
                          fontSize: 16,
                        },
                      })}
                    >
                      View PDF
                      <OpenInNewIcon className="read-pdf-icon" />
                    </Box>
                  </Stack>
                </Box>
              </NewsletterCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  </Box>
)
