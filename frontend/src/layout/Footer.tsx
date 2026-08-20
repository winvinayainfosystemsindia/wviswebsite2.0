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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button } from '../components'
import { footerLinkGroups, legalLinks, socialLinks, footerTagline } from '../data'
import fullLogo from '../assets/logo/winvinayainfosystems_fulllogo.png'

const SOCIAL_ICONS: Record<string, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
}

const Root = styled('footer')(({ theme }) => ({
  backgroundColor: '#F8FAFC',
  color: theme.palette.text.primary,
  position: 'relative',
  borderTop: `1px solid ${theme.palette.divider}`,
}))

const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 400,
  transition: theme.transitions.create(['color', 'transform']),
  display: 'inline-block',
  '&:hover': {
    color: theme.palette.accent.main,
    transform: 'translateX(2px)',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.accent.main}`,
    outlineOffset: 3,
    borderRadius: 4,
  },
}))

const socialButtonSx = (theme: Theme) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 1px 3px -1px ${alpha(theme.palette.common.black, 0.06)}`,
  transition: theme.transitions.create(['color', 'border-color', 'background-color', 'transform']),
  '&:hover': {
    color: theme.palette.accent.main,
    borderColor: theme.palette.accent.main,
    backgroundColor: alpha(theme.palette.accent.main, 0.08),
    transform: 'translateY(-2px)',
  },
})

/**
 * Enterprise Light Footer: Clean off-white surface (#F8FAFC), top CTA card,
 * crisp typography, and styled social icon buttons.
 */
export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Root>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Top Footer Banner */}
        <Box
          sx={(theme) => ({
            p: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
            borderRadius: Number(theme.shape.borderRadius) * 2,
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
            boxShadow: `0 4px 20px -4px ${alpha(theme.palette.accent.main, 0.08)}`,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
          })}
        >
          <Stack spacing={0.5}>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.15rem' }}>
              Building Accessible & Intelligent Enterprise Solutions
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Partner with WinVinaya to ensure WCAG 2.1/2.2 compliance, AI innovation, and inclusive digital engineering.
            </Typography>
          </Stack>
          <Button tone="accent" variant="contained" href="/contact-us" endIcon={<ArrowForwardIcon />} sx={{ flexShrink: 0 }}>
            Schedule Consultation
          </Button>
        </Box>

        {/* Main Footer Grid */}
        <Grid container spacing={{ xs: 5, lg: 6 }}>
          {/* Brand Info Column */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.5}>
              <Box
                component="img"
                src={fullLogo}
                alt="WinVinaya Infosystems"
                sx={{ height: 48, width: 'auto', alignSelf: 'flex-start' }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 320, fontSize: '0.9rem', lineHeight: 1.6 }}>
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

          {/* Navigation Link Groups */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={{ xs: 4, sm: 3 }}>
              {footerLinkGroups.map((group) => (
                <Grid key={group.id} size={{ xs: 6, sm: 3 }}>
                  <Stack spacing={2} component="nav" aria-label={group.title}>
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'text.primary',
                        fontSize: '0.75rem',
                      }}
                    >
                      {group.title}
                    </Typography>
                    <Stack spacing={1.25}>
                      {group.links.map((link) => (
                        <FooterLink key={link.id} href={link.href}>
                          {link.label}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={(theme) => ({ my: { xs: 4, md: 5 }, borderColor: theme.palette.divider })} />

        {/* Bottom Legal & Copyright Bar */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
            © {year} WinVinaya Infosystems. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            {legalLinks.map((link) => (
              <FooterLink key={link.id} href={link.href} sx={{ fontSize: '0.85rem' }}>
                {link.label}
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Root>
  )
}
