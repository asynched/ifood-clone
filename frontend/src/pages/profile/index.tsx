import React from "react";
import styled from "styled-components";
import Title from "../../components/title";
import MainLayout from "../../layouts/main-layout/main-layout";

// Images
import nxrthProfilePicture from "../../assets/images/eder-lima.jpg";
import elidaProfilePicture from "../../assets/images/elida-castro.jpg";
import indianoProfilePicture from "../../assets/images/vinicius-henrique.jpg";
import suzuyayProfilePicture from "../../assets/images/victoria-sampaio.jpg";

export default function ProfilePage() {
  return (
    <MainLayout active="profile">
      <ProfilePageWrapper>
        <Title animate>
          <b>iFood</b> clone
        </Title>
        <h2>
          Feito com <span>❤</span> por
        </h2>
        <div className="profile-info">
          <div>
            <img src={nxrthProfilePicture} alt="Eder Lima" />
            <a target="_blank" href="https://github.com/Nxrth-x">
              Eder{" "}
            </a>
          </div>
          <div>
            <img src={elidaProfilePicture} alt="Élida Castro" />
            <a target="_blank" href="https://github.com/elidacastro">
              Élida
            </a>
          </div>
          <div>
            <img src={suzuyayProfilePicture} alt="Victória Sampaio" />
            <a target="_blank" href="https://github.com/suzuyay">
              Victória
            </a>
          </div>
          <div>
            <img src={indianoProfilePicture} alt="Vinícius Henrique" />
            <a target="_blank" href="https://github.com/indiano-jpg">
              Vinícius
            </a>
          </div>
        </div>
      </ProfilePageWrapper>
    </MainLayout>
  );
}

const ProfilePageWrapper = styled.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 8rem);

  h2 {
    span {
      color: var(--primary);
    }
  }

  .profile-info {
    width: 80%;

    div {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;

      border: 1px solid var(--border);
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      a {
        color: var(--primary);
        font-weight: bold;
        font-size: 1.5rem;
      }

      img {
        width: 2.5rem;
        border-radius: 50%;
      }
    }
  }
`;
