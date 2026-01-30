import { useEffect, useState } from 'react'
import api from '../utils/api'

const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [state, setState] = useState({ status: 'idle', error: '' })

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState({ status: 'loading', error: '' })
        const { data } = await api.get('/posts/public?limit=6')
        setPosts(data.data)
        setState({ status: 'success', error: '' })
      } catch (error) {
        setState({ status: 'error', error: 'Unable to load stories' })
      }
    }

    fetchPosts()
  }, [])

  return { posts, ...state }
}

export default usePosts
