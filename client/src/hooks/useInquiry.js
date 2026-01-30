import { useState } from 'react'
import api from '../utils/api'

const useInquiry = () => {
  const [state, setState] = useState({ status: 'idle', message: '' })

  const submitInquiry = async (payload) => {
    try {
      setState({ status: 'loading', message: '' })
      const { data } = await api.post('/inquiries', payload)
      setState({ status: 'success', message: data.message })
      return data
    } catch (error) {
      setState({
        status: 'error',
        message: error.response?.data?.message || 'Unable to send inquiry',
      })
      throw error
    }
  }

  return { submitInquiry, ...state }
}

export default useInquiry
