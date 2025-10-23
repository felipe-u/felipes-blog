import { useNavigate } from 'react-router'
import { CalendarIcon } from './Icons'

export function EntrySum() {
  const navigate = useNavigate()

  const seeFullEntry = () => {
    navigate('/entries/1')
  }

  return (
    <div className='entry-sum-container' onClick={seeFullEntry}>
      <img
        src='https://i.pinimg.com/1200x/29/a3/5f/29a35f173cd4af4f208348e1bbaf5532.jpg'
        alt=''
      />
      <div className='sum-data-container'>
        <h2>Testing Title</h2>
        <div className='date-visualizer'>
          <CalendarIcon />
          <span>2025-10-21</span>
        </div>
      </div>
    </div>
  )
}
