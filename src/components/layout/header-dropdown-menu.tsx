import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderDropdownMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <RxHamburgerMenu className="w-8 h-8 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="-translate-x-1/3">
          <div className="lg:hidden">
            {" "}
            <DropdownMenuLabel>Sản Phẩm</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>TEDI COLLECTION</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Áo Tedi</DropdownMenuItem>
          <DropdownMenuItem>Khủng long Tedi</DropdownMenuItem>
          <DropdownMenuItem>Balo</DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>DỤNG CỤ TẬP THỂ THAO</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Các sản phẩm khác</DropdownMenuItem>
          <DropdownMenuItem>Lò xo cơ tay</DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>TEDI CUSTOM PHIÊN BẢN GIỚI HẠN</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Custom phiên bản giới hạn</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
