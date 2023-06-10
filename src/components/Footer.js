import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='py-16 text-gray-400 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] flex justify-between items-center flex-wrap gap-6 sm:gap-0'>
        <div className='flex gap-6 mt-auto'>
          <FaYoutube className='w-4 h-4 cursor-pointer' />
          <FaTwitter className='w-4 h-4 cursor-pointer' />
          <FaFacebookF className='w-4 h-4 cursor-pointer' />
          <FaInstagram className='w-4 h-4 cursor-pointer' />
        </div>
        <div className='text-[12px] md:text-sm '>
          <h4 className='mb-2 md:mb-1'>©2023 MarcosSkL - Todos os direitos reservados.</h4>
          <div className='flex md:justify-end justify-start gap-4'>
            <div>Privacidade</div>    
            <div>Ajuda</div>
          
          </div>
        </div>
      </footer>
      <div className='text-white text-center pb-8 '>Desenvolvido por <a className='underline' target='_blank'rel="noreferrer" href="https://github.com/MarcosSkL">Marcos Bezerra</a></div>
    </>
  );
};

export default Footer;
