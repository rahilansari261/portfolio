import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:py-10 md:max-w-[800px] md:mx-auto">
      <div className="relative md:row-span-2 h-[150px] md:h-[300px] group md:bg-black rounded-lg ">
        <Image
          className="object-cover object-top rounded-lg outline outline-4s outline-indigo-500"
          src="/assets/images/1-pw.png"
          alt="tree-image"
          fill
          sizes="100vw"
        />
      </div>
      <div className=" text-black flex flex-col">
        <div>Rahil</div>
        <div>Rahil</div>
        <div>Rahil</div>
      </div>
    </div>
  );
}
