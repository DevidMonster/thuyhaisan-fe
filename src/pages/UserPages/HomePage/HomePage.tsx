import BannerHomePage from './components/BannerHomePage';
import '../../../css/hompage.css';
import MyService from './components/MyService';
import BannerSales from './components/BannerSales';
import BestSellerProducts from './components/BestSellerProducts';
// import { useGetAllLiquidationProductQuery, useGetNewProductInStorageQuery, useGetProductSoldDescLimitQuery } from '../../../services/product.service';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useGetAllCateQuery } from '../../../services/cate.service';
import { Helmet } from 'react-helmet';

const HomePage = () => {
   // const { data: liquidationProducts } = useGetAllLiquidationProductQuery()
   // const { data: ProductSoldBest } = useGetProductSoldDescLimitQuery()
   // const { data: NewProduct } = useGetNewProductInStorageQuery()
   const { data: CategoriesList } = useGetAllCateQuery({})
   const [error, setError] = useState<number | null>(null)

   const navigate = useNavigate()
   const location = useLocation();

   useEffect(() => {
      if (error == 2) {
         message.error('Email này đã bị vô hiệu hóa')
      } else if (error == 1) {
         message.warning('Vui lòng đăng nhập để vào trang này')
      }
   }, [error])

   useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      if (searchParams.toString()) {
         if (searchParams.has('err')) {
            const err: string | null = searchParams.get('err');
            if (err) {
               if (parseInt(err) == 2) {
                  setError(2)
                  navigate('/')
               } else if (parseInt(err) == 1) {
                  setError(1)
                  navigate('/')
               }
            }
         } else {
            const queryString = [...searchParams.entries()]
               .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
               .join('&');

            // Kết quả
            const result = `?${queryString}`;
            navigate('/vnpay_return' + result)
         }
      }
   }, [location, navigate]);
   return (
      <>
         <Helmet>
            <title>NƯỚC MẮM PHÚ NGHĨA | Trang chủ</title>
         </Helmet>
         <div className='main'>
            <BannerHomePage></BannerHomePage>
            <MyService />
            {(CategoriesList?.body?.data) && <BannerSales categories={CategoriesList} />}
            <BestSellerProducts />
            <section className='space lg:mt-[100px] md:mt-[80px] max-md:mt-[60px]'></section>
         </div>
      </>
   );
};

export default HomePage;
