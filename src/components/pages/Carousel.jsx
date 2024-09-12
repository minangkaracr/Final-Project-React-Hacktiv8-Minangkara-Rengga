// import {useState, useEffect} from 'react'
import CardComponent from "../molecules/CardComponent";
import HeaderTitle from "../molecules/HeaderTitle";
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "30px", fontSize: "30px", transform: "scale(3)" }} // position for right arrow
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "30px", fontSize: "30px", transform: "scale(3)", zIndex: 1 }} // position for left arrow
            onClick={onClick}
        />
    );
};

const settings = {
    dots: true,                 // Menampilkan indikator pagination
    infinite: true,             // Carousel loop
    speed: 500,                 // Kecepatan transisi
    slidesToShow: 5,            // Menampilkan 5 item sekaligus
    slidesToScroll: 1,          // Geser 1 item per kali geser
    nextArrow: <NextArrow />,   // Custom Next Arrow component
    prevArrow: <PrevArrow />,   // Custom Prev Arrow component
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,      // Tampilkan 4 item di layar besar
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,      // Tampilkan 4 item di layar besar
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,      // Tampilkan 2 item di layar sedang
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,      // Tampilkan 1 item di layar kecil
          slidesToScroll: 1,
          initialSlide: 0,      // Mulai dari slide pertama
          centerMode: true,     // Aktifkan centering
          centerPadding: "10px"
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,      // Tampilkan 1 item di layar kecil
          slidesToScroll: 1,
          initialSlide: 0,      // Mulai dari slide pertama
          centerMode: true,     // Aktifkan centering
          centerPadding: "10px"
        },
      },
    ],
  };

export default function Carousel({allDataMovie, title}) {
    // const [dataMovie, setDataMovie] = useState([])
    // useEffect(() => {
    //   getData()
    //   console.log(linkAPI)
    // }, []);// eslint-disable-line react-hooks/exhaustive-deps
    // const getData = async() =>{
    //   const Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGVjNjY2ZThiZDBlMzUxOTA4NzMzZTg5ZDExZDNmMSIsIm5iZiI6MTcyNTk1MjkxNy42OTk1NTIsInN1YiI6IjY2ZGZlZGQ2MDAwMDAwMDAwMDU4ODY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5dsa3RPjGXlFKXTatCxDoNBWfKuSkkeoNX0LXdPbOgE`;
    //   try {
    //     const dataAPI = await fetch(linkAPI, {
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
    const dataMovie = allDataMovie
    

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <HeaderTitle
                        title={title}
                    />
                </div>
                <div className="row">
                    <Slider {...settings}>
                        {dataMovie && dataMovie.map((movie) => (
                          <Link to={"/movies/"+movie.id} key={movie.id}>
                            <CardComponent
                                link={movie.poster_path}
                                name={movie.title}
                                rate={movie.rate}
                            />
                          </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}