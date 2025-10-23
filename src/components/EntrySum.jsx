import { useNavigate } from 'react-router'
import { CalendarIcon } from './Icons'

export function EntrySum({ postData }) {
  const navigate = useNavigate()

  const seeFullEntry = () => {
    navigate(`/entries/${postData.id}`)
  }

  return (
    <div className='entry-sum-container' onClick={seeFullEntry}>
      <img
        src={postData.imgUrl}
        alt={`${postData.title} image`}
      />
      <div className='sum-data-container'>
        <h2>{postData.title}</h2>
        <div className='date-visualizer'>
          <CalendarIcon />
          <span>{postData.date}</span>
        </div>
      </div>
    </div>
  )
}
