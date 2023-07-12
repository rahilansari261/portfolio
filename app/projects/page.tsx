import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:max-w-[800px] md:mx-auto">
      <div className="grid grid-cols-3">
        <div className="relative row-span-2 h-[300px]">
          <Image className="object-cover object-top transition ease-in-out hover:object-center duration-1000" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative col-span-2 h-[150px]">
          <Image className="object-cover object-top transition ease-in-out hover:object-center duration-1000" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative h-[150px]">
          <Image className="object-cover" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw"/>
        </div>
        <div className="relative row-span-2 h-[300px]">
          <Image className="object-cover" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative col-span-2 h-[150px]">
          <Image className="object-cover" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative h-[150px]">
          <Image className="object-cover" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative col-span-2 h-[150px]">
          <Image className="object-cover" src="/assets/images/cat.jpg" alt="tree-image" fill sizes="100vw" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
