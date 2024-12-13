import Link from "next/link";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiPhone,
  PiTiktokLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] pt-14 pb-32 bg-[url('/images/footer.png')] bg-left-bottom bg-repeat-x">
      <div className="container grid lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <h4 className="font-bold text-2xl">Thông tin cửa hàng</h4>
          <Link
            href={"#youtube"}
            className="flex items-center text-gray-700 gap-3"
          >
            <PiYoutubeLogo className="w-6 h-6" />
            <span>@tenkenhyt</span>
          </Link>
          <Link
            href={"#so-phone"}
            className="flex items-center text-gray-700 gap-3"
          >
            <PiPhone className="w-6 h-6" />
            <span>0913.113.432</span>
          </Link>
          <Link
            href={"#so-phone"}
            className="flex items-center text-gray-700 gap-3"
          >
            <IoMailOutline className="w-6 h-6" />
            <span>@tenkenhyt</span>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-2xl">Mạng xã hội</h4>
          <div className="flex gap-3">
            <Link href={"#youtube"}>
              <PiYoutubeLogo className="w-10 h-10" />
            </Link>
            <Link href={"#youtube"}>
              <PiInstagramLogo className="w-10 h-10" />
            </Link>
            <Link href={"#youtube"}>
              <PiTiktokLogo className="w-10 h-10" />
            </Link>
            <Link href={"#youtube"}>
              <PiFacebookLogo className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:text-right">
          <h4 className="font-bold text-2xl">Chính sách</h4>
          <Link href={"/chinh-sach"} className="text-gray-700">
            Chính sách bảo hành
          </Link>
        </div>
      </div>
    </footer>
  );
}
