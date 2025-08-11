import IconesHeader from "../componentes/IconesHeader";
import Logo from "../componentes/Logo";
import OpcoesHeader from "../componentes/OpcoesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center; /*alinha ao centro todo conteúdo*/
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
};

export default Header;
