import { useContext } from 'react'
import { PostsContext } from '../contexts/posts'

export function usePosts() {
  const context = useContext(PostsContext)

  if (context === undefined) {
    throw new Error('usePosts must be withing a PostsProvider')
  }

  return context
}
