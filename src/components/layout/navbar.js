import React from 'react';
import { useState } from 'react';
import { JCLogotype } from '../../assets/logotypes';
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {

            setIsOpen(true)
        }
    }
    return (
        <div className='bg-[#212428]'>
            <nav className="mx-auto container py-4 text-white">
                <ul className='flex px-4 md:px-0 items-center justify-between'>
                    <div className='grow'>
                        <img src={JCLogotype} className="h-10" alt='Jose Cubas Logotipo' />
                    </div>
                    <div className='space-x-4 sm:flex hidden'>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#projects">Projects</a></li>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#features">Features</a></li>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#portfolio">Portfolio</a></li>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#resume">Resume</a></li>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#testimonials">Testimonials</a></li>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#clients">Clients</a></li>
                        <li className='text-white hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><a href="#contact">Contact</a></li>
                    </div>
                    <div className='sm:hidden'>
                        <button onClick={toggleDrawer} className='p-1 rounded-full border-2 shadow-blue-400 shadow-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='left'
                            className='text-white'
                        >
                            <div className='text-black bg-[#212428] container h-full'>
                                <div className='container mx-auto px-4 py-4'>
                                    <div className='flex justify-between border-b-[0.01rem] border-white pb-4'>
                                        <div>
                                            <img src={JCLogotype} className="h-10" alt='Jose Cubas logotype' />
                                        </div>
                                        <button onClick={toggleDrawer} className="px-3 rounded-full border-2 shadow-blue-400 shadow-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='flex text-white text-center text-sm py-4'>
                                        <p>
                                            Esta es mi pagina oficial, cuarquier detalle de mi vida profesional lo puedes encontrar aqui.
                                        </p>
                                    </div>
                                    <div className='flex-row space-y-4 pt-4 text-white border-t border-white'>
                                        <li><a href="#projects">PROJECTS</a></li>
                                        <li><a href="#features">FEATURES</a></li>
                                        <li><a href="#portfolio">PORTFOLIO</a></li>
                                        <li><a href="#resume">RESUME</a></li>
                                        <li><a href="#testimonials">TESTIMONIAL</a></li>
                                        <li><a href="#clients">CLIENTS</a></li>
                                        <li><a href="#contact">CONTACT</a></li>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;