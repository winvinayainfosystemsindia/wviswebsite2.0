import { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Alert from '@mui/material/Alert'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import SendIcon from '@mui/icons-material/Send'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Button } from '../../components'
import { contactInfoData, contactReasonOptions } from '../../data/contact/contact'
import { useContact } from '../../hooks'

const InfoCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.12)}`,
    transform: 'translateY(-2px)',
  },
}))

const FormWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4.5),
  borderRadius: Number(theme.shape.borderRadius) * 2.2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 16px 40px -12px ${alpha(theme.palette.primary.main, 0.15)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2.5),
  },
}))

export const ContactMainSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  })
  const { submitInquiry, submitting, successMessage, errorMessage, resetStatus } = useContact()

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errorMessage) resetStatus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await submitInquiry(formData)
    if (ok) {
      setFormData({ name: '', email: '', reason: '', message: '' })
    }
  }

  return (
    <Box
      component="section"
      id="contact-main"
      aria-labelledby="contact-main-heading"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.accent.light, 0.03),
        py: { xs: 8, md: 12 },
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'flex-start' }}>
          {/* Left Column: Contact Details & Office Location */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3.5}>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'primary.main',
                    display: 'block',
                    mb: 0.5,
                  }}
                >
                  Direct Channels
                </Typography>
                <Typography
                  id="contact-main-heading"
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.75rem', sm: '2.125rem' },
                    color: 'text.primary',
                  }}
                >
                  Let's Start a Conversation
                </Typography>
              </Box>

              {/* Office Address Card */}
              <InfoCard>
                <Box
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    borderRadius: Number(theme.shape.borderRadius) * 1.3,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  })}
                >
                  <LocationOnOutlinedIcon sx={{ fontSize: 26 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                    {contactInfoData.address.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 1.25 }}>
                    {contactInfoData.address.line1}
                    <br />
                    {contactInfoData.address.line2}
                  </Typography>
                  <Box
                    component="a"
                    href={contactInfoData.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    })}
                  >
                    View on Google Maps
                    <OpenInNewIcon sx={{ fontSize: 13 }} />
                  </Box>
                </Box>
              </InfoCard>

              {/* Email Address Card */}
              <InfoCard>
                <Box
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    borderRadius: Number(theme.shape.borderRadius) * 1.3,
                    bgcolor: alpha(theme.palette.accent.main, 0.12),
                    color: theme.palette.accent.dark,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  })}
                >
                  <EmailOutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                    {contactInfoData.email.title}
                  </Typography>
                  <Typography
                    component="a"
                    href={contactInfoData.email.href}
                    variant="body2"
                    sx={(theme) => ({
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      display: 'block',
                      '&:hover': { textDecoration: 'underline' },
                    })}
                  >
                    {contactInfoData.email.address}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                    For audits, partnerships, courseware remediation & general queries.
                  </Typography>
                </Box>
              </InfoCard>

              {/* Phone Card */}
              <InfoCard>
                <Box
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    borderRadius: Number(theme.shape.borderRadius) * 1.3,
                    bgcolor: alpha(theme.palette.success.main, 0.1),
                    color: theme.palette.success.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  })}
                >
                  <PhoneInTalkOutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                    {contactInfoData.phone.title}
                  </Typography>
                  <Typography
                    component="a"
                    href={contactInfoData.phone.href}
                    variant="body2"
                    sx={(theme) => ({
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      display: 'block',
                      '&:hover': { color: theme.palette.primary.main },
                    })}
                  >
                    {contactInfoData.phone.number}
                  </Typography>
                </Box>
              </InfoCard>

              {/* Operating Hours Card */}
              <InfoCard>
                <Box
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    borderRadius: Number(theme.shape.borderRadius) * 1.3,
                    bgcolor: alpha(theme.palette.text.primary, 0.05),
                    color: theme.palette.text.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  })}
                >
                  <AccessTimeOutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                    {contactInfoData.hours.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                    {contactInfoData.hours.text}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600, display: 'block', mt: 0.5 }}>
                    {contactInfoData.hours.responseTime}
                  </Typography>
                </Box>
              </InfoCard>
            </Stack>
          </Grid>

          {/* Right Column: Interactive Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <FormWrapper>
              <Box sx={{ mb: 3.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, fontSize: { xs: '1.45rem', sm: '1.75rem' } }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Please provide your project scope or inquiry below. We will get back to you promptly.
                </Typography>
              </Box>

              {successMessage && (
                <Alert
                  severity="success"
                  onClose={resetStatus}
                  sx={{ mb: 3, borderRadius: 2 }}
                >
                  <strong>Thank you for reaching out!</strong> {successMessage}
                </Alert>
              )}

              {errorMessage && (
                <Alert
                  severity="error"
                  onClose={resetStatus}
                  sx={{ mb: 3, borderRadius: 2 }}
                >
                  <strong>Submission Error:</strong> {errorMessage}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  {/* Name */}
                  <TextField
                    id="contact-name"
                    name="name"
                    label="Your Name"
                    required
                    fullWidth
                    variant="outlined"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    slotProps={{
                      inputLabel: { required: true },
                    }}
                  />

                  {/* Email */}
                  <TextField
                    id="contact-email"
                    name="email"
                    label="Email Address"
                    type="email"
                    required
                    fullWidth
                    variant="outlined"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="e.g. priya@company.com"
                    slotProps={{
                      inputLabel: { required: true },
                    }}
                  />

                  {/* Why are you contacting us? Dropdown */}
                  <FormControl fullWidth required variant="outlined">
                    <InputLabel id="contact-reason-label">Why are you contacting us?</InputLabel>
                    <Select
                      labelId="contact-reason-label"
                      id="contact-reason"
                      name="reason"
                      value={formData.reason}
                      label="Why are you contacting us?"
                      onChange={(e) => handleChange('reason', e.target.value)}
                    >
                      <MenuItem value="" disabled>
                        <em>Select a reason for contacting us</em>
                      </MenuItem>
                      {contactReasonOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* What support you need from us? Textarea */}
                  <TextField
                    id="contact-message"
                    name="message"
                    label="What support you need from us?"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Please describe your requirements, project scope, timelines, or specific questions..."
                    slotProps={{
                      inputLabel: { required: true },
                    }}
                  />

                  {/* Submit Button */}
                  <Button
                    tone="primary"
                    variant="contained"
                    size="large"
                    type="submit"
                    loading={submitting}
                    disabled={!formData.name || !formData.email || !formData.reason || !formData.message}
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      fontWeight: 800,
                      fontSize: '1rem',
                      boxShadow: (theme) => `0 4px 16px ${alpha(theme.palette.primary.main, 0.35)}`,
                    }}
                  >
                    Submit Inquiry
                  </Button>
                </Stack>
              </Box>
            </FormWrapper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
