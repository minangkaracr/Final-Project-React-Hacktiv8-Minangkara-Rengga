// import ReactPlayer from "react-player";
import HeaderTitle from "../molecules/HeaderTitle";
// import {Carousel} from "react-bootstrap";
// import HeaderTitle from "../molecules/HeaderTitle";


export default function Tophompage() {
    return (
        <>
            <div className="container">
                <div className="row" style={{ position: "relative" }}>
                    <div className="col-sm-12 col-md-8">
                        <div style={{ position: "absolute", paddingLeft: "20px", zIndex: 6, }} >
                            <HeaderTitle 
                                title="Top Movies Today"
                            />
                            <div>
                                
                            </div>
                        </div>  
                        <div style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            background: "linear-gradient(to right, rgba(0, 0, 0, 8), rgba(0, 0, 0, 0))",
                            zIndex: 1 // Lebih rendah dari HeaderTitle tapi lebih tinggi dari gambar
                        }}></div>
                        <img 
                            src="https://image.tmdb.org/t/p/w500/5Sxcd0cZinPo3QQRNfMHkLnhhCs.jpg" 
                            alt="kfpanda" 
                            style={{ width: "100%", height: "auto"}} 
                        />
                    </div>
                    <div className="col-sm-12 col-md-4" style={{ position: "relative", zIndex:2 }}>
                        sadkashjk
                    </div>
                </div>
                {/* <div className="row">
                    <img src="https://storage.googleapis.com/fastwork-static/6b3b2b7f-8551-4241-aa77-9be946342635.jpg" alt="asdsa" />
                </div> */}
                {/* <Carousel>
                    <Carousel.Item>
                        <div className="row">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=_inKs4eeHiI`}
                                width="100%"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-sm-6">
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=_inKs4eeHiI`}
                                    width="100%"
                                />
                            </div>
                            <div className="col-sm-6">
                                <HeaderTitle title="Kungfu Panda 4"/>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel> */}
            </div>
        </>
    )
}