import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  index: number;
}

export function ChatMessage({ message, index }: ChatMessageProps) {
  const isUser = message.isUser;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"} group`}
    >
      {/* Avatar */}
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-primary to-accent"
            : "bg-muted border border-border/20"
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-muted-foreground" />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`relative max-w-[75%] lg:max-w-[60%] rounded-2xl p-4 shadow-sm border border-border ${
          isUser
            ? "bg-chat-user-bg text-chat-user-foreground rounded-tr-md"
            : "bg-chat-bot-bg text-chat-bot-foreground rounded-tl-md border-l-4 border-l-chat-bot-accent"
        }`}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-sm leading-relaxed whitespace-pre-wrap break-words"
        >
          {message.content}
        </motion.p>

        {/* Timestamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className={`text-xs mt-2 opacity-60 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}