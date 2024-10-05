import { HiArrowLeft } from 'react-icons/hi2';

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className='absolute left-0 top-5 m-auto h-10 w-10 flex
      items-center justify-center bg-gray-100 rounded-full border-[1px]
      border-gray-200 hover:bg-gray-950 hover:text-white
      duration-200'
      aria-label='Previous'
    >
      <span className='text-base'>
        <HiArrowLeft />
      </span>
    </button>
  );
};

export default CustomLeftArrow;
