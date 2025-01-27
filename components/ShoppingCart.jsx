"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Cart Icon */}
      <div onClick={toggleSidebar} className="cursor-pointer">
        <img src="/cart.png" alt="Cart Icon" />
      </div>

      {/* Shopping Cart Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-96 z-50">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-4">Cart Items Here</div>
        </SheetContent>
      </Sheet>
    </>
  );
}
