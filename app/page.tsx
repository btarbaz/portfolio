// import Image from 'next/image';
import Link from 'next/link';

import { Fragment } from 'react';
import Image from 'next/image';
import projects from '../public/projects.json';

export default function Home() {
  return (
    <Fragment>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-auto"
        id="landing"
      >
        <h1 className="text-6xl font-bold uppercase">
          Hey, I&apos;m Arbaz Khan
        </h1>
        <p className="text-2xl  pt-5 text-center">
          Self-carved, Product-Minded Full-Stack Engineer
          <br />
          with exemplary communication skills
        </p>
        <div className=" flex space-x-4 mt-4 items-center">
          <p>Reach me at:</p>
          <Link href="mailto:btarbaz@gmail.com">
            <Image
              src="/attherate.png"
              alt="mail"
              width={35}
              height={35}
            ></Image>
          </Link>
          <Link href="https://github.com/btarbaz">
            <Image
              src="/github.png"
              alt="github"
              width={30}
              height={30}
            ></Image>
          </Link>
          <Link href="https://linkedin.com/in/btarbaz-khan">
            <Image
              src="/linkedin.png"
              alt="linken"
              width={30}
              height={30}
            ></Image>
          </Link>
        </div>
      </div>
      <section className=" min-h-screen" id="about">
        <div className="about-container">
          <h2>ABOUT ME</h2>
          <p className="description">
            Here you will find more information about me, what I do, and my
            current skills mostly in
            <br /> terms of programming and technology.
          </p>
        </div>
        <div className="content">
          {/* <!-- Left Column --> */}
          <div className="about-text">
            <h3>Get to know me!</h3>
            <p>
              Product-minded softwware developer with experience in full-stack
              development with JavaScript.
            </p>
            <p>
              Self-carved <span className="bold">Full-Stack developer</span>{' '}
              with exemplary communication skills. An individual with a
              demonstrated experience of working with diverse team in remote
              setting. Good knowledge of JavaScript in front-end and backend-end
              domains. Continuously learning to evolve in the new and advanced
              technologies.
            </p>
          </div>
          {/* <!-- Right Column --> */}
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skills-list">
              <span>JavaScript</span>
              <span>Typescript</span>
              <span>React</span>
              <span>Next.JS</span>
              <span>MongoDb</span>
              <span>PostgreSQL</span>
              <span>Node.JS</span>
              <span>Express</span>
              <span>Redux-toolkit</span>
              <span>TailwindCSS</span>
              <span>CSS Module</span>
              <span>Material UI</span>
              <span>Heroku</span>
              <span>MongoDb Atlas</span>
              <span>Mongoose</span>
              <span>Project Management</span>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-gray-900 " id="projects">
        <div className="about-container p-12 text-center">
          <h2>Projects</h2>
          <p className="description">
            Here you will find some of the personal and clients projects that I
            created
          </p>
        </div>
        {projects.map((project, idx) => (
          <Fragment key={idx}>
            <div className="content">
              <div className="about-text">
                <h3>{project.name}</h3>
                <p>{project.description1}</p>
                <p className="pl-4 whitespace-pre-line">
                  {project.description2}
                </p>
              </div>
              <div className="skills">
                <h4 className="mt-14 pt-1 pb-2 text-xl font-semibold">
                  Technologies
                </h4>
                <div className="skills-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href={project.websiteLink}
                className="project-button"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <Image
                  src="/website.png"
                  alt="github"
                  width={20}
                  height={20}
                  style={{
                    display: 'inline',
                    marginRight: '3px',
                    marginBottom: '2px',
                    alignItems: 'center',
                  }}
                ></Image>
                Website
              </Link>
            </div>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}
