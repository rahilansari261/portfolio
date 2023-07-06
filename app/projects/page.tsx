import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex justify-center">
      <div className="text-black p-5">
        <h2 className="mb-5">My Projects</h2>
        <div className="mb-5">
          <h3>Project Name: Tenzies Game</h3>
          <div className="flex justify-center gap-2.5 mb-[30px]">
            <div className="basis-6/12">
              <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, minus, commodi laboriosam cumque.</p>

              <a className="block mt-2.5" href="https://ubiquitous-stroopwafel-a249ed.netlify.app/" target="_blank">
                Live Demo
              </a>
              <a className="block mt-2.5" href="https://github.com/rahilansari261/tenzies" target="_blank">
                Source Code
              </a>
            </div>
            <div className="basis-2/5">
              <Image className="h-[200px] max-w-[300px]" src="/assets/images/tenzies.png" alt="tenzies app screenshot" />
            </div>
          </div>
        </div>
        {/* <div className="project">
          <h3>Project Name: Tenzies Game</h3>
          <div className="project-with-image">
            <div className="project--desc">
              <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, minus, commodi laboriosam cumque.</p>

              <a href="https://ubiquitous-stroopwafel-a249ed.netlify.app/" target="_blank">
                Live Demo
              </a>
              <a href="https://github.com/rahilansari261/tenzies" target="_blank">
                Source Code
              </a>
            </div>
            <div className="project--image">
              <Image className="project--screenshot" src="/assets/images/tenzies.png" alt="tenzies app screenshot" />
            </div>
          </div>
        </div> */}
        {/* <div className="project">
          <h3>Project Name: Tenzies Game</h3>
          <div className="project-with-image">
            <div className="project--desc">
              <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, minus, commodi laboriosam cumque.</p>

              <a href="https://ubiquitous-stroopwafel-a249ed.netlify.app/" target="_blank">
                Live Demo
              </a>
              <a href="https://github.com/rahilansari261/tenzies" target="_blank">
                Source Code
              </a>
            </div>
            <div className="project--image">
              <Image className="project--screenshot" src="/assets/images/tenzies.png" alt="tenzies app screenshot" />
            </div>
          </div>
        </div> */}
        {/* <div className="project">
          <h3>Project Name: Tenzies Game</h3>
          <div className="project-with-image">
            <div className="project--desc">
              <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, minus, commodi laboriosam cumque.</p>

              <a href="https://ubiquitous-stroopwafel-a249ed.netlify.app/" target="_blank">
                Live Demo
              </a>
              <a href="https://github.com/rahilansari261/tenzies" target="_blank">
                Source Code
              </a>
            </div>
            <div className="project--image">
              <Image className="project--screenshot" src="/assets/images/tenzies.png" alt="tenzies app screenshot" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
