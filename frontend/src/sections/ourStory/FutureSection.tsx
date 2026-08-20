import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import { IconBadge } from '../../components'
import { storyFuture } from '../../data'

const ClosingLine = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.accent.main,
}))

/** "Where We're Headed" — closing narrative, emphasizing continuity of mission. */
export const FutureSection = () => (
  <Box component="section" aria-labelledby="future-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
        <IconBadge icon={<RocketLaunchOutlinedIcon />} tone="primary" size="lg" />
        <Typography id="future-heading" variant="h2">
          {storyFuture.heading}
        </Typography>
        {storyFuture.paragraphs.map((paragraph, idx) => (
          <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            {paragraph}
          </Typography>
        ))}
        <ClosingLine variant="h5">{storyFuture.closingLine}</ClosingLine>
      </Stack>
    </Container>
  </Box>
)
