"use client";
import Image from "next/image";
import Link from "next/link";
import {
    HiChatBubbleLeftRight,
    HiPhone,
    HiUsers,
    HiUserCircle,
} from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className="bg-primary w-[4.375rem] flex flex-col flex-nowrap text-center justify-between py-4">
            <Link href={"/"} className="p-1  bg-white mx-3 rounded-lg">
                <Image src="logo.svg" alt="" width={30} height={30} />
            </Link>
            <div className="flex flex-col space-y-10 items-center text-2xl">
                <Link href={"/"}>
                    <HiChatBubbleLeftRight className="text-[#aea9fe]" />
                </Link>

                <Link href={"/"}>
                    <HiPhone className="text-[#aea9fe]" />
                </Link>

                <Link href={"/"}>
                    <HiUsers className="text-[#aea9fe]" />
                </Link>

                <Link href={"/"}>
                    <HiUserCircle className="text-[#aea9fe]" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
