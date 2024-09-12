import { useEffect } from "react";
import NavbarComponent from "../organisms/NavbarComponent";
import {Link, useParams} from 'react-router-dom';
import HeaderTitle from "../molecules/HeaderTitle";
import CardComponent from "../molecules/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getMovieSearch } from "../../redux/actions";

export default function Search() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const dataMovieTemp = useSelector((state) => state)
    useEffect(() => {
        dispatch(getMovieSearch(id))
    }, [dispatch, id]);
    const dataMovie = dataMovieTemp.getMovieReducer.dataSearch

    // const [dataMovie, setDataMovie] = useState([])
    // useEffect(() => {
    //     getData()
    //     window.scrollTo(0, 0);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[query]); 

    // const getData = async() =>{
    //   const Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGVjNjY2ZThiZDBlMzUxOTA4NzMzZTg5ZDExZDNmMSIsIm5iZiI6MTcyNTk1MjkxNy42OTk1NTIsInN1YiI6IjY2ZGZlZGQ2MDAwMDAwMDAwMDU4ODY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5dsa3RPjGXlFKXTatCxDoNBWfKuSkkeoNX0LXdPbOgE`;
    //   try {
    //     const dataAPI = await fetch("https://api.themoviedb.org/3/search/movie?query=" + query, {
    //       headers: {
    //         Authorization: Authorization
    //       }
    //     })
    //     const result = await dataAPI.json(dataAPI)

    //     const filteredData = result.results.filter(movie => movie.poster_path).map(movie => ({
    //         id: movie.id,
    //         title: movie.title,
    //         overview: movie.overview,
    //         poster_path: "https://image.tmdb.org/t/p/w500"+movie.poster_path,
    //         popularity: movie.popularity,
    //         rate: movie.vote_average
    //     })).sort((a, b) => b.rate - a.rate);

    //     setDataMovie(filteredData);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    return (
        <>
            <NavbarComponent/>
            <div className="container my-4">
                <div className="row">
                    <HeaderTitle
                        title={`Search for ${id}`}
                    />
                </div>
                <div className="row flex-wrap">
                    {dataMovie && dataMovie.map((movie) => (
                        <div className="col-md-3" key={movie.id}>
                            <Link to={"/movies/"+movie.id}>
                                <CardComponent
                                    // key={movie.id}
                                    link={movie.poster_path}
                                    name={movie.title}
                                    rate={movie.rate}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}