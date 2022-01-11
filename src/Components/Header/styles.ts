import styled from 'styled-components'

export const Container = styled.header`
  background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
  color: var(--white);
  font-family: 'Lexend Deca', sans-serif;
`

export const Navigation = styled.div`
  max-width: 1120px;

  margin: 0 auto; 
  padding: 2rem 6rem 2rem 6rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  h2 {
    display: inline-block;
    place-self: start;
  }

  p {
    place-self: end;
  }
`

export const SearchBar = styled.div`
  max-width: 1120px;

  margin: 0 auto; 
  padding: 3rem 6rem 0.25rem 6rem;

  cursor: pointer;

  input {
    position: relative;
    width: 100%;

    padding: 1rem;
    padding-left: 4rem;
    
    color: white;
    background: rgba(255, 255, 255, 0.2);

    border-radius: 0.25rem;
    border: none;

    font-size: 1.15rem;
    
    &::placeholder {
      color: #f7f7f7;
      opacity: 0.5;
    }
  }

  img {
    position: relative;
    left: 1rem;
    top: -2.5rem;
  }
`