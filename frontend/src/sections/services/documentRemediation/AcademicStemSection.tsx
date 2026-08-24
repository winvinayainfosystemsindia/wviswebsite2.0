import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FunctionsIcon from '@mui/icons-material/Functions'
import SchoolIcon from '@mui/icons-material/School'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { SectionHeading } from '../../../components'
import { academicStemData } from '../../../data/services/documentRemediation'

const STEM_ICONS: Record<string, ReactNode> = {
  'stem-textbooks': <FunctionsIcon />,
  'university-materials': <SchoolIcon />,
  'academic-research': <MenuBookIcon />,
}

const SpecializationCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: alpha(theme.palette.accent.main, 0.5),
    boxShadow: `0 14px 30px ${alpha(theme.palette.accent.main, 0.14)}`,
  },
}))

const HighlightBanner = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(3.5, 4),
  backgroundColor: alpha(theme.palette.accent.main, 0.06),
  border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
}))

export const AcademicStemSection = () => (
  <Box
    component="section"
    aria-labelledby="academic-stem-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="academic-stem-heading"
          eyebrow={academicStemData.eyebrow}
          heading={academicStemData.heading}
          description={academicStemData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {academicStemData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }}>
              <SpecializationCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box
                    sx={(theme) => ({
                      width: 48,
                      height: 48,
                      borderRadius: Number(theme.shape.borderRadius) * 1.3,
                      bgcolor: alpha(theme.palette.accent.main, 0.12),
                      color: theme.palette.accent.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                    })}
                  >
                    {STEM_ICONS[item.id]}
                  </Box>

                  <Box
                    sx={(theme) => ({
                      px: 1.25,
                      py: 0.4,
                      borderRadius: 99,
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      color: theme.palette.primary.dark,
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      letterSpacing: '0.03em',
                    })}
                  >
                    {item.badge}
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 700, color: 'text.primary' }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                  {item.description}
                </Typography>
              </SpecializationCard>
            </Grid>
          ))}
        </Grid>

        {/* Specialized Feature Callout Banner */}
        <HighlightBanner sx={{ maxWidth: 960, width: '100%' }}>
          <Box
            sx={(theme) => ({
              p: 1.5,
              borderRadius: Number(theme.shape.borderRadius) * 1.3,
              bgcolor: alpha(theme.palette.accent.main, 0.15),
              color: theme.palette.accent.main,
              display: 'flex',
              flexShrink: 0,
            })}
          >
            <AutoStoriesIcon sx={{ fontSize: 28 }} />
          </Box>
          <Stack spacing={0.75}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <VerifiedUserIcon sx={{ fontSize: 18, color: 'accent.main' }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                Accurate Tables, Mathematical Formulas & Footnotes
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9375rem' }}>
              {academicStemData.highlightBox}
            </Typography>
          </Stack>
        </HighlightBanner>
      </Stack>
    </Container>
  </Box>
)
