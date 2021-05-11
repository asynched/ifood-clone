import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;

  padding: 1rem;

  position: sticky;
  top: 0;
  left: 0;

  background: var(--primary);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);

  a {
    display: flex;
    align-items: center;

    img {
      width: 5rem;
    }
  }
`;
