import { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { logo } from '../assets';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { FiUser, FiStar, FiShoppingBag } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import Container from './Container';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { getData } from '../lib';
import { CategoryProps, ProductProps } from '../../type';
import { filter } from 'lodash';
import ProductCard from './ProductCard';
import { store } from '../lib/store';

const bottomNavigation = [
  { title: 'Home', link: '/' },
  { title: 'Shop', link: '/product' },
  { title: 'Cart', link: '/cart' },
  { title: 'Order', link: '/order' },
  { title: 'My Account', link: '/profile' },
  { title: 'Blog', link: '/blog' },
];

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterdProducts] = useState([]);
  const { cartProduct, favoriteProduct } = store();

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/products`;
      // console.log("Endpoint:", endpoint);
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      // console.log("Endpoint:", endpoint);
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterd = products.filter((item: ProductProps) =>
      item.name.toLocaleLowerCase().includes(searchText.toLowerCase())
    );
    setFilterdProducts(filterd);
  }, [searchText]);

  return (
    <div className='w-full bg-whiteText md:fixed md:top-0 z-50'>
      <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
        {/* Logo */}
        <Link to={'/'}>
          <img src={logo} alt='logo' className='w-44' />
        </Link>
        {/* SearchBar */}
        <div className='hidden md:inline-flex max-w-3xl w-full relative ml-4'>
          {' '}
          {/* Thêm class ml-4 để tạo khoảng cách */}
          <input
            type='text'
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder='Search products...'
            className='w-full flex-1 rounded-full
             text-gray-900 text-lg 
             placeholder:text-base 
             placeholder:tracking-wide 
             shadow-sm ring-1 ring-inset 
             ring-gray-300 
             placeholder:text-gray-400 
             placeholder:font-normal focus:ring-1
             focus:ring-darkText sm:text sm:text-sm px-4 py-2'
          />
          {searchText ? (
            <span
              onClick={() => setSearchText('')}
              className='absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer
            duration-200'
            >
              <IoClose />
            </span>
          ) : (
            <span className='absolute top-2.5 right-4 text-xl'>
              <IoSearchOutline />
            </span>
          )}
        </div>
        {/* Search product will go here */}
        {searchText && (
          <div
            className='absolute left-0 top-20 w-full mx-auto max-h-[500px]
            px-10 py-5 bg-white z-20 overflow-y-auto text-black
            shadow-lg shadow-skyText scrollbar-hide'
          >
            {filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {filteredProducts?.map((item: ProductProps) => (
                  <ProductCard key={item?._id} item={item} setSearchText={setSearchText} />
                ))}
              </div>
            ) : (
              <div
                className='py-10 bg-gray-50 w-full flex items-center
              justify-center border border-gray-600 rounded-md'
              >
                <p className='text-xl font-normal'>
                  Nothing matches with your keywords
                  <span
                    className='underline underline-offset-2 decoration-[1px]
                  text-red-500 font-semibold'
                  >{`(${searchText})`}</span>
                  . Plllease try again
                </p>
              </div>
            )}
          </div>
        )}
        {/* menubar */}
        <div className='flex items-center gap-x-6 text-2xl'>
          <Link to={'/profile'} className='relative block'>
            <span className='hover:text-skyText duration-200 cursor-pointer'>
              <FiUser />
            </span>
          </Link>
          <Link to={'/favorite'} className='relative block'>
            <span className='hover:text-skyText duration-200 cursor-pointer'>
              <FiStar />
            </span>
            <span
              className='inline-flex items-center justify-center bg-redText
          text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4
          h-4'
            >
              {favoriteProduct?.length > 0 ? favoriteProduct?.length : '0'}
            </span>
          </Link>
          <Link to={'/cart'} className='relative block'>
            <span className='hover:text-skyText duration-200 cursor-pointer'>
              <FiShoppingBag />
            </span>
            <span
              className='inline-flex items-center justify-center bg-redText
          text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4
          h-4'
            >
              {cartProduct?.length > 0 ? cartProduct?.length : '0'}
            </span>
          </Link>
        </div>
      </div>
      <div className='w-full bg-darkText text-whiteText'>
        <Container className='py-2 max-w-4xl flex items-center gap-5 justify-between'>
          <Menu>
            <MenuButton
              className='inline-flex items-center ga[-2
              rounded-md border border-gray-400 hover:border-white py-1.5 px-3
              font-semibold text-gray-300 hover:text-whiteText'
            >
              Select Category{' '}
              <span className='text-base mt-1'>
                <FaChevronDown />
              </span>
            </MenuButton>
            <Transition
              enter='transition ease-out duration-75'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <MenuItems
                anchor='bottom end'
                className='w-52
              origin-top-right rounded-xl border border-white/5
              bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var
              (--spacing-1)] focus:outline-noe hover:text-white z-50'
              >
                {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className='flex w-full items-center gap-2
                  rounded-lg py-2 px-3 data-[focus]:bg-white/20
                  tracking-wide'
                    >
                      <img src={item?.image} alt='categoryImage' className='w-6 h-6 rounded-md' />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className='uppercase hidden md:inline text-sm
                font-semibold
                text-whiteText/90
                hover:text-whiteText duration-200
                relative overflow-hidden group'
            >
              {title}
              <span
                className='inline-flex w-full
                h-[1px] bg-whiteText absolute bottom-0 left-0 transform
                -translate-x-[105%] group-hover:translate-x-0
                duration-300'
              ></span>
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;
//5:00:30
