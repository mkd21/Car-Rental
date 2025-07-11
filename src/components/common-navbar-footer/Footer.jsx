
import {assets} from "../../assets/all-assets/assets.js";


export default function Footer() {
    return (
        <>
            <footer className="bg-gray-50 mt-[5rem] px-6 py-12">
                <div className="max-w-7xl mx-auto font-outfit ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center mb-4">
                                <img
                                    src={assets.logo}
                                    alt="CarRental Logo"
                                    className="h-8 w-[9rem] mr-2"
                                />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                            </p>
                            <div className="flex space-x-3">
                                <img
                                    src={assets.facebook_logo}
                                    alt="Facebook"
                                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <img
                                    src={assets.instagram_logo}
                                    alt="Instagram"
                                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <img
                                    src={assets.twitter_logo}
                                    alt="Twitter"
                                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                                />
                                <img
                                    src={assets.gmail_logo}
                                    alt="Email"
                                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        Browse Cars
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        List Your Car
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-4">RESOURCES</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                                        Insurance
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-4">CONTACT</h3>
                            <div className="space-y-3">
                                <p className="text-gray-600 text-sm">
                                    1234 Luxury Drive<br />
                                    San Francisco, CA 94107
                                </p>
                                <p className="text-gray-600 text-sm">
                                    +1 (555) 123-4567
                                </p>
                                <p className="text-gray-600 text-sm">
                                    car@example.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-200 mt-8 pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm mb-4 md:mb-0">
                                © 2025 CarRental. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                                    Terms
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                                    Privacy
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                                    Cookies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}