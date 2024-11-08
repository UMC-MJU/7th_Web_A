import { keyframes, styled } from 'styled-components';


const Spinner = () => {

  return (
    <>
      <SpinnerContainer>
        <SpinnerContent></SpinnerContent>
      </SpinnerContainer>
    </>
  )
}

export default Spinner;

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`

const SpinnerContainer = styled.div`
  width: 100px;
  height: 100px;
`

const SpinnerContent = styled.div`
  margin: calc(50% - 25px) auto;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  
  border: 3px solid white;  
  border-top-color: var(--w4-spinner);
  border-radius: 100%;
  animation: ${rotate} 1s linear infinite;
` 