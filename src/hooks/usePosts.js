import { useEffect, useState } from 'react'
import { allPosts } from '../data/allPosts'

export function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = () => {
    setPosts([...allPosts])
  }

  const getPost = (postId) => {
    return allPosts.find((post) => post.id === Number(postId))
  }

  return { posts, getPost }
}
