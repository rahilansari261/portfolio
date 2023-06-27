import Image from "next/image";

const Projects = () => {
  return (
    <div className="test">
      <div className="my-projects">
        <h2>My Projects</h2>
        <div className="project">
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
        </div>
        <div className="project">
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
        </div>
        <div className="project">
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
        </div>
        <div className="project">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
