import { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import StarIcon from '@mui/icons-material/Star'
import { SectionHeading } from '../../../components'
import { testimonialsData, testimonialFilterOptions } from '../../../data/impact/testimonials'

const TestimonialCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

interface TestimonialsGridSectionProps {
  testimonials?: any[]
}

const getInitials = (name?: string, org?: string): string => {
  const text = name || org || 'WV'
  const parts = text.trim().split(/\s+/)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return text.slice(0, 2).toUpperCase()
}

export const TestimonialsGridSection = ({ testimonials: propTestimonials }: TestimonialsGridSectionProps = {}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const baseTestimonials = propTestimonials && propTestimonials.length > 0 ? propTestimonials : testimonialsData

  const filteredTestimonials =
    activeCategory === 'all'
      ? baseTestimonials
      : baseTestimonials.filter((item) => {
          const cat = (item.serviceCategory || item.category || '').toLowerCase()
          const filter = activeCategory.toLowerCase()
          return cat.includes(filter) || filter.includes(cat) || cat.replace(/[^a-z0-9]/g, '').includes(filter.replace(/[^a-z0-9]/g, ''))
        })

  return (
    <Box
      component="section"
      id="testimonials-grid"
      aria-labelledby="testimonials-grid-heading"
      sx={(theme) => ({
        bgcolor: alpha(theme.palette.accent.light, 0.04),
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          <SectionHeading
            headingId="testimonials-grid-heading"
            eyebrow="Service-Mapped Endorsements"
            heading="Explore Feedback by Service Domain"
            description="Direct reflections from client engagements across regulatory audits, enterprise QA upskilling, Power Platform dashboards, and inclusive education."
            maxWidth={780}
          />

          {/* Interactive Filter Pills */}
          <Stack
            direction="row"
            spacing={1.25}
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.25,
              width: '100%',
              maxWidth: 960,
            }}
          >
            {testimonialFilterOptions.map((option) => {
              const isSelected = activeCategory === option.id
              return (
                <Box
                  key={option.id}
                  component="button"
                  onClick={() => setActiveCategory(option.id)}
                  aria-pressed={isSelected}
                  sx={(theme) => ({
                    px: 2.25,
                    py: 1,
                    borderRadius: 99,
                    border: `1px solid ${isSelected ? theme.palette.primary.main : theme.palette.divider}`,
                    bgcolor: isSelected ? theme.palette.primary.main : theme.palette.background.paper,
                    color: isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary,
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: theme.transitions.create(['background-color', 'color', 'border-color', 'transform']),
                    boxShadow: isSelected ? `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}` : 'none',
                    '&:hover': {
                      bgcolor: isSelected ? theme.palette.primary.dark : alpha(theme.palette.primary.main, 0.08),
                      borderColor: theme.palette.primary.main,
                      transform: 'translateY(-1px)',
                    },
                  })}
                >
                  {option.label}
                </Box>
              )
            })}
          </Stack>

          {/* Testimonials 2-Column Grid */}
          <Grid container spacing={4} sx={{ width: '100%' }}>
            {filteredTestimonials.map((item) => {
              const authorName = item.author || item.name || 'Client Partner'
              const authorRole = item.title || item.role || ''
              const organization = item.organization || ''
              const quoteText = item.quote || item.content || ''
              const categoryLabel = item.serviceLabel || item.category || 'Client Feedback'
              const rating = typeof item.rating === 'number' ? item.rating : 5
              const outcomeBadge = item.outcomeBadge || (item.isFeatured ? 'Featured Partner' : 'Verified Review')
              const avatarInitials = item.avatarInitials || getInitials(authorName, organization)
              const tags = Array.isArray(item.tags) ? item.tags : []

              return (
                <Grid key={item.id} size={{ xs: 12, lg: 6 }}>
                  <TestimonialCard>
                    <Stack spacing={3}>
                      {/* Top Row: Service Category, Rating, and Outcome Badge */}
                      <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}
                      >
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
                          {categoryLabel}
                        </Box>

                        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                          <Rating
                            value={rating}
                            readOnly
                            size="small"
                            emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
                            sx={{ color: 'accent.main', fontSize: '1rem' }}
                          />

                          <Box
                            sx={(theme) => ({
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1.2,
                              py: 0.35,
                              borderRadius: 99,
                              bgcolor: alpha(theme.palette.accent.main, 0.14),
                              color: theme.palette.accent.dark,
                              fontSize: '0.725rem',
                              fontWeight: 700,
                            })}
                          >
                            <VerifiedUserIcon sx={{ fontSize: 14 }} />
                            {outcomeBadge}
                          </Box>
                        </Stack>
                      </Stack>

                      {/* Quote Content with Quote Icon */}
                      <Box sx={{ position: 'relative' }}>
                        <FormatQuoteIcon
                          sx={(theme) => ({
                            fontSize: 40,
                            color: alpha(theme.palette.primary.main, 0.2),
                            transform: 'rotate(180deg)',
                            mb: 1,
                          })}
                        />
                        <Typography
                          variant="body1"
                          sx={(theme) => ({
                            color: theme.palette.text.primary,
                            lineHeight: 1.75,
                            fontSize: { xs: '0.95rem', sm: '1rem' },
                            fontStyle: 'normal',
                            fontWeight: 450,
                          })}
                        >
                          "{quoteText}"
                        </Typography>
                      </Box>

                      {/* Tags List if available */}
                      {tags.length > 0 && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 0.75,
                            pt: 1,
                            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                          }}
                        >
                          {tags.map((tag: string, tagIdx: number) => (
                            <Box
                              key={tagIdx}
                              sx={(theme) => ({
                                px: 1,
                                py: 0.35,
                                borderRadius: Number(theme.shape.borderRadius) * 0.1,
                                bgcolor: alpha(theme.palette.text.primary, 0.04),
                                border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                                color: theme.palette.text.secondary,
                                fontSize: '0.725rem',
                                fontWeight: 600,
                              })}
                            >
                              {tag}
                            </Box>
                          ))}
                        </Box>
                      )}

                      {/* Author Information Footer */}
                      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', pt: 1 }}>
                        {item.avatar ? (
                          <Avatar
                            src={item.avatar}
                            alt={authorName}
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: (theme) => Number(theme.shape.borderRadius) * 1.3,
                              border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                              flexShrink: 0,
                            }}
                          />
                        ) : (
                          <Box
                            sx={(theme) => ({
                              width: 48,
                              height: 48,
                              borderRadius: Number(theme.shape.borderRadius) * 1.3,
                              bgcolor: alpha(theme.palette.primary.main, 0.12),
                              color: theme.palette.primary.main,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 800,
                              fontSize: '1rem',
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                              flexShrink: 0,
                            })}
                          >
                            {avatarInitials}
                          </Box>
                        )}
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.9375rem' }}>
                            {authorName}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={(theme) => ({ color: theme.palette.text.secondary, display: 'block', fontSize: '0.78125rem' })}
                          >
                            {authorRole ? `${authorRole}` : ''}
                            {authorRole && organization ? ' • ' : ''}
                            {organization ? <strong style={{ color: 'inherit' }}>{organization}</strong> : ''}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </TestimonialCard>
                </Grid>
              )
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default TestimonialsGridSection
