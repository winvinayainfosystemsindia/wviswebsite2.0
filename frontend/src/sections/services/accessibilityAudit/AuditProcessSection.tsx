import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TimelineIcon from '@mui/icons-material/Timeline'
import { SectionHeading, Timeline, type TimelineItem } from '../../../components'
import { auditProcessData } from '../../../data/services/accessibilityAudit'

const processItems: TimelineItem[] = auditProcessData.steps.map((step) => ({
  id: step.step,
  date: `Round 0${step.step}`,
  title: step.title,
  description: step.description,
}))

export const AuditProcessSection = () => (
  <Box component="section" aria-labelledby="audit-process-heading" id="audit-process" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="audit-process-heading"
          eyebrow={auditProcessData.eyebrow}
          heading={auditProcessData.heading}
          description={auditProcessData.description}
          maxWidth={720}
        />

        <Box sx={{ width: '100%', pt: 2 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'accent.main', mb: 3, justifyContent: 'center' }}>
            <TimelineIcon fontSize="small" />
            <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              THREE-ROUND ENGAGEMENT LIFECYCLE
            </Typography>
          </Stack>

          <Timeline orientation="horizontal" items={processItems} />
        </Box>
      </Stack>
    </Container>
  </Box>
)
