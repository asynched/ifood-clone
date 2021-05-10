import styled from "styled-components";

export const SellerJumbotron = styled.div`
  background: var(--gray-100);

  height: 16rem;

  background-position: 150%;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem;

  h1 {
    color: var(--heading);
  }

  h2 {
    margin-top: 0.5rem;
    color: var(--primary);
    font-size: 1.25rem;
  }

  p {
    font-size: 1.25rem;

    &.opening-hours {
      font-size: 1rem;
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
`;

export const SellerContent = styled.div`
  padding: 1rem;
`;

export const ProductCard = styled.div`
  width: 100%;

  display: flex;

  margin: 1rem 0;

  overflow: hidden;

  border-radius: 0.5rem;
  border: 1px solid var(--border);

  .product-wrapper {
    padding: 0.5rem 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & .product-info-wrapper {
      h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--heading);
      }

      p {
        font-size: 0.9rem;
      }
    }

    p.price {
      font-size: 0.8rem;
      color: var(--green);
    }
  }

  img {
    width: 8rem;
    object-fit: cover;
  }
`;
