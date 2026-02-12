
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { aiService } from '../features/ai-assistant/aiService';

interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
  actions?: string[];
}

/**
 * Floating AI Assistant component.
 * Uses AIService for intelligent dashboard interaction.
 */
const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'ai', 
      text: "Welcome to EduPulse Insight. I've analyzed today's data. Any specific students or reports you'd like me to review?",
      actions: ["Summary of Class 12-B", "Who is struggling in Math?"]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const extractActions = (rawText: string) => {
    const actionRegex = /\[ACTION:\s*(.*?)\]/g;
    const actions: string[] = [];
    let match;
    while ((match = actionRegex.exec(rawText)) !== null) actions.push(match[1]);
    return { cleanText: rawText.replace(actionRegex, '').trim(), actions };
  };

  const onSend = async (msgText: string = input) => {
    const text = msgText.trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    try {
      const rawResponse = await aiService.getAcademicInsight(text);
      const { cleanText, actions } = extractActions(rawResponse);
      setMessages(prev => [...prev, { role: 'ai', text: cleanText, actions: actions.length > 0 ? actions : undefined }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Please verify API configuration." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/40 z-50 group"
      >
        <Sparkles size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[420px] max-w-[90vw] h-[600px] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl z-50 flex flex-col border border-gray-100 dark:border-slate-700 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-indigo-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><Bot size={18}/></div>
                <h3 className="font-bold text-sm">EduPulse AI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-md"><X size={20}/></button>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-slate-900/50 custom-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-3 rounded-2xl text-sm max-w-[85%] ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 dark:text-slate-200 border border-gray-100 dark:border-slate-700 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                  {m.actions && i === messages.length - 1 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.actions.map((act, j) => (
                        <button key={j} onClick={() => onSend(act)} className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-indigo-100 dark:border-slate-600 rounded-xl text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 transition-colors">
                          {act}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && <div className="p-3 bg-white dark:bg-slate-800 rounded-xl rounded-tl-none border border-gray-100 dark:border-slate-700 w-16 animate-pulse">...</div>}
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-slate-700">
              <div className="relative">
                <input 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && onSend()}
                  placeholder="Analyze class performance..."
                  className="w-full bg-gray-100 dark:bg-slate-900 border-none rounded-xl py-3 pl-4 pr-12 text-sm outline-none focus:ring-2 ring-indigo-500"
                />
                <button onClick={() => onSend()} className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-lg"><Send size={16}/></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;
