import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import type { BlogPostItem } from '../../../data/resources/blogs'
import { getAdjacentPosts } from '../../../data/resources/blogs'

const ArticleWrapper = styled('article')({
  maxWidth: 860,
  margin: '0 auto',
})

const ArticleBannerWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 12px 32px ${alpha(theme.palette.text.primary, 0.08)}`,
  marginBottom: theme.spacing(5),
  backgroundColor: theme.palette.background.default,
}))

const ArticleBannerImage = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  maxHeight: 460,
  minHeight: 260,
  objectFit: 'cover',
  display: 'block',
}))

const CalloutQuoteBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  padding: theme.spacing(3, 3.5),
  borderRadius: Number(theme.shape.borderRadius) * 0.1,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  position: 'relative',
}))

const NavCard = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.6,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  textDecoration: 'none',
  color: 'inherit',
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

interface BlogDetailsArticleSectionProps {
  post: BlogPostItem
}

export const BlogDetailsArticleSection = ({ post }: BlogDetailsArticleSectionProps) => {
  const { prevPost, nextPost } = getAdjacentPosts(post.slug || post.id)

  return (
    <Box
      component="section"
      aria-labelledby="article-title"
      sx={{ bgcolor: 'background.default', py: { xs: 6, md: 9 } }}
    >
      <Container maxWidth="xl">
        <ArticleWrapper>
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: 'text.secondary' }} />}
            aria-label="Article breadcrumb navigation"
            sx={{ mb: 3 }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={(theme) => ({
                fontSize: '0.875rem',
                fontWeight: 600,
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.main },
              })}
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/resources/blogs"
              sx={(theme) => ({
                fontSize: '0.875rem',
                fontWeight: 600,
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.main },
              })}
            >
              Blog
            </Link>
            <Typography
              sx={(theme) => ({
                fontSize: '0.875rem',
                fontWeight: 700,
                color: theme.palette.text.primary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: 320,
              })}
            >
              {post.title}
            </Typography>
          </Breadcrumbs>

          {/* Article Header */}
          <Stack spacing={2.5} sx={{ mb: 4 }}>
            {/* Category Pill */}
            <Box
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                px: 1.5,
                py: 0.4,
                borderRadius: 99,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                fontSize: '0.78125rem',
                fontWeight: 800,
                letterSpacing: '0.02em',
              })}
            >
              {post.categoryLabel || post.category || 'Article'}
            </Box>

            {/* H1 Article Title */}
            <Typography
              id="article-title"
              variant="h1"
              sx={(theme) => ({
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: { xs: 1.2, sm: 1.15 },
                fontWeight: 800,
                color: theme.palette.text.primary,
                letterSpacing: '-0.02em',
              })}
            >
              {post.title}
            </Typography>

            {/* Metadata Row: Author, Role, Date, Read Time */}
            <Stack
              direction="row"
              spacing={{ xs: 2, sm: 3 }}
              sx={{
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.5,
                color: 'text.secondary',
                fontSize: '0.875rem',
                pt: 0.5,
                pb: 1,
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.875rem', display: 'block' }}>
                    {post.author}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                    {post.authorRole}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
                  {post.publishedDate}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
                  {post.readTime}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* Article Banner Image */}
          <ArticleBannerWrapper>
            <ArticleBannerImage
              src={post.bannerImage}
              alt={post.title}
              loading="eager"
            />
            {post.coverCaption && (
              <Box sx={{ p: 1.5, px: 2.5, bgcolor: 'background.paper', borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, display: 'block', textAlign: 'center' }}>
                  {post.coverCaption}
                </Typography>
              </Box>
            )}
          </ArticleBannerWrapper>

          {/* Main Article Body */}
          <Box sx={{ color: 'text.primary', typography: 'body1' }}>
            {(Array.isArray(post.sections) ? post.sections : []).map((section, sIdx) => {
              const paragraphs = Array.isArray(section.paragraphs)
                ? section.paragraphs
                : typeof (section as any).content === 'string'
                  ? (section as any).content.split('\n\n').map((p: string) => p.trim()).filter(Boolean)
                  : []

              return (
                <Box key={sIdx} sx={{ mb: 4 }}>
                  {section.heading && (
                    <Typography
                      variant="h2"
                      sx={(theme) => ({
                        fontSize: { xs: '1.35rem', sm: '1.65rem' },
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        mt: sIdx === 0 ? 0 : 4,
                        mb: 2,
                        letterSpacing: '-0.01em',
                      })}
                    >
                      {section.heading}
                    </Typography>
                  )}

                  {paragraphs.map((p: string, pIdx: number) => (
                    <Typography
                      key={pIdx}
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1.05rem', sm: '1.125rem' },
                        lineHeight: 1.85,
                        color: 'text.secondary',
                        mb: 2.25,
                        fontWeight: 400,
                      }}
                    >
                      {p}
                    </Typography>
                  ))}

                {section.quoteCallout && (
                  <CalloutQuoteBox>
                    <FormatQuoteIcon
                      sx={(theme) => ({
                        fontSize: 36,
                        color: alpha(theme.palette.primary.main, 0.25),
                        transform: 'rotate(180deg)',
                        mb: 0.5,
                      })}
                    />
                    <Typography
                      variant="body1"
                      sx={(theme) => ({
                        fontSize: { xs: '1.0625rem', sm: '1.15rem' },
                        fontStyle: 'italic',
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        lineHeight: 1.7,
                        mb: section.quoteCallout?.author ? 1.5 : 0,
                      })}
                    >
                      "{section.quoteCallout.text}"
                    </Typography>
                    {section.quoteCallout.author && (
                      <Typography
                        variant="caption"
                        sx={(theme) => ({
                          display: 'block',
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                          fontSize: '0.8125rem',
                          textAlign: 'right',
                        })}
                      >
                        — {section.quoteCallout.author}
                      </Typography>
                    )}
                  </CalloutQuoteBox>
                )}

                {section.takeaways && section.takeaways.length > 0 && (
                  <Box
                    sx={(theme) => ({
                      p: 3,
                      bgcolor: alpha(theme.palette.accent.main, 0.04),
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
                      my: 3,
                    })}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 2, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.8125rem' }}>
                      Key Field Takeaways:
                    </Typography>
                    <Stack spacing={1.5}>
                      {section.takeaways.map((item, tIdx) => {
                        const colonIdx = item.indexOf(':')
                        const leadText = colonIdx > -1 ? item.substring(0, colonIdx + 1) : ''
                        const restText = colonIdx > -1 ? item.substring(colonIdx + 1) : item

                        return (
                          <Stack key={tIdx} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'accent.main', flexShrink: 0, mt: 0.35 }} />
                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.95rem' }}>
                              {leadText && <strong style={{ color: 'inherit' }}>{leadText}</strong>}
                              {restText}
                            </Typography>
                          </Stack>
                        )
                      })}
                    </Stack>
                  </Box>
                )}
              </Box>
            )
          })}
          </Box>

          {/* Article Tags Footer */}
          <Box sx={{ pt: 3, pb: 4, borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 4 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Article Topics & Tags:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {(Array.isArray(post.tags) ? post.tags : []).map((tag, idx) => (
                <Box
                  key={idx}
                  sx={(theme) => ({
                    px: 1.25,
                    py: 0.4,
                    borderRadius: Number(theme.shape.borderRadius) * 0.1,
                    bgcolor: alpha(theme.palette.text.primary, 0.04),
                    border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                    color: theme.palette.text.secondary,
                    fontSize: '0.78125rem',
                    fontWeight: 600,
                  })}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Previous / Next Article Navigation Cards */}
          <Box sx={{ pt: 3, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
            <Grid container spacing={3}>
              {/* Previous Article Card */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {prevPost ? (
                  <NavCard href={`/resources/blogs/${prevPost.slug}`}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'primary.main' }}>
                        <ArrowBackIcon sx={{ fontSize: 16 }} />
                        <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.725rem' }}>
                          Previous Article
                        </Typography>
                      </Stack>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.9375rem', lineHeight: 1.35 }}>
                        {prevPost.title}
                      </Typography>
                    </Stack>
                  </NavCard>
                ) : (
                  <Box />
                )}
              </Grid>

              {/* Next Article Card */}
              <Grid size={{ xs: 12, sm: 6 }}>
                {nextPost ? (
                  <NavCard href={`/resources/blogs/${nextPost.slug}`} sx={{ textAlign: 'right' }}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'flex-end', color: 'primary.main' }}>
                        <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.725rem' }}>
                          Next Article
                        </Typography>
                        <ArrowForwardIcon sx={{ fontSize: 16 }} />
                      </Stack>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.9375rem', lineHeight: 1.35 }}>
                        {nextPost.title}
                      </Typography>
                    </Stack>
                  </NavCard>
                ) : (
                  <Box />
                )}
              </Grid>
            </Grid>
          </Box>
        </ArticleWrapper>
      </Container>
    </Box>
  )
}
