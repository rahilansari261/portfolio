import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:py-10 md:max-w-[800px] md:mx-auto">
      <div className="md:grid gap-1 md:grid-cols-3 ">
        <div className="relative md:row-span-2 h-[150px] md:h-[300px] group md:bg-black rounded-lg ">
          <Image
            className="object-cover transition-all object-left-top ease-in-out md:group-hover:object-bottom duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/1-pw.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
            <div className="text-base">PaperWeight</div>
            <div className="text-xs w-max">Invoice generating application</div>

            <div className="text-sm inline">
              see details <LuExternalLink />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
        <div className="relative md:col-span-2 h-[150px] group md:bg-black group rounded-lg">
          <Image
            className="object-cover transition-all object-top ease-in-out md:group-hover:object-center duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/2-sh.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000  md:flex flex-col">
            <div>Rahil</div>
            <div>Rahil</div>
            <div>Rahil</div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
        <div className="relative h-[150px] md:bg-black group rounded-lg">
          <Image
            className="object-cover transition-all object-left-top ease-in-out md:group-hover:object-center duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/3-port-m.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />

          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000  md:flex flex-col">
            <div>Rahil</div>
            <div>Rahil</div>
            <div>Rahil</div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
        <div className="relative md:row-span-2 h-[150px] md:h-[300px] md:bg-black group rounded-lg">
          <Image
            className="object-cover transition-all object-right-top ease-in-out md:group-hover:object-center duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/4-cb.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000  md:flex flex-col">
            <div>Rahil</div>
            <div>Rahil</div>
            <div>Rahil</div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
        <div className="relative md:col-span-2 h-[150px] md:bg-black group rounded-lg">
          <Image
            className="object-cover transition-all object-top ease-in-out md:group-hover:object-bottom duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/5-cm.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000  md:flex flex-col">
            <div>Rahil</div>
            <div>Rahil</div>
            <div>Rahil</div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
        <div className="relative h-[150px]  md:bg-black group rounded-lg">
          <Image
            className="object-cover transition-all object-top ease-in-out md:group-hover:object-bottom duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/6-tm-m.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000  md:flex flex-col">
            <div>Rahil</div>
            <div>Rahil</div>
            <div>Rahil</div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className="hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
        <div className="relative md:col-span-2 h-[150px] md:bg-black group rounded-lg">
          <Image
            className="object-cover transition-all object-top ease-in-out md:group-hover:object-bottom duration-1000 opacity-100 md:group-hover:opacity-40 rounded-lg outline md:group-hover:outline-4s md:group-hover:outline-indigo-500 "
            src="/assets/images/7-tenzies.png"
            alt="tree-image"
            fill
            sizes="100vw"
          />
          <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000  md:flex flex-col">
            <div>Rahil</div>
            <div>Rahil</div>
            <div>Rahil</div>
          </div>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil</div>
          <div>Tech.: Rahil</div>
          <div>
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos porro assumenda minima, animi dolorum cupiditate debitis
            vel ea voluptate animi architecto harum pariatur perspiciatis.
          </div>
          <Link href="/projects/rahil">
            <div className=" hover:underline cursor-pointer text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
