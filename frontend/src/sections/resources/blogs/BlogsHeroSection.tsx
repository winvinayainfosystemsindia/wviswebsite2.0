import { alpha, styled, keyframes } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import { Chip } from '../../../components'
import { blogsHeroData, blogCategories } from '../../../data/resources/blogs'

const pulseGlow = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
}))

// Ambient theme background lighting
const AmbientGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  zIndex: 1,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-15%',
    left: '-8%',
    width: '60vw',
    height: '60vw',
    maxWidth: 680,
    maxHeight: 680,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.16)} 0%, ${alpha(theme.palette.primary.main, 0.03)} 45%, transparent 70%)`,
    filter: 'blur(70px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10%',
    right: '-5%',
    width: '55vw',
    height: '55vw',
    maxWidth: 600,
    maxHeight: 600,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.light, 0.15)} 0%, ${alpha(theme.palette.accent.main, 0.03)} 45%, transparent 70%)`,
    filter: 'blur(70px)',
  },
}))

const GridPattern = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 1,
  backgroundImage: `radial-gradient(${alpha(theme.palette.text.primary, 0.06)} 1.2px, transparent 1.2px)`,
  backgroundSize: '28px 28px',
  opacity: 0.7,
}))

const PulseDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.accent.main,
  animation: `${pulseGlow} 2s ease-in-out infinite`,
}))

const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 45%, ${theme.palette.accent.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}))

const SearchInputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 640,
  padding: theme.spacing(0.75, 2),
  borderRadius: 999,
  backgroundColor: theme.palette.background.paper,
  border: `1.5px solid ${theme.palette.divider}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.06)}`,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'background-color']),
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.16)}`,
    backgroundColor: theme.palette.background.paper,
  },
}))

interface BlogsHeroSectionProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  totalCount: number
}

export const BlogsHeroSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  totalCount,
}: BlogsHeroSectionProps) => (
  <Root aria-labelledby="blogs-hero-heading">
    <AmbientGlow aria-hidden="true" />
    <GridPattern aria-hidden="true" />

    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Chip
          icon={<PulseDot />}
          label={blogsHeroData.eyebrow}
          variant="outlined"
          size="medium"
          sx={(theme) => ({
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.78125rem',
            fontWeight: 700,
            color: theme.palette.accent.dark,
            borderColor: alpha(theme.palette.accent.main, 0.4),
            backgroundColor: alpha(theme.palette.accent.main, 0.08),
            backdropFilter: 'blur(8px)',
            px: 0.75,
            py: 0.5,
          })}
        />

        <Typography
          id="blogs-hero-heading"
          variant="display"
          component="h1"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4rem' },
            lineHeight: { xs: 1.15, sm: 1.12, md: 1.1 },
            fontWeight: 800,
            letterSpacing: '-0.02em',
          })}
        >
          {blogsHeroData.headline} <GradientText>{blogsHeroData.headlineHighlight}</GradientText>
        </Typography>

        <Typography
          variant="body1"
          sx={(theme) => ({
            fontSize: { xs: '1.0625rem', sm: '1.1875rem' },
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
            fontWeight: 450,
            maxWidth: 720,
          })}
        >
          {blogsHeroData.subheadline}
        </Typography>

        {/* Real-time Search Bar */}
        <SearchInputWrapper>
          <SearchIcon sx={{ color: 'text.secondary', mr: 1.5, fontSize: 24 }} />
          <InputBase
            placeholder={blogsHeroData.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            inputProps={{ 'aria-label': 'Search articles by title, topic, or keyword' }}
            sx={{
              flex: 1,
              fontSize: '1rem',
              color: 'text.primary',
              '& input::placeholder': {
                color: 'text.secondary',
                opacity: 0.8,
              },
            }}
          />
          {searchQuery && (
            <IconButton
              size="small"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search input"
              sx={{ color: 'text.secondary' }}
            >
              <ClearIcon sx={{ fontSize: 18 }} />
            </IconButton>
          )}
        </SearchInputWrapper>

        {/* Category Filter Pills */}
        <Stack
          direction="row"
          spacing={1.25}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.25,
            width: '100%',
            maxWidth: 900,
            pt: 1,
          }}
        >
          {blogCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <Box
                key={cat.id}
                component="button"
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={isSelected}
                sx={(theme) => ({
                  px: 2.25,
                  py: 1,
                  borderRadius: 99,
                  border: `1px solid ${isSelected ? theme.palette.primary.main : theme.palette.divider}`,
                  bgcolor: isSelected ? theme.palette.primary.main : theme.palette.background.paper,
                  color: isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary,
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: theme.transitions.create(['background-color', 'color', 'border-color', 'transform', 'box-shadow']),
                  boxShadow: isSelected ? `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}` : 'none',
                  '&:hover': {
                    bgcolor: isSelected ? theme.palette.primary.dark : alpha(theme.palette.primary.main, 0.08),
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-1px)',
                  },
                })}
              >
                {cat.label}
              </Box>
            )
          })}
        </Stack>

        {searchQuery && (
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.875rem' }}>
            Showing results for "{searchQuery}" ({totalCount} articles found)
          </Typography>
        )}
      </Stack>
    </Container>
  </Root>
)
