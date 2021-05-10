import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../main-layout/main-layout";
import { ErrorContainer } from "./styles";

interface ErrorLayoutProps {
  title?: string;
  message?: string;
  redirectURL?: string;
}

export default function ErrorLayout({
  title = "Erro",
  message = "Algo de errado não está certo. :(",
  redirectURL = "/",
}: ErrorLayoutProps) {
  return (
    <MainLayout title={`iFood | ${title}`}>
      <ErrorContainer>
        <img
          src="https://image.flaticon.com/icons/png/512/196/196759.png"
          alt="Erro"
        />
        <h1>Erro!</h1>
        <p>{message}</p>
        <Link to={redirectURL}>Voltar</Link>
      </ErrorContainer>
    </MainLayout>
  );
}
