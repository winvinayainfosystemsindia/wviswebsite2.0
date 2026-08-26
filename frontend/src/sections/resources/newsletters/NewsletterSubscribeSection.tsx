import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { Button } from '../../../components'

const SubscribeCard = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2.4,
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 12px 32px ${alpha(theme.palette.text.primary, 0.06)}`,
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3.5),
  },
}))

export const NewsletterSubscribeSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setIsSubmitted(true)
    }
  }

  return (
    <Box
      component="section"
      aria-labelledby="newsletter-subscribe-heading"
      sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 10 } }}
    >
      <Container maxWidth="md">
        <SubscribeCard>
          <Stack spacing={3} sx={{ alignItems: 'center' }}>
            <Box
              sx={(theme) => ({
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
              <MarkEmailReadOutlinedIcon sx={{ fontSize: 28 }} />
            </Box>

            <Box>
              <Typography
                id="newsletter-subscribe-heading"
                variant="h4"
                sx={{ fontSize: { xs: '1.5rem', sm: '1.875rem' }, fontWeight: 800, color: 'text.primary', mb: 1 }}
              >
                Stay Connected with Our Mission
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 580, mx: 'auto', lineHeight: 1.65 }}>
                Get our monthly "Dare to Dream" newsletters, inclusive hiring case studies, and corporate placement announcements delivered directly to your inbox.
              </Typography>
            </Box>

            {isSubmitted ? (
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  p: 2,
                  borderRadius: Number(theme.shape.borderRadius) * 1.2,
                  bgcolor: alpha(theme.palette.accent.main, 0.12),
                  color: theme.palette.accent.dark,
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                })}
              >
                <CheckCircleOutlinedIcon sx={{ color: 'accent.main' }} />
                <span>Thank you for subscribing! You will receive our next monthly newsletter edition.</span>
              </Box>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1.5,
                  width: '100%',
                  maxWidth: 520,
                }}
              >
                <Box
                  sx={(theme) => ({
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 0.5,
                    borderRadius: 99,
                    backgroundColor: alpha(theme.palette.background.default, 0.7),
                    border: `1.5px solid ${theme.palette.divider}`,
                    '&:focus-within': {
                      borderColor: theme.palette.primary.main,
                    },
                  })}
                >
                  <InputBase
                    placeholder="Enter your corporate or personal email"
                    type="email"
                    required
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    inputProps={{ 'aria-label': 'Corporate or personal email address for newsletter subscription' }}
                    sx={{ flex: 1, fontSize: '0.9375rem' }}
                  />
                </Box>

                <Button
                  type="submit"
                  tone="primary"
                  variant="contained"
                  sx={{
                    px: 3.5,
                    py: 1.25,
                    borderRadius: 99,
                    fontWeight: 700,
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            )}

            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
              We respect your privacy. Zero spam, unsubscribe at any time.
            </Typography>
          </Stack>
        </SubscribeCard>
      </Container>
    </Box>
  )
}
