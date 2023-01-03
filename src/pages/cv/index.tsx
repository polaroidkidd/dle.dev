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

import type { ISkill } from "@components/cv/skill";
import { Skill } from "@components/cv/skill";
import styles from "./about.module.scss";

import type { GetStaticPropsResult, InferGetStaticPropsType } from "next/types";
import { ssrGithubHeaders } from "@lib/blogEntries";
import { AboutSectionContainer } from "@components/container/aboutSectionContainer";
import { AboutSectionItemContainer } from "@components/container/aboutSectionItemContainer";
import type { IWorkContainer } from "@components/cv/work/workContainer";
import { WorkContainer } from "@components/cv/work/workContainer";
import * as process from "process";
import { MOCK_CV } from "@mocks/MOCK_CV";
import classNames from "classnames";

export type IAbout = {
  basics: IBasics;
  work: IWorkContainer[];
  education: IEducation[];
  awards: IAward[];
  certificates: ICertificate[];
  skills: ISkill[];
  languages: ILanguage[];
  projects: IProject[];
};

type ICurriculumVitae = {
  cv: IAbout;
};

function CV({ cv }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { basics, work, education, awards, certificates, skills, languages } =
    cv;

  return (
    <article
      className={classNames(
        styles.headings,
        "text-neutral-900 dark:text-neutral-50",
      )}
    >
      <AboutSectionContainer isCollapsable={false}>
        <AboutSectionItemContainer>
          <Basics
            name={basics.name}
            location={basics.location}
            profiles={basics.profiles}
            email={basics.email}
            image={basics.image}
            label={basics.label}
            phone={basics.phone}
          />
        </AboutSectionItemContainer>
      </AboutSectionContainer>

      <AboutSectionContainer
        sectionTitle="Employment History"
        isInitiallyCollapsed={true}
      >
        {work.map(
          (
            {
              startDate,
              endDate,
              url,
              name,
              summary,
              highlights,
              notableProjects,
              position,
              primaryTools,
              technology,
            },
            index,
          ) => (
            <AboutSectionItemContainer key={index}>
              <WorkContainer
                key={index}
                endDate={endDate}
                highlights={highlights}
                name={name}
                position={position}
                startDate={startDate}
                summary={summary}
                url={url}
                notableProjects={notableProjects}
                technology={technology}
                primaryTools={primaryTools}
              />
            </AboutSectionItemContainer>
          ),
        )}
      </AboutSectionContainer>
      <AboutSectionContainer
        sectionTitle="Education"
        isInitiallyCollapsed={true}
      >
        {education.map(
          ({ endDate, startDate, area, url, institution, thesis }, index) => (
            <AboutSectionItemContainer key={index}>
              <Education
                key={index}
                url={url}
                institution={institution}
                area={area}
                startDate={startDate}
                endDate={endDate}
                thesis={thesis}
              />
            </AboutSectionItemContainer>
          ),
        )}
      </AboutSectionContainer>
      <AboutSectionContainer sectionTitle="Awards" isInitiallyCollapsed={true}>
        {awards.map(({ title, issuer, date, summary }, index) => (
          <AboutSectionItemContainer key={index}>
            <Award
              key={index}
              title={title}
              date={date}
              issuer={issuer}
              summary={summary}
            />
          </AboutSectionItemContainer>
        ))}
      </AboutSectionContainer>
      <AboutSectionContainer
        sectionTitle="Certificates"
        isInitiallyCollapsed={true}
      >
        {certificates.map(({ name, issuer, date }, index) => (
          <AboutSectionItemContainer key={index}>
            <Certificate key={index} date={date} issuer={issuer} name={name} />
          </AboutSectionItemContainer>
        ))}
      </AboutSectionContainer>
      <AboutSectionContainer sectionTitle="Skills" isInitiallyCollapsed={true}>
        {skills.map(({ name, keywords }, index) => (
          <AboutSectionItemContainer key={index}>
            <Skill key={index} name={name} keywords={keywords} />
          </AboutSectionItemContainer>
        ))}
      </AboutSectionContainer>
      <AboutSectionContainer
        sectionTitle="Languages"
        isInitiallyCollapsed={true}
      >
        {languages.map(({ language, fluency }, index) => (
          <AboutSectionItemContainer key={index}>
            <Language key={index} language={language} fluency={fluency} />
          </AboutSectionItemContainer>
        ))}
      </AboutSectionContainer>
    </article>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ICurriculumVitae>
> {
  let cv;

  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      process.env.GITHUB_CV_META as string,
      ssrGithubHeaders,
    );
    cv = await response.json();
  } else {
    cv = MOCK_CV;
  }

  return {
    props: {
      cv,
    },
    revalidate: 60,
  };
}

export default CV;
