"use client";
import Image from "next/image";
import img from "../img/download.jpeg";
import img2 from "../img/download.png";
import img3 from "../img/download (1).jpeg";
import { useRef } from "react";

export default function Home() {
  const num = "30305050201058";
  const val = useRef();
  const hid = useRef();

  const handellClick = () => {
    if (val.current.value.trim() == num) {
      window.location.href = "./30305050201058";
    } else {
      hid.current.style.display = "flex";
      val.current.value = "";
    }
  };

  const hidden = () => {
    hid.current.style.display = "none";
  };

  return (
    <div className="relative m-0 h-full">
      <div className="flex justify-center items-center flex-col gap-[20px] py-[50px]">
        <h1 className="text-[32px] font-bold">استعلام عن الدورة العسكرية</h1>
        <Image
          src={img2}
          alt="Picture of the author"
          className=" rounded-full w-[150px] h-[150px]"
        />
      </div>
      <div className="flex gap-[20px] justify-center items-center flex-wrap max-md:flex-col-reverse max-md:px-[20px] ">
        <input
          type="text"
          placeholder="ادخل الرقم القومي"
          className=" appearance-none w-[500px] p-1 focus:outline-none border-[1px] rounded-md max-md:w-[100%]"
          ref={val}
        />
        <p className="font-bold">ادخل الرقم القومي</p>
      </div>
      <div
        onClick={handellClick}
        className="w-fit p-2 text-center bg-black rounded-md text-white font-bold cursor-pointer mx-auto my-[70px] hover:bg-gray-800 transition-all"
      >
        استعلام
      </div>
      <div
        ref={hid}
        className=" absolute top-[50%] left-[50%] translate-[-50%] bg-white w-[350px] rounded-md shadow text-red-500 h-[300px] z-40 hidden justify-center items-center gap-[15px] flex-col"
      >
        <div className="w-full flex pl-[20px]">
          <Image
            src={img3}
            alt="Picture of the author"
            className=" rounded-full w-[25px] h-[25px] cursor-pointer hover:scale-[105%]"
            onClick={hidden}
          />
        </div>
        <Image
          src={img3}
          alt="Picture of the author"
          className=" rounded-full w-[150px] h-[150px]"
        />
        <p>الرقم القومي غير موجود</p>
      </div>
    </div>
  );
}
