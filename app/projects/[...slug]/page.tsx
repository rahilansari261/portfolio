import Image from "next/image";
import { projects } from "../../../data/data";
export default function Page({ params }: { params: { slug: string } }) {
  console.log(projects);
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
      <div className=" text-black flex flex-col py-5">
        <div>Project Name: Rahil</div>
        <div>Tech.: Rahil</div>
        <div>
          Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
          vel ea voluptate animi architecto harum pariatur perspiciatis.
        </div>
      </div>

      <div className="flex flex-col py-5">
        <div className="flex flex-col gap-10 justify-center md:flex-row md:justify-between py-3 ">
          <div className="md:max-w-[45%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, laudantium expedita exercitationem mollitia tempore
            dolorum quaerat enim reiciendis.
          </div>
          <div className="relative md:max-w-[45%] md:flex-1 h-48">
            <Image
              className=" object-cover object-top rounded-lg outline outline-4s outline-indigo-500 "
              src="/assets/images/1-pw.png"
              alt="tree-image"
              fill
              sizes="100vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center md:flex-row md:justify-between py-3">
          <div className="relative md:max-w-[45%] md:flex-1 h-48 order-2 md:order-1">
            <Image
              className=" object-cover object-top rounded-lg outline outline-4s outline-indigo-500 "
              src="/assets/images/1-pw.png"
              alt="tree-image"
              fill
              sizes="100vw"
            />
          </div>
          <div className="md:max-w-[45%] order-1 md:order-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, laudantium expedita exercitationem mollitia tempore
            dolorum quaerat enim reiciendis.
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center md:flex-row md:justify-between py-3">
          <div className="md:max-w-[45%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, laudantium expedita exercitationem mollitia tempore
            dolorum quaerat enim reiciendis.
          </div>
          <div className="relative md:max-w-[45%] md:flex-1 h-48">
            <Image
              className=" object-cover object-top rounded-lg outline outline-4s outline-indigo-500 "
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
