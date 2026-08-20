import { Fragment, useState } from 'react'
import type { MouseEvent } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button } from '../components'
import { primaryNavItems, contactNavItem } from '../data'
import type { NavItem } from '../data'
import { useIsScrolled } from '../hooks'
import fullLogo from '../assets/logo/winvinayainfosystems_fulllogo.png'

const HeaderRoot = styled('header', {
  shouldForwardProp: (prop) => prop !== 'elevated',
})<{ elevated: boolean }>(({ theme, elevated }) => ({
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
  backgroundColor: alpha(theme.palette.background.paper, 0.92),
  backdropFilter: 'blur(8px)',
  borderBottom: `1px solid ${elevated ? theme.palette.divider : 'transparent'}`,
  boxShadow: elevated ? `0 8px 24px -16px ${alpha(theme.palette.common.black, 0.35)}` : 'none',
  transition: theme.transitions.create(['box-shadow', 'border-color']),
}))

const Bar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 76,
  [theme.breakpoints.down('md')]: {
    height: 64,
  },
}))

const LogoLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
})

const NavLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(15),
  padding: theme.spacing(1, 0.5),
  transition: theme.transitions.create('color'),
  '&:hover': { color: theme.palette.accent.main },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 4,
    borderRadius: 4,
  },
}))

const NavTrigger = styled('button', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: open ? theme.palette.accent.main : theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(15),
  padding: theme.spacing(1, 0.5),
  transition: theme.transitions.create('color'),
  '&:hover': { color: theme.palette.accent.main },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 4,
    borderRadius: 4,
  },
  '& svg': {
    fontSize: 18,
    transform: open ? 'rotate(180deg)' : 'none',
    transition: theme.transitions.create('transform'),
  },
}))

const MobileNavLink = styled('a')(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(17),
  padding: theme.spacing(1.5, 0),
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 2,
    borderRadius: 4,
  },
}))

const MobileChildLink = styled('a')(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(15),
  padding: theme.spacing(1, 0),
  '&:hover': { color: theme.palette.accent.main },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 2,
    borderRadius: 4,
  },
}))

const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const triggerId = `nav-trigger-${item.id}`
  const menuId = `nav-menu-${item.id}`

  if (!item.children) {
    return (
      <NavLink key={item.id} href={item.href}>
        {item.label}
      </NavLink>
    )
  }

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <NavTrigger
        id={triggerId}
        type="button"
        open={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        aria-expanded={open || undefined}
        onClick={handleOpen}
      >
        {item.label}
        <ExpandMoreIcon aria-hidden="true" />
      </NavTrigger>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          list: { 'aria-labelledby': triggerId, sx: { minWidth: 280, py: 1 } },
          paper: {
            sx: (theme) => ({
              mt: 1,
              borderRadius: 2,
              boxShadow: `0 20px 45px -20px ${alpha(theme.palette.common.black, 0.35)}`,
            }),
          },
        }}
      >
        {item.children.map((child) => (
          <Fragment key={child.id}>
            {child.topDivider && <Divider sx={{ my: 1 }} />}
            <MenuItem component="a" href={child.href} onClick={handleClose} sx={{ whiteSpace: 'normal', py: 1 }}>
              <Stack spacing={0.25}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {child.label}
                </Typography>
                {child.description && (
                  <Typography variant="caption" color="text.secondary">
                    {child.description}
                  </Typography>
                )}
              </Stack>
            </MenuItem>
          </Fragment>
        ))}
      </Menu>
    </>
  )
}

const MobileNavSection = ({ item }: { item: NavItem }) => {
  if (!item.children) {
    return (
      <MobileNavLink key={item.id} href={item.href}>
        {item.label}
      </MobileNavLink>
    )
  }

  return (
    <Accordion
      key={item.id}
      disableGutters
      elevation={0}
      square
      sx={{ '&:before': { display: 'none' }, backgroundColor: 'transparent' }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
        <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <Stack>
          {item.children.map((child) => (
            <Fragment key={child.id}>
              {child.topDivider && <Divider sx={{ my: 0.5 }} />}
              <MobileChildLink href={child.href}>{child.label}</MobileChildLink>
            </Fragment>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

/**
 * Sticky primary navigation: full lock-up logo on the left, section
 * dropdowns plus a "Contact Us" CTA on the right. Dropdowns use MUI's Menu
 * (correct keyboard/ARIA menu semantics out of the box); below `md` the
 * whole thing collapses into an accessible drawer with accordion sections.
 */
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const elevated = useIsScrolled()

  return (
    <HeaderRoot elevated={elevated}>
      <Container maxWidth="xl">
        <Bar>
          <LogoLink href="/" aria-label="WinVinaya Infosystems home">
            <Box
              component="img"
              src={fullLogo}
              alt="WinVinaya Infosystems"
              sx={{ height: { xs: 36, md: 44 }, width: 'auto' }}
            />
          </LogoLink>

          <Stack
            component="nav"
            direction="row"
            spacing={3}
            aria-label="Primary"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {primaryNavItems.map((item) => (
              <DesktopNavItem key={item.id} item={item} />
            ))}
          </Stack>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button tone="accent" href={contactNavItem.href}>
              {contactNavItem.label}
            </Button>
          </Box>

          <IconButton
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Bar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 320, maxWidth: '100%', p: 3 } } }}
      >
        <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack component="nav" aria-label="Primary" sx={{ mt: 1 }}>
          {primaryNavItems.map((item) => (
            <MobileNavSection key={item.id} item={item} />
          ))}
        </Stack>
        <Button tone="accent" href={contactNavItem.href} sx={{ mt: 3 }} fullWidth>
          {contactNavItem.label}
        </Button>
      </Drawer>
    </HeaderRoot>
  )
}
