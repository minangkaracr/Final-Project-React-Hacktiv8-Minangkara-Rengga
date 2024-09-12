import { combineReducers } from 'redux';
// import { postReducer } from './post';
import { getMovieReducer } from './dataMovieCarousel';


const reducer = combineReducers({
    getMovieReducer,
});

export default reducer;