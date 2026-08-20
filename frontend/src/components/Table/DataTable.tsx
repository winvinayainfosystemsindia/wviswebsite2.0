import { useMemo, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export interface DataTableColumn<T> {
  id: string
  header: ReactNode
  align?: 'left' | 'right' | 'center'
  width?: string | number
  sortable?: boolean
  render: (row: T) => ReactNode
  sortValue?: (row: T) => string | number
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[]
  rows: T[]
  getRowId: (row: T) => string | number
  /** Accessible table summary rendered as a visually-hidden `<caption>`. */
  caption?: string
  emptyMessage?: string
  rowsPerPageOptions?: number[]
  defaultRowsPerPage?: number
  onRowClick?: (row: T) => void
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
}))

const VisuallyHiddenCaption = styled('caption')({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
})

const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
  whiteSpace: 'nowrap',
}))

const BodyRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'clickable',
})<{ clickable: boolean }>(({ theme, clickable }) => ({
  ...(clickable && {
    cursor: 'pointer',
    '&:hover': { backgroundColor: alpha(theme.palette.accent.main, 0.06) },
    '&:focus-visible': {
      outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
      outlineOffset: -2,
    },
  }),
}))

/**
 * Generic, sortable, paginated data table. Wraps a horizontally-scrolling
 * container so wide tables don't break mobile layouts, and keeps sort state
 * announced via `aria-sort` on the relevant column header.
 */
export function DataTable<T>({
  columns,
  rows,
  getRowId,
  caption,
  emptyMessage = 'No records to display.',
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 10,
  onRowClick,
}: DataTableProps<T>) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)
  const [orderBy, setOrderBy] = useState<string | null>(null)
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')

  const sortedRows = useMemo(() => {
    if (!orderBy) return rows
    const column = columns.find((col) => col.id === orderBy)
    if (!column?.sortValue) return rows
    const sorted = [...rows].sort((a, b) => {
      const aVal = column.sortValue!(a)
      const bVal = column.sortValue!(b)
      if (aVal < bVal) return order === 'asc' ? -1 : 1
      if (aVal > bVal) return order === 'asc' ? 1 : -1
      return 0
    })
    return sorted
  }, [rows, columns, orderBy, order])

  const pagedRows = useMemo(
    () => sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [sortedRows, page, rowsPerPage],
  )

  const handleSort = (columnId: string) => {
    if (orderBy === columnId) {
      setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setOrderBy(columnId)
      setOrder('asc')
    }
  }

  const handleRowKeyDown = (event: KeyboardEvent<HTMLTableRowElement>, row: T) => {
    if (!onRowClick) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onRowClick(row)
    }
  }

  return (
    <StyledPaper>
      <TableContainer sx={{ overflowX: 'auto' }}>
        <Table stickyHeader={false}>
          {caption && <VisuallyHiddenCaption>{caption}</VisuallyHiddenCaption>}
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                const isSorted = orderBy === column.id
                return (
                  <HeaderCell
                    key={column.id}
                    align={column.align}
                    width={column.width}
                    aria-sort={isSorted ? (order === 'asc' ? 'ascending' : 'descending') : undefined}
                  >
                    {column.sortable ? (
                      <TableSortLabel
                        active={isSorted}
                        direction={isSorted ? order : 'asc'}
                        onClick={() => handleSort(column.id)}
                      >
                        {column.header}
                      </TableSortLabel>
                    ) : (
                      column.header
                    )}
                  </HeaderCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 5 }}>
                  <Typography variant="body2" color="text.secondary">
                    {emptyMessage}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {pagedRows.map((row) => (
              <BodyRow
                key={getRowId(row)}
                clickable={Boolean(onRowClick)}
                hover
                tabIndex={onRowClick ? 0 : undefined}
                role={onRowClick ? 'button' : undefined}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                onKeyDown={(event) => handleRowKeyDown(event, row)}
              >
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.render(row)}
                  </TableCell>
                ))}
              </BodyRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={sortedRows.length}
        page={page}
        onPageChange={(_event, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10))
          setPage(0)
        }}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </StyledPaper>
  )
}
