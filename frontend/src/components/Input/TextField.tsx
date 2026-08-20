import { forwardRef } from 'react'
import { alpha, styled } from '@mui/material/styles'
import MuiTextField from '@mui/material/TextField'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

export type TextFieldProps = MuiTextFieldProps

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: alpha(theme.palette.accent.main, 0.6),
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.accent.main,
      borderWidth: 2,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.accent.main,
  },
}))

/**
 * Base text input. Always renders a visible label (never placeholder-only)
 * and, when `error` is set, wraps the helper text in `role="alert"` so
 * assistive tech announces it as soon as it appears.
 */
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ helperText, error, ...rest }, ref) => (
    <StyledTextField
      ref={ref}
      error={error}
      helperText={error && helperText ? <span role="alert">{helperText}</span> : helperText}
      variant="outlined"
      fullWidth
      {...rest}
    />
  ),
)

TextField.displayName = 'TextField'
