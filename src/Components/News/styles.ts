import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: white;

  padding: 1.5rem;
  margin-bottom: 3rem;

  border-radius: 0.5rem;
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    span {
      font-size: 1.06rem;
      color:#717171;
    }
  }

  h1 {
    padding: 1rem 0;

    color: #1A202C;

    font-family: 'Lexend Deca';
    font-size: 1.86rem;
    font-weight: 400;
  }
  
  p {
    color: #717171;
    font-size: 1.2rem
  }

`