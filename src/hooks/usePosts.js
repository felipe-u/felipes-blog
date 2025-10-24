import { useEffect, useState } from 'react'
import { allPosts } from '../data/allPosts'

export function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts()
  }, [])

  useEffect(() => {
    console.log('Posts updated')
  }, [posts])

  const getAllPosts = () => {
    setPosts([...allPosts])
  }

  const getPost = (postId) => {
    return allPosts.find((post) => post.id === Number(postId))
  }

  const createPost = (postData) => {
    const currentPosts = [...posts]
    const newPost = { ...postData, id: posts.length + 1 }
    currentPosts.push(newPost)
    setPosts(currentPosts)
  }

  return { posts, getPost, createPost }
}
