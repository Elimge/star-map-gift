// src/components/SpotifyPlayer.jsx

function SpotifyPlayer() {
    const playlistUrl = "https://open.spotify.com/embed/playlist/6QukF5uhm6lic04y3ONGM1?utm_source=generator&theme=0";

    return (
        <section className="mt-16 w-full max-w-2xl mx-auto text-center">
            <h2 className="mt-16 w-full max-w-2xl mx-auto text-center">
                Con estas siempre me acuerdo de ti
            </h2>

            <iframe 
                style={{ borderRadius: "12px" }}
                src={playlistUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Playlist de Spotify"
            ></iframe>

            <p className="mt-8 text-lg text-moon-glow/80 italic">
                ¿Quién soy yo para que me premies con tan precioso regalo?
            </p>
        </section>
    );
}

export default SpotifyPlayer;