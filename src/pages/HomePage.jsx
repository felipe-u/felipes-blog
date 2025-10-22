import '../styles/Home.css'
import { EntrySum } from '../components/EntrySum'
import { PenIcon } from '../components/Icons'

export function HomePage() {
  return (
    <div className='home-container'>
      <div className='new-btn-container'>
        <button>
          New entry
          <PenIcon />
        </button>
      </div>

      <div className='entries-sum-container'>
        <EntrySum />
        <EntrySum />
      </div>
    </div>
  )
}
