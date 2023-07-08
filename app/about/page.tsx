const About = () => {
  return (
    <div className="w-full text-black text-[1.2rem] leading-normal px-10 py-4 md:max-w-[800px] md:mx-auto">
      <h2 className="text-[2rem] mb-4">About Me</h2>
      <p className="font-light mb-2">
      Experienced JavaScript developer skilled in React, Node.js, and Express. Strong background in web app development with expertise in front-end and back-end. Quick learner, adaptable to new tech and languages. Collaborative team player dedicated to delivering quality work within deadlines. Effective communicator with clients, stakeholders, and team members.
      </p>
      
      <div>
        <h3 className="text-2xl mb-2">Current Job Title:</h3>
        <p className="font-light mb-2">JavaScript Developer</p>
      </div>
      <div>
        <h3 className="text-2xl mb-2">Education:</h3>
        <ul>
          <li className="font-light mb-2">Bachelor&apos;s degree in Computer Science from RTU University</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-2">Experience:</h3>
        <ul className="list-disc">
          <li className="font-light mb-2">Professional experience in web development</li>
          <li className="font-light mb-2">Experience working in Agile development environments</li>
          <li className="font-light mb-2">Experience with React, Node.js, Express, and MongoDB</li>
          <li className="font-light mb-2">Experience with Git for version control</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-2">Contact Information:</h3>
        <ul >
          <li className="font-light mb-2">Email: rahilansari261@gmail.com</li>
          <li className="font-light mb-2">Phone: +91 7742148739</li>
          <li className="font-light mb-2">
            LinkedIn:
            <a className="text-[#3b5998]" href="https://in.linkedin.com/in/rahil-raza-ansari-34712356">
              linkedin.com/in/rahil-raza-ansari-34712356
            </a>
          </li>
          <li className="font-light mb-2">
            Twitter:
            <a className="text-[#3b5998]" href="https://twitter.com/rahilansari261?t=8VYMXfX8HVQ2XE-7puFoNQ&s=08">
              @rahilansari261
            </a>
          </li>
        </ul>
      </div>
      <p className="font-light mb-2">
        Please take a look at my portfolio to see some of my recent projects and to get a better sense of my skills and experience. Thank you for visiting my portfolio!
      </p>
    </div>
  );
};

export default About;
