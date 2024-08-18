"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import '@/app/globals.css'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='flex items-center justify-between w-full bg-white p-5 box-border'>
      <Image width={50} height={50} src={'https://picsum.photos/50'} alt='logo' />
      <span>BSF 2024</span>
      <button onClick={() => setIsOpen(prev => !prev)}>Menu</button>
      <Transition in={isOpen} timeout={300} unmountOnExit>
        {state => (
          <div className={`menu-${state} p-5 box-border flex flex-col absolute w-full bg-gray-50 left-0 top-0`}>
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold text-center'>Hey Cuci!</h1>
              <button className='bg-gray-400 w-[30px] flex items-center justify-center aspect-square rounded-full'>
                <span onClick={() => setIsOpen(false)} className='text-white flex items-center justify-center w-full h-full'>x</span>
              </button>
            </div>
            <hr className='mt-2 border-2 border-black' />
            <div className='w-full'>
              <ul className='w-full'>
                <li className='w-full p-2 text-3xl uppercase tracking-wider font-bold'>
                  <Link href={'/'} className='py-5 w-full h-full flex justify-center hover:bg-gray-400'>Home</Link>
                </li>
                <li className='w-full p-2 text-3xl uppercase tracking-wider font-bold'>
                  <Link href={'/'} className='py-5 w-full h-full flex justify-center hover:bg-gray-400'>Home</Link>
                </li>
                <li className='w-full p-2 text-3xl uppercase tracking-wider font-bold'>
                  <Link href={'/'} className='py-5 w-full h-full flex justify-center hover:bg-gray-400'>Home</Link>
                </li>
                <li className='w-full p-2 text-3xl uppercase tracking-wider font-bold'>
                  <Link href={'/'} className='py-5 w-full h-full flex justify-center hover:bg-gray-400'>Home</Link>
                </li>
              </ul>
            </div>
            <Image src={'https://picsum.photos/300/100'} alt='photo' width={300} height={100} />
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Header;
