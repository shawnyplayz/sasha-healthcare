import { Rating } from "@mui/material";
import Button from "@/components/buttons/Button";
import CounterButton from "@/components/buttons/CounterButton";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <div className="max-w-full lg:max-w-xl">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl mt-4 text-black">
          {product.productName}
        </h1>
        <p className="font-medium text-lg md:text-xl text-[#212121] mt-2">
          {product.productDescription}
        </p>
        <div className="flex mt-4 items-center">
          <div className="flex items-center justify-center gap-4">
            <Rating
              name="half-rating-read"
              defaultValue={product.productRating}
              precision={0.5}
              readOnly
            />
            <div className="font-normal text-[12px] md:text-[14px] text-[#9F9F9F] border-l-2 pl-5">
              {product.productReview} Customer Reviews
            </div>
          </div>
        </div>
        <div className="mt-4 font-semibold text-2xl md:text-3xl text-black">
          {product.productPrice}
        </div>
        <div className="mt-4 font-semibold text-sm md:text-base text-black">
          Size: {product.productsize}
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <CounterButton />
          <Button
            className="w-full sm:w-auto flex-shrink-0 md:w-40 lg:w-44 lg:h-14"
            variant="outline"
          >
            Add to Cart
          </Button>
          <Button className="w-full sm:w-auto flex-shrink-0 md:w-40 lg:w-44 lg:h-14">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
