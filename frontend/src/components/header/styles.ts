import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;

  position: sticky;
  top: 0;
  left: 0;

  background: var(--primary);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);

  img {
    width: 5rem;
  }
`;
