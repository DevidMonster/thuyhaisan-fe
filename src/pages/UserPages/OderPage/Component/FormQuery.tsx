import { useState } from 'react';
import { Input } from 'antd';
import { BiSearchAlt } from 'react-icons/bi';
import React from 'react';
type Props = {
   handleSubmit: (query: string) => void;
};
const FormQuery = React.memo(({ handleSubmit }: Props) => {
   const [query, setQuery] = useState<string>('');
   return (
      <div className='w-full'>
         <span>Tìm kiếm đơn hàng</span>
         <div className='relative w-full flex justify-start items-center gap-[20px] mt-4'>
            {' '}
            <Input
               className='max-w-[60%] p-2 text-color3rd hover:!bg-color1st  font-semibold text-md'
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder='Nhập mã đơn hàng của bạn...'
               required
            />
            <button
               type='button'
               onClick={() => handleSubmit(query.trim())}
               className='py-[11px] rounded-[10px] px-6 bg-color3rd hover:bg-color1st duration-300'
            >
               <BiSearchAlt className='text-white text-lg ' />
            </button>
         </div>
      </div>
   );
});

export default FormQuery;
