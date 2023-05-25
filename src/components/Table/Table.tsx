//import EmptyDataImage from 'assets/images/illustration-arch.png'
import Loader from "../LoadingSpinner";
//import { floorFormatter } from 'nft/utils/numbers'
import { useCallback, useEffect, useMemo, useState } from 'react'

import Pagination from './Pagination'
import {
  EmptyDataText,
  EmptyDataWrapper,
  LoaderWrapper,
  TableBody,
  TableContainer,
  TableHead,
  TableHeadItem,
  TableItem,
  TableRow,
  TableTitle,
  TableWrapper,
} from './styles'

interface IColumn<T> {
  title: string
  field: string
  sortable?: boolean
  type?: 'price' | 'percent'
  renderRow?: (data: T) => React.ReactNode
  renderColumn?: () => React.ReactNode
}

interface IProps<T> {
  title?: string
  columns: IColumn<T>[]
  data: T[]
  showPerPage?: number
  handleRowClick?: (data: T) => void
  loading?: boolean
  emptyLable?: string
}

export default function Table<T>({
  title,
  columns,
  data,
  showPerPage = 10,
  handleRowClick,
  loading,
  emptyLable,
}: IProps<T>) {
  const [sortField, setSortField] = useState<string>()
  const [sortDirection, setSortDirection] = useState<boolean>(true)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const arrow = useCallback(
    (field: string) => {
      return sortField === field ? (!sortDirection ? '↑' : '↓') : ''
    },
    [sortDirection, sortField]
  )

  const clickPrev = () => {
    if (page !== 1) {
      setPage((_p) => _p - 1)
    }
  }

  const clickNext = () => {
    if (page !== maxPage) {
      setPage((_p) => _p + 1)
    }
  }

  const handleSort = useCallback(
    (newField: string) => {
      setSortField(newField)
      setSortDirection(sortField !== newField ? true : !sortDirection)
    },
    [sortDirection, sortField]
  )

  const sortedData = useMemo(() => {
    return data
      ? data
          .sort((a, b) => {
            if (a && b) {
              return a[sortField as keyof T] > b[sortField as keyof T]
                ? (sortDirection ? -1 : 1) * 1
                : (sortDirection ? -1 : 1) * -1
            } else {
              return -1
            }
          })
          .slice(showPerPage * (page - 1), page * showPerPage)
      : []
  }, [data, showPerPage, page, sortField, sortDirection])

  useEffect(() => {
    let extraPages = 1
    if (data && data.length !== 0) {
      if (data.length % showPerPage === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(data.length / showPerPage) + extraPages)
    }
  }, [showPerPage, data])

  return (
    <TableWrapper>
      {title && <TableTitle>{title}</TableTitle>}
      <TableContainer>
        <TableHead>
          {columns.map(({ title, sortable = false, field, renderColumn }, index) => {
            if (renderColumn) return <div key={index}>{renderColumn()}</div>
            return (
              <TableHeadItem sortable={sortable} key={index} onClick={() => sortable && handleSort(field)}>
                {title} {arrow(field)}
              </TableHeadItem>
            )
          })}
        </TableHead>
        {!loading && (
          <TableBody>
            {sortedData.map((data, index) => (
              <TableRow key={index} onClick={() => handleRowClick && handleRowClick(data)}>
                {/* @ts-ignore */}
                {Object.values(data).map((value, i) => {
                  const { type, renderRow } = columns[i]
                  if (renderRow) return <div key={i}>{renderRow(data)}</div>
                  if (typeof value === 'number' && (type === 'price' || type === 'percent')) {
                    //value = floorFormatter(value)
                  }
                  if (type) {
                    if (type === 'price') {
                      value = `$${value}`
                    }
                    if (type === 'percent') {
                      value = `${value}%`
                    }
                  }
                  return (
                    //@ts-ignore
                    <TableItem key={i}>{value}</TableItem>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        )}
        {loading && (
          <LoaderWrapper>
            {<Loader size="50px" />}
          </LoaderWrapper>
        )}
        {!loading && sortedData.length === 0 && (
          <EmptyDataWrapper>
            {/*<img src={EmptyDataImage} alt="" />*/}
            <EmptyDataText>{emptyLable ?? 'There are no data.'}</EmptyDataText>
          </EmptyDataWrapper>
        )}
      </TableContainer>
      <Pagination current={page} total={maxPage} handlePrev={clickPrev} handleNext={clickNext} />
    </TableWrapper>
  )
}
