import { alpha, styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import { footerLinkGroups, legalLinks, socialLinks, footerTagline } from '../data'
import fullLogo from '../assets/logo/winvinayainfosystems_fulllogo.png'

const SOCIAL_ICONS: Record<string, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
}

const Root = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
}))

const FooterLink = styled('a')(({ theme }) => ({
  color: alpha(theme.palette.inverse.contrastText, 0.75),
  textDecoration: 'none',
  fontSize: theme.typography.pxToRem(15),
  transition: theme.transitions.create('color'),
  '&:hover': { color: theme.palette.accent.light },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.light, 0.7)}`,
    outlineOffset: 3,
    borderRadius: 4,
  },
}))

const socialButtonSx = (theme: Theme) => ({
  color: alpha(theme.palette.inverse.contrastText, 0.75),
  border: `1px solid ${alpha(theme.palette.inverse.contrastText, 0.25)}`,
  '&:hover': {
    color: theme.palette.accent.light,
    borderColor: theme.palette.accent.light,
    backgroundColor: alpha(theme.palette.accent.light, 0.08),
  },
})

/**
 * Corporate footer: brand column with the full logo, tagline and social
 * links, plus link groups sourced from `data/layout/footer.ts`. Deliberately kept
 * on a fixed dark surface regardless of the active light/dark theme mode,
 * a common corporate treatment for brand consistency at the page edge.
 */
export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Root>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2.5}>
              <Box
                component="img"
                src={fullLogo}
                alt="WinVinaya Infosystems"
                sx={{ height: 40, width: 'auto' }}
              />
              <Typography
                variant="body2"
                sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.75), maxWidth: 280 })}
              >
                {footerTagline}
              </Typography>
              <Stack direction="row" spacing={1.5} aria-label="Social media">
                {socialLinks.map((social) => {
                  const Icon = SOCIAL_ICONS[social.id]
                  return (
                    <IconButton
                      key={social.id}
                      component="a"
                      href={social.href}
                      aria-label={social.label}
                      size="small"
                      sx={socialButtonSx}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  )
                })}
              </Stack>
            </Stack>
          </Grid>

          {footerLinkGroups.map((group) => (
            <Grid key={group.id} size={{ xs: 6, md: 2 }}>
              <Stack spacing={1.75} component="nav" aria-label={group.title}>
                <Typography variant="overline" color="inverse.contrastText">
                  {group.title}
                </Typography>
                {group.links.map((link) => (
                  <FooterLink key={link.id} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider
          sx={(theme) => ({ my: { xs: 5, md: 6 }, borderColor: alpha(theme.palette.inverse.contrastText, 0.15) })}
        />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.6) })}>
            © {year} WinVinaya Infosystems. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {legalLinks.map((link) => (
              <FooterLink key={link.id} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Root>
  )
}
