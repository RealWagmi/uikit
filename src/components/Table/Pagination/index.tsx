import { ArrowLeft } from "../../Svg";

import { PaginationWrapper } from './styles'

interface IProps {
  current: number
  total: number
  handlePrev: () => void
  handleNext: () => void
}

export default function Pagination({ current, total, handlePrev, handleNext }: IProps) {
  return (
    <PaginationWrapper>
      <div className={`icon left ${current === 1 && 'disabled'}`} onClick={handlePrev}>
        <ArrowLeft/>
      </div>
      <div className="action">
        <span>Page</span>
        <span className="active">{current}</span>
        <span>of</span>
        <span>{total}</span>
      </div>
      <div className={`icon right ${current === total && 'disabled'}`} onClick={handleNext}>
        <ArrowLeft/>
      </div>
    </PaginationWrapper>
  )
}
