import { MOVIES } from '../mocks/movies';
import styles from '../styles/movie.module.css';
function Movie() {
    const movieData = MOVIES.results;
    
    return (
        <div className={styles.container}>
            {movieData.map((movie) => (
                <div className={styles.imgContainer} key={movie.id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // src 속성 수정
                        alt={movie.title}
                    />
                </div>
            ))}
        </div>
    );
}

export default Movie;
