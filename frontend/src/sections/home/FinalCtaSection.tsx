import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Button, SectionHeading } from '../../components'
import { finalCta } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.inverse.main,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.18)} 0%, transparent 60%)`,
}))

const ContactLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.inverse.contrastText,
  textDecoration: 'none',
  fontWeight: 600,
  transition: theme.transitions.create('color'),
  '&:hover': { color: theme.palette.accent.light },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.light, 0.7)}`,
    outlineOffset: 3,
    borderRadius: 4,
  },
}))

/** Closing CTA band, on the same fixed dark brand surface as the footer it leads into. */
export const FinalCtaSection = () => (
  <Root aria-labelledby="final-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="final-cta-heading"
          heading={finalCta.heading}
          description={finalCta.body}
          tone="inverse"
          maxWidth={640}
        />

        <Button tone="accent" variant="contained" size="large" href={finalCta.cta.href}>
          {finalCta.cta.label}
        </Button>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 4 }} sx={{ alignItems: 'center' }}>
          <ContactLink href={finalCta.phone.href}>
            <PhoneOutlinedIcon fontSize="small" aria-hidden="true" />
            {finalCta.phone.label}
          </ContactLink>
          <ContactLink href={finalCta.email.href}>
            <EmailOutlinedIcon fontSize="small" aria-hidden="true" />
            {finalCta.email.label}
          </ContactLink>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
