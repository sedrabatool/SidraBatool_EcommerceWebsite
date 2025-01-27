"use client";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Black from "@/components/black";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  companyName: z.string().optional(),
  countryRegion: z.string().min(1, { message: "Country/Region is required." }),
  streetAddress: z.string().min(1, { message: "Street address is required." }),
  townCity: z.string().min(1, { message: "Town/City is required." }),
  province: z.string().min(1, { message: "Province is required." }),
  zipCode: z.string().min(1, { message: "Zip Code is required." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  emailAddress: z.string().email({ message: "Invalid email address." }),
});

export default function Checkout() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Marks the component as client-side only after mounting
  }, []);

  if (!isClient) {
    return null; // Prevent rendering the component during SSR
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-[50px] pl-[150px] pr-[40px] mt-[40px] mb-[200px]">
        {/* Left Section */}
        <div className="flex-1">
          <div>
            <p className="font-semibold text-[50px]">Checkout</p>
          </div>
          <div className="flex gap-[5px]">
            <Button
              variant="outline"
              size="sm"
              className="text-black border-none w-[90px] text-2xl font-medium leading-tight p-0">
              Home {'>'}
            </Button>
            <p className="font-normal text-2xl">Checkout</p>
          </div>
          <div>
            <p className="font-bold mt-[100px] text-[40px] mb-[30px]">Billing details</p>
          </div>
          {/* Render the ProfileForm component */}
          <ProfileForm />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-8 mt-[250px] mr-[100px]">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold text-4xl">Product</p>
            </div>
            <div>
              <p className="font-semibold text-4xl">Subtotal</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-[#9F9F9F] text-2xl">Asgaard sofa</p>
              <p className="text-2xl ml-2">X 1</p>
            </div>
            <div>
              <p className="text-2xl">Rs. 250,000.00</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-normal">Subtotal</p>
            </div>
            <div>
              <p className="text-2xl">Rs. 250,000.00</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-normal">Total</p>
            </div>
            <div>
              <p className="text-[#B88E2F] font-bold text-4xl">Rs. 250,000.00</p>
            </div>
          </div>
          <div><hr className="w-full border-t-2 border-gray-300 mt-4" /></div>
          <div className="flex items-center gap-4 mt-6">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            <p className="font-semibold text-2xl">Direct Bank Transfer</p>
          </div>
          <div className="flex justify-between mt-6">
            <div className="text-[#9F9F9F] text-[28px] flex-1">
              <span>Make your payment directly into our bank account. Please use </span><br />
              <span>your Order ID as the payment reference. Your order will not be </span><br />
              <span>shipped until the funds have cleared in our account.</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {/* Direct Bank Transfer Checkbox */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-2 border-gray-500 focus:ring-2 focus:ring-gray-700 appearance-none checked:bg-gray-700"
              />
              <label className="text-lg font-medium text-[#9F9F9F]">Direct Bank Transfer</label>
            </div>

            {/* Cash On Delivery Checkbox */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-2 border-gray-500 focus:ring-2 focus:ring-gray-700 appearance-none checked:bg-gray-700"
              />
              <label className="text-lg font-medium text-[#9F9F9F]">Cash On Delivery</label>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="text-[28px] flex-1">
              <span>Your personal data will be used to support your experience </span><br />
              <span>throughout this website, to manage access to your account,</span><br />
              <div className="flex"><span>and for other purposes described in our </span><span className="ml-2 font-bold">privacy policy.</span></div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="  w-[350px] h-[65px]   text-[20px] rounded-[15px] border-black mt-8">Place Order
            </Button>
          </div>
        </div>
      </div>
      {/* Add the Black component at the end */}
      <Black />
    </div>
  );
}

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      countryRegion: "",
      streetAddress: "",
      townCity: "",
      province: "",
      zipCode: "",
      phone: "",
      emailAddress: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Row 1: First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4 w-[720px] ">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">First Name</FormLabel>
                <FormControl>
                  <Input className="h-[70px] text-2xl mt-4 px-[25px] py-2  border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Last Name</FormLabel>
                <FormControl>
                  <Input className="h-[70px] text-2xl mt-2 px-[25px] py-2 mt-4   border border-[#9F9F9F] focus:ring-[#9F9F9F] hover:border-[#6f6f6f] transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 2: Company Name (Optional) */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Company Name (Optional)</FormLabel>
                <FormControl>
                  <Input className="h-[70px] text-2xl mt-2 px-[25px] py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 3: Country/Region */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="countryRegion"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Country/Region</FormLabel>
                <FormControl>
                  <Input className="h-[70px] text-2xl mt-2 px-[25px] py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 4: Street Address */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="streetAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Street Address</FormLabel>
                <FormControl>
                  <Input className="h-[70px] mt-2 text-2xl px-[25px] py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 5: Town/City */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="townCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Town/City</FormLabel>
                <FormControl>
                  <Input className="h-[70px] mt-2 px-[25px] text-2xl py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 6: Province */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Province</FormLabel>
                <FormControl>
                  <Input className="h-[70px] mt-2 px-[25px] text-2xl py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 7: Zip Code */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Zip Code</FormLabel>
                <FormControl>
                  <Input className="h-[70px] mt-2 px-[25px] text-2xl py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 8: Phone */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Phone</FormLabel>
                <FormControl>
                  <Input className="h-[70px] mt-2 px-[25px] text-2xl py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 9: Email Address */}
        <div className="w-[720px]">
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email Address</FormLabel>
                <FormControl>
                  <Input className="h-[70px] mt-2 px-[25px] py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F] text-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-[720px] ">
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-[70px] mt-2 text-[#9F9F9F] px-[25px] py-2 mt-4 border-[#9F9F9F] focus:ring-[#9F9F9F] text-2xl hover:border-[#6F6F6F]" placeholder="Additional information"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        
        
      </form>
    </Form>
    
  );
  
}

