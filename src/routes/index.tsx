import DefaultLayout from '../layouts/DefaultLayout';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/AdminPages/Dashboard/Dashboard';
import ProductAdmin from '../pages/AdminPages/Product/ProductAdmin';
import AddProduct from '../pages/AdminPages/Product/AddProduct';
import CategoryAdmin from '../pages/AdminPages/Category/CategoryAdmin';
import AddCategory from '../pages/AdminPages/Category/AddCategory';
import UpdateCategory from '../pages/AdminPages/Category/UpdateCategory';
import HomePage from '../pages/UserPages/HomePage/HomePage';
import ProductPage from '../pages/UserPages/ProductPage/ProductPage';
import UpdateProduct from '../pages/AdminPages/Product/UpdateProduct';
import LoginPage from '../pages/UserPages/LoginPage/LoginPage';
import SignUpPage from '../pages/UserPages/SignUpPage/SignUpPage';
import CartPage from '../pages/UserPages/CartPage/CartPage';
import NotFoundPage from '../pages/UserPages/NotFoundPage/NotFoundPage';
import ShipmentPage from '../pages/AdminPages/Shipment/ShipmentPage';
import AddShipment from '../pages/AdminPages/Shipment/AddShipment';
import ProductDetail from '../pages/UserPages/ProductDetailPage/ProductDetailPage';
import CheckOutPage from '../pages/UserPages/CheckOutPage/CheckOutPage';
import OrderCompletePage from '../pages/UserPages/OrderCompletePage/OrderCompletePage';
import OrderPage from '../pages/UserPages/OderPage/OrderPage';
import OrderDetail from '../pages/UserPages/OderPage/OrderDetail';
import OrdersAdmin from '../pages/AdminPages/Orders/OrdersAdmin';
import ContactPage from '../pages/UserPages/ContactPage/ContactPage';
import IntroducePage from '../pages/UserPages/IntroducePage/IntroducePage';
import VoucherAdmin from '../pages/AdminPages/Voucher/VoucherAdmin';
import AddVoucher from '../pages/AdminPages/Voucher/AddVoucher';
import UpdateVoucher from '../pages/AdminPages/Voucher/UpdateVoucher';

import ChatAdmin from '../pages/AdminPages/Chat/ChatAdmin';

import Evaluation from '../pages/AdminPages/Evaluation/Evaluation';
import OriginAdmin from '../pages/AdminPages/Origins/OriginAdmin';
import AddOrigin from '../pages/AdminPages/Origins/AddOrigin';
import UpdateOrigin from '../pages/AdminPages/Origins/UpdateOrigin';
import UserInfoPage from '../pages/UserPages/UserInfoPage/UserInforPage';
import UnSoldProduct from '../pages/AdminPages/UnSoldProduct/UnSoldProduct';
import ForgetPassword from '../pages/UserPages/ForgetPassword/ForgetPassword';
import WishListPage from '../pages/UserPages/WishListPage/WishListPage';
import ChangePassword from '../pages/UserPages/ChangePassword/ChangePassword';
import Account from '../pages/AdminPages/Account/Account';
import PrivacyPolicyPage from '../pages/UserPages/PolicyPage/PrivacyPolicyPage';
import DeliveryPolicyPage from '../pages/UserPages/PolicyPage/DeliveryPolicyPage';
import PaymentPolicyPage from '../pages/UserPages/PolicyPage/PaymentPolicyPage';
import UpdateShipment from '../pages/AdminPages/Shipment/UpdateShipment';

const router = [
   {
      path: '/',
      name: "Default Page",
      element: <DefaultLayout />,
      children: [
         {
            path: '/',
            name: "Home Page",
            element: <HomePage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/collections',
            name: "Product Page",
            element: <ProductPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/login',
            name: "Login Page",
            element: <LoginPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/signup',
            name: "Signup Page",
            element: <SignUpPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/cart',
            name: "Cart Page",
            element: <CartPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/orders',
            name: "Order Page",
            element: <OrderPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/products/:id',
            name: "Product Detail",
            element: <ProductDetail />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/checkout',
            name: "Checkout Page",
            element: <CheckOutPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: '/orderComplete',
            name: "Order Complete Page",
            element: <OrderCompletePage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'my-order/:id',
            name: "Order Detail Page",
            element: <OrderDetail />,
            errorElement: <NotFoundPage />,
         },
         {
            path: 'contact',
            name: "Contact Page",
            element: <ContactPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'introduct',
            name: "Introduction Page",
            element: <IntroducePage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'userInformation',
            name: "User Information Page",
            element: <UserInfoPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'forgetPassword',
            name: "Forget Pass Page",
            element: <ForgetPassword />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'wishList',
            name: "Wish List Page",
            element: <WishListPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'changePassword',
            name: "Change Password Page",
            element: <ChangePassword />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'policy/privacy-policy',
            name: "Privacy Policy Page",
            element: <PrivacyPolicyPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'policy/payment-policy',
            name: "Payment Policy Page",
            element: <PaymentPolicyPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'policy/delivery-policy',
            name: "Delivery Policy Page",
            element: <DeliveryPolicyPage />,
            errorElement: <NotFoundPage />
         },
      ]
   },
   {
      path: '*',
      name: "Not Found Page",
      element: <NotFoundPage />,
      errorElement: <NotFoundPage />
   },
   {
      path: '/manage',
      name: "Admin Page",
      element: <AdminLayout />,
      errorElement: <NotFoundPage />,
      children: [
         {
            path: '',
            name: "Dashboard",
            element: <Dashboard />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'dashboard',
            name: "Dashboard Page",
            element: <Dashboard />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'products',
            name: "Products Page",
            element: <ProductAdmin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'add-product',
            name: "Add Product Page",
            element: <AddProduct />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'categories',
            name: "Category List Page",
            element: <CategoryAdmin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'add-category',
            name: "Add Category Page",
            element: <AddCategory />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'update-category/:id',
            name: "Update Category Page",
            element: <UpdateCategory />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'products/:id',
            name: "Update Products Page",
            element: <UpdateProduct />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'shipments',
            name: "Shipments Page",
            element: <ShipmentPage />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'add-shipment',
            name: "Add Shipment Page",
            element: <AddShipment />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'update-shipment/:id',
            name: "Update Shipment Page",
            element: <UpdateShipment />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'orders',
            name: "Order Page",
            element: <OrdersAdmin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'vouchers',
            name: "Voucher List Page",
            element: <VoucherAdmin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'add-voucher',
            name: "Add Voucher Page",
            element: <AddVoucher />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'update-voucher/:id',
            name: 'Update Voucher Page',
            element: <UpdateVoucher />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'chat',
            name: 'Chat Page',
            element: <ChatAdmin />
         },
         {
            path: 'evaluation',
            name: 'Evaluation Page',
            element: <Evaluation />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'origin',
            name: 'Origin Page',
            element: <OriginAdmin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'add-origin',
            name: "Add Origin Page",
            element: <AddOrigin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'update-origin/:id',
            name: "Update Origin Page",
            element: <UpdateOrigin />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'unsoldproduct',
            name: "Unsold Product Page",
            element: <UnSoldProduct />,
            errorElement: <NotFoundPage />
         },
         {
            path: 'account',
            name: "Account Page",
            element: <Account />,
            errorElement: <NotFoundPage />
         },
      ]
   }
]

export default router;
