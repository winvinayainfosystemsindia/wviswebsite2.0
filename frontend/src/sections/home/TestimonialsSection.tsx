import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { SectionHeading } from '../../components'
import { testimonialsData, type TestimonialItem } from '../../data'

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(14, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.04)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const TestimonialCardWrapper = styled(motion.li)(({ theme }) => ({
  padding: theme.spacing(3.5),
  borderRadius: 20,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.95),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 8px 24px -4px ${alpha(theme.palette.text.primary, 0.05)}`,
  maxWidth: 360,
  width: '100%',
  cursor: 'default',
  userSelect: 'none',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2.5),
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.5),
  },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.7)}`,
    outlineOffset: 3,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const TestimonialsColumn = ({
  items,
  duration = 15,
  className,
}: {
  items: TestimonialItem[]
  duration?: number
  className?: string
}) => {
  return (
    <Box className={className} sx={{ overflow: 'hidden' }}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          paddingBottom: 24,
          margin: 0,
          paddingLeft: 0,
          listStyle: 'none',
        }}
      >
        {[...new Array(2).fill(0)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {items.map(({ id, text, image, name, role, organization, sector }, itemIdx) => (
              <TestimonialCardWrapper
                key={`${loopIdx}-${id || itemIdx}`}
                aria-hidden={loopIdx === 1 ? 'true' : 'false'}
                tabIndex={loopIdx === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.025,
                  y: -6,
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(84, 128, 33, 0.25)',
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
              >
                <Box component="blockquote" sx={{ m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* Top Bar: Sector Tag + 5 Stars */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        px: 1.1,
                        py: 0.35,
                        borderRadius: 1,
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        color: theme.palette.primary.main,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      })}
                    >
                      {sector}
                    </Box>
                    <Box sx={{ display: 'flex', color: 'accent.main' }}>
                      {[...Array(5)].map((_, sIdx) => (
                        <StarRoundedIcon key={sIdx} sx={{ fontSize: '1rem', color: 'accent.main' }} />
                      ))}
                    </Box>
                  </Box>

                  {/* Testimonial Quote */}
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontSize: '0.90625rem',
                      lineHeight: 1.65,
                      fontWeight: 400,
                    }}
                  >
                    "{text}"
                  </Typography>

                  {/* Author Profile */}
                  <Box
                    component="footer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      pt: 1.5,
                      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Photo of ${name}`}
                      sx={(theme) => ({
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        objectFit: 'cover',
                        border: `2px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                      })}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        component="cite"
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          fontStyle: 'normal',
                          color: 'text.primary',
                          fontSize: '0.875rem',
                          lineHeight: 1.2,
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: '0.75rem', mt: 0.25, lineHeight: 1.2 }}
                      >
                        {role} • {organization}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </TestimonialCardWrapper>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </Box>
  )
}

export const TestimonialsSection = () => {
  const firstColumn = testimonialsData.items.slice(0, 3)
  const secondColumn = testimonialsData.items.slice(3, 6)
  const thirdColumn = testimonialsData.items.slice(6, 9)

  return (
    <SectionWrapper aria-labelledby="testimonials-heading">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <SectionHeading
            headingId="testimonials-heading"
            eyebrow={testimonialsData.eyebrow}
            heading={testimonialsData.heading}
            description={testimonialsData.subheading}
            maxWidth={740}
          />
        </Box>

        {/* 3-Column Infinite Scrolling Marquee with Top & Bottom Fade Mask */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2.5, md: 3 },
            maxHeight: 740,
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
            mt: 2,
          }}
          role="region"
          aria-label="Scrolling Client Testimonials"
        >
          {/* Column 1: Always visible */}
          <TestimonialsColumn items={firstColumn} duration={18} />

          {/* Column 2: Visible on md and up */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <TestimonialsColumn items={secondColumn} duration={22} />
          </Box>

          {/* Column 3: Visible on lg and up */}
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <TestimonialsColumn items={thirdColumn} duration={20} />
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  )
}
