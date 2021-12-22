import './App.css'
import 'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
