import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <div>
      <Header>
        <HeaderImage />
        <Title>EXPLORE O UNIVERSO</Title>
        <Subtitle>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </Subtitle>
      </Header>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;
const HeaderImage = styled.img`
  background-image: url(${Logo});
  width: 320px;
  height: 120px;
`;
const Title = styled.h1`
  padding-top: 20px;
  font-weight: 700;
  color: #404040;
`;
const Subtitle = styled.h2`
  color: #404040;
  font-weight: 500;
  font-size: 18px;
`;

export default Home;
