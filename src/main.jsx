import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { PostsProvider } from './contexts/posts.jsx'

createRoot(document.getElementById('root')).render(
  <PostsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostsProvider>
)
