import '../styles/Entries.css'
import { useNavigate } from 'react-router'
import { EditPenIcon, SearchIcon, TrashCanIcon } from '../components/Icons'
import { formatDate } from '../helpers/logic'
import { useFilterPosts } from '../hooks/useFilterPosts'

export function EntriesPage() {
  const navigate = useNavigate()

  const { filteredPosts, filterOptions, toggleDateFilter, toggleTitleFilter } =
    useFilterPosts()

  const seeFullEntry = (postId) => {
    navigate(`/entries/${postId}`)
  }

  return (
    <div className='entries-container'>
      {filteredPosts ? (
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
                <th onClick={toggleDateFilter}>
                  <span className='th-content'>
                    Date
                    <span className='arrow-span'>
                      {filterOptions.date === 'asc' ? '▲' : '▼'}
                    </span>
                  </span>
                </th>
                <th onClick={toggleTitleFilter}>
                  <span className='th-content'>
                    Title
                    <span className='arrow-span'>
                      {filterOptions.title === 'asc' ? '▲' : '▼'}
                    </span>
                  </span>
                </th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
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
