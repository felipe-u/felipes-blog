import { useEffect, useState } from 'react'
import { usePosts } from './usePosts'

export function useSortPosts() {
  const { posts } = usePosts()
  const [sortedPosts, setSortedPosts] = useState([])
  const [sortOptions, setSortOptions] = useState({
    date: 'asc',
    title: 'asc',
  })

  useEffect(() => {
    setSortedPosts(posts)
  }, [posts, setSortedPosts])

  useEffect(() => {
    const postsCopy = [...posts]
    if (sortOptions.date === 'asc') {
      setSortedPosts(postsCopy.sort((a, b) => b.date - a.date))
      return
    }
    if (sortOptions.date === 'desc') {
      setSortedPosts(postsCopy.sort((a, b) => a.date - b.date))
      return
    }
  }, [sortOptions.date, posts])

  useEffect(() => {
    const postsCopy = [...posts]
    if (sortOptions.title === 'asc') {
      setSortedPosts(postsCopy.sort((a, b) => a.title.localeCompare(b.title)))
      return
    }
    if (sortOptions.title === 'desc') {
      setSortedPosts(postsCopy.sort((a, b) => b.title.localeCompare(a.title)))
      return
    }
  }, [sortOptions.title, posts])

  const toggleDateSortOption = () => {
    setSortOptions((prevState) => ({
      ...prevState,
      date: sortOptions.date === 'asc' ? 'desc' : 'asc',
    }))
  }

  const toggleTitleSortOption = () => {
    setSortOptions((prevState) => ({
      ...prevState,
      title: sortOptions.title === 'asc' ? 'desc' : 'asc',
    }))
  }

  return { sortedPosts, sortOptions, toggleDateSortOption, toggleTitleSortOption }
}
