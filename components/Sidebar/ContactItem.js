"use client";
import { Avatar } from "antd";
import Link from "next/link";

const ContactItem = () => {
    return (
        <div className=" my-3 bg-primary border border-solid border-primary rounded-md">
            <div className="px-5 py-4 flex items-center">
                <div>
                    <Avatar  size={50} className="bg-yellow-500" >
                        {/* {displayName?.charAt(0)?.toUpperCase()} */}
                        A
                    </Avatar>
                </div>
                <div className="pl-3 flex-auto">
                    <h6 className="text-white text-xl">Catherine Richardson</h6>
                </div>
            </div>
        </div>
    );
};

export default ContactItem;
