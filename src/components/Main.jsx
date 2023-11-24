import React from 'react'
import { TypeAnimation  } from 'react-type-animation'
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitch, FaTwitter, FaTwitterSquare }from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className="w-full h-screen object-cover object-left " src="https://wallpaperaccess.com/full/1470805.jpg" alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Bhargav</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-900'>
                I'm a
                <TypeAnimation 
                    sequence={
                        [
                            "Game Developer",
                            2000,
                            "Flutter Developer",
                            2000,
                            "Fullstack Developer",
                        ]
                    }
                    wrapper='div'
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize: "1em", paddingLeft: '5px'}}
                />
            </h2>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
                <FaTwitter  className="cursor-pointer" size={20} />
                <FaInstagram className="cursor-pointer" size={20} />
                <FaLinkedin className="cursor-pointer" size={20} />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Main