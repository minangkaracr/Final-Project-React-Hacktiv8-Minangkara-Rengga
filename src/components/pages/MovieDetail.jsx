// import popularity from '../../images/popularity.png';
import Carousel from '../organisms/Carousel';
import CarouselCast from '../organisms/CarouselCast';
import NavbarComponent from '../organisms/NavbarComponent';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieCast, getMovieRecommendation, getMovieSimilar, getMovieVideo } from '../../redux/actions';
import VideoTrailer from '../organisms/Player';
import HeaderTitle from '../molecules/HeaderTitle';

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
      const Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`;
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
                <div className="row">
                    <div className="col-md-6 col-lg-4 justify-content-center align-content-center">
                        <img className='w-100' alt='' variant="top" src={"https://image.tmdb.org/t/p/w500" + dataMovies.poster_path}/>
                    </div>
                    <div className="col-md-6 col-lg-8">
                        <div className="row">
                            <HeaderTitle title={dataMovies.title + " (" + dataMovies.year +")"}/>
                            {/* <h1>{dataMovies.title + " (" + dataMovies.year +")"}</h1> */}
                        </div>
                        <div className='row'>
                            <p>{"Release Date: "+ dataMovies.release_date + " | Time: " +dataMovies.runtime + " minutes | Genres: " + dataMovies.genres}</p>
                        </div>
                        <div className="row">
                            {/* <HeaderTitle title="Overview:"/> */}
                            <h3>Overview:</h3>
                        </div>
                        <div className='row'>
                            <p>{dataMovies.overview}</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 col-lg-8'>
                                <VideoTrailer 
                                    id={dataMovie.getMovieReducer} 
                                />
                            </div>
                        </div>
                    </div>
                    {/* <VideoTrailer 
                        id={dataMovie.getMovieReducer} 
                    /> */}
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