import Carousel from "../organisms/Carousel";
// import NavbarComponent from '../organisms/NavbarComponent';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieNowPlaying, getMovieTopRated, getMovieTrendingDay } from "../../redux/actions";
import { useEffect } from "react";
// import Tophompage from "../organisms/TopHompage";

export default function Homepage() {
    const dispatch = useDispatch()
    const dataMovie = useSelector((state) => state)
    useEffect(() => {
        dispatch(getMovieNowPlaying())
        dispatch(getMovieTopRated())
        dispatch(getMovieTrendingDay())
    }, [dispatch]);

    return (
        <>        
            {/* <NavbarComponent/> */}
            {/* <Tophompage/> */}
            <Carousel
                title = "Now Playing"
                allDataMovie={dataMovie.getMovieReducer.dataNowPlaying}
            />
            <Carousel
                title = "Top Rated"
                allDataMovie={dataMovie.getMovieReducer.dataTopRated}
            />
            <Carousel
                title = "Top Movies Today"
                allDataMovie={dataMovie.getMovieReducer.dataTrendingDay}
            />
        </>
    )
}