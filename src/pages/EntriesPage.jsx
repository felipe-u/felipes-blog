import '../styles/Entries.css'
import { useNavigate } from 'react-router'
import { EditPenIcon, SearchIcon, TrashCanIcon } from '../components/Icons'
import { formatDate } from '../helpers/logic'
import { useSortPosts } from '../hooks/useSortPosts'
import { useRef } from 'react'
import { usePosts } from '../hooks/usePosts'

export function EntriesPage() {
  const navigate = useNavigate()
  const {
    sortedPosts,
    sortOptions,
    toggleDateSortOption,
    toggleTitleSortOption,
    searchPost,
  } = useSortPosts()
  const inputRef = useRef()
  const { deletePostById } = usePosts()

  const onSearchPost = () => {
    const query = inputRef.current?.value
    // TODO: with debouncer
    // if (!query) return
    searchPost(query)
  }

  const seeFullEntry = (postId) => {
    navigate(`/entries/${postId}`)
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
            />
            <button onClick={onSearchPost}>
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
                  <td
                    className='actions-cell'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button>
                      <EditPenIcon />
                    </button>
                    <button
                      className='trash-btn'
                      onClick={() => onDeletePost(post.id)}
                    >
                      <TrashCanIcon />
                    </button>
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
