// import {useState, useEffect} from 'react'
import CardCastComponent from "../molecules/CardCastComponent";
import HeaderTitle from "../molecules/HeaderTitle";
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
    slidesToShow: 8,            // Menampilkan 5 item sekaligus
    slidesToScroll: 1,          // Geser 1 item per kali geser
    nextArrow: <NextArrow />,   // Custom Next Arrow component
    prevArrow: <PrevArrow />,   // Custom Prev Arrow component
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,      // Tampilkan 4 item di layar besar
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,      // Tampilkan 4 item di layar besar
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,      // Tampilkan 2 item di layar sedang
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,      // Tampilkan 1 item di layar kecil
          slidesToScroll: 1,
          initialSlide: 0,      // Mulai dari slide pertama
          centerMode: true,     // Aktifkan centering
          centerPadding: "10px"
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,      // Tampilkan 1 item di layar kecil
          slidesToScroll: 1,
          initialSlide: 0,      // Mulai dari slide pertama
          centerMode: true,     // Aktifkan centering
          centerPadding: "10px"
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,      // Tampilkan 1 item di layar kecil
          slidesToScroll: 1,
          initialSlide: 0,      // Mulai dari slide pertama
          centerMode: true,     // Aktifkan centering
          centerPadding: "10px"
        },
      },
    ],
  };

export default function CarouselCast({allDataMovie, title}) {
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
                        {dataMovie.map((movie) => (
                          <CardCastComponent
                              key={movie.id}
                              link={movie.profile_path}
                              name={movie.name}
                              character={movie.character}
                          />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}