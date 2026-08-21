import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import GroupsIcon from '@mui/icons-material/Groups'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { SectionHeading } from '../../../components'
import { iaapTeamData } from '../../../data/services/accessibilityAudit'

const ComparisonCard = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(4, 4.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 16px 40px ${alpha(theme.palette.text.primary, 0.06)}`,
}))

export const IaapTeamSection = () => (
  <Box component="section" aria-labelledby="iaap-team-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="iaap-team-heading"
          eyebrow={iaapTeamData.eyebrow}
          heading={iaapTeamData.heading}
          description={iaapTeamData.description}
          maxWidth={760}
        />

        <ComparisonCard sx={{ maxWidth: 880, width: '100%' }}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: { sm: 'center' } }}>
              <Box
                sx={(theme) => ({
                  p: 2,
                  borderRadius: Number(theme.shape.borderRadius) * 1.5,
                  bgcolor: alpha(theme.palette.accent.main, 0.12),
                  color: theme.palette.accent.main,
                  display: 'flex',
                  alignSelf: 'flex-start',
                  border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                })}
              >
                <GroupsIcon sx={{ fontSize: 36 }} />
              </Box>
              <Stack spacing={0.75}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <VerifiedUserIcon sx={{ fontSize: 20, color: 'accent.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>
                    Authentic Human + Lived Experience Audit Model
                  </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1.025rem' }}>
                  {iaapTeamData.highlight}
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={(theme) => ({
                pt: 2.5,
                borderTop: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              })}
            >
              <AutoFixHighIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
              <Typography variant="caption" sx={(theme) => ({ color: theme.palette.text.secondary, fontWeight: 500, lineHeight: 1.5 })}>
                Automated tools miss keyboard focus traps, logical reading order, complex ARIA dialog flow, and native screen reader pronunciation nuances.
              </Typography>
            </Box>
          </Stack>
        </ComparisonCard>
      </Stack>
    </Container>
  </Box>
)
