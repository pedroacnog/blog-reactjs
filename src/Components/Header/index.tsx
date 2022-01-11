import React from "react";

import { Container, Navigation, SearchBar } from './styles'

import lupaSvg from '../../assets/Vector.svg'


function Header() {
  return (
    <Container>
      <Navigation>
        <h2>Codelândia</h2>
        <p>blog</p>
      </Navigation>
      <SearchBar>
          <input type="text" placeholder="Pesquisar no Blog"/>
          <img src={lupaSvg} alt="Procura" />
      </SearchBar>
    </Container>
  );
}

export default Header;
