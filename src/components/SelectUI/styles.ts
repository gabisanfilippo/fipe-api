import styled from "styled-components";

interface IProps {
  maxWidth?: string;
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
`;