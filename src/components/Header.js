/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { HiLogout } from 'react-icons/hi';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [logout, setLogout] = useState();

  const context = useContext(AppContext);

  
  const navHandler = () => {
    if (navIsOpen) {
      document.body.style.overflow = 'unset';
      setNavIsOpen(false);
    } else {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
      setNavIsOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   
        <>
          <header className={`py-4 px-36 sm:px-0 md:px-36 lg:px-36  text-gray-50 z-10 font-bold flex justify-between items-center fixed w-full transition-all duration-500 ${isScrolled ? 'bg-[#0f0f0ffa]' : 'bg-headerGradient'} select-none`}>
            <div className='flex items-center gap-6'>
              <RxHamburgerMenu className='w-6 h-6 cursor-pointer' onClick={navHandler} />
              <Link href='/filmes' className='hidden md:block link-menu text-gray-400 no-underline'>
                Filmes
              </Link>
              <Link href='/series' className='link-menu select-none text-gray-400 no-underline'>
                Series
              </Link>
            </div>
       
            <div className='flex items-center gap-3'>
              <Link href='/search'>
                <BiSearch className='w-6 h-6 cursor-pointer' />
              </Link>
              <div className='flex items-center'>
                <div className='w-7 h-7 md:w-[38px] md:h-[38px]  rounded-full bg-profile font-semibold relative cursor-pointer '>
                  <div className=' text-orange-800 absolute w-[24px] h-[24px] md:w-[34px] md:h-[34px] uppercase rounded-full bg-[#000000cc] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center'></div>
                </div>
             
              </div>
            </div>
          </header>
          <aside className={`fixed inset-0 h-screen text-white bg-[#000000b3] transition-all duration-500  ${navIsOpen ? 'opacity-100 z-[12] block' : 'opacity-0 -z-20  '}`}>
            <div className={`py-5 px-1 md:px-60  h-screen w-fit bg-[#0f0f0f] transition-all duration-500  ${navIsOpen ? 'translate-x-[0%]' : 'translate-x-[-10%] '} overflow-auto sm:overflow-auto`}>
              <nav className=' w-56 md:w-72'>
                <RiCloseFill className='w-[30px] h-[30px] cursor-pointer relative -left-[2px] hover:text-white' onClick={navHandler} />
                <ul className='font-normal text-[19px] md:text-2xl'>
                  
                  <Link href={'/'} className='mt-6 link-menu text-gray-500 no-underline '>Pagina Inicial</Link>
                  <li className='mt-6 link-menu select-none text-gray-500 '>Populares</li>
                  <li className='mt-6 link-menu select-none text-gray-500 '>Recém Lançados</li>
                  <li className='mt-6 link-menu select-none text-gray-500 '>Últimos Dias</li>
                  <li className='mt-6 link-menu select-none text-gray-500 '>Mais Vistos</li>
                  <li className='mt-6 link-menu select-none text-gray-500 '>Tendencia</li>
                </ul>
              </nav>

             
              <div className='text-white pt-20 mt-3 text-xs'>Desenvolvido por <Link href="#" className='text-gray-400 font-bold link-menu'>Marcos Bezerra</Link></div>
            </div>
          </aside>
        </>
     
    </>
  );
};

export default Header;
