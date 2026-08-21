import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { findNavItem, resourcesTeaser } from '../../data'

const RESOURCE_ICONS: Record<string, ReactNode> = {
  blogs: <ArticleOutlinedIcon />,
  newsletters: <EmailOutlinedIcon />,
  'ebooks-guides': <MenuBookOutlinedIcon />,
  'webinars-events': <EventOutlinedIcon />,
}

const RESOURCE_DESCRIPTIONS: Record<string, string> = {
  blogs: 'Technical insights, WCAG updates, and inclusive design best practices.',
  newsletters: 'Monthly curations of accessibility standards and industry trends.',
  'ebooks-guides': 'Comprehensive handbooks for developers, designers, and auditors.',
  'webinars-events': 'Live sessions and recordings hosted by digital accessibility leaders.',
}

const resourceLinks = findNavItem('resources')?.children ?? []

const ResourceCard = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  color: theme.palette.text.primary,
  height: '100%',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  '&:hover': {
    borderColor: theme.palette.accent.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.accent.main, 0.15)}`,
    transform: 'translateY(-4px)',
    '& .arrow-icon': {
      transform: 'translateX(4px)',
      color: theme.palette.accent.main,
    },
  },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.7)}`,
    outlineOffset: 3,
  },
}))

export const ResourcesTeaserSection = () => (
  <Box component="section" aria-labelledby="resources-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="resources-heading"
          eyebrow={resourcesTeaser.eyebrow}
          heading={resourcesTeaser.heading}
          description={resourcesTeaser.body}
          maxWidth={640}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {resourceLinks.map((link) => (
            <Grid key={link.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
              <ResourceCard href={link.href} aria-label={link.label}>
                <Stack spacing={2.25} sx={{ height: '100%' }}>
                  <Box
                    sx={(theme) => ({
                      width: 46,
                      height: 46,
                      borderRadius: Number(theme.shape.borderRadius) * 1.3,
                      bgcolor: alpha(theme.palette.accent.main, 0.12),
                      color: theme.palette.accent.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                    })}
                  >
                    {RESOURCE_ICONS[link.id]}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}>
                    {link.label}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {RESOURCE_DESCRIPTIONS[link.id]}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 1, mt: 'auto' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'accent.main', fontSize: '0.85rem' }}>
                      Browse {link.label}
                    </Typography>
                    <ArrowForwardIcon
                      className="arrow-icon"
                      fontSize="small"
                      sx={(theme) => ({
                        transition: theme.transitions.create(['transform', 'color']),
                        color: theme.palette.accent.main,
                        fontSize: '1rem',
                      })}
                    />
                  </Box>
                </Stack>
              </ResourceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button tone="primary" variant="outlined" href={resourcesTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
            {resourcesTeaser.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
