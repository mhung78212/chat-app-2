import ContactList from "./ContactList";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
    return (
        <div className=" w-[26.25rem]">
            <div className="flex flex-col h-full">
                <div className="h-full overflow-x-hidden overflow-y-auto no-scrollbar">
                    <SidebarHeader/>
                    <ContactList/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
