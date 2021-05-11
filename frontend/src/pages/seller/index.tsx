import React, { useEffect, useState } from "react";

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
import { RouteComponentProps, useParams } from "react-router";

interface SellerPageParams {
  id: string;
}

interface SellerPageMatchProps extends RouteComponentProps<SellerPageParams> {}

export default function SellerPage({ match }: SellerPageMatchProps) {
  const id = match.params.id;

  const [seller, setSeller] = useState<iSeller>();

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

  if (error) {
    return <ErrorLayout />;
  }

  if (!seller) {
    return <SpinnerModal isOpen={true} onRequestClose={() => void 0} />;
  }

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
        <MainLayout active={"product"} title={`iFood | ${seller.name}`}>
          <SellerJumbotron>
            <h1>{seller.name}</h1>
            <p>{seller.address}</p>
            <p className="opening-hours">Aberto das {seller.opening_hours}.</p>
            <h2>{seller.category}</h2>
          </SellerJumbotron>
          <SellerContent>
            {seller.products.length > 0 ? (
              <>
                <Title>
                  Os <b>melhores</b> <br /> pratos
                </Title>
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
              </>
            ) : (
              <div className="not-found">
                <h2>Nenhum produto :(</h2>
                <p>Este vendedor ainda não anunciou nenhum produto...</p>
                <img
                  src="https://dourasoft.com.br/site/dourasoft2017/wp-content/uploads/2017/09/sad-dog.jpg"
                  alt="Not found"
                />
              </div>
            )}
          </SellerContent>
        </MainLayout>
      </>
    );

  return <div>Aqui meu mano</div>;
}
