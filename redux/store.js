import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

export default function configureStore() {
    // กำหนด reducer ลงไปใน store
    return createStore(reducer, applyMiddleware(thunk));
}