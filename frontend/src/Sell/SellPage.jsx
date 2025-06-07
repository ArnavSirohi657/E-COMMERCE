import CategoryCard from "./CategoryCard";
import CategorySection from "./CategorySection";
import FeeDrop from "./FeeDrop";
import Fees from "./Fees";
import Hero from "./Hero";
import Importance from "./Importance";
import Referal from "./Referal";
import SellingAmazon from "./SellingAmazon";

export default function SellPage() {
  return (
    <div>
      <Hero />
      <br /> <br /><br />
      <Fees />
      <br /> <br />
      <CategorySection />
      <FeeDrop />
      <Referal />
      <SellingAmazon />
      <Importance />

      {/* Centered Button */}
      <div className="text-center my-5">
        <button className="btn btn-warning btn-lg px-5">
          Start Selling
        </button>
      </div>
    </div>
  );
}
