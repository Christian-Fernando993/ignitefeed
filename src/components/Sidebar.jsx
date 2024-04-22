'use strict'
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

import Avatar from '@/assets/Avatar.jpg'
import Capa from '@/assets/Capa.avif'

import { GoPencil } from "react-icons/go";

export function Sidebar() {
    return (
        <div className='bg-gray-800 rounded-lg overflow-hidden'>
            <Image 
                className='w-full h-20 object-cover'
                src={Capa} 
                alt='' />
            <div className='flex flex-col items-center -mt-8'>
                <Image 
                    className='w-16 h-16 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500'
                    src={Avatar} 
                    alt='' 
                    width={'auto'}
                />
                <strong className='mt-4 text-gray-100 leading-6'>Christian Borges</strong>
                <span className='text-sm text-gray-400 leading-6'>Front End</span>
            </div>
            <footer className='mt-6 py-6 px-8 border border-transparent border-t-gray-600'>
                <Link
                    className='
                        w-full bg-transparent text-green-500 border border-gray-500 rounded-lg h-14 py-6 font-bold flex items-center justify-center gap-3
                            hover:bg-green-500 hover:text-white hover:border-green-500 transition 
                        ' 
                    href='#'
                >
                    <GoPencil size={20} />
                    Editar seu perfil
                </Link>
            </footer>
        </div>
    )
} 