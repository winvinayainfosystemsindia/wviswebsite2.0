import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import HearingDisabledOutlinedIcon from '@mui/icons-material/HearingDisabledOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { SectionHeading } from '../../../components'
import { publicPartnersData } from '../../../data/impact/clientsPartners'

const PARTNER_ICONS: Record<string, ReactNode> = {
  'svp-bengaluru': <VolunteerActivismOutlinedIcon />,
  'vaani-foundation': <HearingDisabledOutlinedIcon />,
  'jpmorgan-chase': <CodeOutlinedIcon />,
  youth4jobs: <WorkOutlineOutlinedIcon />,
  'mitra-jyothi': <VisibilityOutlinedIcon />,
}

const PartnerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const PublicPartnersSection = () => (
  <Box component="section" aria-labelledby="public-partners-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="public-partners-heading"
          eyebrow={publicPartnersData.eyebrow}
          heading={publicPartnersData.heading}
          description={publicPartnersData.description}
          maxWidth={780}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {publicPartnersData.partners.map((partner) => (
            <Grid key={partner.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <PartnerCard>
                <Stack spacing={2}>
                  {/* Top Row: Icon and Badge */}
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 44,
                        height: 44,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {PARTNER_ICONS[partner.id]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        border: `1px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                        color: theme.palette.accent.dark,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        letterSpacing: '0.03em',
                      })}
                    >
                      {partner.badge}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary', mb: 0.25 }}>
                      {partner.name}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {partner.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {partner.description}
                  </Typography>

                  {/* Key Initiative Box */}
                  <Box
                    sx={(theme) => ({
                      p: 1.5,
                      borderRadius: Number(theme.shape.borderRadius) * 0.1,
                      bgcolor: alpha(theme.palette.primary.main, 0.04),
                      border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                    })}
                  >
                    <VerifiedUserIcon sx={{ fontSize: 16, color: 'primary.main', flexShrink: 0, mt: 0.2 }} />
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', display: 'block' }}>
                        Joint Initiative:
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.4 }}>
                        {partner.initiative}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 0.5 }}>
                    {partner.tags.map((tag, tIdx) => (
                      <Box
                        key={tIdx}
                        sx={(theme) => ({
                          px: 1,
                          py: 0.3,
                          borderRadius: Number(theme.shape.borderRadius) * 0.1,
                          bgcolor: alpha(theme.palette.text.primary, 0.04),
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                          color: theme.palette.text.secondary,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                        })}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </PartnerCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
