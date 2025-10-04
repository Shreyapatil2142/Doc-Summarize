import { motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatArea } from "./ChatArea";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/hooks/useChat";
import { sampleWorkEnvironmentResponse } from "@/utils/sampleResponses";
import { type Message } from "./ChatMessage";

export function ChatInterface() {
  const { messages, isLoading, sendMessage, setMessages } = useChat();

  const handleDemoResponse = () => {
    const demoMessage: Message = {
      id: `msg_${Date.now()}_demo`,
      content: sampleWorkEnvironmentResponse,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, demoMessage]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-screen bg-background"
    >
      <ChatHeader onDemoResponse={handleDemoResponse} />
      <ChatArea messages={messages} isTyping={isLoading} />
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </motion.div>
  );
}