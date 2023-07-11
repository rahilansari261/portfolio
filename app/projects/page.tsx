import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full text-black text-[1.2rem] px-10 py-4 md:max-w-[800px] md:mx-auto">
      <div className="grid grid-cols-3 ">
        <div className="border-solid border-2 border-sky-500 relative row-span-2">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
        <div className="border-solid border-2 border-sky-500 relative h-[150px] col-span-2">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
        <div className="border-solid border-2 border-sky-500 relative h-[150px]">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
        <div className="border-solid border-2 border-sky-500 relative  row-span-2">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
        <div className="border-solid border-2 border-sky-500 relative h-[150px] col-span-2">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
        <div className="border-solid border-2 border-sky-500 relative h-[150px]">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
        <div className="border-solid border-2 border-sky-500 relative h-[150px] col-span-2">
          <Image className="max-w-full max-h-full " src="/assets/images/tree.jpeg" alt="tree-image" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
