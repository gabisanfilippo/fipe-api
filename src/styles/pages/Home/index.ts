import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-lilac);
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  h3, p {
    text-align: center;
  }
`;

export const FiltersContainer = styled.article`
  background-color: var(--color-white);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  max-width: 30rem;
  width: 100%;
`;