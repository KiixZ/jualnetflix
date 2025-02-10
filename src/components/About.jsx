import React from 'react'
import images from '../assets/images'
import { FaWhatsapp } from 'react-icons/fa'

const About = () => {
    return (
        <div className='bg-[#F4F8FC] py-32 px-4 w-full flex justify-center' id='about'>
            <div className='w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4'>
                <img src={images.Why} alt='john' className='w-full max-w-[600px] h-auto md:max-w-[600px] md:h-[550px]'/>
                <div className='flex flex-col justify-center items-center p-12'>
                    <h2 className='text-3xl'>Kenapa Harus Kami?</h2>
                    <span className='block w-16 h-1 bg-black my-4'></span>
                    <p className='my-8'>Karena kami memberikan pelayanan yang memuaskan dengan harga yang murah, proses cepat, admin responsive, kami juga memberikan garansi, jadi anda tidak perlu khawatir.</p>
                    <p className='text-xl italic font-semibold'>Berminat Membeli? Hubungi Admin WA Kami</p>
                    <div className='mt-6'>
                        <a
                            href="https://api.whatsapp.com/send?phone=6282112439632&text=Halo, Saya ingin membeli akun netflix shared non garansi"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                        >
                            <FaWhatsapp className='mr-2' />
                            0821-1243-9632
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
