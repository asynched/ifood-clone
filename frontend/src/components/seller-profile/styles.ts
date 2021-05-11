import styled from "styled-components";

export const SellerProfileWrapper = styled.div`
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
