import { useState } from 'react'
import api from '../utils/api'

const useAiChat = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I translate clarity, motion, and intent into product ideas. What are you exploring?',
    },
  ])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const sendMessage = async (question) => {
    if (!question) return
    setMessages((prev) => [...prev, { role: 'user', content: question }])
    setStatus('loading')
    setError('')

    try {
      const { data } = await api.post('api/ai/chat', { question })
      setMessages((prev) => [...prev, { role: 'assistant', content: data.data.answer }])
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.response?.data?.message || 'Unable to reach studio AI right now.')
    }
  }

  return { messages, status, error, sendMessage }
}

export default useAiChat
