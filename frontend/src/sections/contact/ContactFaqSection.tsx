import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import { contactFaqData } from '../../data/contact/contact'

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: `${Number(theme.shape.borderRadius) * 1.5}px !important`,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 2px 12px ${alpha(theme.palette.text.primary, 0.03)}`,
  marginBottom: theme.spacing(2),
  '&:before': { display: 'none' },
  '&.Mui-expanded': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}))

export const ContactFaqSection = () => (
  <Box
    component="section"
    aria-labelledby="contact-faq-heading"
    sx={{
      bgcolor: 'background.default',
      py: { xs: 8, md: 10 },
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
    }}
  >
    <Container maxWidth="md">
      <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center', mb: 5 }}>
        <Box
          sx={(theme) => ({
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.5,
            py: 0.5,
            borderRadius: 99,
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
            fontSize: '0.8125rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          })}
        >
          <HelpOutlineOutlinedIcon sx={{ fontSize: 16 }} />
          Common Questions
        </Box>

        <Typography
          id="contact-faq-heading"
          variant="h2"
          sx={{
            fontSize: { xs: '1.85rem', sm: '2.25rem' },
            fontWeight: 800,
            color: 'text.primary',
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Stack>

      <Box>
        {contactFaqData.map((faq, idx) => (
          <StyledAccordion key={idx} defaultExpanded={idx === 0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
              aria-controls={`faq-content-${idx}`}
              id={`faq-header-${idx}`}
              sx={{ px: 3, py: 1 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, fontSize: '0.95rem' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </Container>
  </Box>
)
