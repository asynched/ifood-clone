import styled from "styled-components";

interface HomeJumbotronProps {
  backgroundImage: string;
}

export const HomeJumbotron = styled.div<HomeJumbotronProps>`
  background: var(--gray-100);

  height: 16rem;

  background: url(${({ backgroundImage }) => backgroundImage});
  background-position: 150%;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem;

  letter-spacing: -0.5px;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    animation: jumbotron-animation 1s;

    b {
      font-size: 800;
      color: var(--primary);
    }
  }

  button {
    width: fit-content;

    margin-top: 1rem;
    padding: 0.25rem 1rem;

    animation: jumbotron-animation 1s;
    animation-delay: 300ms;
    animation-fill-mode: backwards;

    border: none;
    border-radius: 0.5rem;

    background: var(--primary);

    font-weight: 700;
    color: var(--white);

    transition: var(--transition);

    &:focus {
      filter: brightness(1.25);
      box-shadow: var(--ring-primary);
    }
  }

  @keyframes jumbotron-animation {
    from {
      opacity: 0;
      transform: translate(-100%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

export const HomeContent = styled.div`
  padding: 1rem;
`;

export const SellerProfile = styled.div`
  margin: 1.5rem 0;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--border);
  border-radius: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;

    object-fit: contain;

    border-radius: 50%;
  }

  div {
    h2 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    span {
      color: var(--yellow);
    }
  }
`;
