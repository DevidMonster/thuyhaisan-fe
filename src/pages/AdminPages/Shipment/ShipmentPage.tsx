import { Card, ConfigProvider, Dropdown, Layout, Modal, Pagination } from 'antd';
import { useGetAllShipmentExpandQuery, useUpdateShipmentMutation } from '../../../services/shipment.service';
import { formatStringToDate } from '../../../helper';
import ShipmentItem from './components/ShipmentItem';
import ThreeDotsIcon from '../../../components/Icons/ThreeDots';
import { Helmet } from 'react-helmet';
import HeadPage from '../../../components/HeadPage/HeadPage';
import '../../../css/config-antd.css';
import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import PencilIcon from '../../../components/Icons/PencilIcon';
import dayjs from 'dayjs';
const ShipmentPage = () => {
   const [page, setPage] = useState<number>(1);
   const { data } = useGetAllShipmentExpandQuery({ page, limit: 6 }, { refetchOnMountOrArgChange: true });
   console.log(data?.body.pagination.totalItems);
   const [handleUpdateShipment] = useUpdateShipmentMutation();
   const navigate = useNavigate()

   return (
      <>
         <Helmet>
            <title>Quản lý lô hàng</title>
         </Helmet>
         <Layout
            style={{ minHeight: '100vh', width: '100%' }}
         >
            <HeadPage title='Lô hàng' linkButton='/manage/add-shipment' titleButton='Tạo lô hàng mới' />
            <div className='relative'>
               {data?.body?.data?.length && data?.body?.data?.length > 0 ? (
                  <div className='grid min-h-[300px] xl:grid-cols-3 gap-4 mt-[50px] pb-[100px] grid-cols-2'>
                     {
                        data?.body.data.map((shipment) => (
                           <ConfigProvider
                              key={shipment._id}
                              theme={{
                                 components: {
                                    Modal: {
                                       colorPrimary: '#80b235',
                                       colorPrimaryBg: '#80b235'
                                    }
                                 }
                              }}
                           >
                              <Card
                                 className='max-h-[400px]  relative'
                                 title={
                                    <div className='flex justify-between items-center '>
                                       <span>Lô hàng ngày {formatStringToDate(shipment.createdAt)} </span>
                                       {!shipment.isDisable && (
                                          <Dropdown
                                             trigger={['click']}
                                             placement='topRight'
                                             dropdownRender={() => (
                                                <div className='flex flex-col gap-3 items-start bg-white rounded-sm p-3 border-[1px] border-[rgba(0,0,0,0.1)] z-50'>
                                                   {!shipment.isDisable && (
                                                      <>
                                                         <div
                                                            onClick={() =>
                                                               Modal.confirm({
                                                                  type: 'error',
                                                                  title: 'Bạn muốn dừng toàn bộ lô hàng này ?',
                                                                  content:
                                                                     'Toàn bộ số lượng sản phẩm trong lô hàng sẽ bị chuyển thành trạng thái hỏng và không thể bán.',
                                                                  onOk: () =>
                                                                     handleUpdateShipment({
                                                                        isDisable: true,
                                                                        products: shipment?.products?.map((data) => ({
                                                                           idProduct: data.idProduct._id,
                                                                           productName: data.productName,
                                                                           date: dayjs(data.date),
                                                                           originWeight: +data.originWeight,
                                                                           originPrice: data.originPrice
                                                                        })),
                                                                        totalMoney: shipment.totalMoney,
                                                                        idShipment: shipment._id
                                                                     })
                                                               })
                                                            }
                                                            className='text-slate-500 w-full flex items-center gap-2 cursor-pointer hover:text-red-400 duration-300'
                                                         >
                                                            <span className='text-redTextColor'><BiTrash className='text-[20px] w-[20px]' /></span>
                                                            <span>Tạm dừng lô hàng</span>
                                                         </div>
                                                         <div
                                                            onClick={() => navigate('/manage/update-shipment/' + shipment._id)}
                                                            className='text-slate-500 w-full flex items-center gap-2 cursor-pointer hover:text-red-400 duration-300'
                                                         >
                                                            <span className='text-redTextColor'><PencilIcon className='text-[15px] w-[20px]' /></span>
                                                            <span>Chỉnh sửa</span>
                                                         </div>
                                                      </>
                                                   )}
                                                </div>
                                             )}
                                          >
                                             <button className='w-[30px] h-[30px] duration-300 rounded-full hover:bg-greenbbf7d0 flex justify-center items-center '>
                                                <ThreeDotsIcon className='fill-slate-300 hover:text-white' />
                                             </button>
                                          </Dropdown>
                                       )}
                                    </div>
                                 }
                                 key={shipment._id}
                              >
                                 <ShipmentItem shipment={shipment} />
                              </Card>
                           </ConfigProvider>
                        ))
                     }
                  </div>
               ) : (
                  <p className='text-center w-full block py-20 text-xl font-bold'>Chưa có lô hàng</p>
               )}
               <Pagination
                  onChange={(page) => setPage(page)}
                  total={data?.body.pagination.totalItems}
                  pageSize={6}
                  className='absolute right-12 bottom-0'
               />
            </div>
         </Layout>
      </>
   );
};

export default ShipmentPage;
