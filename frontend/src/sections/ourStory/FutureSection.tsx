import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import { IconBadge } from '../../components'
import { storyFuture } from '../../data'

const ClosingLine = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.accent.main,
  display: 'inline-block',
  padding: theme.spacing(1.25, 3),
  borderRadius: 999,
  backgroundColor: alpha(theme.palette.accent.main, 0.08),
  border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
}))

/** "Where We're Headed" — closing narrative, emphasizing continuity of mission. */
export const FutureSection = () => (
  <Box component="section" aria-labelledby="future-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ alignItems: 'center', textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
        <IconBadge icon={<RocketLaunchOutlinedIcon />} tone="primary" size="lg" />
        <Typography id="future-heading" variant="h2" sx={{ fontWeight: 800, color: 'text.primary' }}>
          {storyFuture.heading}
        </Typography>
        {storyFuture.paragraphs.map((paragraph, idx) => (
          <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.085rem', lineHeight: 1.8 }}>
            {paragraph}
          </Typography>
        ))}
        <Box sx={{ pt: 1 }}>
          <ClosingLine variant="h5">{storyFuture.closingLine}</ClosingLine>
        </Box>
      </Stack>
    </Container>
  </Box>
)
