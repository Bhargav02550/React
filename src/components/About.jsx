import React from 'react';
import { AiFillAndroid } from 'react-icons/ai';

const About = () => {
  return (
    <div className="font-pop m-auto flex flex-col items-center mt-8 h-screen md:pl-20">
      <h1 className="sm:text-5xl text-3xl mb-4">About Me</h1>
      <div className='p-4 bg-transparent flex flex-col md:flex-row'>
      <div className=' items-center p-4 md:max-w-[50%] rounded-2xl border-2 border-black hover:bg-lime-400 transition ease-in duration-300 md:h-auto group'>
        <h1 className=' font-sqr text-[80px] sm:text-10 text-lime-400 transition ease-in duration-300 group-hover:text-white'>BHARGAV</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='text-white bg-black p-4 md:ml-20 md:mt-0 mt-10 rounded-2xl w-[100%] grid grid-cols-4 content-center gap-4'>
            <div className='rounded-full items-center justify-center flex'>
            <img width="100" height="100" src="https://img.icons8.com/ios/100/76ed2c/unity.png" alt="unity"/>
            </div>
            <div className='rounded-full items-center justify-center flex'>
                <img src="../src/assets/blender.svg"/>
            </div>
            <div className='rounded-full items-center justify-center flex'>
                <img src="../src/assets/c++.svg"/>
            </div>
            <div className='rounded-full items-center justify-center flex'>
                <img src="./src/assets/c-sharp.svg"/>
            </div>
            <div className='rounded-full items-center justify-center flex'>
                <img src="./src/assets/java.svg"/>
            </div>
            <div className='rounded-full items-center justify-center flex'>
                <img src="./src/assets/python.svg"/>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
