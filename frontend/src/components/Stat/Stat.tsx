import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { IconBadge } from '../IconBadge'
import type { IconBadgeProps } from '../IconBadge'

export interface StatProps {
  /** The headline figure, e.g. "12+" or "500+". Pass as a string so callers control formatting. */
  value: string
  label: string
  icon?: IconBadgeProps['icon']
}

/**
 * Large-number stat readout for impact/metrics bands. Centered, with an
 * optional leading icon badge above the figure.
 */
export const Stat = ({ value, label, icon }: StatProps) => (
  <Stack spacing={1.25} sx={{ alignItems: 'center', textAlign: 'center' }}>
    {icon && <IconBadge icon={icon} tone="primary" size="md" />}
    <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
      {value}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}
    >
      {label}
    </Typography>
  </Stack>
)
