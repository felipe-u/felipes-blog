import './styles/App.css'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { HomeLayout } from './layouts/HomeLayout'
import { Loader } from './components/Loader'
import { routes } from './routes'

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {routes.map(({ path, component: Page }) => (
          <Route
            key={path || 'index'}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                {Page ? <Page /> : null}
              </Suspense>
            }
            index={path === '' ? true : undefined}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
