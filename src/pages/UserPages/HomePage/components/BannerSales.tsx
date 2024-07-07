import { Link } from 'react-router-dom';
import { IResponse } from '../../../../interfaces/base';
import { ICategories } from '../../../../interfaces/category';
import { Fragment } from 'react';
import ShowProducts from '../../ProductPage/components/ShowProducts';
import { useGetAllExpandQuery } from '../../../../services/product.service';
import { Spin } from 'antd';

interface Props {
   categories: IResponse<ICategories[]> | undefined
}

const BannerSales = ({ categories }: Props) => {
   const { data: products, isLoading } = useGetAllExpandQuery({
      expand: true,
   })
   return (
      <div className=''>
         <section className='section-banner'>
            <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px] lg:w-[970px] md:w-[750px]'>
               <div className='banner-content flex flex-col gap-[50px]'>
                  {categories?.body.data.map((category, index: number) => {
                     if (category.cateName.toLowerCase() !== "chưa phân loại" && category.type === "special") {
                        return (
                           <div key={index} className='h-full banner-item border-b border-gray-300 pb-[50px]'>
                              <div className='best-product-header text-center mb-[10px]'>
                                 <p className='best-product-title text-color3rd font-bold mb-[10px]'>NƯỚC MẮM PHÚ NGHĨA</p>
                                 <p className='primary-font-bg font-bold  lg:text-[28px] md:text-[23px]  max-md:text-[20px]'>
                                    {category.cateName}
                                 </p>
                              </div>
                              {isLoading ?
                                 <div className='my-10 flex justify-center items-center'>
                                    <Spin size='large' />
                                 </div>
                                 : (
                                    <>
                                       <ShowProducts data={products} filterByCateId={category._id}></ShowProducts>
                                       <div className='link-to-product-page text-center mt-[40px] '>
                                          <Link
                                             className='text-white px-[40px] py-[18px] bg-color3rd hover:bg-color1st transition-colors duration-500 rounded-[10px] text-center'
                                             to={"/collections?cate_id=" + category._id}
                                          >
                                             XEM THÊM
                                          </Link>
                                       </div>
                                    </>
                                 )}
                           </div>
                        )
                     } else {
                        return <Fragment key={index}></Fragment>
                     }
                  })}
               </div>
            </div>
         </section>
      </div>
   );
};

export default BannerSales;
