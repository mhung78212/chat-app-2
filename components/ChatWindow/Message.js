import { Avatar } from "antd";

const Message = () => {
    return (
        // text-right
        <div className="text-sm mb-5 ">
            <div>
                <div className="py-4 px-9 bg-[#f5f6fa] text-[#8094ae] ml-5 rounded-[1.25rem] text-left inline-block max-w-[25rem]">
                    <span>
                        I have to give a presentation on global warming on
                        Friday, and I am so nervous.
                    </span>
                </div>
            </div>
            {/* Check id chat */}
            {/*  flex-row-reverse */}
            <div className="inline-flex items-center text-sm text-[#adb5bd] mt-[0.3125rem]">
                <div className="inline-block -mt-5 mx-[0.3125rem] p-2 bg-white rounded-[50%]">
                    <Avatar size={36} className="bg-yellow-500 ">
                        B
                    </Avatar>
                </div>
                    <span class="mx-[0.3125rem]">9:12am</span>
            </div>
        </div>
    );
};

export default Message;
