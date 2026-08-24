import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { SectionHeading } from '../../../components'
import { accessibleByDesignData } from '../../../data/services/powerPlatform'

const PILLAR_ICONS: Record<string, ReactNode> = {
  'screen-reader': <RecordVoiceOverOutlinedIcon />,
  'color-independence': <ColorLensOutlinedIcon />,
  'reading-order': <FormatListNumberedOutlinedIcon />,
}

const PillarCard = styled(Box)(({ theme }) => ({
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
    borderColor: theme.palette.accent.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.accent.main, 0.14)}`,
  },
}))

export const AccessibleByDesignSection = () => (
  <Box component="section" aria-labelledby="accessible-by-design-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="accessible-by-design-heading"
          eyebrow={accessibleByDesignData.eyebrow}
          heading={accessibleByDesignData.heading}
          description={accessibleByDesignData.description}
          maxWidth={780}
        />

        {/* Feature Quote Card */}
        <Box
          sx={(theme) => ({
            maxWidth: 960,
            width: '100%',
            p: { xs: 3, sm: 3.5 },
            borderRadius: Number(theme.shape.borderRadius) * 1.6,
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
          })}
        >
          <FormatQuoteIcon sx={{ fontSize: 32, color: 'primary.main', transform: 'rotate(180deg)', flexShrink: 0 }} />
          <Typography variant="body1" sx={(theme) => ({ color: theme.palette.text.primary, fontWeight: 500, lineHeight: 1.7, fontSize: '1.05rem' })}>
            {accessibleByDesignData.quote}
          </Typography>
        </Box>

        {/* 3 Pillars Grid */}
        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {accessibleByDesignData.pillars.map((pillar) => (
            <Grid key={pillar.id} size={{ xs: 12, md: 4 }}>
              <PillarCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
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
                    {PILLAR_ICONS[pillar.id]}
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
                    {pillar.badge}
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary' }}>
                  {pillar.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                  {pillar.description}
                </Typography>
              </PillarCard>
            </Grid>
          ))}
        </Grid>

        {/* Difference That Matters Note */}
        <Box
          sx={(theme) => ({
            maxWidth: 960,
            width: '100%',
            p: 3,
            borderRadius: Number(theme.shape.borderRadius) * 1.4,
            bgcolor: alpha(theme.palette.accent.main, 0.05),
            border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          })}
        >
          <VerifiedUserIcon sx={{ fontSize: 24, color: 'accent.main', flexShrink: 0 }} />
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.925rem' }}>
            {accessibleByDesignData.note}
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
)
