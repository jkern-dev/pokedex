import thunk from '../middleware/thunk';

const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  )
);