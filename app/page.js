import ChatWindow from "@/components/ChatWindow";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="flex h-screen">
            <Navbar />
            <Sidebar />
            <ChatWindow />
        </div>
    );
}
