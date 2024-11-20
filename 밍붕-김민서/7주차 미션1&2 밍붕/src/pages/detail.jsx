import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useGetMovieDetail } from '../hooks/queries/useGetMovieDetail';
import { useGetMovieDetailCredits } from '../hooks/queries/useGetMovieDetailCredits';

const Detail = () => {
    const { movieId } = useParams();
    // const { data: movies, isLoadingMovies, isErrorMovies } = useCustomFetch(`/movie/${movieId}?language=ko-kr`);

    // // const {
    // //     data: credits,
    // //     isLoadingCredits,
    // //     isErrorCredits,
    // // } = useCustomFetch(`/movie/${movieId}/credits?language=ko-kr`);



    const {
        data: movies,
        isPendingMovies, //데이터를 불러오는 중입니다
        isLoadingMovies, //데이터를 불러오는 중 이거나 재시도 중입니다
        isErrorMovies,
    } = useQuery({
        //왜 화살표 함수 형식으로 호출해야하는가?
        queryFn: () => useGetMovieDetail({ movieId}),
        queryKey: ['movies', movieId],
        gcTime: 10000,
        staleTime: 10000,
    });

    const {
        data: credits,
        isPendingCredits, //데이터를 불러오는 중입니다
        isLoadingCredits, //데이터를 불러오는 중 이거나 재시도 중입니다
        isErrorCredits,
    } = useQuery({
        //왜 화살표 함수 형식으로 호출해야하는가?
        queryFn: () => useGetMovieDetailCredits({movieId}),
        queryKey: ['moviesCredits', movieId],
        gcTime: 10000,
        staleTime: 10000,
    });


    
    console.log(credits)
    
    if (isPendingMovies || isPendingCredits )  return <h1 style={{ color: `white` }}>로딩중 입니다</h1>;
    if (isErrorMovies || isErrorCredits) return <h1 style={{ color: `white` }}>에러 입니다</h1>;

    const backdropPath = movies?.backdrop_path;
    const posterPath = backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';
    const title = movies?.title;
    const voteAverage = movies?.vote_average;
    const runTime = movies?.runtime;
    const releaseDate = movies?.release_date.slice(0, 4);
    const castData = credits?.cast;

    return (
        <DetailContainer>
            <TitleImageContainer imageUrl={posterPath}>
                <MovieInfo>
                    <Title>{title}</Title>
                    <p>평균 {voteAverage}</p>
                    <p>{releaseDate}</p>
                    <p>{runTime}분</p>
                </MovieInfo>
            </TitleImageContainer>
            <Text>감독/출연</Text>
            <DirectorCasting>
                {castData?.map((cast) => (
                    <ProfileImgTile>
                        <ProfileImg
                            key={cast.id}
                            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                        />
                        <Name>{cast.name}</Name>
                        <OriginalName>{cast.original_name}</OriginalName>
                    </ProfileImgTile>
                ))}
            </DirectorCasting>
        </DetailContainer>
    );
};

export default Detail;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: black;
`;

const TitleImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    aspect-ratio: 16 / 4;
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    background-position: center;
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 20px;
    margin-top: 10px;
    border-bottom: solid white 2px;
`;

const Title = styled.h1`
    margin: 10px 0; // 원하는 마진 설정
    color: white; // 텍스트 색상 설정 (선택 사항)
`;

const Text = styled.h1`
    margin-left: 20px;
    margin-top: 10px;
    color: white;
`;

const DirectorCasting = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const ProfileImgTile = styled.div`
    display: flex;
    width: 120px;
    margin: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ProfileImg = styled.img`
    width: 100px; /* 원하는 너비 */
    height: 100px; /* 원하는 높이 */
    border-radius: 50%; /* 원형으로 만들기 */
    object-fit: cover; /* 이미지 크기를 조정 */
    background-color: lightgray; /* 이미지가 없을 때 배경 색상 */
    border: 1px solid white;
`;

const OriginalName = styled.h6`
    margin-top: 8px;
    color: gray;
    font-size: 10px;
    max-width: 120px;
`;

const Name = styled.a`
    margin-top: 8px;
    color: white;
    max-width: 120px;
`;
