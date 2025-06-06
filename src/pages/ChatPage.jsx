import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

export default function ChatPage() {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
