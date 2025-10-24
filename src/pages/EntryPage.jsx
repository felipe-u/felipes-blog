import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { usePosts } from '../hooks/usePosts'
import { formatDate } from '../helpers/logic'

export function EntryPage() {
  const navigate = useNavigate()
  const { entryId } = useParams()
  const { getPost } = usePosts()
  const [post, setPost] = useState(null)

  useEffect(() => {
    setPost(getPost(entryId))
  }, [entryId, getPost])

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className='entry-container'>
      {post && (
        <div className='entry-content'>
          <h2>{post.title}</h2>
          <p>Published at: {formatDate(post.date)}</p>

          <img src={post.imgUrl} alt={`${post.title} image`} />

          <p className='entry-payload'>{post.content}</p>

          <div className='entry-btn-container'>
            <button>Edit</button>
            <button onClick={goHome}>Go Home</button>
          </div>
        </div>
      )}
    </div>
  )
}
