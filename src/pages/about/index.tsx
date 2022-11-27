import type { IAward } from "@components/cv/award";
import { Award } from "@components/cv/award";
import type { IBasics } from "@components/cv/basics";
import { Basics } from "@components/cv/basics";
import type { ICertificate } from "@components/cv/certificate";
import { Certificate } from "@components/cv/certificate";
import type { IEducation } from "@components/cv/education";
import { Education } from "@components/cv/education";
import type { ILanguage } from "@components/cv/language";
import { Language } from "@components/cv/language";
import type { IProject } from "@components/cv/project";
import { Project } from "@components/cv/project";
import type { ISkill } from "@components/cv/skill";
import { Skill } from "@components/cv/skill";
import type { IWork } from "@components/cv/work";
import { Work } from "@components/cv/work";
import { ssrGithubHeaders } from "@lib/blogEntries";
import type { GetStaticPropsResult, InferGetStaticPropsType } from "next/types";

export interface IAbout {
  basics: IBasics;
  work: IWork[];
  education: IEducation[];
  awards: IAward[];
  certificates: ICertificate[];
  skills: ISkill[];
  languages: ILanguage[];
  projects: IProject[];
}

interface ICurriculumVitae {
  cv: IAbout;
}

function About({ cv }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    basics,
    work,
    education,
    awards,
    certificates,
    skills,
    languages,
    projects,
  } = cv;

  return (
    <div className="text-neutral-900 dark:text-neutral-50">
      <div>
        <Basics {...basics} />
      </div>
      <div>
        <h2>Work</h2>
        {work.map((values, index) => (
          <Work key={index} {...values} />
        ))}
      </div>
      <div>
        <h2>Education</h2>
        {education.map((values, index) => (
          <Education key={index} {...values} />
        ))}
      </div>
      <div>
        <h2>Awards</h2>
        {awards.map((values, index) => (
          <Award key={index} {...values} />
        ))}
      </div>
      <div>
        Certificates
        {certificates.map((values, index) => (
          <Certificate key={index} {...values} />
        ))}
      </div>
      <div>
        <h2>Skills</h2>
        {skills.map((values, index) => (
          <Skill key={index} {...values} />
        ))}
      </div>
      <div>
        <h2>Languages</h2>
        {languages.map((values, index) => (
          <Language key={index} {...values} />
        ))}
      </div>
      <div>
        Projects
        {projects.map((values, index) => (
          <Project key={index} {...values} />
        ))}
      </div>{" "}
    </div>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ICurriculumVitae>
> {
  const response = await fetch(
    process.env.GITHUB_CV_META as string,
    ssrGithubHeaders,
  );
  const cv = await response.json();
  return {
    props: {
      cv,
    },
    revalidate: 60,
  };
}

export default About;
