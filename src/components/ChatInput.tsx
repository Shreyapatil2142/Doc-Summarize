import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, isLoading, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading || disabled) return;
    
    const messageToSend = message.trim();
    setMessage("");
    await onSendMessage(messageToSend);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="p-4 bg-card border-t border-border shadow-lg"
    >
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            disabled={isLoading || disabled}
            className="min-h-[50px] max-h-[120px] bg-chat-input-bg border-chat-input-border focus:border-primary focus:ring-primary/20 rounded-xl resize-none pr-12 text-sm leading-relaxed placeholder:text-chat-input-placeholder"
            rows={1}
          />
          
          {/* Character count indicator */}
          {message.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute bottom-2 right-14 text-xs text-muted-foreground"
            >
              {message.length}
            </motion.div>
          )}
        </div>

        <Button
          type="submit"
          disabled={!message.trim() || isLoading || disabled}
          className="self-end bg-purple-950 hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl px-4 py-3 group border-0 cursor-pointer"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.div>
          )}
        </Button>
      </form>
    </motion.div>
  );
}