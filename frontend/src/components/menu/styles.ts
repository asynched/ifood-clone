import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background: var(--gray-100);

  div,
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active {
      p,
      svg {
        color: var(--primary);
      }
    }
  }
`;
