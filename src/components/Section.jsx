import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

function Section(props) {
  return (
    <Wrap bgImg={props.backgroundImg}>
      <Fade bottom>
        <Header>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Header>
      </Fade>

      <Actions>
        <Fade bottom>
          <BtnGroup>
            <LeftBtn>{props.leftBtnText}</LeftBtn>
            {props.rightBtnText && <RightBtn>{props.rightBtnText}</RightBtn>}
          </BtnGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Actions>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImg}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 100vw;
    max-height: 100vh;
    
`
const Header = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const Actions = styled.div`
`
const BtnGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftBtn = styled.div`
  align-items: center;
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 100px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  height: 40px;
  justify-content: center;
  margin: 8px;
  opacity: 0.85;
  text-transform: uppercase;
  width: 256px;
`
const RightBtn = styled(LeftBtn)`
  background-color: white;
  color: black;
  opacity: 0.65;
`
const DownArrow = styled.img`
  animation: animateDown infinite 1.5s;
  height: 40px;
  margin-top: 20px;
`