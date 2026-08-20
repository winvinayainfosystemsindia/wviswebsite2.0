import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { TextField } from './TextField'
import type { TextFieldProps } from './TextField'

export interface SearchFieldProps extends Omit<TextFieldProps, 'type'> {
  onClear?: () => void
}

/** Search input with a leading search icon and a clear button once there's a value. */
export const SearchField = ({ onClear, value, slotProps, ...rest }: SearchFieldProps) => (
  <TextField
    type="search"
    value={value}
    slotProps={{
      ...slotProps,
      input: {
        ...slotProps?.input,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" aria-hidden="true" />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton onClick={onClear} aria-label="Clear search" edge="end" size="small">
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      },
    }}
    {...rest}
  />
)
