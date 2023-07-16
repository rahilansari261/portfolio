import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:max-w-[800px] md:mx-auto">
      <div className="md:grid md:grid-cols-3">
        <div className="relative md:row-span-2 h-[150px] md:h-[300px] group md:bg-black">
          <Image
            className="object-cover transition-all object-top ease-in-out md:group-hover:object-bottom duration-1000 opacity-100 md:group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:block">
            Rahil raza Ansari
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
        <div className="relative md:col-span-2 h-[150px] group md:bg-black group">
          <Image
            className="object-cover transition-all object-top ease-in-out group-hover:object-bottom duration-1000 opacity-100 group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">Rahil raza Ansari</div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
        <div className="relative h-[150px] md:bg-black group">
          <Image
            className="object-cover transition-all object-top ease-in-out group-hover:object-bottom duration-1000 opacity-100 group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">Rahil raza Ansari</div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
        <div className="relative md:row-span-2 h-[150px] md:h-[300px] md:bg-black group">
          <Image
            className="object-cover transition-all object-top ease-in-out group-hover:object-bottom duration-1000 opacity-100 group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">Rahil raza Ansari</div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
        <div className="relative md:col-span-2 h-[150px] md:bg-black group">
          <Image
            className="object-cover transition-all object-top ease-in-out group-hover:object-bottom duration-1000 opacity-100 group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">Rahil raza Ansari</div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
        <div className="relative h-[150px]  md:bg-black group">
          <Image
            className="object-cover transition-all object-top ease-in-out group-hover:object-bottom duration-1000 opacity-100 group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">Rahil raza Ansari</div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
        <div className="relative md:col-span-2 h-[150px] md:bg-black group">
          <Image
            className="object-cover transition-all object-top ease-in-out group-hover:object-bottom duration-1000 opacity-100 group-hover:opacity-40"
            src="/assets/images/hive.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">Rahil raza Ansari</div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro assumenda minima, animi dolorum cupiditate debitis vel ea voluptate animi architecto harum pariatur
            perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" underline text-blue-900 font-bold ">view more</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
