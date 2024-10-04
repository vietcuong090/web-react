import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

const CustomRightArrow = ({ onClick }: any) => {
    return (
      <button onClick={onClick}
      className='absolute right-0 top-5 m-auto h-10 w-10 flex
       items-center justify-center bg-gray-100 rounded-full border-[1px]
       border-gray-200 hover:bg-gray-950 hover:text-white
       duration-200'
       aria-label='Next'>
        <span className='text-base'>
            <HiArrowRight />
            </span>
      </button>
  )
}
export default CustomRightArrow