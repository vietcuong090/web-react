import { twMerge } from 'tailwind-merge';
import { ProductProps } from '../../type';
import { store } from '../lib/store';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import PriceTag from './PriceTag';

const AddToCartBtn = ({
  className,
  title,
  product,
  showPrice = true,
}: {
  className?: string;
  title?: string;
  product?: ProductProps;
  showPrice?: boolean;
}) => {
  const [existringProduct, setExistringProduct] = useState<ProductProps | null>(null);

  const { addToCart, cartProduct, decreaseQuantity } = store();
  useEffect(() => {
    const availableItem = cartProduct.find((item) => item?._id === product?._id);
    setExistringProduct(availableItem || null);
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully!`);
    } else {
      toast.error('Product is undefined!');
    }
  };

  const handleDeleteProduct = () => {
    if (existringProduct) {
      if (existringProduct?.quantity > 1) {
        decreaseQuantity(existringProduct?._id);
        toast.success(`${product?.name.substring(0, 10)}
        decreaased successfully`);
      } else {
        toast.error('You can not decrease less than 1');
      }
    } else {
    }
  };

  const newClassName = twMerge(
    'bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer',
    className
  );
  const getRegularPrice = () => {
    if (existringProduct) {
      if (product) {
        return product?.regularPrice * existringProduct?.quantity;
      }
    } else {
      return product?.regularPrice;
    }
  };

  const getDiscountedPrice = () => {
    if (existringProduct) {
      if (product) {
        return product?.discountedPrice * product?.quantity;
      }
    } else {
      return product?.regularPrice;
    }
  };

  return (
    <>
      {showPrice && (
        <div>
          <PriceTag regularPrice={getRegularPrice()} discountedPrice={getDiscountedPrice()} />
        </div>
      )}
      {existringProduct ? (
        <div
          className='flex self-center items-center
        justify-center gap-2'
        >
          <button
            onClick={handleDeleteProduct}
            className='bg-[#f7f7f7] text-black p-2 border-[1px]
           border-gray-200 hover:border-skyText rounded-full text-sm
            hover:bg-white duration-200 cursor-pointer'
          >
            <FaMinus />
          </button>
          <p
            className='text-base font-semibold
          w-10 text-center'
          >
            {existringProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className='bg-[#f7f7f7] text-black p-2 border-[1px]
           border-gray-200 hover:border-skyText rounded-full text-sm
            hover:bg-white duration-200 cursor-pointer'
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className={newClassName}>
          {title ? title : 'Add to cart'}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
