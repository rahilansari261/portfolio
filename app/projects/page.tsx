import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:max-w-[800px] md:mx-auto">
      <div className="md:grid md:grid-cols-3">
        <div className="relative row-span-2 h-[300px] ">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-bottom duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative col-span-2 h-[150px]">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-center duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative h-[150px]">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-center duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative row-span-2 h-[300px]">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-bottom duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative col-span-2 h-[150px]">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-center duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative h-[150px]">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-center duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
        <div className="relative col-span-2 h-[150px]">
          <Image className="object-cover transition-all object-top ease-in-out hover:object-center duration-1000" src="/assets/images/hive.png" alt="tree-image" fill sizes="100vw" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
