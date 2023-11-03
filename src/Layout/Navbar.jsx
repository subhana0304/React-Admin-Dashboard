import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar w-full flex p-10 items-center justify-between'>
           <div className="logo flex items-center">
            <img src="logo.svg" alt="" />
            <span>SubAdmin</span>
           </div>
           <div className="icons flex items-center gap-5">
            <img src="/public/search.svg" alt="" className="icon" />
            <img src="/public/app.svg" alt="" className="icon" />
            <img src="/public/expand.svg" alt="" className="icon" />
            <div className="notification flex items-center relative">
                <img src="/public/notifications.svg" alt="" />
                <span className='bg-red-700 text-white text-center -top-2 justify-center items-center -right-2 absolute h-[18px] w-[18px] text-xs rounded-full '>1</span>
            </div>
            <div className="user flex items-center gap-2">
                <img className='w-[30px] h-[30px] rounded-full object-cover' src="https://lh3.googleusercontent.com/a/ACg8ocKmPNnnTL_LnW227TuXI5vhNL1DVtKdNoUbMV195Va1QA=s317-c-no" alt="" />
                <span>Subhana</span>
            </div>
            <img src="/public/settings.svg" alt="" className="icon" />
           </div>
        </div>
    );
};

export default Navbar;