// Src/components/StarMap.jsx

function StarMap() {
    // lat=10.85 & lon=74.78 Soledad, Atlantico

    const starMapUrl = "https://stellarium-web.org/skysource/Stellarium.html?date=2023-08-20T22:00:00&lat=10.85&lng=-74.78&ecliptic=false&meridian=false&constellations=true&constellationlabels=true&showGui=false";

    return (
        <section className="mt-12 w-full max-w-4xl mx-auto">
            {/*Contenedor que mantiene la proporción y añade efectos visuales */}
            <div className="aspect-[16/9] bg-black/50 rounded-2xl shadow-2xl shadow-star-blue/20 border border-moon-glow/10 overflow-hidden">
                <iframe 
                    src={starMapUrl}
                    title="Mapa del Cielo Estrellado"
                    className="w-full h-full border-0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm text-moon-glow/70">
                    Este era el cielo sobre Las Trinitarias, la noche en que había besado a la mujer de mi vida.
                </p>
                <p className="text-xs text-moon-glow/50 italic mt-1">
                    (Puedes intectuar con el mapa: arrastra para moverte y usa la rueda del ratón para hacer zoom)
                </p>
            </div>
        </section>
    );
}

export default StarMap;