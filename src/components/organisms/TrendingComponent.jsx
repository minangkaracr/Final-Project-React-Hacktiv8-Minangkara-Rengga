import CardComponent from "../molecules/CardComponent";
import HeaderTitle from "../molecules/HeaderTitle";
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function TrendingComponent({title}) {
    const dataMovieTemp = useSelector((state) => state)
    const dataMovie = dataMovieTemp.getMovieReducer.dataTrendingWeek

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <HeaderTitle
                        title={title}
                    />
                </div>
                <div className="row justify-content-between">
                    {dataMovie.map((movie) => (
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