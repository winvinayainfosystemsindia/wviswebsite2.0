import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import type { BlogPostItem } from '../../../data/resources/blogs'

const BlogCard = styled('a')(({ theme }) => ({
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
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
    '& .read-more-arrow': {
      transform: 'translateX(4px)',
    },
    '& .card-tile-image': {
      transform: 'scale(1.05)',
    },
  },
}))

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 220,
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}))

const TileImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  }),
}))

interface BlogsGridSectionProps {
  posts: BlogPostItem[]
}

export const BlogsGridSection = ({ posts }: BlogsGridSectionProps) => (
  <Box
    component="section"
    id="blogs-grid"
    aria-labelledby="blogs-grid-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      py: { xs: 8, md: 10 },
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl">
      <Typography
        id="blogs-grid-heading"
        component="h2"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          p: 0,
          m: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Blog Articles Grid
      </Typography>

      {posts.length === 0 ? (
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
            No Articles Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stay tuned for upcoming articles and thought leadership pieces.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3.5}>
          {posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <BlogCard href={`/resources/blogs/${post.slug}`}>
                {/* Tile Image */}
                <ImageWrapper>
                  <TileImage
                    className="card-tile-image"
                    src={post.tileImage}
                    alt={post.title}
                    loading="lazy"
                  />
                </ImageWrapper>

                {/* Content Box */}
                <Box
                  sx={{
                    p: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack spacing={2}>
                    {/* Top Row: Category and Publish Date */}
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
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
                        {post.categoryLabel || post.category || 'Article'}
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          color: 'text.secondary',
                          fontSize: '0.78125rem',
                        }}
                      >
                        <CalendarTodayIcon sx={{ fontSize: 13 }} />
                        <span>{post.publishedDate}</span>
                      </Box>
                    </Stack>

                    {/* Article Title */}
                    <Typography
                      variant="h6"
                      sx={(theme) => ({
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        lineHeight: 1.35,
                      })}
                    >
                      {post.title}
                    </Typography>

                    {/* Summary / Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.65,
                        fontSize: '0.8875rem',
                      }}
                    >
                      {post.excerpt}
                    </Typography>
                  </Stack>

                  {/* Footer: Author Name, Author Role, and Read Action */}
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
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 700, color: 'text.primary', display: 'block', fontSize: '0.8125rem' }}
                      >
                        {post.author}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.725rem' }}>
                        {post.authorRole}
                      </Typography>
                    </Box>

                    <Box
                      component="span"
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                        '& .read-more-arrow': {
                          transition: theme.transitions.create('transform'),
                          fontSize: 16,
                        },
                      })}
                    >
                      Read
                      <ArrowForwardIcon className="read-more-arrow" />
                    </Box>
                  </Stack>
                </Box>
              </BlogCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  </Box>
)
