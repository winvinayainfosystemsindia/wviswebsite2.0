import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import { Chip, IconBadge, SectionHeading } from '../../components'
import { programs } from '../../data'
import type { ProgramItem } from '../../data'

const PROGRAM_ICONS: Record<string, ReactNode> = {
  'it-full-stack': <LaptopMacOutlinedIcon />,
  'banking-bpa': <AccountBalanceOutlinedIcon />,
}

const ProgramSurface = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0 1px 3px ${alpha(theme.palette.common.black, 0.06)}`,
  transition: theme.transitions.create(['box-shadow', 'transform', 'border-color']),
  '&:hover': {
    boxShadow: `0 20px 40px -20px ${alpha(theme.palette.primary.main, 0.35)}`,
    borderColor: alpha(theme.palette.accent.main, 0.4),
    transform: 'translateY(-3px)',
  },
}))

/**
 * Program card: icon + title top-aligned, topic chips bottom-anchored via
 * `mt: auto`. Titles of very different lengths (one line vs two) no longer
 * throw the card off balance — the chip row always sits flush with the
 * card's bottom edge, so a row of these always reads as symmetrical.
 */
const ProgramCard = ({ item }: { item: ProgramItem }) => (
  <ProgramSurface spacing={2.5}>
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <IconBadge icon={PROGRAM_ICONS[item.id]} tone="accent" size="md" />
      <Typography variant="h5" sx={{ lineHeight: 1.3 }}>
        {item.title}
      </Typography>
    </Stack>
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 'auto', pt: 1 }}>
      {item.topics.map((topic) => (
        <Chip key={topic} label={topic} tone="accent" variant="outlined" size="small" />
      ))}
    </Stack>
  </ProgramSurface>
)

/** "What We Teach" — the two flagship programs, plus the platform they're delivered through. */
export const ProgramsSection = () => (
  <Box component="section" aria-labelledby="programs-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5} sx={{ alignItems: 'center' }}>
        <SectionHeading headingId="programs-heading" eyebrow={programs.eyebrow} heading={programs.heading} maxWidth={640} />
        <Grid container spacing={2} sx={{ width: '100%', alignItems: 'stretch' }}>
          {programs.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
              <ProgramCard item={item} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 780, textAlign: 'center', lineHeight: 1.75 }}>
          {programs.platformNote}
        </Typography>
      </Stack>
    </Container>
  </Box>
)
