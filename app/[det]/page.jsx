import Image from "next/image";
import img from "../../img/download.jpeg";
import img2 from "../../img/download.png";
import img3 from "../../img/download (1).jpeg";
import img4 from "../../img/WhatsApp.jpg";
import React from "react";

export default function page() {
  return (
    <div className="relative m-0">
      <div className="flex justify-center items-center flex-col gap-[20px] py-[50px]">
        <h1 className="text-[32px] font-bold max-md:text-[28px]">
          استعلام عن الدورة العسكرية
        </h1>
        <Image
          src={img2}
          alt="Picture of the author"
          className=" rounded-full w-[150px] h-[150px]"
        />
      </div>
      <div className="px-[200px] flex justify-around items-start flex-wrap max-md:px-[20px]">
        <Image
          src={img4}
          alt="Picture of the author"
          className=" rounded-md w-[150px] h-[200px]"
        />
        <div className="text-end text-[28px] max-md:text-[24px]">
          <h1 className="font-bold text-center">البيانات</h1>
          <p>الاسم: احمد سيد عبد الحميد عبد الوهاب سليم</p>
          <p>الرقم القومي:30305050201058</p>
          <p>الكلية: كلية الشريعة والقانون بدمنهور</p>
          <p>
            حالة الطلب: <span className="text-red-600 font-bold">مرفوض</span>
          </p>
          <p>
            السبب:
            <span className="text-green-500 font-bold">
              تم اكتمال العدد نرجوا ان تقدم في موعد اخر
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
