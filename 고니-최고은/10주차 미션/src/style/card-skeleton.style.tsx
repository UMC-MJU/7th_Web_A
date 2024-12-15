import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const skeleton = keyframes`
    0% {
        opacity: 1;
    }
    30% {
        opacity: 0.6;
    }
    50% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.8;
    }
    100% {
        opacity: 1;
    }
`;

// Container 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// CardMain 컴포넌트
const CardMain = styled.div`
  width: 200px;
  height: 300px;
  background-color: rgb(230, 230, 230);
  border-radius: 10px;
  overflow: hidden;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

// TextWrapper 컴포넌트
const TextWrapper = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 5px;
`;

// TitleBox 컴포넌트
const TitleBox = styled.div`
  background-color: rgb(230, 230, 230);
  height: 14px;
  border-radius: 5px;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

// DescriptionBox 컴포넌트
const DescriptionBox = styled.div`
  background-color: rgb(230, 230, 230);
  height: 10px;
  border-radius: 5px;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

// 컴포넌트 내보내기
export { Container, CardMain, TextWrapper, TitleBox, DescriptionBox };
