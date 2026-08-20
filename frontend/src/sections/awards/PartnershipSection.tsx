import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import { Card, SectionHeading } from '../../components'
import { partnerships } from '../../data'

const PARTNERSHIP_ICONS: Record<string, ReactNode> = {
  'jpmorgan-chase': <HandshakeOutlinedIcon />,
  'svp-bengaluru': <GroupsOutlinedIcon />,
  'nit-trichy': <SchoolOutlinedIcon />,
}

/** "Recognized Through Partnership" — the organizations that have vouched for the work by working alongside it. */
export const PartnershipSection = () => (
  <Box component="section" aria-labelledby="partnership-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 7 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="partnership-heading"
          eyebrow={partnerships.eyebrow}
          heading={partnerships.heading}
          description={partnerships.body}
          maxWidth={680}
        />
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {partnerships.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <Card fullHeight icon={PARTNERSHIP_ICONS[item.id]} iconTone="accent" title={item.org} subtitle={item.description} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
