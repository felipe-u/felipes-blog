import { lazy } from 'react'

export const routes = [
  {
    path: '',
    component: lazy(() => import('./pages/HomePage')),
  },
  {
    path: 'entries',
    component: lazy(() => import('./pages/EntriesPage')),
  },
  {
    path: 'entries/new',
    component: lazy(() => import('./pages/EntryFormPage')),
  },
  {
    path: 'entries/:entryId',
    component: lazy(() => import('./pages/EntryPage')),
  },
  {
    path: 'entries/:entryId/edit',
    component: lazy(() => import('./pages/EntryFormPage')),
  },
  {
    path: 'about',
    component: lazy(() => import('./pages/AboutPage')),
  },
]
