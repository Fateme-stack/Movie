import "../css/Favorits.css";
import { useMovieContext } from "../Contexts/MavoriteContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
   const { favorites } = useMovieContext();

   if (favorites.length === 0) {
      return (
         <div className="favorites-empty">
            <h2>No favorite movies yet</h2>
            <p>Start adding favorite movies...</p>
         </div>
      );
   }

   return (
      <div className="favorites">
         <h2>Your Favorites</h2>
         <div className="movies-grid">
            {favorites.map((movie) => (
               <MovieCard movie={movie} key={movie.id} />
            ))}
         </div>
      </div>
   );
}

export default Favorite;
