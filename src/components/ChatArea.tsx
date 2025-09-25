import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage, type Message } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";

interface ChatAreaProps {
  messages: Message[];
  isTyping: boolean;
}

export function ChatArea({ messages, isTyping }: ChatAreaProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="h-full overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Message */}
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center py-12 space-y-4"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Welcome to AI Chat
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Start a conversation with your intelligent assistant. Ask questions, get help, or just chat!
                </p>
              </div>
            </motion.div>
          )}

          {/* Messages */}
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <ChatMessage key={message.id} message={message} index={index} />
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <div className="flex gap-3">
                <TypingIndicator />
              </div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}