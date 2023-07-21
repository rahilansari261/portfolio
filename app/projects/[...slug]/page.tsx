import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:py-10 md:max-w-[800px] md:mx-auto">
      <div className="relative h-[150px] md:h-[300px] md:bg-black rounded-lg ">
        <Image
          className="object-cover object-top rounded-lg outline outline-4s outline-indigo-500"
          src="/assets/images/1-pw.png"
          alt="tree-image"
          fill
          sizes="100vw"
        />
      </div>
      <div className=" text-black flex flex-col">
        <div>Project Name: Rahil</div>
        <div>Tech.: Rahil</div>
        <div>
          Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
          vel ea voluptate animi architecto harum pariatur perspiciatis.
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="md:max-w[300px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, laudantium expedita exercitationem mollitia tempore
            dolorum quaerat enim reiciendis.
          </div>
          <div className="relative md:bg-black rounded-lg ">
            <Image
              className="object-cover object-top rounded-lg outline outline-4s outline-indigo-500"
              src="/assets/images/1-pw.png"
              alt="tree-image"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
