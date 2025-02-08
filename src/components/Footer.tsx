import { Github } from "../icons/socialIcons/Github";
import { Instagram } from "../icons/socialIcons/Instagram";
import { Linkedin } from "../icons/socialIcons/Linkedin";
import { Twitter } from "../icons/socialIcons/Twitter";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Me</h3>
                        <p onClick={() => {window.open("https://shubhhere.vercel.app")}} className="text-sm hover:text-white transition-all duration-500 cursor-pointer text-gray-400">
                            Portfolio
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-blue-400">Home</a></li>
                            <li><a href="https://shubhlinks.vercel.app" target="_blank" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/__Shubhashish__" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 hover:-translate-y-2 transition-all duration-500">
                                <Twitter/>
                            </a>
                            <a href="https://instagram.com/___shubhashish___" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 hover:-translate-y-2 transition-all duration-500">
                                <Instagram/>
                            </a>
                            <a href="https://www.linkedin.com/in/Shubhashish-Chakraborty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:-translate-y-2 transition-all duration-500">
                                <Linkedin/>
                            </a>
                            <a href="https://github.com/Shubhashish-Chakraborty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-200 hover:-translate-y-2 transition-all duration-500">
                                <Github/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} MyPrivData. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}