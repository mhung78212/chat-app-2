"use client";
import { filterChatType } from "@/utils/helper";
import { Dropdown, Input, Select, Space, TreeSelect } from "antd";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBell, HiDotsVertical, HiOutlineSearch } from "react-icons/hi";

const items = [
    {
        label: <Link href={"/"}>New Chat</Link>,
        key: "0",
    },
    {
        label: <Link href={"/"}>Create Group</Link>,
        key: "1",
    },
];

const SidebarHeader = () => {
    const [value, setValue] = useState("All chat");
    const onChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    return (
        <div className="bg-white border border-solid border-bodercolor p-3 sticky top-0 z-10">
            <div className="flex items-center justify-between">
                <h5 className="font-semibold text-base">Chats</h5>
                <div className="flex space-x-4 text-xl ">
                    <HiOutlineBell className="text-[#adb5bd]" />
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <HiDotsVertical className="text-[#adb5bd]" />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="flex py-1 items-center justify-between">
                <Select
                    defaultValue={value}
                    style={{
                        width: 100,
                    }}
                    options={filterChatType}
                />
                <Input
                    className="text-base w-1/2"
                    placeholder="Search"
                    suffix={<HiOutlineSearch />}
                />
            </div>
        </div>
    );
};

export default SidebarHeader;
