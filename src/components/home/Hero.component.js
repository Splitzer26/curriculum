import React from 'react';
import Typist from 'react-typist';
import { AngularLogotype, FlutterLogotype, JSLogotype, LinkedingLogotype, ReactLogotype, SQLServerLogotype } from '../../assets/logotypes';
function Hero() {
    function openInNewTab(url) {
        window.open(url, "_blank")
    }
    return (
        <div className='bg-[#212428]'>
            <div className='pt-10 container mx-auto text-white flex py-10 px-10'>
                <div className='grid  grow px-10 grid-cols-3'>
                    <div className='col-span-2'>
                        <div className='flex justify-start mb-3'>
                            <p className='text-md font-Montserrat'>WELCOME TO MY WORLD</p>
                        </div>
                        <div className='flex justify-start space-x-2 text-4xl font-bold font-Montserrat mb-2'>
                            <p>Hi, I'm</p>
                            <p className='text-[#0A61C9]'>Jose Cubas</p>
                        </div>
                        <div className='flex justify-start text-4xl font-bold font-Montserrat'>
                            <p>a Profesional Developer.</p>
                        </div>
                        <div className='flex justify-start text-lg mt-4 font-Poppins pr-24'>
                            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        </div>
                        <div className='flex justify-start text-md mt-4 font-Poppins'>
                            <div className='grid grow grid-cols-2'>
                                <div className=''>
                                    <p>FIND WITH ME:</p>
                                    <div className='flex space-x-2 mt-4'>
                                        <div className='p-2 border border-white shadow-md shadow-[#0A61C9] rounded-md hover:-translate-y-2'>
                                            <button onClick={() => { openInNewTab("https://www.linkedin.com/in/jacz-27021998/") }}>
                                                <img src={LinkedingLogotype} alt="linkeding logotype in svg" className='w-8' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>BEST SKILLS ON:</p>
                                    <div className='flex space-x-2 mt-4'>
                                        <div className='p-2 border border-white shadow-md shadow-[#0A61C9] rounded-md hover:-translate-y-2'>
                                            <img src={JSLogotype} alt="linkeding logotype in svg" className='w-8' />
                                        </div>
                                        
                                        <div className='p-2 border border-white shadow-md shadow-[#0A61C9] rounded-md hover:-translate-y-2'>
                                            <img src={AngularLogotype} alt="linkeding logotype in svg" className='w-8' />
                                        </div>
                                        <div className='p-2 border border-white shadow-md shadow-[#0A61C9] rounded-md hover:-translate-y-2'>
                                            <img src={ReactLogotype} alt="linkeding logotype in svg" className='w-8' />
                                        </div>
                                        <div className='p-2 border border-white shadow-md shadow-[#0A61C9] rounded-md hover:-translate-y-2'>
                                            <img src={FlutterLogotype} alt="linkeding logotype in svg" className='w-8' />
                                        </div>
                                        <div className='p-2 border border-white shadow-md shadow-[#0A61C9] rounded-md hover:-translate-y-2'>
                                            <img src={SQLServerLogotype} alt="linkeding logotype in svg" className='w-8' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className=' h-full	border border-white rounded-md shadow-[#0A61C9] shadow-md mx-auto'>
                            <div className=''>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;