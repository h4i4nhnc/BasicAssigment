import './App.css'
import 'bulma/css/bulma.min.css'
import { Provider } from 'react-redux'
import { AppRouter } from './containers/appRouter'
import history from 'utils/history'
import configureStore from 'configureStore'

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
