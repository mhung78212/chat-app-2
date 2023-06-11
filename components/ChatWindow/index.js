"use client";
import { Avatar, Input } from "antd";
import Message from "./Message";
import { HiArrowRight, HiDotsVertical, HiOutlineSearch } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

const ChatWindow = () => {
    return (
        <div className="bg-white flex-1">
            <div className="flex flex-grow flex-col h-full">
                {/* Chat header */}
                <div className="flex justify-between items-center px-9 py-3 border-bottom">
                    <div className="flex items-center flex-1">
                        <Avatar size={50} className="bg-yellow-500 mr-6">
                            A
                        </Avatar>
                        <div className="pl-3 flex-auto">
                            <h6 className="text-black text-base">
                                Catherine Richardson
                            </h6>
                            <small class="text-[#adb5bd] text-sm">Online</small>
                        </div>
                    </div>
                    <div className="flex space-x-4 text-xl text-[#adb5bd]">
                        <HiOutlineSearch className="cursor-pointer" />
                        <HiOutlinePhone className="cursor-pointer" />
                        <HiDotsVertical className="cursor-pointer" />
                    </div>
                </div>
                {/* Chat body */}
                <div className="flex-[2] overflow-y-auto overflow-x-hidden no-scrollbar">
                    <div className="w-full px-4 mx-auto">
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                </div>
                {/* Chat footer */}
                <div className="relative">
                    <div className="border-top py-6 ">
                        <input type="text" placeholder="Type your message here..." className="w-full  pl-5 pr-[4.5rem] outline-none text-base border-none" />
                    </div>
                    <div className="absolute h-12 w-12 right-[10px] top-[50%] translate-y-[-50%] flex items-center justify-center rounded-[50%] bg-primary">
                        <HiArrowRight className="text-2xl text-white"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
