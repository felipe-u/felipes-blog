import { useEffect, useState } from 'react'
import { usePosts } from './usePosts'

export function useSortPosts() {
  const { posts } = usePosts()
  const [sortedPosts, setSortedPosts] = useState([])
  const [sortOptions, setSortOptions] = useState({
    date: 'asc',
    title: 'asc',
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let filtered = posts
    if (searchQuery) {
      filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    let sorted = [...filtered]

    if (sortOptions.date) {
      sorted.sort((a, b) =>
        sortOptions.date === 'asc' ? b.date - a.date : a.date - b.date
      )
    }

    if (sortOptions.title) {
      sorted.sort((a, b) =>
        sortOptions.title === 'asc'
          ? a.title.localeCompare(b.tiitle)
          : b.title.localeCompare(a.title)
      )
    }

    setSortedPosts(sorted)
  }, [posts, sortOptions, searchQuery])

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

  const searchPost = (query) => {
    setSearchQuery(query)
  }

  return {
    sortedPosts,
    sortOptions,
    toggleDateSortOption,
    toggleTitleSortOption,
    searchPost,
  }
}
