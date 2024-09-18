import { useEffect } from "react";
// import NavbarComponent from "../organisms/NavbarComponent";
import {Link, useParams} from 'react-router-dom';
import HeaderTitle from "../molecules/HeaderTitle";
import CardComponent from "../molecules/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getMovieSearch } from "../../redux/actions";
// import { Button } from "react-bootstrap";

export default function Search() {
    const { id, page } = useParams()
    const dispatch = useDispatch()
    const dataMovieTemp = useSelector((state) => state)
    useEffect(() => {
        dispatch(getMovieSearch(id, page))
    }, [dispatch, id, page]);
    const dataMovie = dataMovieTemp.getMovieReducer.dataSearch
    // controller page
    const pagePlus = Number(page) + 1
    const pagePlus2 = Number(page) + 2
    const pageMinus = Number(page) - 1
    const pageToOne = 1


    return (
        <>
            {/* <NavbarComponent/> */}
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8">
                    <HeaderTitle
                        title={`Search for "${id}"`}
                    />
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className={Number(page)> 1 ? "page-item" : "page-item disabled"}>
                                    <Link className="page-link" to={"/search/"+id+"/page/"+pageMinus} aria-label="Previous" style={{ background: "#ffc107", color: "black", borderColor: "#ffc107" }}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                {Number(page) > 2 ?
                                <>
                                <li className="page-item"><Link className="page-link" to={"/search/"+id+"/page/"+pageToOne} style={{ background: "#ffc107", color: "black", borderColor: "#ffc107" }}>1</Link></li>
                                <li className="page-item"><Link className="page-link" to={"/search/"+id+"/page/"+pageMinus} style={{ background: "#ffc107", color: "black", borderColor: "#ffc107" }}>...</Link></li>
                                </>
                                : null}
                                <li className="page-item disabled"><Link className="page-link">{page}</Link></li>
                                <li className="page-item"><Link className="page-link" to={"/search/"+id+"/page/"+pagePlus} style={{ background: "#ffc107", color: "black", borderColor: "#ffc107" }}>{pagePlus}</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to={"/search/"+id+"/page/"+pagePlus2} aria-label="Next" style={{ background: "#ffc107", color: "black", borderColor: "#ffc107" }}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
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
                                    vote_count={movie.vote_count}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}