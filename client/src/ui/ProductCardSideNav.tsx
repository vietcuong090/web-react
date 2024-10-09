import { FaRegEye, FaRegStar, FaStar } from 'react-icons/fa';
import { LuArrowLeftRight } from 'react-icons/lu';
import { ProductProps } from '../../type';
import { store } from '../lib/store';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ProductCardSideNav = ({ product }: { product?: ProductProps }) => {
  const { addToFavorite, favoriteProduct } = store();
  const [existringProduct, setExistringProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const availableItem = favoriteProduct.find((item) => item?._id === product?._id);
    setExistringProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const hanleFavorite = () => {
    if (product) {
      addToFavorite(product).then(() => {
        toast.success(
          existringProduct
            ? `${product?.name.substring(0, 10)}
        removed seccessfully!`
            : `${product?.name.substring(0, 10)}
        added seccessfully!`
        );
      });
    }
  };
  return (
    <div
      className='absolute right-1 top-1 flex flex-col gap-1
     transtion translate-x-12 group-hover:translate-x-0
     duration-300'
    >
      <span
        onClick={hanleFavorite}
        className='w-11 h-11 inline-flex text-black
    text-lg items-center justify-center rounded-full 
    hover:text-white hover:bg-black duration-200'
      >
        {existringProduct ? <FaStar /> : <FaRegStar />}
      </span>
      <span
        className='w-11 h-11 inline-flex text-black
    text-lg items-center justify-center rounded-full 
    hover:text-white hover:bg-black duration-200'
      >
        <LuArrowLeftRight />
      </span>
      <span
        className='w-11 h-11 inline-flex text-black
    text-lg items-center justify-center rounded-full 
    hover:text-white hover:bg-black duration-200'
      >
        <FaRegEye />
      </span>
    </div>
  );
};

export default ProductCardSideNav;
