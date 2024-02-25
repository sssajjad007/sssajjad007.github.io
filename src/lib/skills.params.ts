import Assets from "./data/assets";
import type { Skill } from "./types";
import svelte from "./md/svelte.md?raw";

const s = (skill: Skill) => skill;

enum skillType {
  "js",
  "ts",
  "css",
  "html",
  "sass",
  "reactjs",
  "reactnative",
  "expo",
  "electron",
  "android",
  "ios",
  "pwa",
  "debuggingTools",
  "xcode",
  "androidStudio",
  "cicd",
  "test",
  "svelte",
}
export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
  s({
    slug: "js",
    color: "yellow",
    description: "",
    logo: Assets.JavaScript,
    name: "Javascript",
  }),
  s({
    slug: "ts",
    color: "blue",
    description: "",
    logo: Assets.TypeScript,
    name: "Typescript",
  }),
  // s({
  // 	slug: 'css',
  // 	color: 'blue',
  // 	description: '',
  // 	logo: Assets.CSS,
  // 	name: 'CSS'
  // }),
  // s({
  // 	slug: 'html',
  // 	color: 'orange',
  // 	description: '',
  // 	logo: Assets.HTML,
  // 	name: 'HTML'
  // }),
  // s({
  // 	slug: 'sass',
  // 	color: 'pink',
  // 	description: '',
  // 	logo: Assets.Sass,
  // 	name: 'Sass'
  // }),
  s({
    slug: "reactjs",
    color: "cyan",
    description: "",
    logo: Assets.ReactJs,
    name: "React Js",
  }),
  s({
    slug: "reactnative",
    color: "cyan",
    description: "",
    logo: Assets.ReactNative,
    name: "React Native",
  }),
  s({
    slug: "expo",
    color: "cyan",
    description: "",
    logo: Assets.Expo,
    name: "Expo",
  }),
  s({
    slug: "electron",
    color: "cyan",
    description: "",
    logo: Assets.Electron,
    name: "Electron Js",
  }),
  s({
    slug: "android",
    color: "cyan",
    description: "",
    logo: Assets.Android,
    name: "Android",
  }),
  s({
    slug: "ios",
    color: "cyan",
    description: "",
    logo: Assets.iOS,
    name: "iOS",
  }),
  s({
    slug: "pwa",
    color: "cyan",
    description: "",
    logo: Assets.Pwa,
    name: "PWA",
  }),
  s({
    slug: "debuggingTools",
    color: "cyan",
    description: "",
    logo: Assets.Debug,
    name: "Debugging tools",
  }),
  s({
    slug: "xcode",
    color: "cyan",
    description: "",
    logo: Assets.Xcode,
    name: "Xcode",
  }),
  s({
    slug: "androidStudio",
    color: "cyan",
    description: "",
    logo: Assets.AndroidStudio,
    name: "Android studio",
  }),
  s({
    slug: "cicd",
    color: "cyan",
    description: "",
    logo: Assets.CICD,
    name: "CI/CD",
  }),
  //   s({
  //     slug: "test",
  //     color: "cyan",
  //     description: "",
  //     logo: Assets.ReactJs,
  //     name: "Testing",
  //   }),
  // s({
  // 	slug: 'svelte',
  // 	color: 'orange',
  // 	description: svelte,
  // 	logo: Assets.Svelte,
  // 	name: 'Svelte'
  // })
];

export default MY_SKILLS;

export const getSkills = (
  ...slugs: Array<keyof typeof skillType>
): Array<Skill> => MY_SKILLS.filter((it) => slugs.includes(it.slug));
