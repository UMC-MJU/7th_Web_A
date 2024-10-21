import { styled } from 'styled-components';
import { Profile1,Profile2,Profile3,Profile4,Profile5,Profile6,Profile7 } from '../assets/images/imageExport';

const CastItems = ({datas}) => {
  const profiles = [Profile1, Profile2, Profile3, Profile4, Profile5, Profile6, Profile7];
  const randomIndex = Math.floor(Math.random() * profiles.length);
  let castImg = datas.profile_path == null ?  profiles[randomIndex] :`https://image.tmdb.org/t/p/original${datas.profile_path}`;

  return (
    <CastItemContainer>
    <CastImage image={castImg}/>
    <CastRealName>{datas.name}</CastRealName>
    <CastRoleName>{datas.character}</CastRoleName>
    </CastItemContainer>
  )
}

export default CastItems;

const CastItemContainer = styled.div`
 width: 100px;
`
const CastImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${$props => $props.image});
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid white;
  border-radius: 100%;
`

const CastRealName = styled.p`
  color: var(--w4-textColor);
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`

const CastRoleName = styled.p`
  color: var(--w4-castRole);
  margin-top: 3px;
  font-size: 12px;
  text-align: center;
`