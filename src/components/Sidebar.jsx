import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
    return (
        <div className='bg-gray-800 rounded-lg overflow-hidden'>
            <img
                className='w-full h-20 object-cover'
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='flex flex-col items-center'>
                {/* <Image src={} alt="" /> */}
                <span>Christian Borges</span>
                <span>Front End</span>
            </div>
            <footer className='border-t-gray-600 mt-6 py-6 px-8'>
                <Link className='w-full bg-transparent text-green-500 border border-green-500 rounded-lg h-14 py-6 font-bold flex items-center justify-center' 
                    href='#'>Editar seu perfil</Link>
            </footer>
        </div>
    )
} 