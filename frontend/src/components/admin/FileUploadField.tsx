import { useState, useRef } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Alert from '@mui/material/Alert'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ImageIcon from '@mui/icons-material/Image'
import { Button } from '../Button'
import uploadService from '../../services/uploadService'

const DropZone = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDragOver' && prop !== 'hasValue',
})<{ isDragOver?: boolean; hasValue?: boolean }>(({ theme, isDragOver, hasValue }) => ({
  border: `2px dashed ${
    isDragOver
      ? theme.palette.primary.main
      : hasValue
        ? alpha(theme.palette.success.main, 0.4)
        : alpha(theme.palette.divider, 0.9)
  }`,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  padding: theme.spacing(2.5, 3),
  backgroundColor: isDragOver
    ? alpha(theme.palette.primary.main, 0.05)
    : hasValue
      ? alpha(theme.palette.success.main, 0.02)
      : alpha(theme.palette.background.default, 0.6),
  textAlign: 'center',
  cursor: 'pointer',
  transition: theme.transitions.create(['border-color', 'background-color']),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
  },
}))

const ImagePreviewBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxHeight: 180,
  borderRadius: Number(theme.shape.borderRadius) * 1.2,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: alpha(theme.palette.common.black, 0.03),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
    maxHeight: 180,
    objectFit: 'cover',
  },
}))

export interface FileUploadFieldProps {
  label: string
  value: string
  onChange: (url: string) => void
  accept?: string
  helperText?: string
  required?: boolean
  fileType?: 'image' | 'document' | 'any'
}

export const FileUploadField = ({
  label,
  value,
  onChange,
  accept = 'image/*',
  helperText,
  required = false,
  fileType = 'image',
}: FileUploadFieldProps) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isImage = fileType === 'image' || (value && (value.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i) || value.includes('/uploads/images/')))
  const isPdf = value && (value.match(/\.pdf$/i) || value.includes('/uploads/newsletters/') || value.includes('/uploads/documents/'))

  const handleUpload = async (file: File) => {
    setError(null)
    setUploading(true)
    setProgress(0)

    try {
      const res = await uploadService.uploadFile(file, (percent) => {
        setProgress(percent)
      })

      // Backend returns relativeUrl in res.file.url or res.data.file.url
      const fileUrl = (res as any)?.file?.url || (res as any)?.data?.file?.url || (res as any)?.url
      if (fileUrl) {
        onChange(fileUrl)
      } else {
        setError('Upload succeeded but no URL was returned.')
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'File upload failed. Please try again.')
    } finally {
      setUploading(false)
      setProgress(0)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Label and Status */}
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.8125rem' }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </Typography>

        {value && (
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 15, color: 'success.main' }} />
            <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700, fontSize: '0.725rem' }}>
              Attached
            </Typography>
          </Stack>
        )}
      </Stack>

      {/* Error alert */}
      {error && (
        <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 1.5, py: 0.5, fontSize: '0.8125rem' }}>
          {error}
        </Alert>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
      />

      {/* Upload Box / Dropzone */}
      <DropZone
        isDragOver={isDragOver}
        hasValue={Boolean(value)}
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {uploading ? (
          <Box sx={{ py: 1.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
              Uploading file... {progress}%
            </Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
          </Box>
        ) : value ? (
          <Stack spacing={1.5} sx={{ alignItems: 'center' }}>
            {isImage ? (
              <ImagePreviewBox>
                <img src={value} alt="Uploaded preview" />
              </ImagePreviewBox>
            ) : isPdf ? (
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', p: 1.5, bgcolor: (theme) => alpha(theme.palette.error.main, 0.08), borderRadius: 1.5 }}>
                <PictureAsPdfIcon sx={{ color: 'error.main', fontSize: 32 }} />
                <Box sx={{ textAlign: 'left', overflow: 'hidden' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.primary', display: 'block' }}>
                    PDF Document Attached
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                    {value.split('/').pop()}
                  </Typography>
                </Box>
              </Stack>
            ) : (
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <ImageIcon sx={{ color: 'primary.main' }} />
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  {value.split('/').pop()}
                </Typography>
              </Stack>
            )}

            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Button
                tone="secondary"
                variant="outlined"
                size="small"
                onClick={() => fileInputRef.current?.click()}
                sx={{ fontSize: '0.75rem', py: 0.4 }}
              >
                Replace File
              </Button>

              <Tooltip title="Remove file">
                <IconButton size="small" onClick={handleClear} sx={{ color: 'error.main' }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        ) : (
          <Stack spacing={1} sx={{ alignItems: 'center', py: 1 }}>
            <CloudUploadIcon sx={{ fontSize: 36, color: 'primary.main' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                Click to browse or drag and drop file here
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {helperText || `Upload ${fileType === 'image' ? 'Image (JPG, PNG, WEBP)' : 'Document (PDF, EPUB)'} up to 25MB`}
              </Typography>
            </Box>
          </Stack>
        )}
      </DropZone>
    </Box>
  )
}

export default FileUploadField
