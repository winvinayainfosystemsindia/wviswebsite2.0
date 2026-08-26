import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Button } from '../../../components'
import { featuredEbook } from '../../../data/resources/ebooks'

const SpotlightContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  padding: theme.spacing(4.5),
  backgroundColor: theme.palette.background.paper,
  border: `1.5px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  boxShadow: `0 20px 48px -12px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  overflow: 'hidden',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 24px 54px -10px ${alpha(theme.palette.primary.main, 0.2)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const ImageWrapper = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.06)}`,
  backgroundColor: theme.palette.background.default,
  height: '100%',
  minHeight: 280,
  maxHeight: 380,
  display: 'flex',
}))

const FeaturedImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}))

export const FeaturedEbookSpotlightSection = () => {
  const handleOpenPdf = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(featuredEbook.pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box
      component="section"
      aria-labelledby="featured-ebook-heading"
      sx={{ bgcolor: 'background.default', pb: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="xl">
        <SpotlightContainer>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            {/* Left Cover Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ImageWrapper>
                <FeaturedImage
                  src={featuredEbook.tileImage}
                  alt={featuredEbook.title}
                  loading="lazy"
                />
              </ImageWrapper>
            </Grid>

            {/* Right Details & Action Buttons */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.75}>
                {/* Badges */}
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 1.5,
                      py: 0.45,
                      borderRadius: 99,
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      color: theme.palette.primary.main,
                      fontSize: '0.78125rem',
                      fontWeight: 800,
                    })}
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 16 }} />
                    Featured Publication
                  </Box>

                  <Box
                    sx={(theme) => ({
                      px: 1.25,
                      py: 0.45,
                      borderRadius: 99,
                      bgcolor: alpha(theme.palette.accent.main, 0.15),
                      color: theme.palette.accent.dark,
                      fontSize: '0.78125rem',
                      fontWeight: 700,
                    })}
                  >
                    {featuredEbook.category}
                  </Box>
                </Stack>

                {/* Title */}
                <Typography
                  id="featured-ebook-heading"
                  variant="h3"
                  sx={(theme) => ({
                    fontSize: { xs: '1.6rem', sm: '2rem', md: '2.25rem' },
                    lineHeight: 1.25,
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                  })}
                >
                  {featuredEbook.title}
                </Typography>

                {/* Author Name */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'text.secondary', fontSize: '0.875rem' }}>
                  <PersonOutlineOutlinedIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Author: {featuredEbook.author}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                    fontSize: { xs: '0.975rem', sm: '1.05rem' },
                  })}
                >
                  {featuredEbook.description}
                </Typography>

                {/* Dual Action Buttons */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                  <Button
                    tone="primary"
                    variant="contained"
                    size="large"
                    component="a"
                    href={featuredEbook.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon />}
                    onClick={handleOpenPdf}
                    sx={{
                      px: 3.5,
                      py: 1.25,
                      fontWeight: 800,
                      textTransform: 'none',
                      fontSize: '0.9375rem',
                      boxShadow: (theme) => `0 4px 14px ${alpha(theme.palette.primary.main, 0.35)}`,
                    }}
                  >
                    Read PDF
                  </Button>

                  <Button
                    tone="primary"
                    variant="outlined"
                    size="large"
                    component="a"
                    href={featuredEbook.epubUrl}
                    download
                    startIcon={<FileDownloadOutlinedIcon />}
                    sx={{
                      px: 3,
                      py: 1.25,
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: '0.9375rem',
                    }}
                  >
                    Download ePub
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </SpotlightContainer>
      </Container>
    </Box>
  )
}
