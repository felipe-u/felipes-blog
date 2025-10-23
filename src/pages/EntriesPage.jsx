import { useNavigate } from 'react-router'
import { EditPenIcon, SearchIcon, TrashCanIcon } from '../components/Icons'
import '../styles/Entries.css'

export function EntriesPage() {
  const navigate = useNavigate()

  const seeFullEntry = () => {
    navigate('/entries/1')
  }

  return (
    <div className='entries-container'>
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
          <tr onClick={seeFullEntry}>
            <td>2025-10-21</td>
            <td>Testing Title</td>
            <td className='actions-cell' onClick={(e) => e.stopPropagation()}>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-10-21</td>
            <td>Testing Title 2</td>
            <td className='actions-cell'>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-10-21</td>
            <td>Testing Title 2</td>
            <td className='actions-cell'>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-10-21</td>
            <td>Testing Title 2</td>
            <td className='actions-cell'>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-10-21</td>
            <td>Testing Title 2</td>
            <td className='actions-cell'>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-10-21</td>
            <td>Testing Title 2</td>
            <td className='actions-cell'>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-10-21</td>
            <td>Testing Title 2</td>
            <td className='actions-cell'>
              <button>
                <EditPenIcon />
              </button>
              <button className='trash-btn'>
                <TrashCanIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
