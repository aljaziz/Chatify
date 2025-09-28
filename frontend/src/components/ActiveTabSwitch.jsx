import { act } from "react";
import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
    const { activeTab, setActiveTab } = useChatStore();
    return (
        <div className="tabs bg-transparent p-2 m-2">
            <button
                onClick={() => setActiveTab("chats")}
                className={`tab w-1/2 rounded-md ${
                    activeTab === "chats"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "text-slate-400"
                }`}
            >
                Chats
            </button>
            <button
                onClick={() => setActiveTab("contacts")}
                className={`tab rounded-md w-1/2 ${
                    activeTab === "contacts"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "text-slate-400"
                }`}
            >
                Contacts
            </button>
        </div>
    );
}

export default ActiveTabSwitch;
