import Header from '../components/layout/Header/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';
import { setItem } from '../slices/cartSlice';
import { setWishListName, setWishList } from '../slices/wishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useClearTokenMutation, useGetTokenQuery } from '../services/auth.service';
import { deleteTokenAndUser, saveTokenAndUser } from '../slices/authSlice';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { FloatButton, Tooltip, message } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { MdMap } from 'react-icons/md';
import { FaFacebookF, FaLink } from 'react-icons/fa6';
import { SiZalo } from "react-icons/si";
import { info } from '../constants/info';

const DefaultLayout = () => {
   const dispatch = useDispatch();
   const { data, isLoading, refetch, error } = useGetTokenQuery();
   const { pathname } = useLocation();
   const auth = useSelector((state: any) => state.userReducer);
   const [clearToken] = useClearTokenMutation();
   const navigate = useNavigate()

   useEffect(() => {
      if (!isLoading && data?.body?.data.accessToken != "") {
         dispatch(saveTokenAndUser({ accessToken: data?.body.data?.accessToken, user: data?.body.data?.data }));
         dispatch(setWishListName(data?.body.data?.data?.userName || 'wishList'));
      } else if (!isLoading && data?.body?.data.accessToken == "" && Object.keys(auth?.user).length > 0) {
         dispatch(deleteTokenAndUser())
         clearToken();
      } else if ((error as any)?.data?.status === 400) {
         message.warning((error as any)?.data?.message);
         dispatch(deleteTokenAndUser());
         clearToken();
         navigate('/login');
      }
      dispatch(setItem());
      dispatch(setWishList());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data, isLoading]);
   useEffect(() => {
      if (data?.body?.data) {
         refetch()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data?.body?.data, pathname, refetch])
   return (
      <>
         <FloatButton.Group trigger='hover' icon={<FaLink />} type='primary' shape="circle" className='bottom-[22%] right-[31px]'>
            <Tooltip title="Facebook" placement='left'>
               <a target='_blank' rel="noreferrer" className='block mt-3' href={info.facebookLink}>
                  <FloatButton icon={<FaFacebookF />} />
               </a>
            </Tooltip>
            <Tooltip title="Zalo" placement='left'>
               <a target='_blank' rel="noreferrer" className='block mt-3' href={info.zaloLink}>
                  <FloatButton icon={<SiZalo />} />
               </a>
            </Tooltip>
            <Tooltip title="Map" placement='left'>
               <a target='_blank' rel="noreferrer" className='block mt-3' href={info.mapLink}>
                  <FloatButton icon={<MdMap />} />
               </a>
            </Tooltip>
            <Tooltip title="Phone" placement='left'>
               <a className='block mt-3' href={"tel:" + info.phoneNumber}>
                  <FloatButton icon={<PhoneOutlined />} />
               </a>
            </Tooltip>
         </FloatButton.Group>
         <ScrollToTop />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default DefaultLayout;
