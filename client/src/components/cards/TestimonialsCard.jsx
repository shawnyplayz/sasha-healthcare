import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

const TestimonialsCard = ({
  author,
  description,
  userRating,
  avatarPosition,
  backgroundColor,
}) => (
  <div
    className="rounded-2xl max-w-[350px] max-h-[250px] p-6 relative shadow-md"
    style={{ backgroundColor, margin: "20px", position: "relative" }}
  >
    {/* Conditionally render avatar at the top */}
    {avatarPosition === "top" && (
      <div className="rounded-full">
        <Avatar
          alt={author}
          src="/Images/ContactUsAssets/background.svg"
          sx={{ width: 90, height: 90 }}
          className="absolute -top-12 right-8"
        />
      </div>
    )}

    {/* Rating stars */}
    <div className="flex items-center py-4">
      <Rating
        name="half-rating-read"
        value={userRating}
        precision={0.5}
        readOnly
        className="text-black"
        size="medium"
      />
    </div>

    {/* Testimonial description */}
    <div className="description max-w-[297px] font-gtwalsheimregular text-[#1A1A1A] font-normal text-base">
      {description}
    </div>

    {/* Author */}
    <div className="author pt-4 pb-2 font-gtwalsheimregular font-bold text-xs">
      <span className="pr-1">~</span>
      {author}
    </div>

    {/* Conditionally render avatar at the bottom */}
    {avatarPosition === "bottom" && (
      <div className="rounded-full">
        <Avatar
          alt={author}
          src="/Images/ContactUsAssets/background.svg"
          sx={{ width: 90, height: 90 }}
          className="absolute -bottom-12 right-8"
        />
      </div>
    )}
  </div>
);

export default TestimonialsCard;
