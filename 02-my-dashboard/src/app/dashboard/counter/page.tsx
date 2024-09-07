import {CartCounter} from "@/shoppingCart";

export const metadata = {
 title: 'Shopping Cart',
 description: 'Counter Page Description',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>

    </div>
  );
}