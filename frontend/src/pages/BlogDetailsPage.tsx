import { useParams } from '@tanstack/react-router'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { Button } from '../components'
import {
  BlogDetailsArticleSection,
} from '../sections/resources/blogs'
import { getBlogPostBySlug } from '../data/resources/blogs'

/** Blog Details Page — Full long-form reading experience for individual blog posts. */
export const BlogDetailsPage = () => {
  const params = useParams({ strict: false }) as { slug?: string }
  const slug = params.slug || ''
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <Box sx={{ py: 14, bgcolor: 'background.default', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Stack spacing={3} sx={{ alignItems: 'center' }}>
            <SearchOffIcon sx={{ fontSize: 56, color: 'text.secondary' }} />
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary' }}>
              Article Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              The article you are looking for does not exist or may have been moved.
            </Typography>
            <Button
              tone="primary"
              variant="contained"
              href="/resources/blogs"
              startIcon={<ArrowBackIcon />}
              sx={{ px: 3, py: 1.25, fontWeight: 700 }}
            >
              Back to All Articles
            </Button>
          </Stack>
        </Container>
      </Box>
    )
  }

  return (
    <>
      <BlogDetailsArticleSection post={post} />
    </>
  )
}
