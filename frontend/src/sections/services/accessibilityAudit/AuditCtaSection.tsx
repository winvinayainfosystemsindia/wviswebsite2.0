import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../../components'
import { auditCtaData } from '../../../data/services/accessibilityAudit'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
}))

/** Closing CTA band navigating directly to audit request / contact form. */
export const AuditCtaSection = () => (
  <Root aria-labelledby="audit-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="audit-cta-heading"
          heading={auditCtaData.heading}
          description={auditCtaData.body}
          tone="inverse"
          maxWidth={720}
        />

        <Button tone="accent" variant="contained" size="large" href={auditCtaData.cta.href} endIcon={<ArrowForwardIcon />}>
          {auditCtaData.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
