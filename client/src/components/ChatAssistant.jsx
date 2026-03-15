import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, Sparkles, X, Bot } from 'lucide-react'
import useAiChat from '../hooks/useAiChat'

const ease = [0.22, 1, 0.36, 1]

const ChatAssistant = () => {
  const [open, setOpen]   = useState(false)
  const [prompt, setPrompt] = useState('')
  const { messages, status, error, sendMessage } = useAiChat()
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim() || status === 'loading') return
    await sendMessage(prompt.trim())
    setPrompt('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease }}
            className="w-[340px] rounded-3xl overflow-hidden"
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 50px var(--glow)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--primary2)' }}>
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <p className="text-main font-semibold text-sm">Clarity AI</p>
                  <p className="text-ghost" style={{ fontSize: '0.65rem' }}>Studio assistant</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-ghost hover:text-main transition-colors rounded-full p-1"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 px-4 py-5 max-h-72 overflow-y-auto">
              {messages.length === 0 && (
                <p className="text-ghost text-center text-xs py-4">
                  Ask me about product design, workflows, or studio services.
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={msg.role === 'user' ? 'bubble-user' : 'bubble-ai'}>
                  {msg.content}
                </div>
              ))}
              {status === 'loading' && (
                <div className="bubble-ai flex gap-1 items-center py-3">
                  {[0,1,2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--txt2)' }}
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              )}
              {error && (
                <p className="text-xs text-center" style={{ color: '#f87171' }}>{error}</p>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="input-field rounded-xl py-2.5 px-4 text-xs flex-1"
                placeholder="Ask about product rituals…"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !prompt.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40"
                style={{ background: 'var(--primary2)' }}
              >
                <Send className="h-3.5 w-3.5 text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full px-5 py-3 text-white font-semibold text-xs tracking-wider shadow-2xl"
        style={{ background: 'var(--primary2)', boxShadow: '0 8px 30px var(--glow)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <Sparkles className="h-4 w-4" />
        {open ? 'Close' : 'Studio AI'}
      </motion.button>
    </div>
  )
}

export default ChatAssistant
