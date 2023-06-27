import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="min-h-[55px] w-full px-8 bg-[#2291cc] dark:bg-[#010409] fixed bottom-0 shadow shadow-black flex flex-col-reverse justify-center items-center gap-2"
    >
      <div>
        <a href="">
          <i className="text-4xl fa-brands fa-square-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
