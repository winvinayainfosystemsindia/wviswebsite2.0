import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { Button } from '../../../components'
import type { BlogPostItem } from '../../../data/resources/blogs'

const BlogCard = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  textDecoration: 'none',
  color: 'inherit',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
    '& .read-more-arrow': {
      transform: 'translateX(4px)',
    },
  },
}))


interface BlogsGridSectionProps {
  posts: BlogPostItem[]
  onResetFilters: () => void
}

export const BlogsGridSection = ({ posts, onResetFilters }: BlogsGridSectionProps) => (
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
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            We couldn't find any articles matching your search query. Try searching with different keywords or reset your filters.
          </Typography>
          <Button tone="primary" variant="outlined" onClick={onResetFilters}>
            Reset Filters
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3.5}>
          {posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <BlogCard href={`/resources/blogs/${post.slug}`}>
                <Stack spacing={2.5}>

                  {/* Top Row: Category & Read Time */}
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.35,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                      })}
                    >
                      {post.categoryLabel}
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary', fontSize: '0.75rem' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.35 }}>
                        <CalendarTodayIcon sx={{ fontSize: 13 }} />
                        <span>{post.publishedDate}</span>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.35 }}>
                        <AccessTimeIcon sx={{ fontSize: 13 }} />
                        <span>{post.readTime}</span>
                      </Box>
                    </Stack>
                  </Stack>

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
                    {post.title}
                  </Typography>

                  {/* Excerpt */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {post.excerpt}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.65 }}>
                    {post.tags.slice(0, 3).map((tag, tIdx) => (
                      <Box
                        key={tIdx}
                        sx={(theme) => ({
                          px: 1,
                          py: 0.3,
                          borderRadius: Number(theme.shape.borderRadius) * 0.1,
                          bgcolor: alpha(theme.palette.text.primary, 0.04),
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                          color: theme.palette.text.secondary,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                        })}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Stack>

                {/* Footer Author & Read Action */}
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pt: 2,
                    mt: 2,
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', fontSize: '0.8125rem' }}>
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
              </BlogCard>
            </Grid>

          ))}
        </Grid>
      )}
    </Container>
  </Box>
)
