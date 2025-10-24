import '../styles/Entries.css'
import { useNavigate } from 'react-router'
import { EditPenIcon, SearchIcon, TrashCanIcon } from '../components/Icons'
import { formatDate } from '../helpers/logic'
import { useSortPosts } from '../hooks/useSortPosts'

export function EntriesPage() {
  const navigate = useNavigate()

  const {
    sortedPosts,
    sortOptions,
    toggleDateSortOption,
    toggleTitleSortOption,
  } = useSortPosts()

  const seeFullEntry = (postId) => {
    navigate(`/entries/${postId}`)
  }

  return (
    <div className='entries-container'>
      {sortedPosts ? (
        <>
          <div className='search-container'>
            <input type='text' placeholder='Cinema day, New Mascot...' />
            <button>
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
                    <button className='trash-btn'>
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
