import '../styles/Entries.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { usePosts } from '../hooks/usePosts'

export default function EntryFormPage() {
  const navigate = useNavigate()
  const { createPost, getPostById, editPost } = usePosts()
  const { entryId } = useParams()
  const isEdit = Boolean(entryId)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imgUrl: '',
    date: new Date(),
  })

  useEffect(() => {
    if (isEdit) {
      const postToEdit = getPostById(entryId)
      setFormData((prev) => ({
        ...prev,
        title: postToEdit.title,
        content: postToEdit.content,
        imgUrl: postToEdit.imgUrl,
      }))
    }
  }, [isEdit, entryId, getPostById])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isEdit) {
      editPost(entryId, formData)
      alert('Post updated')
    } else {
      createPost(formData)
      alert('Post Created')
    }
    navigate('/')
  }

  const cancelSubmit = () => {
    const areFieldsEmpy =
      !formData.title && !formData.content && !formData.imgUrl

    if (areFieldsEmpy || confirm('Are you sure you want to cancel?')) {
      setFormData({ title: '', content: '', imgUrl: '', date: new Date() })
      navigate(-1)
    }
  }

  return (
    <div className='new-entry-container'>
      {isEdit ? <h2>Editing...</h2> : <h2>Write anything you want!</h2>}

      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className='input-container'>
          <label htmlFor='content'>Content</label>
          <textarea
            id='content'
            name='content'
            rows='10'
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='input-container'>
          <label htmlFor='imgUrl'>Upload a nice image</label>
          <input
            type='text'
            id='imgUrl'
            name='imgUrl'
            value={formData.imgUrl}
            onChange={handleChange}
          />
        </div>
        {formData.imgUrl && (
          <div className='img-container'>
            <img src={formData.imgUrl} alt='Try with another url' />
          </div>
        )}

        <div className='btn-container'>
          <button>{isEdit ? 'Save' : 'Upload'}</button>
          <button className='cancel-btn' type='reset' onClick={cancelSubmit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
