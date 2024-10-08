import { useState, useEffect } from 'react';
import { BsCircle, BsCheck2Circle } from 'react-icons/bs';
type Props = {
   onClick: (value: string) => Promise<void> | void;
   disable?: boolean;
   colorPrimary: string;
   value: string;
};

const ButtonCheck = ({ onClick, disable, colorPrimary, value }: Props) => {
   const [isClicked, setIsClicked] = useState<boolean>(disable || false);
   useEffect(() => {
      setIsClicked(disable || false);
   }, [disable]);
   return (
      <button
         className={`bg-white p-2 flex justify-center items-center gap-2  ${
            isClicked ? '!bg-greenP300 !text-greenP800 !border-none' : ''
         }`}
         onClick={() => {
            if (isClicked) return;
            onClick(value.toLowerCase())?.then(() => setIsClicked(true));
         }}
         style={{ color: colorPrimary, border: `1px solid ${colorPrimary}`, borderRadius: '5px' }}
      >
         {isClicked ? <BsCheck2Circle /> : <BsCircle />}
         <span className='font-bold'>{value}</span>
      </button>
   );
};

export default ButtonCheck;
