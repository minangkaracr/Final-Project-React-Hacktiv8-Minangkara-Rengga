// import popularity from '../../images/popularity.png';
import Carousel from './Carousel';
import CarouselCast from './CarouselCast';
import NavbarComponent from '../organisms/NavbarComponent';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieCast, getMovieRecommendation, getMovieSimilar, getMovieVideo } from '../../redux/actions';
import VideoTrailer from '../organisms/Player';
import { token } from '../../token/token';

export default function MovieDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const dataMovie = useSelector((state) => state)
    useEffect(() => {
        dispatch(getMovieSimilar(id))
        dispatch(getMovieRecommendation(id))
        dispatch(getMovieCast(id))
        dispatch(getMovieVideo(id))
    }, [dispatch, id]);
    console.log(dataMovie.getMovieReducer.dataVideo)
    const [dataMovies, setDataMovie] = useState([])
    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]); 

    const getData = async() =>{
      const Authorization = `Bearer ${token}`;
      try {
        const dataAPI = await fetch("https://api.themoviedb.org/3/movie/" + id, {
          headers: {
            Authorization: Authorization
          }
        })
        const result = await dataAPI.json(dataAPI)

        const genreNames = result.genres.map(genre => genre.name);
        const genreString = genreNames.join(", ");
        const tahunRelease = result.release_date.split('-')[0]

        const filteredData = {
            id:result.id,
            title:result.title,
            overview:result.overview,
            poster_path:result.poster_path,
            genres:genreString,
            release_date:result.release_date,
            runtime:result.runtime,
            year:tahunRelease
        }
        setDataMovie(filteredData);
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <>
            <NavbarComponent/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <img className='w-100' alt='' variant="top" src={"https://image.tmdb.org/t/p/w500" + dataMovies.poster_path}/>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <h1>{dataMovies.title + " (" + dataMovies.year +")"}</h1>
                        </div>
                        <div className='row'>
                            <p>{dataMovies.release_date + " | " + dataMovies.runtime + " minutes | " + dataMovies.genres}</p>
                        </div>
                        <div className="row">
                            <h3>Overview:</h3>
                        </div>
                        <div className='row'>
                            <p>{dataMovies.overview}</p>
                        </div>
                    </div>
                    <VideoTrailer 
                        id={dataMovie.getMovieReducer} 
                    />
                    <CarouselCast
                        title = "Top Cast"
                        allDataMovie={dataMovie.getMovieReducer.dataCast}
                    />
                    <Carousel
                        title = "Recommendation Movies"
                        allDataMovie={dataMovie.getMovieReducer.dataRecommendation}
                    />
                    <Carousel
                        title = "Similar Movies"
                        allDataMovie={dataMovie.getMovieReducer.dataSimilarMovie}
                    />
                </div>
            </div>
        </>
    )
}