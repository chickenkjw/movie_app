import React from "react";
import './Movie.css'


function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie_genre">{genre}</li>;
                    })}
                </ul>
                <p className="movie_summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

export default Movie;