import { Helmet } from 'react-helmet';
import { Layout, Card, Popover, Popconfirm, Button } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { useGetAllCateQuery, useRemoveCategoryByIdMutation } from '../../../services/cate.service';
import { useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
// import { itemsClientMenu } from "./ItemDropdown";
const CategoryAdmin = () => {
   const [valueSearch, setValueSearch] = useState<string>('');
   const searchDebounce = useDebounce(valueSearch, 500);
   const { data, isLoading } = useGetAllCateQuery({ q: searchDebounce });
   const [removeCategory] = useRemoveCategoryByIdMutation();
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleDelete = (id: any) => {
      removeCategory(id);
   };
   // const [openModal, setOpenModal] = useState<boolean>(false)
   return (
      <>
         <Helmet>
            <title>Danh mục</title>
         </Helmet>

         <Layout style={{ minHeight: '100vh', display: 'flex', position: 'relative', width: '100%' }}>
            <div className='flex-1 flex justify-center items-center flex-col mt-10 w-[100%]'>
               <div className='flex justify-between items-center w-[90%]'>
                  <h1 className='text-3xl font-semibold text-[rgba(0,0,0,0.7)]'>Danh mục</h1>

                  <Link to='/manage/add-category'>
                     <button className='bg-color3rd duration-100 hover:bg-color1st text-white text-lg p-2 font-semibold rounded-lg flex justify-start items-center gap-2'>
                        <PlusCircleOutlined style={{ color: 'white' }} />
                        Danh mục mới
                     </button>
                  </Link>
               </div>

               <div className='w-[90%] min-h-[100vh] bg-white rounded-lg mt-5'>
                  <header className='flex justify-start gap-4 items-center px-5 py-5'>
                     <div className='flex justify-between items-center max-w-[50%] gap-2 rounded-[100px] border-[1px] border-[#80b235] p-2'>
                        <SearchOutlined style={{ fontSize: '1rem', color: '#80b235' }} />
                        <input
                           value={valueSearch}
                           onChange={(e) => setValueSearch(e.target.value)}
                           type='text'
                           className='text-sm outline-none border-none w-full flex-1'
                           placeholder='Tìm kiếm danh mục'
                        />
                        {valueSearch !== '' && (
                           <button
                              className='flex justify-center items-center rounded-full text-color3rd hover:!bg-color1st  bg-[#80b23552] w-4 h-4  pb-1'
                              onClick={() => setValueSearch('')}
                           >
                              x
                           </button>
                        )}
                     </div>
                  </header>

                  <div className='flex gap-7 flex-wrap justify-start  items-center' style={{ margin: 30 }}>
                     {isLoading
                        ? 'loading'
                        : data?.body.data.map((cate, index) => {
                           return (
                              <Card
                                 style={{
                                    backgroundImage: `url(${cate.image?.url})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                 }}
                                 className={`w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  bg-cover max-w-sm bg-slate-50 text-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
                                 key={index}
                              >
                                 <div className='flex justify-between '>
                                    <p
                                       style={{
                                          WebkitLineClamp: '1',
                                          wordBreak: 'break-word',
                                          overflowWrap: 'break-word',
                                          textOverflow: 'ellipsis',
                                          overflow: 'hidden',
                                          display: '-webkit-box',
                                          WebkitBoxOrient: 'vertical'
                                       }}
                                       className='text-lg bg-gray-300 rounded-md block p-1 font-medium max-w-[70%] dark:text-white mb-5'
                                    >
                                       {cate?.cateName}
                                    </p>
                                    <div className='relative'>
                                       <Popover
                                          content={() => (
                                             <div
                                                id='dropdown'
                                                className=' text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700'
                                             >
                                                <ul className='py-2' aria-labelledby='dropdownButton'>
                                                   <li>
                                                      <Link to={'/manage/update-category/' + cate?._id}>
                                                         <button
                                                            type='button'
                                                            className='focus:outline-none text-black  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                                                         >
                                                            Chỉnh sửa
                                                         </button>
                                                      </Link>
                                                   </li>
                                                   <li>
                                                      {cate.type != 'default' && (
                                                         <Popconfirm
                                                            className={``}
                                                            description='Bạn chắc chắn muốn xóa danh mục chứ?'
                                                            okText='Đồng ý'
                                                            cancelText='Hủy bỏ'
                                                            title='Bạn có muốn xóa?'
                                                            onConfirm={() => handleDelete(cate?._id)}
                                                         >
                                                            <button
                                                               type='button'
                                                               className='focus:outline-none text-black  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                                                            >
                                                               Xóa
                                                            </button>
                                                         </Popconfirm>
                                                      )}
                                                   </li>
                                                </ul>
                                             </div>
                                          )}
                                          trigger='click'
                                       >
                                          <Button
                                             id='dropdownButton'
                                             size="large"
                                             shape='circle'
                                             data-dropdown-toggle='dropdown'
                                             className='flex justify-center items-center !bg-gray-300 text-sm p-1.5'
                                             htmlType='button'
                                          >
                                             {/* <span className="sr-only">Open dropdown</span> */}
                                             <svg
                                                className='w-5 h-5'
                                                aria-hidden='true'
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='currentColor'
                                                viewBox='0 0 16 3'
                                             >
                                                <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
                                             </svg>
                                          </Button>
                                       </Popover>
                                    </div>
                                 </div>
                              </Card>
                           );
                        })}
                  </div>
               </div>
            </div>
         </Layout>
      </>
   );
};

export default CategoryAdmin;
