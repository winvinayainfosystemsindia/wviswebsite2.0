import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'
import { SectionHeading } from '../../../components'
import { whatWeRemediateData } from '../../../data/services/documentRemediation'

const FORMAT_ICONS: Record<string, ReactNode> = {
  pdf: <PictureAsPdfOutlinedIcon />,
  word: <DescriptionOutlinedIcon />,
  powerpoint: <SlideshowOutlinedIcon />,
  epub: <MenuBookOutlinedIcon />,
  web: <LanguageOutlinedIcon />,
  legacy: <DocumentScannerOutlinedIcon />,
}

const FormatCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

export const WhatWeRemediateSection = () => (
  <Box component="section" aria-labelledby="what-we-remediate-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="what-we-remediate-heading"
          eyebrow={whatWeRemediateData.eyebrow}
          heading={whatWeRemediateData.heading}
          description={whatWeRemediateData.description}
          maxWidth={720}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {whatWeRemediateData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormatCard>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 46,
                        height: 46,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {FORMAT_ICONS[item.id]}
                    </Box>

                    {item.badge && (
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
                        {item.badge}
                      </Box>
                    )}
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {item.description}
                  </Typography>
                </Stack>
              </FormatCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
