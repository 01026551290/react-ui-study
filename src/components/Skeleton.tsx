import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled/macro";
import SkeletonComponent from "./SkeletonComponent";

const Base = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 12px;
    row-gap: 24px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const imageUrl = 'https://image.msscdn.net/images/goods_img/20210804/2049336/2049336_1_500.jpg'

const Placeholder: React.FC = () => (
    <Container>
        <ImageWrapper>
            <SkeletonComponent width={320} height={220}/>
        </ImageWrapper>
        <Info>
            <SkeletonComponent width={150} height={29} rounded />
            <div style={{ height: '8px'}}/>
            <SkeletonComponent width={200} height={19} rounded />
        </Info>
    </Container>
)

const Item: React.FC = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image src={imageUrl}/>
            </ImageWrapper>
            <Info>
                <Title></Title>
                <Description>하하하하하하하하하하하하하</Description>
            </Info>
        </Container>
    )
}



function App() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    },[]);

    return (
        <Base className="App">
            {
                loading ? Array.from({ length: 25 }).map((_, idx) =>(
                    <Placeholder key={idx}/>
                )) :     Array.from({ length: 25 }).map((_, idx) =>(
                    <Item key={idx}/>
                ))
            }

        </Base>
    );
}

export default App;
