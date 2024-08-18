import React from 'react'
import NavbarImage from '../assets/images/NavbarImage.svg'
import { Link, NavLink } from 'react-router-dom'
import {DashboardImage, BillingImage, ExamsImage, FeaturesImage, SettingsAndProfileImage, StudentsImage, TeachersImage, NewIcon } from '../assets/images/Images';
import NavItems from './NavItems';
function Navbar() {

    const navbarLinks = [
        {
            id: 1,
            title: "Dashboard",
            icon: <DashboardImage />,
            path: "/",
        },
        {
            id: 2,
            title: "Teachers",
            icon: <TeachersImage />,
            path: "/teachers",
        },
        {
            id: 3,
            title: "Students",
            icon: <StudentsImage />,
            path: "/students",
        },
        {
            id: 4,
            title: "Billing",
            icon: <BillingImage />,
            path: "/billing",
        },
        {
            id: 5,
            title: "Settings and profile",
            icon: <SettingsAndProfileImage />,
            path: "/settings-and-profile",
        },
        {
            id: 6,
            title: "Exams",
            icon: <ExamsImage />,
            path: "/exams",
        },
        // {
        //     id: 7,
        //     title: "Features",
        //     icon: <FeaturesImage />,
        //     path: "/features",
        // },
    ];

    return (
        <div className='w-[241px] h-[789px] bg-[#152259] '>
            <Link to={"/"}>
                <img className='ml-[88px] pt-[26px] ' src={NavbarImage} alt="Navbar Image" />
            </Link>
            <div className='w-[192px] h-[40px] ml-[25px] mt-[12px] mb-[27px] border-b-[1px]'>
                <h2 className='font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-[#FFFFFF] ml-[31px] mt-[10px]'>Udemy Inter. school</h2>
            </div>
            <nav>
                <ul className="ml-[28px] w-[192px] h-[280px]">
                    {navbarLinks.map((item) => (
                        <NavItems item={item} key={item.id} />
                    ))}
                </ul>
                <ul className='ml-[28px] w-[192px] h-[40px] mt-[114px]'>
                    <li className='ml-[16px] mt-[8px] h-[40px]'>
                        <NavLink className="flex dark:text-white items-center space-x-5" to={"/features"}>
                            {<FeaturesImage/>}
                            <span className='font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-[#FFFFFF] ml-[16px]'>Features</span>
                            <NewIcon/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar