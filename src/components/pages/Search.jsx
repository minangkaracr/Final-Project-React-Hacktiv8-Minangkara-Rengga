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