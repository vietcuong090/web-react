export interface HighlightsType {
  _id: number;
  _base: string;
  title: string;
  image: string;
  name: string;
  color: string;
  buttonTitle: string;
}
export interface CategoryProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  desciption: string;
}
export interface ProductProps {
  _id: number;
  _base: string;
  reviews: number;
  rating: number;
  quantity: number;
  overView: string;
  name: string;
  isNew: boolean;
  isStock: boolean;
  images: [string];
  description: number;
  regularPrice: number;
  discountedPrice: number;
  colors: [string];
  category: string;
  brand: string;
}
export interface BlogProps {
  _id: number;
  image: string;
  title: string;
  desciption: string;
  _base: string;
}
export interface UserType {
  currentUser: {
    firstName: number;
    lastName: string;
    email: string;
    avatar: string;
    id: string;
  };
}
export interface OrderType {
  orderItems: [ProductProps];
  paymentId: string;
  paymentMethod: string;
  userEmail: string;
}
