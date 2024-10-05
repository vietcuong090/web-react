import { twMerge } from 'tailwind-merge';

const AddToCartBtn = ({ className, title }: { className?: string; title?: string }) => {
  const newClassName = twMerge(
    'bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:scale-105 duration-200 cursor-pointer',
    className
  );
  return <button className={newClassName}>{title ? title : 'Add to cart'}</button>;
};

export default AddToCartBtn;
