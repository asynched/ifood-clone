import styled from "styled-components";

export interface TitleWrapperProps {
  animate?: boolean;
}

export const TitleWrapper = styled.h1<TitleWrapperProps>`
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -1px;
  ${({ animate }) => (animate ? "animation: animate-bold 1250ms;" : "")}

  b {
    position: relative;
    ${({ animate }) =>
      animate
        ? "animation: animate-bold 1250ms; animation-delay: 250ms; animation-fill-mode: backwards;"
        : ""}
    color: var(--primary);
  }

  @keyframes animate-bold {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
