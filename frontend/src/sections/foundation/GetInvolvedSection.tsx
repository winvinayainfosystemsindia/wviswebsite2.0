import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Button, SectionHeading } from '../../components'
import { getInvolved } from '../../data'
import type { GetInvolvedCta } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.inverse.main,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.22)} 0%, transparent 60%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 60%)`,
}))

const CTA_ICON: Record<string, typeof OpenInNewOutlinedIcon> = {
  hire: WorkOutlineOutlinedIcon,
  donate: FavoriteOutlinedIcon,
}

const CtaButton = ({ cta, index }: { cta: GetInvolvedCta; index: number }) => {
  const Icon = CTA_ICON[cta.id] ?? OpenInNewOutlinedIcon
  const externalProps = cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Button
      tone={index === 0 ? 'primary' : 'accent'}
      variant={index === 1 ? 'outlined' : 'contained'}
      size="large"
      href={cta.href}
      endIcon={<Icon />}
      aria-label={cta.external ? `${cta.label} (opens in a new tab)` : undefined}
      sx={
        index === 1
          ? (theme) => ({
              color: theme.palette.inverse.contrastText,
              borderColor: alpha(theme.palette.inverse.contrastText, 0.4),
            })
          : undefined
      }
      {...externalProps}
    >
      {cta.label}
    </Button>
  )
}

/** Closing CTA band — the three ways to engage, on the fixed dark brand surface. */
export const GetInvolvedSection = () => (
  <Root aria-labelledby="get-involved-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="get-involved-heading"
          heading={getInvolved.heading}
          description={getInvolved.body}
          tone="inverse"
          maxWidth={620}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {getInvolved.ctas.map((cta, index) => (
            <CtaButton key={cta.id} cta={cta} index={index} />
          ))}
        </Stack>
      </Stack>
    </Container>
  </Root>
)
