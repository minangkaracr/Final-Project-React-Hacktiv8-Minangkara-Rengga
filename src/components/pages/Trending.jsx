import { useDispatch, useSelector } from 'react-redux';
// import NavbarComponent from '../organisms/NavbarComponent';
import TrendingComponent from "../organisms/TrendingComponent";
import { useEffect } from 'react';
import { getMovieTrendingWeek } from '../../redux/actions';

export default function Homepage() {
    const dispatch = useDispatch()
    const dataMovie = useSelector((state) => state)
    useEffect(() => {
        dispatch(getMovieTrendingWeek())
    }, [dispatch]);
    return (
        <>        
            {/* <NavbarComponent/> */}
            <TrendingComponent
                allDataMovie={dataMovie.getMovieReducer.dataTrendingDay}
                title = "Top Trending This Week"
            />
        </>
    )
}