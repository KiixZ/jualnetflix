import React from 'react'
import bg from '../assets/img/netflix.png'

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-overlay text-white">
            <div 
                className="absolute inset-0 bg-center bg-cover filter blur-sm z-negative"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className="relative h-full flex flex-col justify-center max-w-4xl mx-auto px-4">
                <p className="italic text-base"> {/* Placeholder for first p element */} </p>
                <p className="text-2xl"> {/* Placeholder for second p element */} </p>
                <p className="text-5xl font-bold">REVS-STORE</p>
                <p className="text-2xl italic">MENJUAL AKUN NETFLIX MURAH BERGARANSI</p>
                <button className="mt-4 w-72 bg-teal-200 border border-teal-300 text-gray-800 hover:bg-teal-400 hover:border-teal-400">
                    {/* Button text */}
                </button>
            </div>
        </div>
    )
}

export default Hero
