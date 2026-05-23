import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import {
  businessDisplayName,
  chatAutoReply,
  getWhatsAppUrl,
} from '../../data/content'

const welcomeMessage = `Hi! 👋 Welcome to ${businessDisplayName}. How can we help you today? Send us a message and we'll connect you on WhatsApp.`

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: welcomeMessage },
  ])
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed || sending) return

    setSending(true)
    const userMessage = { id: Date.now(), from: 'user', text: trimmed }
    const botReply = { id: Date.now() + 1, from: 'bot', text: chatAutoReply }

    setMessages((prev) => [...prev, userMessage, botReply])
    setInput('')

    setTimeout(() => {
      window.open(getWhatsAppUrl(trimmed), '_blank', 'noopener,noreferrer')
      setSending(false)
    }, 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickWhatsApp = () => {
    const defaultMsg = `Hi ${businessDisplayName}, I'd like to know more about your services.`
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'user', text: defaultMsg },
      { id: Date.now() + 1, from: 'bot', text: chatAutoReply },
    ])
    setTimeout(() => {
      window.open(getWhatsAppUrl(defaultMsg), '_blank', 'noopener,noreferrer')
    }, 600)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-[min(100vw-2.5rem,380px)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-charcoal/20 ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold">{businessDisplayName}</p>
                  <p className="text-xs text-white/80">Typically replies within minutes</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/20"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex max-h-72 flex-col gap-3 overflow-y-auto bg-warm-gray p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'rounded-br-md bg-brand-orange text-white'
                        : 'rounded-bl-md bg-white text-slate-700 shadow-sm ring-1 ring-black/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick action */}
            <div className="border-t border-slate-100 bg-white px-4 py-2">
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366]/10 px-3 py-2 text-xs font-semibold text-[#128C7E] transition-colors hover:bg-[#25D366]/20"
              >
                <Phone size={14} />
                Chat on WhatsApp directly
              </button>
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 border-t border-slate-100 bg-white p-3">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={sending}
                className="max-h-24 flex-1 resize-none rounded-xl border border-slate-200 bg-warm-gray px-3.5 py-2.5 text-sm text-charcoal placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 disabled:opacity-60"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim() || sending}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:bg-[#128C7E] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message on WhatsApp"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/50"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageCircle size={24} />
              <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white" />
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
