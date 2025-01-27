
import '../globals.css';  // If golden.css is in the parent folder
import Card from '../../components/cards.jsx';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";




export default function Shop() {
  return (
    <div>
        <div className="h-[380px] w-full bg-[#F9F1E7] border border-[#F9F1E7] font-bold mb-[1px] flex flex-col items-center justify-center">
            <div className="mb-[10px]"><p className="font-medium text-[60px]">Shop</p></div>
            <div className="flex items-center justify-center gap-[5px]" >
               <pre className=" "> 
                <Button
                  variant="outline"
                  size="sm"
                  className=" text-black border-none w-[100px]  text-2xl font-normal leading-tight">Home {'>'}
                </Button>
               </pre>
               <p className="font-normal text-2xl ml-[5px]">Shop</p>
            </div>
        </div>
        <div className="h-[110px] w-full bg-[#F9F1E7] border border-[#F9F1E7] font-bold flex mb-20 items-center justify-between px-[80px] ">
                <div className='flex gap-8 items-center h-full'>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm" className="flex items-center justify-center w-[60px] h-[60px] p-2 border-none">
                              <img src="filtering.png/" alt="Vector" className="w-[40px] h-[40px]" />
                            </Button>
                            <p className="font-semibold text-[22px]">Filter</p>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <Button variant="outline" size="sm" className="flex items-center justify-center w-[60px] h-[60px] p-2 border-none">
                               <img src="/dots.png" alt="Dots" className="w-[30px] h-[30px]" />
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center justify-center w-[60px] h-[60px] p-2 border-none">
                              <img src="/Vector .png" alt="Vector" className="w-[30px] h-[30px]" />
                            </Button>
                            <div className="h-12 border-l-2 border-[#9F9F9F] "></div>
                            <p className='text-[18px] font-normal'>Showing 1-16 of 32 results</p>
                        </div>
                </div>
                <div className='flex gap-8 items-center'>
                  <div className='flex gap-4 items-center'>
                    <p className='text-2xl font-normal'>Show</p>
                    <Input className="w-[60px] h-[60px] rounded-none border-transparent text-center placeholder-[#9F9F9F] focus:outline-none text-4xl text-[#9F9F9F] font-normal pd-2 px-2 py-2" 
                    />
                  </div>
                  <div className='flex gap-4 items-center'>
                    <p className='text-2xl font-normal'>Short by</p>
                    <Input className="w-[180px] h-[60px] rounded-none border-transparent text-center placeholder-[#9F9F9F] focus:outline-none text-4xl text-[#9F9F9F] font-normal pd-2 px-2 py-2" 
                    />
                  </div>

                </div>
        </div>
        <div id="cards-div">
              <Card 
                image="/1.png" 
                name="Syltherine" 
                description="Stylish cafe chair" 
                price="Rp 2.500.000" 
              />
              <Card 
                image="/2.png" 
                name="Modern Lamp" 
                description="Elegant lighting for home" 
                price="Rp 1.200.000" 
              />
              <Card 
                image="/3.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
              <Card 
                image="/4.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
            </div>
            <div id="cards-div">
              <Card 
                image="/1.png" 
                name="Syltherine" 
                description="Stylish cafe chair" 
                price="Rp 2.500.000" 
              />
              <Card 
                image="/2.png" 
                name="Modern Lamp" 
                description="Elegant lighting for home" 
                price="Rp 1.200.000" 
              />
              <Card 
                image="/3.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
              <Card 
                image="/4.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
        </div>
        <div id="cards-div" className='mb-15'>
              <Card 
                image="/1.png" 
                name="Syltherine" 
                description="Stylish cafe chair" 
                price="Rp 2.500.000" 
              />
              <Card 
                image="/2.png" 
                name="Modern Lamp" 
                description="Elegant lighting for home" 
                price="Rp 1.200.000" 
              />
              <Card 
                image="/3.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
              <Card 
                image="/4.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
        </div>
        <div id="cards-div" className='mb-15'>
              <Card 
                image="/1.png" 
                name="Syltherine" 
                description="Stylish cafe chair" 
                price="Rp 2.500.000" 
              />
              <Card 
                image="/2.png" 
                name="Modern Lamp" 
                description="Elegant lighting for home" 
                price="Rp 1.200.000" 
              />
              <Card 
                image="/3.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
              <Card 
                image="/4.png" 
                name="Comfort Sofa" 
                description="Luxurious and comfortable" 
                price="Rp 5.400.000" 
              />
        </div>
        <div className='flex gap-14 justify-center mt-16'>
            <Link href="/shop">
              <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#B88E2F] text-white border border-[#B88E2F] w-20 h-20 rounded-md text-lg font-normal">1
              </Button>
            </Link>
            <Link href="/shop">
              <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#F9F1E7] text-black border border-[#F9F1E7] w-20 h-20 rounded-md text-lg font-normal">2
              </Button>
            </Link>
            <Link href="/shop">
              <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#F9F1E7] text-black border border-[#F9F1E7] w-20 h-20 rounded-md text-lg font-normal">3
              </Button>
            </Link>
            <Link href="/shop">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#F9F1E7] text-black border border-[#F9F1E7] w-[110px] h-[80px] rounded-md text-sm text-xl font-normal">Next
                </Button>
            </Link>
        </div>
        <div className='h-[260px] w-full bg-[#000000] border border-[#000000] mt-[65px] flex gap-[50px] items-center justify-center'>
            <div className='flex gap-[10px]'>
                <div><img src="/B1.png" className='h-[100px] w-[100px]'></img></div>
                <div>
                    <div className='text-[#B88E2F] text-[25px]'>High Quality</div>
                    <div className='text-[#B6B6B6] text-[25px] whitespace-nowrap'>crafted from top materials</div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <div><img src="/B2.png" className='h-[100px] w-[100px] '></img></div>
                <div>
                    <div className='text-[#B88E2F] text-[25px]'>High Quality</div>
                    <div className='text-[#B6B6B6] text-[25px] whitespace-nowrap'>crafted from top materials</div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <div><img src="/B3.png" className='h-[100px]'></img></div>
                <div>
                    <div className='text-[#B88E2F] text-[25px]'>High Quality</div>
                    <div className='text-[#B6B6B6] text-[25px] whitespace-nowrap'>crafted from top materials</div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <div><img src="/B4.png" className='h-[100px]'></img ></div>
                <div>
                    <div className='text-[#B88E2F] text-[25px]'>High Quality</div>
                    <div className='text-[#B6B6B6] text-[25px] whitespace-nowrap'>crafted from top materials</div>
                </div>
            </div>
        </div>
        



        
        
            
    </div>
        

    
  )
}

