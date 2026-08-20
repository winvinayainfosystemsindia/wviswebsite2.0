import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import { IconBadge, SectionHeading } from '../../components'
import { awards } from '../../data'

const Spotlight = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  alignItems: 'flex-start',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 16px 36px -18px ${alpha(theme.palette.common.black, 0.12)}`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}))

/** "Awards" — a spotlight panel per award (currently one; the layout scales cleanly as more are added). */
export const AwardsSection = () => (
  <Box component="section" aria-labelledby="awards-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5} sx={{ alignItems: 'center' }}>
        <SectionHeading headingId="awards-heading" eyebrow={awards.eyebrow} heading={awards.heading} maxWidth={640} />
        <Stack spacing={3} sx={{ width: '100%', maxWidth: 820 }}>
          {awards.items.map((item) => (
            <Spotlight key={item.id}>
              <IconBadge icon={<EmojiEventsOutlinedIcon />} tone="accent" size="lg" />
              <Stack spacing={1}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {item.description}
                </Typography>
              </Stack>
            </Spotlight>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
)
