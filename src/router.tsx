import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { WorksPage } from './pages/WorksPage'
import { ProjectPageJunkFeed } from './pages/projects/ProjectPageJunkFeed'
import { ProjectPageColab } from './pages/projects/ProjectPageColab'
import { ProjectPageDad } from './pages/projects/ProjectPageDad'
import { ProjectPageIstd } from './pages/projects/ProjectPageIstd'
import { ProjectPageQuietGrowth } from './pages/projects/ProjectPageQuietGrowth'
import { ProjectPageShane } from './pages/projects/ProjectPageShane'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/works', element: <WorksPage /> },
      { path: '/works/junk-feed-campaign', element: <ProjectPageJunkFeed /> },
      { path: '/works/colab-branding', element: <ProjectPageColab /> },
      { path: '/works/dad-awards-brief', element: <ProjectPageDad /> },
      { path: '/works/istd-typography-submission', element: <ProjectPageIstd /> },
      { path: '/works/shane-macgowan-merchandise', element: <ProjectPageShane /> },
      { path: '/works/quiet-growth-branding', element: <ProjectPageQuietGrowth /> },
    ],
  },
])
