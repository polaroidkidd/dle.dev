import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const IconAndroid = dynamic(() =>
  import("./IconAndroid").then((mod) => mod.IconAndroid),
);
const IconDocker = dynamic(() =>
  import("./IconDocker").then((mod) => mod.IconDocker),
);
const IconGithub = dynamic(() =>
  import("./IconGithub").then((mod) => mod.IconGithub),
);
const IconGradle = dynamic(() =>
  import("./IconGradle").then((mod) => mod.IconGradle),
);
const IconJava = dynamic(() =>
  import("./IconJava").then((mod) => mod.IconJava),
);
const IconJavaScript = dynamic(() =>
  import("./IconJavaScript").then((mod) => mod.IconJavaScript),
);
const IconLinkedin = dynamic(() =>
  import("./IconLinkedin").then((mod) => mod.IconLinkedin),
);
const IconLoading = dynamic(() =>
  import("./IconLoading").then((mod) => mod.IconLoading),
);
const IconMaven = dynamic(() =>
  import("./IconMaven").then((mod) => mod.IconMaven),
);
const IconNextJS = dynamic(() =>
  import("./IconNextJS").then((mod) => mod.IconNextJS),
);
const IconNginx = dynamic(() =>
  import("./IconNginx").then((mod) => mod.IconNginx),
);
const IconNode = dynamic(() =>
  import("./IconNode").then((mod) => mod.IconNode),
);
const IconPython = dynamic(() =>
  import("./IconPython").then((mod) => mod.IconPython),
);
const IconReact = dynamic(() =>
  import("./IconReact").then((mod) => mod.IconReact),
);
const IconTypeScript = dynamic(() =>
  import("./IconTypeScript").then((mod) => mod.IconTypeScript),
);
const IconSearch = dynamic(() =>
  import("./IconSearch").then((mod) => mod.IconSearch),
);
const IconJenkins = dynamic(() =>
  import("./IconJenkins").then((mod) => mod.IconJenkins),
);
const IconSqlite = dynamic(() =>
  import("./IconSqlite").then((mod) => mod.IconSqlite),
);
const IconAngular = dynamic(() =>
  import("./IconAngular").then((mod) => mod.IconAngular),
);
const IconHootSuite = dynamic(() =>
  import("./IconHootSuite").then((mod) => mod.IconHootSuite),
);
const IconGoogleAnalytics = dynamic(() =>
  import("./IconGoogleAnalytics").then((mod) => mod.IconGoogleAnalytics),
);
const IconGitlab = dynamic(() =>
  import("./IconGitlab").then((mod) => mod.IconGitlab),
);
const IconCss = dynamic(() => import("./IconCss").then((mod) => mod.IconCss));
const IconHtml = dynamic(() =>
  import("./IconHtml").then((mod) => mod.IconHtml),
);
const IconTailwind = dynamic(() =>
  import("./IconTailwind").then((mod) => mod.IconTailwind),
);
const IconWebpack = dynamic(() =>
  import("./IconWebpack").then((mod) => mod.IconWebpack),
);
const IconTensorflow = dynamic(() =>
  import("./IconTensorflow").then((mod) => mod.IconTensorflow),
);

export const TechLogos: Record<string, ReactNode> = {
  android: <IconAndroid className="fill-red-500" />,
  docker: <IconDocker className="fill-red-500" />,
  github: <IconGithub className="fill-red-500" />,
  gradle: <IconGradle className="fill-red-500" />,
  java: <IconJava className="fill-red-500" />,
  javascript: <IconJavaScript className="fill-red-500" />,
  linkedin: <IconLinkedin className="fill-red-500" />,
  loading: <IconLoading className="fill-red-500" />,
  maven: <IconMaven className="fill-red-500" />,
  nextjs: <IconNextJS className="fill-red-500" />,
  nginx: <IconNginx className="fill-red-500" />,
  node: <IconNode className="fill-red-500" />,
  python: <IconPython className="fill-red-500" />,
  react: <IconReact className="fill-red-500" />,
  search: <IconSearch className="fill-red-500" />,
  typescript: <IconTypeScript className="fill-red-500" />,
  tensorflow: <IconTensorflow className="fill-red-500" />,
  jenkins: <IconJenkins className="fill-red-500" />,
  sqlite: <IconSqlite className="fill-red-500" />,
  angular: <IconAngular className="fill-red-500" />,
  hootsuite: <IconHootSuite className="fill-red-500" />,
  "google-analytics": <IconGoogleAnalytics className="fill-red-500" />,
  gitlab: <IconGitlab className="fill-red-500" />,
  "gitlab-ci": <IconGitlab className="fill-red-500" />,
  html: <IconCss className="fill-red-500" />,
  css: <IconHtml className="fill-red-500" />,
  webpack: <IconWebpack className="fill-red-500" />,
  tailwind: <IconTailwind className="fill-red-500" />,
};
