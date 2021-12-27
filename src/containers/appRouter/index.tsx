import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/common/Header'
import { Footer } from 'components/common/Footer'
import { Suspense } from 'react'

import { Home } from 'containers/home/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

export const AppRouter = () => {
  const LoadingMessage = () => <div>Loading..,</div>
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Suspense fallback={<LoadingMessage />}>
          <Routes>
            {routes.map(route => (
              <Route
                path={route.path}
                element={route.component()}
                key={route.path}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Footer />
    </div>
  )
}
