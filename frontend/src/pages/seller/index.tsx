// Modules
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

// Components
import MainLayout from "../../layouts/main-layout/main-layout";
import SpinnerModal from "../../components/spinner-modal";
import { ProductCard, SellerContent, SellerJumbotron } from "./styles";
import Title from "../../components/title";
import ErrorLayout from "../../layouts/error-layout";

// Helpers
import { iProduct, iSeller } from "../../helpers/interfaces";
import { getSeller } from "../../helpers/sellers";
import PurchaseModal from "../../components/purchase-modal";

interface SellerPageProps {
  id: string;
}

export default function SellerPage({
  match,
}: RouteComponentProps<SellerPageProps>) {
  const id = match.params.id;

  const [seller, setSeller] = useState<iSeller>({
    seller_id: 1,
    name: "Nina docinhos",
    address: "Rua dos bobos, n° 0.",
    category: "Doces gourmet",
    distance: 10.5,
    opening_hours: "10h às 22h",
    image_url: "https://google.com",
    rating: 4.9,
    products: [
      {
        product_id: 1,
        name: "Brownie da Nina",
        description: "O melhor brownie que você já comeu!",
        price: 2.5,
        image_url:
          "https://img.itdg.com.br/tdg/images/recipes/000/121/717/289288/289288_original.jpg?mode=crop&width=710&height=400",
      },
    ],
  });

  const [error, setError] = useState(false);
  const [displayPurchaseModal, setDisplayPurchaseModal] = useState(false);
  const [purchaseModalProduct, setPurchaseModalProduct] = useState<iProduct>();

  const toggleDisplayPurchaseModal = () =>
    setDisplayPurchaseModal((previous) => !previous);

  const handleProductClick = (product: iProduct) => () => {
    setPurchaseModalProduct(product);
    toggleDisplayPurchaseModal();
  };

  useEffect(() => {
    getSeller(id)
      .then((seller) => setSeller(seller))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  // if (error) {
  //   return <ErrorLayout />;
  // }

  // if (!seller) {
  //   return <SpinnerModal isOpen={true} />;
  // }

  if (seller)
    return (
      <>
        {displayPurchaseModal && purchaseModalProduct && (
          <PurchaseModal
            isOpen={displayPurchaseModal}
            onRequestClose={toggleDisplayPurchaseModal}
            product={purchaseModalProduct}
          />
        )}
        <MainLayout active={"home"} title={`iFood | ${seller.name}`}>
          <SellerJumbotron>
            <h1>{seller.name}</h1>
            <p>{seller.address}</p>
            <p className="opening-hours">Aberto das {seller.opening_hours}.</p>
            <h2>{seller.category}</h2>
          </SellerJumbotron>
          <SellerContent>
            <Title>
              Os <b>melhores</b> <br /> pratos
            </Title>
            {/* Products */}
            {seller.products.map((product) => (
              <ProductCard
                key={product.product_id}
                onClick={handleProductClick(product)}
              >
                <div className="product-wrapper">
                  <div className="product-info-wrapper">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                  <p className="price">
                    A partir de R${product.price.toFixed(2)}
                  </p>
                </div>
                <img src={product.image_url} alt={product.name} />
              </ProductCard>
            ))}
          </SellerContent>
        </MainLayout>
      </>
    );
}
