import React from 'react';

const TopBox = () => {

    const topDealUsers = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            username: "Elva McDonald",
            email: "elva@gmail.com",
            amount: "3.668",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
            username: "Linnie Nelson",
            email: "linnie@gmail.com",
            amount: "3.256",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
            username: "Brent Reeves",
            email: "brent@gmail.com",
            amount: "2.998",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
            username: "Adeline Watson",
            email: "adeline@gmail.com",
            amount: "2.512",
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
            username: "Juan Harrington",
            email: "juan@gmail.com",
            amount: "2.134",
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
            username: "Augusta McGee",
            email: "augusta@gmail.com",
            amount: "1.932",
        },
        {
            id: 7,
            img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
            username: "Angel Thomas",
            email: "angel@gmail.com",
            amount: "1.560",
        },
    ];

    return (
        <div>
            <h1 className='mb-10 mt-5 text-xl font-bold'>Top Deals</h1>
            <div className="list">
                {
                    topDealUsers.map(user =>
                        <div className="listItem flex justify-between items-center mb-10" key={user.id}>
                            <div className="user flex items-center justify-center gap-2">
                                <img className='w-[40px] h-[40px] rounded-full object-cover' src={user.img} alt="" />
                                <div className="userText text-xs">
                                    <span className='username text-[14px] font-semibold'>{user.username}</span><br />
                                    <span className='email text-[12px]'>{user.email}</span>
                                </div>
                            </div>
                            <p className='amount font-bold'>${user.amount}</p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default TopBox;