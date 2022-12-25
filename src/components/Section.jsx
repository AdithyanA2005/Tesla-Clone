import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

function Section(props) {
  return (
    <Wrap id={props.title} bgImg={`images/${props.backgroundImg}`}>
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
        <DownArrowContainer>
          {props.downArrow && <DownArrow src="images/down-arrow.svg"></DownArrow>}
        </DownArrowContainer>
      </Actions>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    align-items: center;
    background-image: ${props => `url("${props.bgImg}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    font-size: 1.2rem;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 100vw;
    max-height: 100vh;
    scroll-snap-align: start;
`
const Header = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const Actions = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 13px;
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
const DownArrowContainer = styled.div`
  height: 40px;
  margin-top: 20px;
  text-align: center;
`
const DownArrow = styled.img`
  animation: animateDown infinite 1.5s;
  background-color: transparent;
  border: 0;
  height: inherit;
`