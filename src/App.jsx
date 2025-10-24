import './styles/App.css'
import { Route, Routes } from 'react-router'
import { HomeLayout } from './layouts/HomeLayout'
import { HomePage } from './pages/HomePage'
import { EntriesPage } from './pages/EntriesPage'
import { AboutPage } from './pages/AboutPage'
import { EntryPage } from './pages/EntryPage'
import { EntryFormPage } from './pages/EntryFormPage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/entries' element={<EntriesPage />} />
          <Route path='/entries/new' element={<EntryFormPage />} />
          <Route path='/entries/:entryId' element={<EntryPage />} />
          <Route path='/entries/:entryId/edit' element={<EntryFormPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
