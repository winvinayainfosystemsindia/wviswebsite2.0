import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionHeading } from '../../components'
import { whoWeTrain } from '../../data'

const Fact = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  padding: theme.spacing(2, 2.5),
  borderRadius: 999,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 14px -4px ${alpha(theme.palette.common.black, 0.06)}`,
}))

/** "Who We Train" — geographic and disability-category reach, framed as quick facts. */
export const WhoWeTrainSection = () => (
  <Box component="section" aria-labelledby="who-we-train-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="who-we-train-heading"
          eyebrow={whoWeTrain.eyebrow}
          heading={whoWeTrain.heading}
          description={whoWeTrain.body}
          maxWidth={760}
        />
        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {whoWeTrain.facts.map((fact) => (
            <Fact key={fact.id}>
              <Typography variant="overline" color="text.secondary">
                {fact.label}
              </Typography>
              <Typography variant="h6" sx={{ color: 'accent.main' }}>
                {fact.value}
              </Typography>
            </Fact>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
)
