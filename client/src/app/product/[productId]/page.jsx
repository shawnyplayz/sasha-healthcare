"use client";

import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/utils/Container";
import CustomBreadcrumbs from "@/components/utils/CustomBreadcrumbs";
import ImageGallery from "@/components/utils/ImageGallery";
import ProductDetails from "@/components/pages/ProductDetails";
import RelatedProducts from "@/components/pages/RelatedProducts";
import UnderlineTabs from "@/components/utils/UnderlineTabs";
import { products, relatedProducts, tabData } from "@/app/constants";
import { useParams } from "next/navigation";

const Product = () => {
  const { productId } = useParams(); // Extract productId from the URL

  // Ensure productId is a number
  const product = products.find((p) => p.productId === Number(productId));

  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        {/* Breadcrumbs */}
        <div className="mt-4 mx-4 md:mx-10 lg:mx-14">
          <CustomBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/product" },
              { label: product.productName },
            ]}
          />
        </div>
        <Container>
          <div className="flex flex-col xl:flex-row gap-6 md:gap-8 lg:gap-10 mt-4">
            {/* Image & Thumbnails */}
            <ImageGallery images={product.productImages} />

            {/* Product Details */}
            <ProductDetails product={product} />
          </div>

          {/* Tab Switcher */}
          <div className="mt-14 mb-20">
            <UnderlineTabs tabsData={tabData} />
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <div>
              <h1 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">
                Related Products
              </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 overflow-hidden gap-4 md:gap-5 lg:gap-7 mb-28">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProducts
                  key={relatedProduct.relatedProductsId}
                  index={relatedProduct.relatedProductsId}
                  relatedProductImage={relatedProduct.relatedProductImage}
                  relatedProductName={relatedProduct.relatedProductName}
                  relatedProductPrice={relatedProduct.relatedProductPrice}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Product;
