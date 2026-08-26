import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import type { EbookItem } from '../../../data/resources/ebooks'

const EbookCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  overflow: 'hidden',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
    '& .card-image': {
      transform: 'scale(1.05)',
    },
  },
}))

const ImageContainer = styled('a')(({ theme }) => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  height: 220,
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  textDecoration: 'none',
  cursor: 'pointer',
}))

const CardImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  }),
}))

interface EbooksGridSectionProps {
  ebooks: EbookItem[]
}

export const EbooksGridSection = ({ ebooks }: EbooksGridSectionProps) => (
  <Box
    component="section"
    id="ebooks-grid"
    aria-labelledby="ebooks-grid-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      py: { xs: 8, md: 10 },
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl">
      {/* Section Subtitle & Heading */}
      <Box sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'primary.main',
            display: 'block',
            mb: 0.5,
          }}
        >
          Browse Publications & Playbooks
        </Typography>
        <Typography
          id="ebooks-grid-heading"
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2.125rem' },
            color: 'text.primary',
          }}
        >
          All eBooks & Guides
        </Typography>
      </Box>

      {ebooks.length === 0 ? (
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            py: 10,
            px: 3,
            bgcolor: theme.palette.background.paper,
            borderRadius: Number(theme.shape.borderRadius) * 2,
            border: `1px dashed ${theme.palette.divider}`,
            maxWidth: 600,
            mx: 'auto',
          })}
        >
          <SearchOffIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
            No Publications Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stay tuned for upcoming playbooks and publications.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3.5}>
          {ebooks.map((ebook) => (
            <Grid key={ebook.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <EbookCard>
                {/* Tile Cover Image (Clickable to open PDF in new tab) */}
                <ImageContainer
                  href={ebook.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read PDF for ${ebook.title} (opens in a new tab)`}
                >
                  <CardImage
                    className="card-image"
                    src={ebook.tileImage}
                    alt={ebook.title}
                    loading="lazy"
                  />
                </ImageContainer>

                {/* Card Content */}
                <Box
                  sx={{
                    p: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack spacing={2}>
                    {/* Category Badge */}
                    <Box
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignSelf: 'flex-start',
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      })}
                    >
                      {ebook.category}
                    </Box>

                    {/* Book Title */}
                    <Typography
                      component="a"
                      href={ebook.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="h6"
                      sx={(theme) => ({
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        lineHeight: 1.35,
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      })}
                    >
                      {ebook.title}
                    </Typography>

                    {/* Author Name */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'text.secondary', fontSize: '0.78125rem' }}>
                      <PersonOutlineOutlinedIcon sx={{ fontSize: 16, color: 'primary.main', flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.8125rem' }}>
                        {ebook.author}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.65,
                        fontSize: '0.8875rem',
                      }}
                    >
                      {ebook.description}
                    </Typography>
                  </Stack>

                  {/* Dual Action Bar */}
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pt: 2.5,
                      mt: 2.5,
                      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    {/* View PDF Button (New Tab) */}
                    <Box
                      component="a"
                      href={ebook.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.75,
                        py: 0.75,
                        borderRadius: Number(theme.shape.borderRadius) * 1,
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: theme.transitions.create(['background-color', 'transform']),
                        '&:hover': {
                          bgcolor: theme.palette.primary.dark,
                          transform: 'translateY(-1px)',
                        },
                      })}
                    >
                      View PDF
                      <OpenInNewIcon sx={{ fontSize: 14 }} />
                    </Box>

                    {/* Download ePub Button */}
                    <Box
                      component="a"
                      href={ebook.epubUrl}
                      download
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: Number(theme.shape.borderRadius) * 1,
                        border: `1px solid ${theme.palette.divider}`,
                        bgcolor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: theme.transitions.create(['border-color', 'color', 'background-color']),
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          bgcolor: alpha(theme.palette.primary.main, 0.04),
                        },
                      })}
                    >
                      <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
                      ePub
                    </Box>
                  </Stack>
                </Box>
              </EbookCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  </Box>
)
