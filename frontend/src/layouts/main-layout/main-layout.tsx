import React, { useEffect } from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { ContentWrapper } from "./styles";

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
  active?: "home" | "profile" | "product";
}

export default function MainLayout({
  title = "iFood | Delivery",
  active,
  children,
}: MainLayoutProps) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <ContentWrapper>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Menu active={active} />
    </ContentWrapper>
  );
}
