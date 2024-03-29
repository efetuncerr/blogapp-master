import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";
import { useState } from "react";
import {sliderItems} from "../../data"


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};

  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 2.5rem;
`;
const Image = styled.img`
  height: 75%;
  margin-top: 40px;
  margin-left: 2.5rem;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;




const Slider = () => {
  
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {

    if(direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
        setSlideIndex( slideIndex<2 ? slideIndex +1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map(item=>(
     <Slide bg={item.bg} key={item.id}>
     <ImgContainer>
       <Image src={item.img} />
     </ImgContainer>
     <InfoContainer>
       <Title>{item.title}</Title>
       <Description>
         {item.desc}
       </Description>
       <Button>Bizi Arayın</Button>
     </InfoContainer>
   </Slide> 
   
   
        ))}
      
   

      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
