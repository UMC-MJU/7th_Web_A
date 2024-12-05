import Spinner from "../components/spinner";
import { styled } from 'styled-components';

const Loading = () => {


  return (
    <LoadingContainer>
    <LoadingTitle>로딩중 입니다...</LoadingTitle>
    <Spinner />
    </LoadingContainer>
  )
}

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  z-index: 999,
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoadingTitle = styled.p`
  font-size: 24px;
  text-align: center;
  color: var(--w4-textColor);

`