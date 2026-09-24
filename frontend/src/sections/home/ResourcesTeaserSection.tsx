import { useState, useEffect } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import { SectionHeading } from '../../components'
import { blogService } from '../../services'
import { featuredBlogPost } from '../../data/resources/blogs'
import { latestNewsletter } from '../../data/resources/newsletters'
import { featuredEbook } from '../../data/resources/ebooks'

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'light' ? '#FCFAF6' : '#14100D',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '10%',
    width: '450px',
    height: '450px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.04)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const CardImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 10',
  overflow: 'hidden',
  borderRadius: 16,
  backgroundColor: '#E5E7EB',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
})

const ResourceTileCard = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(2.5),
  borderRadius: 20,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.04)}`,
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 14px 32px -6px ${alpha(theme.palette.primary.main, 0.14)}`,
    transform: 'translateY(-4px)',
    '& img': {
      transform: 'scale(1.05)',
    },
    '& .arrow-icon': {
      transform: 'translateX(4px)',
      color: theme.palette.primary.main,
    },
    '& .card-title': {
      color: theme.palette.primary.main,
    },
  },
  '&:focus-visible': {
    outline: `3px solid ${theme.palette.primary.main}`,
    outlineOffset: 3,
  },
}))

export const ResourcesTeaserSection = () => {
  const [latestBlog, setLatestBlog] = useState({
    title: featuredBlogPost.title,
    slug: featuredBlogPost.slug,
    excerpt: featuredBlogPost.excerpt,
    publishedDate: featuredBlogPost.publishedDate,
    readTime: featuredBlogPost.readTime,
    tileImage: featuredBlogPost.tileImage,
  })

  // Try fetching the latest blog from API
  useEffect(() => {
    let mounted = true
    const fetchLatest = async () => {
      try {
        const res = await blogService.getPublicBlogs({ limit: 1 })
        if (mounted && res?.data && res.data.length > 0) {
          const item = res.data[0]
          setLatestBlog({
            title: item.title,
            slug: item.slug,
            excerpt: item.excerpt || '',
            publishedDate: item.publishedDate || featuredBlogPost.publishedDate,
            readTime: item.readTime || featuredBlogPost.readTime,
            tileImage: item.tileImage || featuredBlogPost.tileImage,
          })
        }
      } catch {
        // Use static fallback
      }
    }
    fetchLatest()
    return () => {
      mounted = false
    }
  }, [])

  const resourceCards = [
    {
      id: 'blog',
      type: 'Blog Article',
      icon: <ArticleOutlinedIcon sx={{ fontSize: '0.875rem' }} />,
      tagColor: 'primary',
      title: latestBlog.title,
      excerpt: latestBlog.excerpt,
      href: `/resources/blogs/${latestBlog.slug}`,
      image: latestBlog.tileImage,
      date: latestBlog.publishedDate,
      meta: latestBlog.readTime,
      ctaLabel: 'Read Blog Post',
    },
    {
      id: 'newsletter',
      type: 'Monthly Newsletter',
      icon: <EmailOutlinedIcon sx={{ fontSize: '0.875rem' }} />,
      tagColor: 'accent',
      title: latestNewsletter.title,
      excerpt: latestNewsletter.excerpt,
      href: `/resources/newsletters`,
      image: latestNewsletter.coverImage,
      date: latestNewsletter.publishedDate,
      meta: 'Monthly Publication',
      ctaLabel: 'Read Newsletter',
    },
    {
      id: 'ebook',
      type: 'eBook & Playbook',
      icon: <MenuBookOutlinedIcon sx={{ fontSize: '0.875rem' }} />,
      tagColor: 'secondary',
      title: featuredEbook.title,
      excerpt: featuredEbook.description,
      href: `/resources/ebooks-guides`,
      image: featuredEbook.tileImage,
      date: 'Latest Release',
      meta: 'Free Playbook',
      ctaLabel: 'Download eBook',
    },
  ]

  return (
    <SectionWrapper aria-labelledby="resources-heading">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'center' }}>
          {/* Section Heading */}
          <SectionHeading
            headingId="resources-heading"
            eyebrow="Knowledge & Publications"
            heading="Explore Our Latest Blog, Newsletter & eBooks"
            description="Stay updated with our latest industry blog posts, monthly newsletters, and comprehensive disability inclusion playbooks."
            maxWidth={800}
          />

          {/* 3-Card Grid: Blog, Newsletter, eBook */}
          <Grid container spacing={3.5} sx={{ width: '100%', alignItems: 'stretch' }}>
            {resourceCards.map((card) => (
              <Grid key={card.id} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
                <ResourceTileCard href={card.href} aria-label={`${card.type}: ${card.title}`}>
                  <Stack spacing={2.25}>
                    {/* Tile Image with Distinct Type Badge */}
                    <CardImageContainer>
                      <img src={card.image} alt={`Cover for ${card.title}`} loading="lazy" />
                      <Box
                        sx={(theme) => ({
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.6,
                          px: 1.25,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          bgcolor: alpha(theme.palette.background.paper, 0.95),
                          color:
                            card.tagColor === 'primary'
                              ? theme.palette.primary.main
                              : card.tagColor === 'accent'
                                ? theme.palette.accent.main
                                : theme.palette.secondary.main,
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        })}
                      >
                        {card.icon}
                        <span>{card.type}</span>
                      </Box>
                    </CardImageContainer>

                    {/* Date & Meta Info */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'text.secondary',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                        <CalendarTodayOutlinedIcon sx={{ fontSize: '0.8125rem' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                          {card.date}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                        <AccessTimeRoundedIcon sx={{ fontSize: '0.8125rem' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                          {card.meta}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Card Title */}
                    <Typography
                      className="card-title"
                      variant="h6"
                      sx={(theme) => ({
                        fontWeight: 700,
                        fontSize: '1.0625rem',
                        lineHeight: 1.4,
                        color: 'text.primary',
                        transition: theme.transitions.create(['color']),
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      })}
                    >
                      {card.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {card.excerpt}
                    </Typography>
                  </Stack>

                  {/* Card Action Link */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pt: 2,
                      mt: 2,
                      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: 'primary.main', fontSize: '0.875rem' }}
                    >
                      {card.ctaLabel}
                    </Typography>
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={(theme) => ({
                        fontSize: '1rem',
                        color: theme.palette.primary.main,
                        transition: theme.transitions.create(['transform', 'color']),
                      })}
                    />
                  </Box>
                </ResourceTileCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}
