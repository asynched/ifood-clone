import styled from "styled-components";

export const PurchaseModalWrapper = styled.div`
  min-width: 212px;
  width: 80%;

  div.quantity-menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0.5rem 0 1.5rem;

    h2 {
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      gap: 1rem;

      input,
      button {
        width: 2rem;
        height: 2rem;
        text-align: center;
      }

      button {
        border: none;
        border-radius: 0.5rem;

        color: var(--white);
        background: var(--primary);
      }

      input {
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        color: var(--text);
      }
    }
  }

  h1 {
    text-align: center;
    color: var(--primary);
  }

  p {
    margin: 0.5rem 0;
    span {
      color: var(--green);
    }
  }

  button.submit,
  button.cancel {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.25rem 1rem;
    border-radius: 0.5rem;
    transition: var(--transition);
  }

  button.submit {
    background: var(--primary);

    border: none;

    font-weight: bold;
    color: var(--white);

    &:active,
    &:focus,
    &:hover {
      filter: brightness(0.8);
    }
  }

  button.cancel {
    background: var(--white);
    border: 1px solid var(--primary);

    font-weight: 600;
    color: var(--primary);

    &:active,
    &:focus,
    &:hover {
      background: var(--primary);
      color: var(--white);
    }
  }
`;
