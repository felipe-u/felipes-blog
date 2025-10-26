import '../styles/Home.css'
import { EntrySum } from '../components/EntrySum'
import { PenIcon } from '../components/Icons'
import { usePosts } from '../hooks/usePosts'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const { posts } = usePosts()
  const navigate = useNavigate()

  const goToNewEntryPage = () => {
    navigate('/entries/new')
  }

  return (
    <div className='home-container'>
      <div className='new-btn-container'>
        <button onClick={goToNewEntryPage}>
          New entry
          <PenIcon />
        </button>
      </div>

      <div className='entries-sum-container'>
        {posts.map((post) => {
          return <EntrySum key={post.id} postData={post} />
        })}
      </div>
    </div>
  )
}
