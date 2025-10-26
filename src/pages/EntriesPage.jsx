import '../styles/Entries.css'
import { useNavigate } from 'react-router'
import { EditPenIcon, SearchIcon, TrashCanIcon } from '../components/Icons'
import { formatDate } from '../helpers/logic'
import { useSortPosts } from '../hooks/useSortPosts'
import { useCallback, useRef, useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import debounce from 'just-debounce-it'

export default function EntriesPage() {
  const navigate = useNavigate()
  const {
    sortedPosts,
    sortOptions,
    toggleDateSortOption,
    toggleTitleSortOption,
    searchPost,
  } = useSortPosts()
  const [query, setQuery] = useState('')
  const inputRef = useRef()
  const { deletePostById } = usePosts()

  const debouncedSearchPost = useCallback(
    debounce((query) => {
      searchPost(query)
    }, 300),
    []
  )

  const handleSearch = () => {
    const query = inputRef.current?.value
    setQuery(query)
    debouncedSearchPost(query)
  }

  const seeFullEntry = (postId) => {
    navigate(`/entries/${postId}`)
  }

  const editEntry = (postId) => {
    navigate(`/entries/${postId}/edit`)
  }

  const onDeletePost = (postId) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deletePostById(postId)
    }
  }

  return (
    <div className='entries-container'>
      {sortedPosts ? (
        <>
          <div className='search-container'>
            <input
              type='text'
              placeholder='Cinema day, New Mascot...'
              ref={inputRef}
              value={query}
              onChange={handleSearch}
            />
            <button onClick={handleSearch}>
              <SearchIcon />
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th onClick={toggleDateSortOption}>
                  <span className='th-content'>
                    Date
                    <span className='arrow-span'>
                      {sortOptions.date === 'asc' ? '▲' : '▼'}
                    </span>
                  </span>
                </th>
                <th onClick={toggleTitleSortOption}>
                  <span className='th-content'>
                    Title
                    <span className='arrow-span'>
                      {sortOptions.title === 'asc' ? '▲' : '▼'}
                    </span>
                  </span>
                </th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedPosts.map((post) => (
                <tr key={post.id} onClick={() => seeFullEntry(post.id)}>
                  <td>{formatDate(post.date)}</td>
                  <td>{post.title}</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <div className='actions-cell'>
                      <button onClick={() => editEntry(post.id)}>
                        <EditPenIcon />
                      </button>
                      <button
                        className='trash-btn'
                        onClick={() => onDeletePost(post.id)}
                      >
                        <TrashCanIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className='no-entries'>There's no posts yet</div>
      )}
    </div>
  )
}
