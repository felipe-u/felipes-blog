import '../styles/Entries.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { usePosts } from '../hooks/usePosts'

export function EntryFormPage() {
  const navigate = useNavigate()
  const { createPost } = usePosts()

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imgUrl: '',
    date: new Date(),
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createPost(formData)
    alert('Post Created')
    navigate('/')
  }

  const cancelSubmit = () => {
    if (confirm('Are you sure you want to cancel?')) {
      setFormData({ title: '', content: '', imgUrl: '', date: new Date() })
      navigate('/')
    }
  }

  return (
    <div className='new-entry-container'>
      <h2>Write anything you want!</h2>

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
          <button>Save</button>
          <button className='cancel-btn' type='reset' onClick={cancelSubmit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
