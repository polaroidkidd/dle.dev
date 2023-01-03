import type { ReactNode } from "react";
import { IconAndroid } from "./IconAndroid";
import { IconDocker } from "./IconDocker";
import { IconGithub } from "./IconGithub";
import { IconGradle } from "./IconGradle";
import { IconJava } from "./IconJava";
import { IconJavaScript } from "./IconJavaScript";
import { IconLinkedin } from "./IconLinkedin";
import { IconLoading } from "./IconLoading";
import { IconMaven } from "./IconMaven";
import { IconNextJS } from "./IconNextJS";
import { IconNginx } from "./IconNginx";
import { IconNode } from "./IconNode";
import { IconPython } from "./IconPython";
import { IconReact } from "./IconReact";
import { IconTypeScript } from "./IconTypeScript";
import { IconSearch } from "./IconSearch";
import { IconJenkins } from "./IconJenkins";
import { IconSqlite } from "./IconSqlite";
import { IconAngular } from "./IconAngular";
import { IconHootSuite } from "./IconHootSuite";
import { IconGoogleAnalytics } from "./IconGoogleAnalytics";
import { IconGitlab } from "./IconGitlab";
import { IconCss } from "./IconCss";
import { IconHtml } from "./IconHtml";
import { IconTailwind } from "./IconTailwind";
import { IconWebpack } from "./IconWebpack";
import { IconTensorflow } from "./IconTensorflow";

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
