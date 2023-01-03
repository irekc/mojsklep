import { CheckoutForm } from "../components/CheckoutForm";
import { Main } from "../components/Main";
import CartPage from "./cart";

const CheckoutPage = () => {
return <div className="max-w-5xl mx-auto p-4 grid grid-cols-2">
    <CheckoutForm />
    <CartPage />
</div>
};

export default CheckoutPage;