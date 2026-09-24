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
import Popover from '@mui/material/Popover'
import Chip from '@mui/material/Chip'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BusinessIcon from '@mui/icons-material/Business'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
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
  height: 84,
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
  fontSize: theme.typography.pxToRem(17.5),
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
  gap: 5,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: open ? theme.palette.accent.main : theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(17.5),
  padding: theme.spacing(1, 0.5),
  transition: theme.transitions.create('color'),
  '&:hover': { color: theme.palette.accent.main },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 4,
    borderRadius: 4,
  },
  '& svg': {
    fontSize: 20,
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
  fontSize: theme.typography.pxToRem(18.5),
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
  fontSize: theme.typography.pxToRem(16),
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

  if (!item.children && !item.megaMenuColumns) {
    return (
      <NavLink key={item.id} href={item.href}>
        {item.label}
      </NavLink>
    )
  }

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  if (item.isMegaMenu && item.megaMenuColumns) {
    return (
      <>
        <NavTrigger
          id={triggerId}
          type="button"
          open={open}
          aria-haspopup="true"
          aria-controls={open ? menuId : undefined}
          aria-expanded={open || undefined}
          onClick={handleOpen}
        >
          {item.label}
          <ExpandMoreIcon aria-hidden="true" />
        </NavTrigger>
        <Popover
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          slotProps={{
            paper: {
              sx: (theme) => ({
                mt: 1.5,
                p: { md: 3, lg: 3.5 },
                width: { md: 920, lg: 1040 },
                maxWidth: 'calc(100vw - 32px)',
                maxHeight: 'calc(100vh - 110px)',
                overflowY: 'auto',
                borderRadius: 3,
                boxShadow: `0 20px 45px -15px ${alpha(theme.palette.common.black, 0.22)}`,
                border: `1px solid ${theme.palette.divider}`,
              }),
            },
          }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 4 }}>
            {item.megaMenuColumns.map((col) => (
              <Box key={col.id} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2,
                    pb: 1,
                    borderBottom: (theme) =>
                      `2px solid ${
                        col.id === 'corporate-sector'
                          ? alpha(theme.palette.primary.main, 0.25)
                          : alpha(theme.palette.secondary.main, 0.25)
                      }`,
                  }}
                >
                  {col.id === 'corporate-sector' ? (
                    <BusinessIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                  ) : (
                    <VolunteerActivismIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                  )}
                  <Box>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                        {col.title}
                      </Typography>
                      {col.badge && (
                        <Chip
                          label={col.badge}
                          size="small"
                          color={col.id === 'corporate-sector' ? 'primary' : 'secondary'}
                          variant="outlined"
                          sx={{ height: 20, fontSize: '0.68rem', fontWeight: 700 }}
                        />
                      )}
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, flexGrow: 1 }}>
                  {col.groups.map((group) => (
                    <Box
                      key={group.id}
                      component="a"
                      href={group.href}
                      onClick={handleClose}
                      sx={(theme) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.35,
                        p: 1.5,
                        borderRadius: 2,
                        textDecoration: 'none',
                        bgcolor:
                          theme.palette.mode === 'light'
                            ? alpha(theme.palette.text.primary, 0.02)
                            : alpha(theme.palette.background.paper, 0.6),
                        border: `1px solid ${theme.palette.divider}`,
                        transition: 'all 0.15s ease',
                        '&:hover': {
                          bgcolor:
                            col.id === 'corporate-sector'
                              ? alpha(theme.palette.primary.main, 0.08)
                              : alpha(theme.palette.secondary.main, 0.08),
                          borderColor:
                            col.id === 'corporate-sector'
                              ? alpha(theme.palette.primary.main, 0.35)
                              : alpha(theme.palette.secondary.main, 0.35),
                          transform: 'translateX(3px)',
                          '& .group-title': {
                            color: col.id === 'corporate-sector' ? 'primary.main' : 'secondary.main',
                          },
                          '& .group-arrow': {
                            color: col.id === 'corporate-sector' ? 'primary.main' : 'secondary.main',
                            transform: 'translateX(2px)',
                          },
                        },
                      })}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                        <Typography
                          className="group-title"
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            fontSize: '0.90625rem',
                            lineHeight: 1.3,
                            transition: 'color 0.15s ease',
                          }}
                        >
                          {group.title}
                        </Typography>
                        <ArrowForwardIcon
                          className="group-arrow"
                          sx={{
                            fontSize: 15,
                            color: 'text.secondary',
                            opacity: 0.7,
                            transition: 'all 0.15s ease',
                            flexShrink: 0,
                          }}
                        />
                      </Box>
                      {group.description && (
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem', lineHeight: 1.45 }}>
                          {group.description}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1.25,
              borderRadius: 2,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Shared mission, not just vendor-client — Flexible engagements across Fee-for-Service & Co-Delivery Models.
            </Typography>
            <Button tone="accent" size="small" href="/contact-us" onClick={handleClose} sx={{ flexShrink: 0, ml: 2 }}>
              Contact Us <ArrowForwardIcon sx={{ fontSize: 14, ml: 0.5 }} />
            </Button>
          </Box>
        </Popover>
      </>
    )
  }

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
        {item.children?.map((child) => (
          <Fragment key={child.id}>
            {child.topDivider && <Divider sx={{ my: 1 }} />}
            <MenuItem component="a" href={child.href} onClick={handleClose} sx={{ py: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {child.label}
              </Typography>
            </MenuItem>
          </Fragment>
        ))}
      </Menu>
    </>
  )
}

const MobileNavSection = ({ item }: { item: NavItem }) => {
  if (!item.children && !item.megaMenuColumns) {
    return (
      <MobileNavLink key={item.id} href={item.href}>
        {item.label}
      </MobileNavLink>
    )
  }

  if (item.isMegaMenu && item.megaMenuColumns) {
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
          <Stack spacing={1.5}>
            {item.megaMenuColumns.map((col) => (
              <Accordion
                key={col.id}
                disableGutters
                elevation={0}
                square
                sx={{
                  '&:before': { display: 'none' },
                  backgroundColor: (theme) => alpha(theme.palette.action.hover, 0.4),
                  borderRadius: 1.5,
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 18 }} />} sx={{ px: 1.5, minHeight: 44 }}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {col.title}
                    </Typography>
                    {col.badge && (
                      <Chip label={col.badge} size="small" variant="outlined" sx={{ height: 18, fontSize: '0.65rem' }} />
                    )}
                  </Stack>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 1.5, pb: 1.5, pt: 0 }}>
                  <Stack spacing={1}>
                    {col.groups.map((group) => (
                      <Box
                        key={group.id}
                        component="a"
                        href={group.href}
                        sx={(theme) => ({
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 0.25,
                          p: 1.25,
                          borderRadius: 1.5,
                          textDecoration: 'none',
                          bgcolor: alpha(theme.palette.background.paper, 0.6),
                          border: `1px solid ${theme.palette.divider}`,
                        })}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            fontSize: '0.875rem',
                          }}
                        >
                          {group.title}
                        </Typography>
                        {group.description && (
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78125rem', lineHeight: 1.4 }}>
                            {group.description}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
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
          {item.children?.map((child) => (
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
              sx={{ height: { xs: 36, md: 64 }, width: 'auto' }}
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
