import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined'
import { SectionHeading } from '../../../components'
import { standardsMatrixData } from '../../../data/impact/approvalsCertifications'

const StandardCard = styled(Box)(({ theme }) => ({
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
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const StandardsMatrixSection = () => (
  <Box
    component="section"
    id="standards-matrix"
    aria-labelledby="standards-matrix-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="standards-matrix-heading"
          eyebrow={standardsMatrixData.eyebrow}
          heading={standardsMatrixData.heading}
          description={standardsMatrixData.description}
          maxWidth={800}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {standardsMatrixData.standards.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <StandardCard>
                <Stack spacing={1.5}>
                  {/* Top Row: Region & Scope Tag */}
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        px: 1.2,
                        py: 0.35,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                      })}
                    >
                      {item.region}
                    </Box>
                    <PublicOutlinedIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                  </Stack>

                  <Box sx={{ pt: 0.5 }}>
                    <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'text.primary', mb: 0.25 }}>
                      {item.code}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.accent.dark, fontWeight: 700, fontSize: '0.78125rem' })}>
                      {item.name}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
                    {item.description}
                  </Typography>
                </Stack>

                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    pt: 1.5,
                    mt: 1.5,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  })}
                >
                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main', flexShrink: 0 }} />
                  <Typography variant="caption" sx={(theme) => ({ color: theme.palette.text.secondary, fontWeight: 600, fontSize: '0.75rem' })}>
                    {item.tag}
                  </Typography>
                </Box>
              </StandardCard>
            </Grid>
          ))}
        </Grid>

        {/* Standards Conformance Callout */}
        <Box
          sx={(theme) => ({
            maxWidth: 960,
            width: '100%',
            p: { xs: 3, sm: 3.5 },
            borderRadius: Number(theme.shape.borderRadius) * 0.1,
            bgcolor: alpha(theme.palette.accent.main, 0.05),
            border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,
          })}
        >
          <Box
            sx={(theme) => ({
              p: 1.5,
              borderRadius: Number(theme.shape.borderRadius) * 0.1,
              bgcolor: alpha(theme.palette.accent.main, 0.14),
              color: theme.palette.accent.dark,
              display: 'flex',
              flexShrink: 0,
            })}
          >
            <PolicyOutlinedIcon sx={{ fontSize: 28 }} />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.925rem' }}>
            <strong style={{ color: 'inherit' }}>Recognized Industry Rigor: </strong>
            Every digital audit report, document remediation pack, and custom software delivery is mapped to these named specifications — ensuring your organization meets mandatory statutory, procurement, and regulatory requirements.
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
)
