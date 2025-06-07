
import HomeProduct from "./HomeProduct";
import OfficeProduct from "./OfficeProduct";
import BeautyProduct from "./BeautyProduct"
import ElectronicProduct from "./ElectronicProduct";
export default function BestSellerPage() {
    const handleClick = () => {
        window.location.href = "http://localhost:5173/signin";
    }
    return (
        <div>

            <OfficeProduct />
            <HomeProduct />
            <BeautyProduct />
            <ElectronicProduct />
            <div className="text-center my-5">
                <h1>See personalized recommendations</h1>
                <br/>   <br/>
                <button className="btn btn-warning btn-lg px-5" onClick={handleClick}>
                    Sign In
                </button>

            </div>
        </div>
    )
}