import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField } from './TextField'
import type { TextFieldProps } from './TextField'

export type PasswordFieldProps = Omit<TextFieldProps, 'type'>

/** Password input with a labeled show/hide toggle (keyboard- and screen-reader-accessible). */
export const PasswordField = ({ slotProps, ...rest }: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <TextField
      type={visible ? 'text' : 'password'}
      autoComplete="current-password"
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setVisible((prev) => !prev)}
                aria-label={visible ? 'Hide password' : 'Show password'}
                aria-pressed={visible}
                edge="end"
                size="small"
              >
                {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...rest}
    />
  )
}
