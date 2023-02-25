import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-green-light);
`;

export const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  span {
    background-color: var(--color-green-dark);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    color: var(--color-white);
    font-size: 1.5rem;
    font-weight: 600;
  }
  h1, p{
    text-align: center;
  }
`;