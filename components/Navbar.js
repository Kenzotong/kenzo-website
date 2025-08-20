
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp} from 'lucide-react';
import { workCategories } from '../data/mockData';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import Image component for optimized images

const Navbar = ({ currentPage, setCategory }) => { // Removed setCurrentPage from props
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    
    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const handleNav = (page, category = 'Exposition') => { 
        setSidebarOpen(false);
        setDropdownOpen(false);

        if (page === 'Home') {
            router.push('/');
        } else if (page === 'About') {
            router.push('/about');
        } else if (page === 'Contact') {
            router.push('/contact');
        } else if (page === 'Work') {
            // For work categories, navigate to the specific route
            router.push(`/${category.toLowerCase()}`); 
            setCategory(category); // Update category state in _app.js if needed by other components
        }
        // No need to call setCurrentPage here, _app.js handles it based on router.pathname
    };

    const NavLink = ({ page, children }) => (
        <button 
            onClick={() => handleNav(page)}
            className={`font-jost text-[24px] font-normal px-3 py-2 rounded-md font-medium transition-colors ${currentPage === page ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300'}`}
        >
            {children}
        </button>
    );

    const WorkDropdown = () => (
        <div 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
        >
            <button className={`font-jost text-[24px] font-normal px-3 py-2 rounded-md font-medium flex items-center gap-1 transition-colors ${currentPage === 'Work' ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300'}`}>
                <div>
                    <p className="text-[24px] font-normal leading-tight">Work</p>
                    <p className="text-[12px] font-normal leading-tight">作品</p>
                </div> <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
                <div className="absolute top-full left-0 w-40 bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1">
                        {workCategories.map(cat => (
                            <button 
                                key={cat.en} 
                                onClick={() => handleNav('Work', cat.en)} 
                                className="block w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                {cat.en} {cat.zh}
                            </button>
                            ))}

                    </div>
                </div>
            )}
        </div>
    );
    
    const MobileSidebar = () => (

        
        <div
            className={`
            fixed inset-0            /* top:0; right:0; bottom:0; left:0; */
            w-screen h-screen        /* ensure 100vw × 100vh */
            z-50
            flex flex-col items-center justify-center
            bg-white                /* full‐screen background */
            transition-opacity duration-300 ease-in-out
            ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
            style={{ /* optional override: */ }}
        >

        {/* Close Button */}
        <button
        onClick={() => setSidebarOpen(false)}
        className="absolute top-6 right-6 text-slate-700 dark:text-slate-200 hover:text-indigo-500"
        >
        <X size={32} />
        </button>

        {/* Navigation Options */}
        <button
            onClick={() => handleNav('Home')}
            className="font-jost text-slate-700 dark:text-slate-200 hover:text-indigo-500 my-2"
        >
            <span className="text-[36px]">Home </span>
            <span className="text-[18px]">主页</span>   
        </button>

        {/* Work DropDown Section */}
        <button
            onClick={toggleDropdown}
            className="font-jost text-slate-700 dark:text-slate-200 hover:text-indigo-500 my-2 flex items-center space-x-2"
        >
            <span className="text-[36px]">Work </span>
            <span className="text-[18px]">作品一览</span>   
            {isDropdownOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
        
        {/* Work Dropdown */}
        {isDropdownOpen && (
                    <div className="py-1">
                        {workCategories.map(cat => (
                            <button 
                                key={cat.en} 
                                onClick={() => handleNav('Work', cat.en)} 
                                className="block w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                {cat.en} {cat.zh}
                            </button>
                            ))}
                    </div>
        )}
        <button
            onClick={() => handleNav('About')}
            className="font-jost text-slate-700 dark:text-slate-200 hover:text-indigo-500 my-2"
        >
            <span className="text-[36px]">About </span>
            <span className="text-[18px]">关于我</span>   
        </button>
        <button
            onClick={() => handleNav('Contact')}
            className="font-jost text-slate-700 dark:text-slate-200 hover:text-indigo-500 my-2"
        >
            <span className="text-[36px]">Contact </span>
            <span className="text-[18px]">联系方式</span>   
        </button>
    </div>
    );

    return (
        <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[150px] flex items-center justify-between">
                <div className="flex-shrink-0">
                    <button onClick={() => handleNav('Home')} className="flex items-center">
                        <Image 
                            src="/images/Logo.png" // Path to your logo in the public folder
                            alt="Kezhou Logo"
                            width={260} // Adjust width as needed
                            height={125} // Adjust height as needed, will maintain aspect ratio if only one is set
                            priority={true} // Prioritize loading for LCP
                        />
                    </button>
                </div>
                <div className="hidden md:block">
                    <nav className="flex items-baseline space-x-4">
                        <NavLink page="Home">
                            <p className="text-[24px] font-normal leading-tight">Home</p>
                            <p className="text-[12px] font-normal leading-tight">主页</p>
                        </NavLink>
                        <WorkDropdown />
                        <NavLink page="About">
                            <p className="text-[24px] font-normal leading-tight">About</p>
                            <p className="text-[12px] font-normal leading-tight">关于我</p>
                        </NavLink>
                        <NavLink page="Contact">
                            <p className="text-[24px] font-normal leading-tight">Contact</p>
                            <p className="text-[12px] font-normal leading-tight">联系方式</p>
                        </NavLink>
                    </nav>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setSidebarOpen(true)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 dark:hover:text-white focus:outline-none">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
            <MobileSidebar />
        </header>
    );
};

export default Navbar;

