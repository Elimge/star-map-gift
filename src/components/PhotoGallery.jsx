// src/components/PhotoGallery.jsx

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import photo1 from "../assets/memories/bd-date.webp";
import photo2 from "../assets/memories/red-roses.jpg";
import photo3 from "../assets/memories/dely.webp";
import photo4 from "../assets/memories/carnival.webp";
import photo5 from "../assets/memories/more-flowers.webp";
import photo6 from "../assets/memories/bq-center.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

function PhotoGallery() {
    return (
        <section className="mt-16 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-star-yellow mb-6">
                Momentos inolvidables
            </h2>
            <div className="rounded-lg- overflow-hidden shadow-lg shadow-star-blue/20">
                <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={4000}
                className="text-center"
                >
                    {photos.map((photo, index) => (
                        <div key={index}>
                            <img src={photo} alt={`Recuerdo ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default PhotoGallery;