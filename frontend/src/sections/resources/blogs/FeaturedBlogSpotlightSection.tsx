import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import StarIcon from '@mui/icons-material/Star'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import { Button } from '../../../components'
import { featuredBlogPost } from '../../../data/resources/blogs'

const SpotlightContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  padding: theme.spacing(4.5),
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  boxShadow: `0 20px 48px -12px ${alpha(theme.palette.primary.main, 0.15)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  overflow: 'hidden',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 24px 54px -10px ${alpha(theme.palette.primary.main, 0.22)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

export const FeaturedBlogSpotlightSection = () => (
  <Box component="section" aria-labelledby="featured-blog-heading" sx={{ bgcolor: 'background.default', pb: { xs: 6, md: 8 } }}>
    <Container maxWidth="xl">
      <SpotlightContainer>
        <Grid container spacing={{ xs: 3.5, md: 6 }} sx={{ alignItems: 'center' }}>
          {/* Left / Top Details */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2.5}>
              {/* Category & Badge */}
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <Box
                  sx={(theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1.5,
                    py: 0.4,
                    borderRadius: 99,
                    bgcolor: alpha(theme.palette.accent.main, 0.15),
                    color: theme.palette.accent.dark,
                    fontSize: '0.75rem',
                    fontWeight: 800,
                  })}
                >
                  <StarIcon sx={{ fontSize: 14 }} />
                  {featuredBlogPost.highlightBadge}
                </Box>

                <Box
                  sx={(theme) => ({
                    px: 1.25,
                    py: 0.4,
                    borderRadius: 99,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  })}
                >
                  {featuredBlogPost.categoryLabel}
                </Box>

                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', color: 'text.secondary', fontSize: '0.8125rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarTodayIcon sx={{ fontSize: 14 }} />
                    <span>{featuredBlogPost.publishedDate}</span>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon sx={{ fontSize: 14 }} />
                    <span>{featuredBlogPost.readTime}</span>
                  </Box>
                </Stack>
              </Stack>

              {/* Title */}
              <Typography
                id="featured-blog-heading"
                variant="h3"
                sx={(theme) => ({
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.25rem' },
                  lineHeight: 1.25,
                  fontWeight: 800,
                  color: theme.palette.text.primary,
                })}
              >
                {featuredBlogPost.title}
              </Typography>

              {/* Excerpt */}
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  lineHeight: 1.75,
                  fontSize: { xs: '1rem', sm: '1.0625rem' },
                })}
              >
                {featuredBlogPost.excerpt}
              </Typography>

              {/* Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {featuredBlogPost.tags.map((tag, idx) => (
                  <Box
                    key={idx}
                    sx={(theme) => ({
                      px: 1.2,
                      py: 0.4,
                      borderRadius: Number(theme.shape.borderRadius) * 0.1,
                      bgcolor: alpha(theme.palette.text.primary, 0.04),
                      border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                      color: theme.palette.text.secondary,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    })}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>

              {/* Author & CTA Row */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  justifyContent: 'space-between',
                  pt: 1.5,
                  borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.9375rem' }}>
                    {featuredBlogPost.author}
                  </Typography>
                  <Typography variant="caption" sx={(theme) => ({ color: theme.palette.text.secondary, fontSize: '0.78125rem' })}>
                    {featuredBlogPost.authorRole}
                  </Typography>
                </Box>

                <Button
                  tone="primary"
                  variant="contained"
                  size="medium"
                  href={`/resources/blogs/${featuredBlogPost.slug}`}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 3,
                    py: 1.25,
                    fontWeight: 700,
                  }}
                >
                  Read Article
                </Button>

              </Stack>
            </Stack>
          </Grid>

          {/* Right Visual Graphic Banner */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={(theme) => ({
                height: '100%',
                minHeight: { xs: 220, md: 320 },
                borderRadius: Number(theme.shape.borderRadius) * 2,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.12)} 0%, ${alpha(theme.palette.accent.main, 0.16)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                textAlign: 'center',
                position: 'relative',
              })}
            >
              <AutoStoriesOutlinedIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2, opacity: 0.8 }} />
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
                0.36%
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, maxWidth: 280, lineHeight: 1.5 }}>
                India's current formal corporate employment rate for Persons with Disabilities — an urgent talent opportunity.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </SpotlightContainer>
    </Container>
  </Box>
)
