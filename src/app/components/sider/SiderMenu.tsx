'use client'

import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import {Url} from "next/dist/shared/lib/router/router";
import {ReactNode} from "react";
import { usePathname } from 'next/navigation';
import { FaMusic } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";

export default function SiderMenu () {
    interface MenuLink {
        icon : ReactNode,
        title : string,
        link : Url
    };

    const pathname = usePathname()

    const menu:MenuLink[] = [
        {
            icon : <FaHouse />,
            title : "Trang chủ",
            link : "/"
        },
        {
            icon : <FaMusic  />,
            title : "Danh mục bài hát",
            link : "/categories"
        },
        {
            icon : <FaPodcast />,
            title : "Ca sĩ",
            link : "/singers"
        },
        {
            icon : <FaHeart />,
            title : "Bài hát yêu thích",
            link : "/wishlist"
        },
        {
            icon : <FaArrowRightFromBracket />,
            title : "Đăng xuất",
            link : "/logout"
        },
        {
            icon : <FaUser />,
            title : "Đăng nhập",
            link : "/login"
        },
        {
            icon : <FaUserPlus />,
            title : "Đăng ký",
            link : "/register"
        }
    ];

    return (
        <>
            <nav className = "py-[30px] px-[20px] ">
                <ul>
                    {menu.map((item,index) => (
                        <li key={index} className = "mb-[30px]">
                            <Link href={item.link} className = {"flex items-center hover:text-primary capitalize " + 
                                    (item.link === pathname ? "text-primary" : "text-white")
                                }   
                            >
                                <span className = "text-[22px] mr-[20px]">
                                    {item.icon}
                                </span>
                                <span className = "text-[16px] font-[700]">
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}