// App.jsx

import Header from "./components/Header"; 
import PhotoGallery from "./components/PhotoGallery";
import SpotifyPlayer from "./components/SpotifyPlayer";
import StarMap from "./components/StarMap";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-space-dark via-star-blue to-dusk-blue text-moon-glow font-serif">
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <Header />
        <StarMap />
        <PhotoGallery />
        <SpotifyPlayer />
      </main>
    </div>
  )
}

export default App;