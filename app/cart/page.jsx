'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Black from "@/components/black"; 
import { useSelector } from 'react-redux'; // Import useSelector
import { selectCartItems } from '@/app/lib/store/features/cartSlice/cartSlice';



export default function Cart() {
  const items = useSelector(selectCartItems);
  console.log("hello",items)
  return (
    
    <div>
      
      <div className="pl-[100px] mr-[50px]">
        <div className="mt-[40px]">
          <div>
            <p className="font-semibold text-[50px]">Cart</p>
          </div>
          <div className="flex gap-[5px]">
            <Button
              variant="outline"
              size="sm"
              className=" text-black border-none w-[90px] text-2xl font-medium leading-tight p-0"
            >
              Home {">"}
            </Button>
            <p className="font-normal text-2xl">Cart</p>
          </div>
        </div>
        <div className="flex gap-[450px]">
          <div className="flex flex-col">
            <div className="h-[80px] mt-[120px] w-[150%] bg-[#F9F1E7] border border-[#F9F1E7] font-bold flex mb-20 items-center justify-center">
              <div>
                <p className="font-semibold text-xl">Product</p>
              </div>
              <div>
                <p className="font-semibold ml-[190px] text-xl">Price</p>
              </div>
              <div>
                <p className="font-semibold ml-[190px] text-xl">Quantity</p>
              </div>
              <div>
                <p className="font-semibold ml-[100px] text-xl">Subtotal</p>
              </div>
            </div>
          </div>
          <div className="h-[500px] mt-[120px] w-[600px] bg-[#F9F1E7] border border-[#F9F1E7] font-bold mb-20 mr-[50px] pt-[20px] justify-center text-[40px]">
            <p className="text-center mb-[30px]">Cart Totals</p>
            <div className="flex justify-between text-[20px] mb-[20px] pl-[70px] pr-[70px] mt-[100px]">
              <p className="font-semibold">{items[0]}</p>
              <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between text-[20px] pl-[70px] pr-[70px]">
              <p className="font-semibold">Total</p>
              <p className="text-2xl text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-center mt-[20px]">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-[240px] h-[65px] text-[20px] rounded-[15px] border-black mt-8"
                >
                   Add To Cart
                </Button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Black/>
    </div>
  );
}
