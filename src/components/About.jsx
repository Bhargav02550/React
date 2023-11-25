import React from 'react';

const About = () => {
  return (
    <div className=" m-auto flex flex-col items-center mt-8 h-screen md:pl-20">
      <h1 className="sm:text-5xl text-3xl mb-4">About Me</h1>
      <div className='p-4 bg-transparent flex flex-col md:flex-row'>
      <div className='p-4 md:max-w-[50%] rounded-2xl border-2 border-black hover:bg-black hover:text-white transition ease-in duration-300'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=' bg-black p-4 md:ml-20 mt-5'>
          <h1 className=' text-white'>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
