import type { ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Chip, SectionHeading } from '../../components'
import { findNavItem, resourcesTeaser } from '../../data'

const RESOURCE_ICONS: Record<string, ReactNode> = {
  blogs: <ArticleOutlinedIcon />,
  newsletters: <EmailOutlinedIcon />,
  'ebooks-guides': <MenuBookOutlinedIcon />,
  'webinars-events': <EventOutlinedIcon />,
}

const resourceLinks = findNavItem('resources')?.children ?? []

/**
 * "Resources" teaser: heading + body, then the resource categories as
 * linked pill chips (reusing the shared nav data so this list can't drift
 * from the Resources dropdown).
 */
export const ResourcesTeaserSection = () => (
  <Box component="section" aria-labelledby="resources-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="resources-heading"
          eyebrow={resourcesTeaser.eyebrow}
          heading={resourcesTeaser.heading}
          description={resourcesTeaser.body}
          maxWidth={600}
        />

        <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
          {resourceLinks.map((link) => (
            <Chip
              key={link.id}
              component="a"
              href={link.href}
              clickable
              tone="accent"
              variant="outlined"
              icon={RESOURCE_ICONS[link.id] as ReactElement}
              label={link.label}
            />
          ))}
        </Stack>

        <Button tone="primary" variant="outlined" href={resourcesTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
          {resourcesTeaser.cta.label}
        </Button>
      </Stack>
    </Container>
  </Box>
)
