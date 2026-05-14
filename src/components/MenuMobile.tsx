"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SideMenu from "@/components/MenuDesktop";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Mở menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 w-[85vw] max-w-sm">
        <SideMenu
          onNavClick={() => setOpen(false)}
          className="h-[100dvh] w-full overflow-y-auto p-4 bg-background"
        />
      </SheetContent>
    </Sheet>
  );
}
