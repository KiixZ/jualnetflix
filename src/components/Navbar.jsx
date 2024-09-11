import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import images from '../assets/images'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
        return () => window.removeEventListener('scroll', changeColor)
    }, [])
    return (
        <div className={`${color ? 'bg-jembot-200 shadow-lg' : 'bg-transparent'} fixed w-full h-[60px] z-50 transition-colors duration-300 ease-in-out`}>
            <nav className='flex justify-between items-center h-full max-w-[1240px] mx-auto px-4'>
                <a href='/'>
                    <img src={images.Logonx} alt='logo' className='w-[200px] h-auto' />
                </a>
                <div className='md:hidden' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} className="text-white" />
                    ) : (
                        <FaBars size={30} className="text-white" />
                    )}
                </div>
                <ul className={`md:flex md:items-center absolute md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-gray-900 md:bg-transparent transform ${click ? 'translate-x-0' : '-translate-x-full'} md:transform-none transition-transform duration-300 ease-in-out`}>
                    <li className='text-white text-center py-6 md:py-0 md:px-4'>
                        <a href='/' className='hover:text-yellow-500' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='text-white text-center py-6 md:py-0 md:px-4'>
                        <a href='#about' className='hover:text-yellow-500' onClick={closeMenu}>About</a>
                    </li>
                    <li className='text-white text-center py-6 md:py-0 md:px-4'>
                        <a href='#pricing' className='hover:text-yellow-500' onClick={closeMenu}>Harga</a>
                    </li>
                    <li className='text-white text-center py-6 md:py-0 md:px-4'>
                        <a href='#testimoni' className='hover:text-yellow-500' onClick={closeMenu}>Testimoni</a>
                    </li>
                    <li className='text-white text-center py-6 md:py-0 md:px-4'>
                        <a href='#FAQ' className='hover:text-yellow-500' onClick={closeMenu}>F.A.Q</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
