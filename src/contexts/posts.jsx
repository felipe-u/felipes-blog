import { createContext, useEffect, useState } from 'react'
import { allPosts } from '../data/allPosts'

export const PostsContext = createContext()

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchAllPosts()
  }, [])

  useEffect(() => {
    console.log('Posts updated')
  }, [posts])

  const fetchAllPosts = () => {
    setPosts(allPosts)
  }

  const getPostById = (postId) => {
    return posts.find((post) => post.id === Number(postId))
  }

  const createPost = (postData) => {
    const currentPosts = [...posts]
    const newPost = { ...postData, id: posts.length + 1 }
    currentPosts.push(newPost)
    setPosts(currentPosts)
  }

  return (
    <PostsContext.Provider value={{ posts, getPostById, createPost }}>
      {children}
    </PostsContext.Provider>
  )
}
