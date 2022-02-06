import React, {useEffect, useState} from "react";
import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Base = styled.div``;

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
  ${({ pos }) => pos === 'left' ? css`left: 0` : css`right: 0`}
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

const CarouselListItem = styled.li<{ activeIndex: number }>`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 200ms ease;
  > img {
    width: 100%;
    height: fit-content;
  }
`;

const NavButton = styled.button<{ isActive?: boolean} >`
  width: 4px;
  height: 4px;
  background-color: #000;
  opacity: ${({ isActive }) => isActive ? 0.3 : 0.1};
`;

const NavItem = styled.li`
  display: inline-block;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${NavItem} + ${NavItem} {
    margin-left: 4px;
  }
`;

const banners = ['http://via.placeholder.com/600x300','http://via.placeholder.com/600x300','http://via.placeholder.com/600x300'];

const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [reversFlag, setReversFlag] = useState<boolean>(false);

    const handleNext = () => {
        console.log(`activeIndex: ${activeIndex}`);
        setActiveIndex(prev => (activeIndex + 1)% banners.length);
    }

    const handlePrev = () => {
        console.log(`activeIndex: ${activeIndex}`);
        setActiveIndex(prev => (prev - 1 + banners.length));
    }

    const goTo = (idx: number) => {
        setActiveIndex(idx);
    }

    useEffect(() => {
        setReversFlag(activeIndex > 1 ? true : false);
    },[activeIndex])

    useEffect(() => {
        setTimeout(() =>
            setActiveIndex(reversFlag === true ? activeIndex - 1 : activeIndex + 1), 2000);
    },[activeIndex]);



    return (
        <Base>
            <Container>
                <ArrowButton pos={'right'} onClick={handleNext}>
                    <RiArrowDropRightLine/>
                </ArrowButton>

                <CarouselList>

                        {
                            banners.map((banner, idx) =>(
                                <CarouselListItem activeIndex={activeIndex} key={idx}>
                                    <img src={banner} alt={`${idx}//${banner}`}/>
                                </CarouselListItem>
                            ))
                        }
                </CarouselList>

                <ArrowButton pos={'left'} onClick={handlePrev} disabled={reversFlag === true}>
                    <RiArrowDropLeftLine/>
                </ArrowButton>
            </Container>
            <Nav>
                {
                    Array.from({length: banners.length}).map((_,idx) => (
                        <NavItem key={idx} onClick={() => goTo(idx)}>
                            <NavButton isActive={activeIndex === idx}/>
                        </NavItem>
                    ))
                }
            </Nav>
        </Base>
    )
}

export default Carousel;