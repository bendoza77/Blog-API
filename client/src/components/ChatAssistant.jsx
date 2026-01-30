import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, Sparkles, X } from 'lucide-react'
import useAiChat from '../hooks/useAiChat'

const ChatAssistant = () => {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const { messages, status, error, sendMessage } = useAiChat()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    await sendMessage(prompt.trim())
    setPrompt('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-[#7c3aed] px-4 py-3 text-xs uppercase tracking-[0.4em] text-white shadow-[0_20px_60px_-30px_rgba(124,58,237,1)]"
      >
        <Sparkles className="h-4 w-4" /> Studio AI
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-4 w-[320px] rounded-3xl border border-white/30 bg-white/95 p-4 text-[#161134] shadow-[0_25px_80px_-40px_rgba(15,23,42,0.4)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c3aed]">Clarity assistant</p>
              <button aria-label="close" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 max-h-64 space-y-3 overflow-y-auto text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={msg.role === 'assistant' ? 'text-[#5f6c80]' : 'text-[#161134] font-medium'}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            {error && <p className="mt-3 text-xs text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 rounded-full border border-[#7c3aed]/30 px-3 py-2 text-xs"
                placeholder="Ask about product rituals…"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-[#161134] p-2 text-white disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatAssistant
