import { useState } from 'react'
import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import LaunchIcon from '@mui/icons-material/Launch'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { Button, SectionHeading } from '../../../components'
import { successStoriesData, successStoriesFilterOptions } from '../../../data/impact/successStories'

const CaseStudyCard = styled(Box)<{ isNamed?: boolean }>(({ theme, isNamed }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: isNamed
    ? `2px solid ${alpha(theme.palette.primary.main, 0.4)}`
    : `1px solid ${theme.palette.divider}`,
  boxShadow: isNamed
    ? `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`
    : `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: isNamed ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.6),
    boxShadow: isNamed
      ? `0 24px 48px ${alpha(theme.palette.primary.main, 0.2)}`
      : `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

const PhaseBlock = ({
  icon,
  title,
  content,
  tone,
}: {
  icon: ReactNode
  title: string
  content: string
  tone: 'warning' | 'primary' | 'accent'
}) => (
  <Box
    sx={(theme) => ({
      p: 2.25,
      borderRadius: Number(theme.shape.borderRadius) * 0.1,
      bgcolor: alpha(theme.palette[tone === 'accent' ? 'accent' : tone].main, 0.04),
      border: `1px solid ${alpha(theme.palette[tone === 'accent' ? 'accent' : tone].main, 0.2)}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 0.75,
    })}
  >
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Box
        sx={(theme) => ({
          color: theme.palette[tone === 'accent' ? 'accent' : tone].main,
          display: 'flex',
          alignItems: 'center',
        })}
      >
        {icon}
      </Box>
      <Typography
        variant="caption"
        sx={(theme) => ({
          fontWeight: 800,
          color: theme.palette[tone === 'accent' ? 'accent' : tone].dark,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          fontSize: '0.75rem',
        })}
      >
        {title}
      </Typography>
    </Stack>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
      {content}
    </Typography>
  </Box>
)

interface SuccessStoriesGridSectionProps {
  stories?: any[]
}

export const SuccessStoriesGridSection = ({ stories: propStories }: SuccessStoriesGridSectionProps = {}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const baseStories = propStories && propStories.length > 0 ? propStories : successStoriesData

  const filteredStories =
    activeCategory === 'all'
      ? baseStories
      : baseStories.filter((story) => story.category === activeCategory)

  return (
    <Box
      component="section"
      id="case-studies-grid"
      aria-labelledby="case-studies-heading"
      sx={(theme) => ({
        bgcolor: alpha(theme.palette.accent.light, 0.04),
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          <SectionHeading
            headingId="case-studies-heading"
            eyebrow="Detailed Project Breakdowns"
            heading="Explore Real Case Studies & Delivered Solutions"
            description="Deep dive into the challenges, engineering approaches, and verified business outcomes across our key service domains."
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
            {successStoriesFilterOptions.map((option) => {
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

          {/* Case Studies 2-Column Grid */}
          <Grid container spacing={4} sx={{ width: '100%' }}>
            {filteredStories.map((story) => (
              <Grid key={story.id} size={{ xs: 12, lg: 6 }}>
                <CaseStudyCard isNamed={story.isNamed}>
                  <Stack spacing={3}>
                    {/* Card Header: Sector & Confidentiality Badges */}
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
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
                        {story.sector}
                      </Box>

                      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                        {story.isNamed ? (
                          <Box
                            sx={(theme) => ({
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1,
                              py: 0.25,
                              borderRadius: 99,
                              bgcolor: alpha(theme.palette.accent.main, 0.15),
                              color: theme.palette.accent.dark,
                              fontSize: '0.725rem',
                              fontWeight: 700,
                            })}
                          >
                            <VerifiedUserIcon sx={{ fontSize: 14 }} />
                            NAMED PRODUCTION BUILD
                          </Box>
                        ) : (
                          <Box
                            sx={(theme) => ({
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              color: theme.palette.text.secondary,
                              fontSize: '0.725rem',
                              fontWeight: 600,
                            })}
                          >
                            <LockOutlinedIcon sx={{ fontSize: 14 }} />
                            Enterprise Client
                          </Box>
                        )}
                      </Stack>
                    </Stack>

                    {/* Title & Client Type */}
                    <Box>
                      <Typography variant="h5" sx={{ fontSize: { xs: '1.25rem', md: '1.35rem' }, fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                        {story.title}
                      </Typography>
                      <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                        Client: {story.clientType}
                      </Typography>
                    </Box>

                    {/* 3-Part Breakdown: Challenge -> Approach -> Outcome */}
                    <Stack spacing={1.75}>
                      <PhaseBlock
                        icon={<FlagOutlinedIcon sx={{ fontSize: 18 }} />}
                        title="The Challenge"
                        content={story.challenge}
                        tone="warning"
                      />

                      <PhaseBlock
                        icon={<ConstructionOutlinedIcon sx={{ fontSize: 18 }} />}
                        title="The Approach"
                        content={story.approach}
                        tone="primary"
                      />
                      <PhaseBlock
                        icon={<CheckCircleOutlinedIcon sx={{ fontSize: 18 }} />}
                        title="The Outcome"
                        content={story.outcome}
                        tone="accent"
                      />
                    </Stack>

                    {/* Metrics Row */}
                    {story.metrics && (
                      <Grid container spacing={1.5} sx={{ pt: 0.5 }}>
                        {story.metrics.map((metric: any, idx: number) => (
                          <Grid key={idx} size={{ xs: 4 }}>
                            <Box
                              sx={(theme) => ({
                                p: 1.25,
                                borderRadius: Number(theme.shape.borderRadius) * 0.1,
                                bgcolor: alpha(theme.palette.background.default, 0.7),
                                border: `1px solid ${theme.palette.divider}`,
                                textAlign: 'center',
                              })}
                            >
                              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.7rem' }}>
                                {metric.label}
                              </Typography>
                              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main', fontSize: '0.875rem' }}>
                                {metric.value}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {/* Tags List */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                      {story.tags && story.tags.map((tag: string, tagIdx: number) => (
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

                    {/* Outbound Link Button if present */}
                    {story.link && (
                      <Box sx={{ pt: 1 }}>
                        <Button
                          tone="primary"
                          variant="contained"
                          href={story.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<LaunchIcon />}
                          fullWidth
                          sx={{ py: 1.25, fontWeight: 700 }}
                        >
                          {story.link.label}
                        </Button>
                      </Box>
                    )}
                  </Stack>
                </CaseStudyCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}
