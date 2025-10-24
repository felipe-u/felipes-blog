import './styles/App.css'
import { Route, Routes } from 'react-router'
import { HomeLayout } from './layouts/HomeLayout'
import { HomePage } from './pages/HomePage'
import { EntriesPage } from './pages/EntriesPage'
import { AboutPage } from './pages/AboutPage'
import { EntryPage } from './pages/EntryPage'
import { NewEntry } from './pages/NewEntry'

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/entries' element={<EntriesPage />} />
          <Route path='/entries/:entryId' element={<EntryPage />} />
          <Route path='/new-entry' element={<NewEntry />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
