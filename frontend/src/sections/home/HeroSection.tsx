import { useState, useEffect, useCallback } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Button } from '../../components'
import hero1 from '../../assets/hero/hero_1.png'
import hero2 from '../../assets/hero/hero_2.png'
import hero3 from '../../assets/hero/hero_3.png'
import hero4 from '../../assets/hero/hero_4.png'
import hero5 from '../../assets/hero/hero_5.png'
import hero6 from '../../assets/hero/hero_6.png'

const HERO_SLIDES = [
  {
    image: hero1,
    alt: 'WinVinaya classroom session empowering students with assistive technology training',
  },
  {
    image: hero2,
    alt: 'WinVinaya inclusive software engineering and accessibility audit team collaborating',
  },
  {
    image: hero3,
    alt: 'WinVinaya candidates learning high-demand IT and digital skills',
  },
  {
    image: hero4,
    alt: 'WinVinaya students participating in enterprise readiness workshops',
  },
  {
    image: hero5,
    alt: 'Persons with Disabilities graduating with industry-recognized certifications',
  },
  {
    image: hero6,
    alt: 'Inclusive corporate talent placement and accessibility leadership training',
  },
]

const Root = styled('section')({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#0a0d14',
  color: '#ffffff',
})

const SlideContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '620px',
  display: 'flex',
  alignItems: 'center',
})

const SlideBackground = styled(Box)<{ isActive: boolean }>(({ isActive }) => ({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: isActive ? 1 : 0,
  transition: 'opacity 1s ease-in-out, transform 8s ease-out',
  transform: isActive ? 'scale(1.02)' : 'scale(1.0)',
  zIndex: 0,
}))

// Lightened, transparent gradient overlay so background images stay bright and clear
const DarkGradientOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background:
    'linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 38%, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.0) 100%)',
  '@media (max-width: 900px)': {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.4) 100%)',
  },
})

// Floating bottom-right carousel indicator capsule
const CarouselCapsule = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 24,
  right: 28,
  zIndex: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '4px 10px',
  borderRadius: 999,
  backgroundColor: 'rgba(10, 10, 10, 0.55)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  boxShadow: '0 4px 26px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('sm')]: {
    bottom: 16,
    right: 16,
    padding: '3px 8px',
  },
}))

const IndicatorDot = styled(Box)<{ isActive: boolean }>(({ isActive }) => ({
  height: 6,
  width: isActive ? 18 : 6,
  borderRadius: 3,
  backgroundColor: isActive ? '#f57c00' : 'rgba(255, 255, 255, 0.45)',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: isActive ? '#ff9800' : 'rgba(255, 255, 255, 0.8)',
  },
}))

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  // Auto slide timer
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 5500)
    return () => clearInterval(timer)
  }, [handleNext, isPaused])

  return (
    <Root
      aria-labelledby="hero-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SlideContainer sx={{ minHeight: { xs: '600px', sm: '660px', md: '720px', lg: '780px' } }}>
        {/* Background Images Slider */}
        {HERO_SLIDES.map((slide, index) => (
          <SlideBackground
            key={index}
            isActive={currentSlide === index}
            role="img"
            aria-label={slide.alt}
            sx={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}

        {/* Gradient Overlay for High Readability */}
        <DarkGradientOverlay aria-hidden="true" />

        {/* Hero Content on the Left */}
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 8, md: 9 },
            pb: { xs: 8, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '620px', lg: '680px' } }}>
            {/* Headline using theme 'h1' variant with max font-weight 600 */}
            <Typography
              id="hero-heading"
              variant="h1"
              component="h1"
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                mb: 2.25,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              Digital Solutions Built Without Barriers.
            </Typography>

            {/* Subheadline using theme 'subtitle1' variant with font-weight <= 600 */}
            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(255, 255, 255, 0.92)',
                fontWeight: 400,
                mb: 3.5,
                maxWidth: '580px',
                textShadow: '0 1px 6px rgba(0,0,0,0.5)',
              }}
            >
              WinVinaya InfoSystems delivers enterprise-grade accessibility auditing, document remediation, custom AI applications, and corporate skilling — powered by a specialized engineering team including native assistive tech users.
            </Typography>

            {/* Action Buttons Row */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                mb: 4,
                flexWrap: 'wrap',
                gap: 1.5,
                alignItems: 'center',
              }}
            >
              {/* Primary Green CTA: Explore Services */}
              <Button
                variant="contained"
                href="/services"
                sx={{
                  backgroundColor: '#2e7d32',
                  color: '#ffffff',
                  fontWeight: 600,
                  px: 3,
                  py: 1.15,
                  borderRadius: '6px',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(46, 125, 50, 0.4)',
                  '&:hover': {
                    backgroundColor: '#1b5e20',
                    boxShadow: '0 6px 20px rgba(46, 125, 50, 0.6)',
                  },
                }}
              >
                Explore Our Services
              </Button>

              {/* Dark Outlined Button: Schedule Consultation */}
              <Button
                variant="outlined"
                href="/contact-us"
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  fontWeight: 600,
                  px: 2.75,
                  py: 1.15,
                  borderRadius: '6px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              >
                Schedule Consultation
              </Button>
            </Stack>

            {/* Key Metrics / Stats Row using theme typography variants */}
            <Stack
              direction="row"
              spacing={{ xs: 3.5, sm: 5, md: 6 }}
              sx={{
                mb: 3.5,
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: { xs: 2.5, sm: 0 },
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  100+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontWeight: 500,
                    mt: 0.5,
                  }}
                >
                  Enterprise Audits
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  50%+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontWeight: 500,
                    mt: 0.5,
                  }}
                >
                  PwD Audit Team
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  100%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontWeight: 500,
                    mt: 0.5,
                  }}
                >
                  Audit-Ready WCAG
                </Typography>
              </Box>
            </Stack>

            {/* Red Secondary Action Button: Request Accessibility Audit */}
            <Button
              variant="contained"
              href="/contact-us"
              endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: '#8b1e1e',
                color: '#ffffff',
                fontWeight: 600,
                px: 3,
                py: 1.25,
                borderRadius: '8px',
                textTransform: 'none',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 4px 14px rgba(139, 30, 30, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: '#701515',
                  boxShadow: '0 6px 20px rgba(139, 30, 30, 0.7)',
                },
              }}
            >
              Request Accessibility Audit
            </Button>
          </Box>
        </Container>

        {/* Carousel Bottom-Right Floating Controls */}
        <CarouselCapsule aria-label="Hero background controls">
          <IconButton
            size="small"
            onClick={handlePrev}
            aria-label="Previous slide"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              p: 0.5,
              '&:hover': { color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: 18 }} />
          </IconButton>

          {HERO_SLIDES.map((_, index) => (
            <IndicatorDot
              key={index}
              isActive={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setCurrentSlide(index)
                }
              }}
            />
          ))}

          <IconButton
            size="small"
            onClick={handleNext}
            aria-label="Next slide"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              p: 0.5,
              '&:hover': { color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </CarouselCapsule>
      </SlideContainer>
    </Root>
  )
}
