import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Category level impact</h2>
      <br/>   <br/>
      
      <div className="row g-3">
        {/* First Column */}
        <div className="col-md-6">
          <CategoryCard 
          heading={"Apparel"}
          image={"/Sell/Saree.jpg"}
          para={"See up to 16.5% reduction in referral fee for products"}
          />
          
          <CategoryCard 
          heading={"Home"}
          image={"/Sell/HomeSell.jpg"}
          para={"See up to 15.5% reduction in referral fee for products"}
          />
        </div>
        
        {/* Second Column */}
        <div className="col-md-6">
          <CategoryCard 
            heading={"Shoes"}
            image={"/Sell/HomeShoe.jpg"}
            para={"See up to 15% reduction in referral fee for products"}
          />
          
          <CategoryCard 
           heading={"Jewelry"}
           image={"/Sell/HomeJewel.jpg"}
           para={"See up to 17.5% reduction in referral fee for products"}
          />
        </div>
      </div>
      
      
      
    </div>
  );
}