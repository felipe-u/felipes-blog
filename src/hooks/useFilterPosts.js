import { useEffect, useState } from 'react'
import { usePosts } from './usePosts'

export function useFilterPosts() {
  const { posts } = usePosts()
  const [filteredPosts, setFilteredPosts] = useState([])
  const [filterOptions, setFilterOptions] = useState({
    date: 'asc',
    title: 'asc',
  })

  useEffect(() => {
    setFilteredPosts(posts)
  }, [posts, setFilteredPosts])

  useEffect(() => {
    const postsCopy = [...posts]
    if (filterOptions.date === 'asc') {
      setFilteredPosts(postsCopy.sort((a, b) => b.date - a.date))
      return
    }
    if (filterOptions.date === 'desc') {
      setFilteredPosts(postsCopy.sort((a, b) => a.date - b.date))
      return
    }
  }, [filterOptions.date, posts])

  useEffect(() => {
    const postsCopy = [...posts]
    if (filterOptions.title === 'asc') {
      setFilteredPosts(postsCopy.sort((a, b) => a.title.localeCompare(b.title)))
      return
    }
    if (filterOptions.title === 'desc') {
      setFilteredPosts(postsCopy.sort((a, b) => b.title.localeCompare(a.title)))
      return
    }
  }, [filterOptions.title, posts])

  const toggleDateFilter = () => {
    setFilterOptions((prevState) => ({
      ...prevState,
      date: filterOptions.date === 'asc' ? 'desc' : 'asc',
    }))
  }

  const toggleTitleFilter = () => {
    setFilterOptions((prevState) => ({
      ...prevState,
      title: filterOptions.title === 'asc' ? 'desc' : 'asc',
    }))
  }

  return { filteredPosts, filterOptions, toggleDateFilter, toggleTitleFilter }
}
