'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductsItems, removeProduct } from '@/app/lib/store/features/productSlice/productSlice';
import { useState , useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import '../app/globals.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import StoreProvider from './storeProvider';
import { selectCartItems } from '@/app/lib/store/features/cartSlice/cartSlice';


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

// Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the font weights you need
  variable: '--font-poppins', // Define a CSS variable
});

function SheetDemo() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const items = useSelector((state) => state.product.items);
  useEffect(() => {
    localStorage.setItem('productState', JSON.stringify({ items }));
  }, [items]);
      // const lastItem = items[items.length - 1]
  const dispatch = useDispatch(); // Hook to dispatch actions

  // Function to handle overlay visibility
  const handleOverlayToggle = (isOpen) => {
    setIsOverlayVisible(isOpen);
  };

  const handleOverlayClick = () => {
    setIsOverlayVisible(false); // Hide overlay when clicked outside
  };

  // Function to handle removing a product
  const handleRemoveProduct = (itemId) => {
    dispatch(removeProduct(itemId)); // Dispatch the removeProduct action
  };

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => {
    // Remove "Rp" and commas, then convert to a number
    const price = Number(item.price.replace(/[^0-9]/g, ''));
    return acc + price * item.count;
  }, 0);

  

  return (
    <>
      {/* Overlay */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={handleOverlayClick} // Clicking on overlay closes the sheet and hides the overlay
        ></div>
      )}

      <Sheet onOpenChange={handleOverlayToggle}>
        <SheetTrigger asChild>
          <Button variant="outline border-none" className="mt-1">
            <img src="/cart.png" alt="Cart" /> {/* Cart Icon */}
          </Button>
        </SheetTrigger>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetContent
          side="right"
          className="w-96 z-[100] bg-white h-[870px] w-[560px] fixed right-0 top-0 pl-12 pt-10 overflow-y-auto overflow-x-hidden" // Added overflow-y-auto for scrollbar
        >
          <div>
            <p className="font-bold text-4xl">Shopping Cart</p>
          </div>
          <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width: '70%', border: 'none', marginTop: '40px' }} />
          <div className='flex-grow overflow-y-auto max-h-[500px] pr-4'>
                {/* Dynamically render cart items */}
                {items.map((item, index) => (
                  <div key={index} className="flex mt-12 items-center gap-8">
                    <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="h-auto max-h-full w-auto mb-2" />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <pre className="font-normal text-2xl">{item.name}</pre>
                      </div>
                      <div className="flex mt-2">
                        <pre className="text-xl">{item.count} X</pre>
                        <pre className="text-xl text-[#B88E2F]"> {item.price.toLocaleString().replace(/\./g, ',')}</pre>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-none"
                      onClick={() => handleRemoveProduct(item.id)} // Call handleRemoveProduct with the item's id
                    >
                      <img src="cross.png" className="w-8 h-8 ml-[30px]" alt="Remove" />
                    </Button>
                  </div>
                ))}
          </div>

          <div className="flex gap-[140px]  absolute bottom-[130px]">
            <div>
              <p className="text-2xl">Subtotal</p>
            </div>
            <div>
              <p className="text-[#B88E2F] text-2xl font-bold">Rs. {subtotal.toLocaleString()}</p>
            </div>
          </div>
          <hr style={{ backgroundColor: '#D9D9D9', height: '2px', width: '100%', border: 'none', bottom: '100px' , position:'absolute' }} />
          <div className="flex  gap-6 absolute bottom-[20px]">
            <div>
              <Link href="/cart">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-[130px] h-[45px] text-[20px] rounded-[30px] border-black mt-8"
                >
                  Cart
                </Button>
              </Link>
            </div>
            <Link href="/checkout">
              <Button
                variant="outline"
                size="lg"
                className="w-[200px] h-[45px] text-[20px] rounded-[30px] border-black mt-8"
              >
                Checkout
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased flex flex-col min-h-screen`}>
        <StoreProvider>
            <div className="Header">
              <div className="div1-nav">
                <div>
                  <img src="F.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
                </div>
                <div className="div1-nav">Furniro</div>
              </div>

              <div className="div2-nav">
                <div>
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="sm"
                      className=" border-none w-[100px] h-[50px]  text-2xl font-semibold"
                    >
                      Home
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link href="/shop">
                    <Button
                      variant="outline"
                      size="sm"
                      className=" border-none w-[100px] h-[50px]  text-2xl font-semibold"
                    >
                      Shop
                    </Button>
                  </Link>
                </div>
                <div>
                  <Button
                    variant="outline"
                    size="sm"
                    className=" border-none w-[100px] h-[50px]  text-2xl font-semibold"
                  >
                    About
                  </Button>
                </div>
              </div>
              <div className="div3-nav">
                <div>
                  <Button variant="outline" size="sm" className=" border-none w-[30px] h-[50px]">
                    <img src="/man.png" alt="Profile" />
                  </Button>
                </div>
                <div>
                  <Button variant="outline" size="sm" className=" border-none w-[30px] h-[50px]">
                    <img src="/search.png" alt="Search" />
                  </Button>
                </div>
                <div>
                  <Button variant="outline" size="sm" className=" border-none w-[30px] h-[50px]">
                    <img src="/heart.png" alt="Wishlist" />
                  </Button>
                </div>
                <div>
                  <SheetDemo />
                </div>
              </div>
            </div>
            {children}

            <div className="footer">
              <div className="footer-left">Funiro.</div>
              <div className="footer-right">
                <div className="footer-2">
                  <div style={{ color: '#9F9F9F' }}>Links</div>
                  <div>Home</div>
                  <div>Shop</div>
                  <div>About</div>
                  <div>Contact</div>
                </div>
                <div className="footer-3">
                  <div style={{ color: '#9F9F9F' }}>Help</div>
                  <div>Payment Options</div>
                  <div>Returns</div>
                  <div>Privacy Policies</div>
                </div>
                <div className="footer-4">
                  <div style={{ color: '#9F9F9F' }}>Newsletter</div>
                  <div className="news">
                    <div className="flex flex-col items-center w-full">
                      <div>
                        <Input
                          type="email"
                          placeholder="Enter Your Email Address"
                          className="text-[#9F9F9F] placeholder:text-[#9F9F9F] border border-[#9F9F9F]  focus:outline-none  border-transparent text-center"
                        />
                      </div>
                      <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />
                    </div>
                    <div className="flex flex-col items-center w-auto">
                      <Button variant="ghost" className="text-[#000000] hover:bg-transparent focus:ring-0">
                        SUBSCRIBE
                      </Button>
                      <hr style={{ backgroundColor: 'black', height: '1px', border: 'none', marginTop: '2px', width: 'full' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width: '90%', border: 'none', margin: '30px auto 20px' }} />
            <p style={{ marginLeft: '100px', fontWeight: '500', marginBottom: '50px' }}>2023 furino. All rights reverved</p>
        </StoreProvider>
      </body>
    </html>
  );
}