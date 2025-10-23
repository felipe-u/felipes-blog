import { useNavigate } from 'react-router'
import { EditPenIcon, SearchIcon, TrashCanIcon } from '../components/Icons'
import '../styles/Entries.css'
import { usePosts } from '../hooks/usePosts'

export function EntriesPage() {
  const navigate = useNavigate()
  const { posts } = usePosts()

  const seeFullEntry = (postId) => {
    navigate(`/entries/${postId}`)
  }

  return (
    <div className='entries-container'>
      {posts ? (
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
                <th>
                  <span className='th-content'>
                    Date <span className='arrow-span'>▲</span>
                  </span>
                </th>
                {/* <th>
              Date <span className='arrow-span'>▼</span>
            </th> */}
                <th>
                  <span className='th-content'>
                    Title <span className='arrow-span'>▲</span>{' '}
                  </span>
                </th>
                {/* <th>
              Title <span className='arrow-span'>▼</span>{' '}
            </th> */}
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr onClick={() => seeFullEntry(post.id)}>
                  <td>{post.date}</td>
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
        <div className='no-entries'>There's no entry yet</div>
      )}
    </div>
  )
}
