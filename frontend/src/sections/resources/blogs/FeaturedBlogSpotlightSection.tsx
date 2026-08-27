import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import StarIcon from '@mui/icons-material/Star'
import { Button } from '../../../components'
import { featuredBlogPost } from '../../../data/resources/blogs'

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

interface FeaturedBlogSpotlightSectionProps {
  post?: any
}

export const FeaturedBlogSpotlightSection = ({ post: propPost }: FeaturedBlogSpotlightSectionProps = {}) => {
  const post = propPost || featuredBlogPost

  return (
    <Box component="section" aria-labelledby="featured-blog-heading" sx={{ bgcolor: 'background.default', pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <SpotlightContainer>
          <Grid container spacing={{ xs: 3.5, md: 6 }} sx={{ alignItems: 'center' }}>
            {/* Left Visual Tile Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ImageWrapper>
                <FeaturedImage
                  src={post.tileImage}
                  alt={post.title}
                  loading="lazy"
                />
              </ImageWrapper>
            </Grid>

            {/* Right Details */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.5}>
                {/* Category & Badge & Date */}
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
                    {post.highlightBadge || 'Featured'}
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
                    {post.categoryLabel || post.category || 'Featured Article'}
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: '0.8125rem' }}>
                    <CalendarTodayIcon sx={{ fontSize: 14 }} />
                    <span>{post.publishedDate}</span>
                  </Box>
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
                  {post.title}
                </Typography>

                {/* Summary / Excerpt */}
                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                    lineHeight: 1.75,
                    fontSize: { xs: '1rem', sm: '1.0625rem' },
                  })}
                >
                  {post.excerpt}
                </Typography>

                {/* Author & CTA Row */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    justifyContent: 'space-between',
                    pt: 2,
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.9375rem' }}>
                      {post.author}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.text.secondary, fontSize: '0.78125rem' })}>
                      {post.authorRole}
                    </Typography>
                  </Box>

                  <Button
                    tone="primary"
                    variant="contained"
                    size="medium"
                    href={`/resources/blogs/${post.slug}`}
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
          </Grid>
        </SpotlightContainer>
      </Container>
    </Box>
  )
}
