import React from "react";
import { Link } from "react-router-dom";
import { iSeller } from "../../helpers/interfaces";
import { SellerProfileWrapper } from "./styles";

interface SellerProfileProps {
  profile: iSeller;
}

export default function SellerProfile({ profile }: SellerProfileProps) {
  return (
    <Link to={`seller/${profile.seller_id}`}>
      <SellerProfileWrapper>
        <img src={profile.image_url} alt={profile.name} />
        <div>
          <h2>{profile.name}</h2>
          <p>
            <span className="rating">★ {profile.rating}</span> •{" "}
            {profile.category} • {profile.distance}
            km
          </p>
        </div>
      </SellerProfileWrapper>
    </Link>
  );
}
