import { createStore } from 'redux'
import rootReducer from './rootReducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

export default createStore(rootReducer, devToolsEnhancer({}))
