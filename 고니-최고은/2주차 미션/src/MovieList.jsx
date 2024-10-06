import React, { useState } from 'react';
import { MOVIES } from './mocks/movie'; // API 데이터 import

const MovieList = () => {
  const [hoveredMovieId, setHoveredMovieId] = useState(null); // hover 상태 관리

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {MOVIES.results.map((movie) => (
        <div 
          key={movie.id} 
          style={{  
            width: '9.5%', 
            position: 'relative' 
          }}
          onMouseEnter={() => setHoveredMovieId(movie.id)} // 마우스 오버 시 상태 변경
          onMouseLeave={() => setHoveredMovieId(null)} // 마우스 아웃 시 상태 초기화
        >
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            style={{ width: '100%', borderRadius: '5px' }} 
          />
          {hoveredMovieId === movie.id && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // 검정 배경
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '5px',
            }}>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;