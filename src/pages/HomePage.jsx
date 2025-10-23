import '../styles/Home.css'
import { EntrySum } from '../components/EntrySum'
import { PenIcon } from '../components/Icons'
import { usePosts } from '../hooks/usePosts'

export function HomePage() {
  const { posts } = usePosts()

  return (
    <div className='home-container'>
      <div className='new-btn-container'>
        <button>
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
