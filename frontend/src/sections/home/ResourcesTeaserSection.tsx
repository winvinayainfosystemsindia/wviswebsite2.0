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
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  color: 'inherit',
  height: '100%',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 4px 14px -2px ${alpha(theme.palette.common.black, 0.05)}`,
  '&:hover': {
    borderColor: theme.palette.accent.main,
    boxShadow: `0 12px 28px -6px ${alpha(theme.palette.accent.main, 0.15)}`,
    transform: 'translateY(-3px)',
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
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading
          headingId="resources-heading"
          eyebrow={resourcesTeaser.eyebrow}
          heading={resourcesTeaser.heading}
          description={resourcesTeaser.body}
          maxWidth={620}
        />

        <Grid container spacing={3}>
          {resourceLinks.map((link) => (
            <Grid key={link.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
              <ResourceCard href={link.href} aria-label={link.label}>
                <Stack spacing={2} sx={{ height: '100%' }}>
                  <Box
                    sx={(theme) => ({
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.accent.main, 0.1),
                      color: theme.palette.accent.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    {RESOURCE_ICONS[link.id]}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
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
