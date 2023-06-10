import { AppContext } from '@/context/AppContext';
import React, { useContext, useEffect, useState } from 'react';
import { BiPlay } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';

const Controls = ({ handleAddToList, handleRemoveFromList, movie }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { myList } = useContext(AppContext);

  useEffect(() => {
    if (myList?.find((listMovie) => listMovie.id === movie.id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [myList]);

  const add = (e) => {
    handleAddToList(e, movie);
    setIsAdded(true);
  };

  const remove = (e) => {
    handleRemoveFromList(e, movie);
    setIsAdded(false);
  };

  return (
    <div className='opacity-0 absolute group-hover/btn:opacity-100 bottom-0 right-0 pr-4 pb-3 flex items-center transition-all duration-300'>
      <button aria-label='Play' className='rounded-full flex justify-center items-center p-[2px] bg-slate-300 hover:bg-white hover:scale-110'>
        <BiPlay className='relative left-[2px] w-8 h-8' />
      </button>
      {!isAdded ? (
        <button aria-label='adicionar nos favoritos' onClick={(e) => add(e)} className='ml-2 rounded-full flex justify-center items-center p-2 bg-slate-300 hover:bg-white hover:scale-110'>
          <HiPlus className=' w-5 h-5' />
        </button>
      ) : (
        <button aria-label='adicioonar a minha lista' onClick={(e) => remove(e)} className='ml-2 rounded-full flex justify-center items-center p-2 bg-slate-300 hover:bg-white hover:scale-110'>
          <BsCheck2 className=' w-5 h-5' />
        </button>
      )}
    </div>
  );
};

export default Controls;
