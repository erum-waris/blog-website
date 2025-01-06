import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-200 via-purple-500 to-pink-600 text-black py-10 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo and About Section */}
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <Image
                            src="/images/parentinglogo.png" 
                            alt="Parenting World Logo"
                            width={100}
                            height={100} 
                            className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        />
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1">
                            Parenting World
                        </h1>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg">
                        Empowering parents with resources, advice, and tools to navigate the journey of raising children. Stay connected for helpful tips and support.
                    </p>
                </div>

                {/* Quick Links */}
                <div className='md:ml-20'>
                    <span className="text-md md:text-lg lg:text-xl font-semibold mb-4 hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 ">Quick Links</span>
                    <ul className="space-y-2 my-5">
                        <li>
                            <Link href="/" className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition text-sm md:text-base lg:text-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition text-sm md:text-base lg:text-lg">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition text-sm md:text-base lg:text-lg">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#ece6e8] hover:border-b hover:border-white hover:py-1 transition text-sm md:text-base lg:text-lg">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div>
                    <span className="text-md md:text-lg lg:text-xl font-semibold mb-4 hover:text-[#ece6e8] hover:border-b hover:border-white my-5 hover:py-1">Follow Us</span>
                    <div className="flex space-x-4 py-5">
                        <Link
                            href="#!"
                            className="bg-white text-pink-500 rounded-full p-3 hover:bg-gray-600 hover:text-white  transition"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="#!"
                            className="bg-white text-blue-400 rounded-full p-3 transition  hover:bg-gray-600 hover:text-white"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href="#!"
                            className="bg-white text-pink-600 rounded-full p-3 transition  hover:bg-gray-600 hover:text-white"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href="#!"
                            className="bg-white text-blue-700 rounded-full p-3  transition  hover:bg-gray-600 hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 text-center text-xs md:text-sm lg:text-base text-gray-100 border-t border-gray-200 pt-5">
                © {new Date().getFullYear()} Parenting World. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
