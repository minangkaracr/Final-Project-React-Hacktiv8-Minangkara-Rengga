const initialState = {
    dataNowPlaying: [],
    dataTopRated: [],
    dataTrendingDay: [],
    dataTrendingWeek: [],
    dataTopCast:[],
    dataSimilarMovie:[],
    dataRecommendation:[],
    dataCast:[],
    dataSearch:[],
    dataVideo:"",
    isLoading: false
};

export const getMovieReducer = (state = initialState, action) => {
    if (action.type === 'SET_MOVIE_NOW_PLAYING') {
        return {
            ...state,
            dataNowPlaying: action.payload
        };
    } else if (action.type === 'SET_MOVIE_TOP_RATED') {
        return {
            ...state,
            dataTopRated: action.payload
        };
    } else if (action.type === 'SET_MOVIE_TRENDING_DAY') {
        return {
            ...state,
            dataTrendingDay: action.payload
        };
    } else if (action.type === 'SET_MOVIE_TRENDING_WEEK') {
        return {
            ...state,
            dataTrendingWeek: action.payload
        };
    } else if (action.type === 'SET_MOVIE_SIMILAR') {
        return {
            ...state,
            dataSimilarMovie: action.payload
        };
    } else if (action.type === 'SET_MOVIE_RECOMMENDATION') {
        return {
            ...state,
            dataRecommendation: action.payload
        };
    } else if (action.type === 'SET_MOVIE_CAST') {
        return {
            ...state,
            dataCast: action.payload
        };
    } else if (action.type === 'SET_MOVIE_SEARCH') {
        return {
            ...state,
            dataSearch: action.payload
        };
    } else if (action.type === 'SET_MOVIE_VIDEO') {
        return {
            ...state,
            dataVideo: action.payload
        };
    } else if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.payload
        };
    }
    return state;
};