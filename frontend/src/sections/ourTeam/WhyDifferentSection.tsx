import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { whyDifferent } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.08),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

/** "Why Our Team Is Different" — a single pull-quote making the case for the team's combined skillset. */
export const WhyDifferentSection = () => (
  <Root aria-labelledby="why-different-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={2.5} sx={{ maxWidth: 780, mx: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <Typography id="why-different-heading" variant="h2">
          {whyDifferent.heading}
        </Typography>
        <Box
          sx={(theme) => ({
            borderLeft: `4px solid ${theme.palette.accent.main}`,
            borderRadius: `0 ${Number(theme.shape.borderRadius)}px ${Number(theme.shape.borderRadius)}px 0`,
            backgroundColor: theme.palette.background.paper,
            px: 3,
            py: 2.5,
            textAlign: 'left',
          })}
        >
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary', fontWeight: 500, lineHeight: 1.7 }}>
            {whyDifferent.body}
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Root>
)
