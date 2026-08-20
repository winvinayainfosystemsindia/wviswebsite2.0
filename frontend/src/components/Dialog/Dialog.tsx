import { useId } from 'react'
import type { ReactNode } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiDialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export type DialogSize = 'sm' | 'md' | 'lg'

export interface DialogProps {
  open: boolean
  onClose: () => void
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  size?: DialogSize
  children?: ReactNode
}

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: Number(theme.shape.borderRadius) * 1.6,
  },
}))

/**
 * Accessible modal dialog. Focus trap, Escape-to-close, and focus return to
 * the trigger are all handled by MUI's underlying Modal. Collapses to a
 * full-screen sheet below the `sm` breakpoint for comfortable mobile use.
 */
export const Dialog = ({ open, onClose, title, description, actions, size = 'sm', children }: DialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const titleId = useId()
  const descriptionId = useId()

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth={size}
      fullWidth
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
    >
      <DialogTitle id={titleId} component="div">
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
        >
          <Typography variant="h5" component="span">
            {title}
          </Typography>
          <IconButton onClick={onClose} aria-label="Close dialog" size="small" sx={{ mt: -0.5, mr: -1 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {description && (
          <Typography id={descriptionId} variant="body2" color="text.secondary" sx={{ mb: children ? 2 : 0 }}>
            {description}
          </Typography>
        )}
        {children}
      </DialogContent>
      {actions && <DialogActions sx={{ px: 3, pb: 2.5 }}>{actions}</DialogActions>}
    </StyledDialog>
  )
}
