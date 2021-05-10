import React from "react";
import { TitleWrapper, TitleWrapperProps } from "./styles";

interface TitleProps extends TitleWrapperProps {
  children: React.ReactNode;
}

export default function Title({ children, animate }: TitleProps) {
  return <TitleWrapper animate={animate}>{children}</TitleWrapper>;
}
