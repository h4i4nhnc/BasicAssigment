/**
 * Create the store with dynamic reducers
 */

 import { createStore, applyMiddleware, compose } from 'redux';
 import { routerMiddleware } from 'connected-react-router';
 import createSagaMiddleware from 'redux-saga';
 import createReducer from './reducers';
import { BrowserHistory } from 'history';
 
 export default function configureStore(initialState = {}, history: BrowserHistory) {
   let composeEnhancers = compose;
   const reduxSagaMonitorOptions = {};
 
   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
 
   // Create the store with two middlewares
   // 1. sagaMiddleware: Makes redux-sagas work
   // 2. routerMiddleware: Syncs the location/URL path to the state
   const middlewares = [sagaMiddleware, routerMiddleware(history)];
 
   const enhancers = [applyMiddleware(...middlewares)];
 
   const store: any = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );
 
   // Extensions
   store.runSaga = sagaMiddleware.run;
   store.injectedReducers = {}; // Reducer registry
   store.injectedSagas = {}; // Saga registry

 
   return store;
 }