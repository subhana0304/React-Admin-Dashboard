import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <div className='item flex flex-col gap-3 mb-5'>
                <span className='title font-normal text-[#ddd]'>MAIN</span>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/home.svg" alt="" />
                    <span className='listItemTitle'>Home</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/profile.svg" alt="" />
                    <span className='listItemTitle'>Profile</span>
                </Link>
            </div>
            <div className='item flex flex-col gap-3 mb-5'>
                <span className='title font-normal text-[#ddd]'>LISTS</span>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/users">
                    <img src="/public/user.svg" alt="" />
                    <span className='listItemTitle'>Users</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/products">
                    <img src="/public/product.svg" alt="" />
                    <span className='listItemTitle'>Products</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/order.svg" alt="" />
                    <span className='listItemTitle'>Order</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/post.svg" alt="" />
                    <span className='listItemTitle'>Posts</span>
                </Link>
            </div>
            <div className='item flex flex-col gap-3 mb-5'>
                <span className='title font-normal text-[#ddd]'>GENERAL</span>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/element.svg" alt="" />
                    <span className='listItemTitle'>Elements</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/note.svg" alt="" />
                    <span className='listItemTitle'>Notes</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/form.svg" alt="" />
                    <span className='listItemTitle'>Forms</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/calendar.svg" alt="" />
                    <span className='listItemTitle'>Calendar</span>
                </Link>
            </div>
            <div className='item flex flex-col gap-3 mb-5'>
                <span className='title font-normal text-[#ddd]'>MAINTENANCE</span>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/setting.svg" alt="" />
                    <span className='listItemTitle'>Settings</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/backup.svg" alt="" />
                    <span className='listItemTitle'>Backups</span>
                </Link>
            </div>
            <div className='item flex flex-col gap-3'>
                <span className='title font-normal text-[#ddd]'>ANALYTICS</span>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/chart.svg" alt="" />
                    <span className='listItemTitle'>Charts</span>
                </Link>
                <Link className='flex items-center hover:bg-[#384256] p-2 gap-2 rounded' to="/">
                    <img src="/public/log.svg" alt="" />
                    <span className='listItemTitle'>Logs</span>
                </Link>
            </div>
        </div>
    );
};

export default Menu;