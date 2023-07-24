import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLaptop } from "react-icons/fa";
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
          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">PaperWeight</div>
              <div className="text-xs w-max">
                Invoice generating application
              </div>
              <div className="text-sm ">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: PaperWeight</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: Invoice generating application.
          </div>
          <div className="flex gap-8">
            <Link href="https://pw261.netlify.app/">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://github.com/rahilansari261/pw-client">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>

          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
              View More <LuExternalLink className="inline" />
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

          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">StarterHive</div>
              <div className="text-xs w-max">
                Help beginners to contribute to open source projects of remotely
                hiring organizations.
              </div>
              <div className="text-sm inline">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: StarterHive</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: Help beginners to contribute to open source projects of
            remotely hiring organizations.
          </div>
          <div className="flex gap-8">
            <Link href="https://starter-hive.vercel.app">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://github.com/ArslanYM/StarterHive">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>
          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
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

          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">Rahil&apos;s Portfolio</div>
              <div className="text-xs w-max">
                Rahil&apos;s Portfolio 
              </div>
              <div className="text-sm inline">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Rahil&apos;s Portfolio</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: Rahil&apos;s Portfolio
          </div>
          <div className="flex gap-8">
            <Link href="https://rahilansari.vercel.app">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://github.com/rahilansari261/portfolio">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>
          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
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

          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">CodeBook</div>
              <div className="text-xs w-max">
              CodeBook is the world&apos;s most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.
              </div>
              <div className="text-sm inline">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: CodeBook</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: CodeBook is the world&apos;s most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.
          </div>
          <div className="flex gap-8">
            <Link href="https://codebook261.vercel.app/">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://github.com/rahilansari261/codebook">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>
          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
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

          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">Cinemate</div>
              <div className="text-xs w-max">
                Movies app consuming tmdb api
              </div>
              <div className="text-sm inline">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Cinemate</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: Movies app consuming tmdb api
          </div>
          <div className="flex gap-8">
            <Link href="https://movieez.vercel.app/">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://github.com/rahilansari261/cinemate">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>
          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
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

          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">Task Manager</div>
              <div className="text-xs w-max">
                Task manager application
              </div>
              <div className="text-sm inline">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Task Manager</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: Task manager application
          </div>
          <div className="flex gap-8">
            <Link href="https://taskmate-ul.netlify.app/">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://taskmate-ul.netlify.app/">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>
          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
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

          <Link href="/projects/rahil">
            <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:flex flex-col">
              <div className="text-base">Tenzies</div>
              <div className="text-xs w-max">
                Tenzies game
              </div>
              <div className="text-sm inline">
                see details <LuExternalLink className="inline" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 md:hidden">
          <div>Project Name: Tenzies</div>
          <div>Tech.: MERN Stack</div>
          <div>
            Details: Tenzies game.
          </div>
          <div className="flex gap-8">
            <Link href="https://tenzies261.netlify.app/">
              <div className="text-base cursor-pointer hover:text-blue-900 font-bold">
                Live Demo <FaLaptop className="inline" />
              </div>
            </Link>
            <Link href="https://github.com/rahilansari261/tenzies">
              <div className=" text-base cursor-pointer hover:text-blue-900 font-bold">
                Github Code <FaGithub className="inline" />
              </div>
            </Link>
          </div>
          <Link href="/projects/rahil">
            <div className=" text-base hover:underline cursor-pointer hover:text-blue-900 font-bold ">
              view more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
