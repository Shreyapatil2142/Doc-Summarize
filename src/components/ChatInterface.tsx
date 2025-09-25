import { motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatArea } from "./ChatArea";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/hooks/useChat";

export function ChatInterface() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-screen bg-background"
    >
      <ChatHeader />
      <ChatArea messages={messages} isTyping={isLoading} />
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </motion.div>
  );
}