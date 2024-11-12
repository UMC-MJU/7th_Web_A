import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';

const Detail = () => {
    const { movieId } = useParams();
    const { data: movies, isLoadingMovies, isErrorMovies } = useCustomFetch(`/movie/${movieId}?language=ko-kr`);
    const {
        data: credits,
        isLoadingCredits,
        isErrorCredits,
    } = useCustomFetch(`/movie/${movieId}/credits?language=ko-kr`);

    if (isLoadingMovies || isLoadingCredits || !movies?.data || !credits?.data)  return <h1 style={{ color: `white` }}>로딩중 입니다</h1>;
    if (isErrorMovies || isErrorCredits) return <h1 style={{ color: `white` }}>에러 입니다</h1>;

    const backdropPath = movies?.data?.backdrop_path;
    const posterPath = backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';
    const title = movies?.data?.title;
    const voteAverage = movies?.data?.vote_average;
    const runTime = movies?.data?.runtime;
    const releaseDate = movies?.data?.release_date.slice(0, 4);
    const castData = credits?.data?.cast;

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
