import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 4rem;
  }

  h1 {
    color: var(--primary);
    font-size: 3rem;
  }

  a {
    margin-top: 1rem;

    padding: 0.25rem 1rem;

    background: var(--primary);

    font-weight: bold;
    color: var(--white);

    border-radius: 0.5rem;
  }
`;
