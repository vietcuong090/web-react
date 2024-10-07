import { twMerge } from 'tailwind-merge';
import { ProductProps } from '../../type';
import { store } from '../lib/store';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const AddToCartBtn = ({
  className,
  title,
  product,
}: {
  className?: string;
  title?: string;
  product?: ProductProps;
}) => {
  const [existringProduct, setExistringProduct] = useState<ProductProps | null>(null);

  const { addToCart, cartProduct } = store();
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

  const newClassName = twMerge(
    'bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer',
    className
  );

  return (
    <>
      {existringProduct ? (
        <div></div>
      ) : (
        <button onClick={handleAddToCart} className={newClassName}>
          {title ? title : 'Add to cart'}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
