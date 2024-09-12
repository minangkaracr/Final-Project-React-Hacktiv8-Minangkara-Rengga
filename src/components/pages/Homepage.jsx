import Carousel from "./Carousel";
import NavbarComponent from '../organisms/NavbarComponent';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieNowPlaying, getMovieTopRated, getMovieTrendingDay } from "../../redux/actions";
import { useEffect } from "react";

export default function Homepage() {
    const dispatch = useDispatch()
    const dataMovie = useSelector((state) => state)
    console.log(dataMovie)
    useEffect(() => {
        dispatch(getMovieNowPlaying())
        dispatch(getMovieTopRated())
        dispatch(getMovieTrendingDay())
    }, [dispatch]);


    return (
        <>        
            <NavbarComponent/>
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