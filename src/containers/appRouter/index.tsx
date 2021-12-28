import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/common/Header'
import { Footer } from 'components/common/Footer'

import { Home } from 'containers/home/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  // add more routes here
]

export const AppRouter = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          {routes.map(route => (
            <Route
              path={route.path}
              element={route.component()}
              key={route.path}
            />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
