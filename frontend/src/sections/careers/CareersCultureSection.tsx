import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import { careersCultureData } from '../../data/careers/careers'

const CultureCard = styled(Box)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 32px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const CareersCultureSection = () => (
  <Box
    component="section"
    aria-labelledby="careers-culture-heading"
    sx={{
      bgcolor: (theme) => alpha(theme.palette.accent.light, 0.04),
      py: { xs: 8, md: 10 },
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    }}
  >
    <Container maxWidth="xl">
      <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center', mb: 6 }}>
        <Typography
          id="careers-culture-heading"
          variant="h2"
          sx={{
            fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.75rem' },
            fontWeight: 800,
            color: 'text.primary',
          }}
        >
          {careersCultureData.heading}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 720,
            lineHeight: 1.7,
            fontSize: '1.05rem',
          }}
        >
          {careersCultureData.subheading}
        </Typography>
      </Stack>

      <Grid container spacing={3.5}>
        {careersCultureData.pillars.map((pillar, idx) => (
          <Grid key={idx} size={{ xs: 12, md: 4 }}>
            <CultureCard>
              <Box
                sx={(theme) => ({
                  width: 52,
                  height: 52,
                  borderRadius: Number(theme.shape.borderRadius) * 1.4,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                })}
              >
                {idx === 0 && <Diversity3OutlinedIcon sx={{ fontSize: 28 }} />}
                {idx === 1 && <TrendingUpOutlinedIcon sx={{ fontSize: 28 }} />}
                {idx === 2 && <VerifiedOutlinedIcon sx={{ fontSize: 28 }} />}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', mb: 1.5 }}>
                {pillar.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.9375rem' }}>
                {pillar.description}
              </Typography>
            </CultureCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)
