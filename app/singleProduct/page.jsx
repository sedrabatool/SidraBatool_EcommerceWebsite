'use client';
import '../globals.css';  // If global.css is in the parent folder
import Card from '../../components/cards.jsx';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Head from 'next/head';
import { client, urlFor } from "../lib/sanity";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/app/lib/store/features/cartSlice/cartSlice";
import { useState, useEffect } from 'react'; // Added useEffect
import { useAppDispatch } from "@/app/lib/store/hooks";
import { addProduct } from '@/app/lib/store/features/productSlice/productSlice';
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function Product() {
  const router = useRouter();
  const items = useSelector(selectCartItems);
  const [count, setCount] = useState(1); // Initialize count to 1
  const [lastItem, setLastItem] = useState(null); // State to hold the last item
  const dispatch = useAppDispatch();

  // Set the last item when the component mounts or items change
  useEffect(() => {
    if (items.length > 0) {
      setLastItem(items[items.length - 1]);
    } else {
      setLastItem(null); // Reset lastItem if the cart is empty
    }
  }, [items]);

  const increment = () => {
    setCount(count + 1); // Increment count by 1
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1); // Decrement count by 1 (ensure it doesn't go below 1)
    }
  };

  const handleButtonClick = (e, name, price, image, count) => {
    e.stopPropagation(); // Prevent the button click from closing the overlay
    const uniqueId = uuidv4();
    dispatch(addProduct({ name, price, image, count, id: uniqueId })); // Dispatch the action with name, price, image, and count
    router.push('/cart');
  };

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Breadcrumb Section */}
      <div className='h-[120px] w-full bg-[#F9F1E7] border-1 border-[#F9F1E7] mt-8 flex gap-10'>
        <div className='flex items-center h-full ml-[120px] gap-4'>
          <div><p className='text-[#9F9F9F] text-[25px]'>Home</p></div>
          <div>
            <Button variant="outline" size="icon" className="border-none mt-2.5">
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className='flex items-center h-full gap-4'>
          <div><p className='text-[#9F9F9F] text-[25px]'>Shop</p></div>
          <div>
            <Button variant="outline" size="icon" className="border-none mt-2.5">
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="h-[60px] border-l-4 border-[#9F9F9F] self-center"></div>
        <div className='text-2xl h-full items-center flex'>
          {lastItem ? <p>{lastItem.name}</p> : <p>No Product Selected</p>}
        </div>
      </div>

      {/* Product Details Section */}
      <div className='flex gap-[40px]'>
        {/* Product Images */}
        <div className='flex flex-col mt-10 ml-[120px] gap-[20px]'>
          <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
            <img src="sofa1.png" className="h-auto max-h-full w-auto mb-2" alt="sofa1" />
          </div>
          <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
            <img src="sofa2.png" className="h-auto max-h-full w-auto mb-4" alt="sofa2" />
          </div>
          <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
            <img src="sofa3.png" className="h-auto max-h-full w-auto mb-10" alt="sofa3" />
          </div>
          <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
            <img src="sofa4.png" className="h-auto max-h-full w-auto" alt="sofa4" />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="h-[600px] w-[500px] bg-[#F9F1E7] border-none rounded-[10px] mt-10 flex items-center justify-center">
          {lastItem ? (
            <img src={lastItem.image} className="max-w-full max-h-full" alt="main product" />
          ) : (
            <p>No Product Image</p>
          )}
        </div>

        {/* Product Information */}
        <div className="ml-[70px] mt-10">
          <div>
            <p className='text-[60px] font-poppins font-4xl'>{lastItem ? lastItem.name : 'No Product Selected'}</p>
          </div>
          <div>
            <pre className='text-[30px] font-poppins text-[#9F9F9F] font-semibold mt-2'>{lastItem ? lastItem.price : 'N/A'}</pre>
          </div>
          <div className='whitespace-pre mt-[50px] text-[25px]'>
            Setting the bar as one of the loudest speakers in its class, the <br />
            Kilburn is a compact, stout-hearted hero with a well-balanced <br />
            audio which boasts a clear midrange and extended highs for a <br />
            sound. <br />
          </div>
          <br />
          <p className='text-[#9F9F9F] text-[30px]'>Size</p>
          <div className='flex gap-4'>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 bg-[#B88E2F] text-black border border-[#B88E2F] w-[60px] h-[60px] rounded-md text-lg font-normal">
              L
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 bg-[#F9F1E7] text-black border border-[#F9F1E7] w-[60px] h-[60px] rounded-md text-lg font-normal">
              XL
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 bg-[#F9F1E7] text-black border border-[#F9F1E7] w-[60px] h-[60px] rounded-md text-lg font-normal">
              XS
            </Button>
          </div>
          <br />
          <p className='text-[#9F9F9F] text-[30px]'>Color</p>
          <div className='flex gap-4 mt-4'>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#816DFA] text-black border border-[#816DFA] w-[55px] h-[55px] rounded-full text-lg font-normal">
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#000000] text-black border border-[#000000] w-[55px] h-[55px] rounded-full text-lg font-normal">
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#B88E2F] text-black border border-[#B88E2F] w-[55px] h-[55px] rounded-full text-lg font-normal">
            </Button>
          </div>
          <div className='flex items-center gap-4 mt-8'>
            <div className='flex gap-4 border border-black rounded-[10px] w-[150px] h-[65px] items-center justify-center'>
              <Button
                onClick={decrement}
                variant="outline"
                size="sm"
                className="w-[40px] h-[40px] rounded-md text-lg font-normal border-0 outline-none">
                -
              </Button>
              <p className='text-[25px]'>{count}</p>
              <Button
                onClick={increment}
                variant="outline"
                size="sm"
                className="w-[40px] h-[40px] rounded-md text-lg font-normal border-0 outline-none">
                +
              </Button>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-[240px] h-[65px] text-[20px] rounded-[15px] border-black"
              onClick={(e) => lastItem && handleButtonClick(e, lastItem.name, lastItem.price, lastItem.image, count)}>
              Add To Cart
            </Button>
          </div>
          <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width: "90%", border: 'none', marginTop: "8%" }} />
          <pre className='text-[#9F9F9F] mt-10 text-[20px] font-sans-serif'>SKU      : SS001</pre>
          <pre className='text-[#9F9F9F] mt-1 text-[20px] font-sans-serif'>Category : Sofas</pre>
          <pre className='text-[#9F9F9F] mt-1 text-[20px] font-sans-serif'>Tags     : Sofa, Chair, Home, Shop</pre>
          <pre className='text-[#9F9F9F] mt-1 text-[20px] font-sans-serif'>
            Share    :
            <div className='inline-flex gap-6 ml-4 mt-1'>
              <div>
                <Button variant="outline" className="border-none mt-2.5">
                  <img src='in.png' className="w-8 h-8" alt='in' />
                </Button>
              </div>
              <img src='in.png' alt='in' />
              <img src='twiter.png' alt='twitter' />
            </div>
          </pre>
        </div>
      </div>

      {/* Description Section */}
      <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width: "full", border: 'none', marginTop: "3%" }} />
      <div className='flex gap-10'>
        <p className='font-semibold text-4xl mt-10 ml-[30%]'>Description</p>
        <p className='font-normal text-4xl mt-10 text-[#9F9F9F]'>Additional Information</p>
      </div>
      <div className='flex justify-center item-center mt-8'>
        <p className='text-[#9F9F9F] text-lg'>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
          <br />
          sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
          <br />
          speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
          <br />
          and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls
          <br />
          to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Related Products Section */}
      <div className='flex justify-center gap-12 mt-12'>
        <div className="h-[400px] w-[800px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
          <img src="s1.png" className="h-auto max-h-full" alt="s1" />
        </div>
        <div className="h-[400px] w-[800px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
          <img src="s2.png" className="h-auto max-h-full mb-[20%] w-[100%]" alt="s2" />
        </div>
      </div>
      <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width: "full", border: 'none', marginTop: "3%" }} />
      <p className='font-semibold text-[50px] text-center mt-8'>Related Products</p>
      <div id="cards-div">
      
              <Card 
                image="/1.png"
                name="Syltherine"
                description="Stylish cafe chair"
                price="Rp 2.500.000"
              />
              <Card 
                image="/2.png"
                name="Leviosa"
                description="Stylish cafe chair"
                price="Rp 2.500.000"
              />
              <Card 
                image="/3.png"
                name="Lolito"
                description="Luxury big sofa"
                price="Rp 7.000.000"
              />
              <Card 
                image="/4.png"
                name="Respira"
                description="Outdoor bar table and stool"
                price="Rp 500.000"
              />
      </div>

      <div className='flex justify-center item-center'>
        <Button
          variant="outline"
          size="lg"
          className="w-[250px] h-[50px] text-[20px] border-[#B88E2F] mt-8 text-[#B88E2F] rounded-none">
          Show More
        </Button>
      </div>
      <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width: "full", border: 'none', marginTop: "4%" }} />
    </div>
  );
}