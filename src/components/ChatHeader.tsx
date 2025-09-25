import { motion } from "framer-motion";
import { Bot, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ChatHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between p-4 bg-header-bg border-b border-border shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg">
          <Bot className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-header-title">AI Chat</h1>
          <p className="text-sm text-header-subtitle">Intelligent Assistant</p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden hover:bg-muted/50 transition-all duration-300"
      >
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-header-accent" />
          ) : (
            <Sun className="h-5 w-5 text-header-accent" />
          )}
        </motion.div>
      </Button>
    </motion.header>
  );
}