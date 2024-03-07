import Assets from "./data/assets";
import { getSkills } from "./skills.params";
import type { Project } from "./types";

const MY_PROJECTS: Array<Project> = [
  {
    slug: "Courier",
    color: "blue",
    description: `<h3>Development Details:</h3>
			<ul>
			<li>Updated React Native version from 0.66 to 0.72, support sdk 34, implementing necessary modifications.</li>
			<li>Conducted updates for outdated packages and enhanced performance.</li>
			<li>Completely restructured the project using TypeScript, incorporating type safety and improved maintainability.</li>
			<li>Introduced new features and resolved numerous bugs.</li>`,
    shortDescription: `Alopeyk is a technology company that provides on-demand delivery services. It is the first and largest provider of on-demand delivery services in Iran. +200K downloads on cafebazaar.
	  `,
    links: [
      {
        to: "https://cafebazaar.ir/app/com.alopeyk.courier",
        label: "CafeBazaar",
      },
    ],
    logo: Assets.Courier,
    name: "Courier - Alopeyk",
    period: {
      from: new Date(),
    },
    skills: getSkills("ts", "reactnative", "android"),
    type: "Position: React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Courier1.toString(),
      },
      {
        label: "2",
        src: Assets.Courier2.toString(),
      },
      {
        label: "3",
        src: Assets.Courier3.toString(),
      },
      {
        label: "4",
        src: Assets.Courier4.toString(),
      },
      {
        label: "5",
        src: Assets.Courier5.toString(),
      },
      {
        label: "6",
        src: Assets.Courier6.toString(),
      },
    ],
  },
  {
    slug: "Customer",
    color: "skyblue",
    description: `<h3>Development Details:</h3>
			<ul>
			<li> Updated React Native version ,support sdk 34 </li>
			<li>Conducted updates for outdated packages and enhanced performance.</li>
			<li>Introduced new features and resolved numerous bugs.</li>`,
    shortDescription:
      "Alopeyk is a technology company that provides on-demand delivery services. It is the first and largest provider of on-demand delivery services in Iran. +1M downloads on google play",
    links: [
      {
        to: "https://cafebazaar.ir/app/com.alopeyk.customer",
        label: "CafeBazaar",
      },
      {
        to: "https://play.google.com/store/apps/details?id=com.alopeyk.customer&hl=en&gl=US",
        label: "GooglePlay",
      },
      {
        to: "https://sibapp.com/applications/alopeyk",
        label: "Sibapp",
      },
    ],
    logo: Assets.Customer,
    name: "Customer - Alopeyk",
    period: {
      from: new Date(),
    },
    skills: getSkills("js", "ios", "android", "reactnative"),
    type: "Position: React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Customer1.toString(),
      },
      {
        label: "2",
        src: Assets.Customer2.toString(),
      },
      {
        label: "3",
        src: Assets.Customer3.toString(),
      },
      {
        label: "4",
        src: Assets.Customer4.toString(),
      },
    ],
  },
  {
    slug: "Ketabkhan",
    color: "orchid",
    description: `<h3>Development Details:</h3>
		<ul>
		  <li>Developed high-performance app for Android & iOS with TypeScript.</li>
		  <li>Fully custom components.</li>
		  <li>Library: React Navigation, Redux, Reanimated, Gesture Handler, Axios, Bottom Sheet, Pdf, mmkv, Firebase, Crypto-Js.</li>
		</ul>
		<ul>
		  <li>Developed high-performance app for Windows with Electron-Js and React.</li>
		  <li>Library: MUI, Router-dom, framer-motion, Redux, Axios, pdfjs-dist, react-pdf-viewer, Crypto-Js.</li>
		</ul>`,
    shortDescription:
      "E-estekhdam is a prominent platform that specializes in job advertisement publishing. It serves as a comprehensive online resource for both job seekers and employers in the country",
    links: [],
    logo: Assets.Ketabkhan,
    name: "Ketabkhan - E-Estekhdam",
    period: {
      from: new Date(),
    },
    skills: getSkills("ts", "reactnative", "android", "electron", "ios"),
    type: "Position: Front-end Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Ketabkhan1.toString(),
      },
      {
        label: "2",
        src: Assets.Ketabkhan2.toString(),
      },
      {
        label: "3",
        src: Assets.Ketabkhan3.toString(),
      },
      {
        label: "4",
        src: Assets.Ketabkhan4.toString(),
      },
      {
        label: "5",
        src: Assets.Ketabkhan5.toString(),
      },
      {
        label: "6",
        src: Assets.Ketabkhan6.toString(),
      },
      {
        label: "7",
        src: Assets.Ketabkhan7.toString(),
      },
    ],
  },

  {
    slug: "Vendor",
    color: "orange",
    description: `<h3>Development Details:</h3>
			<ul>
			<li>Develop a high-performance app for Android & iOS with TypeScript</li>
			<li>Fully custom components</li>
			<li>Library: React Navigation, Redux, Reanimated, Gesture Handler, Axios, Web View, Bottom Sheet, Calendar, FlashList, mmkv, imageCropPicker, firebase, CodePush</li>
		  </ul>`,
    shortDescription:
      "Vendor application is for information management of Delino ordering system member collections",
    links: [
      { to: "https://cafebazaar.ir/app/com.vendorapp", label: "CafeBazaar" },
    ],
    logo: Assets.Vendor,
    name: "Vendor App - Delino",
    period: {
      from: new Date(),
    },
    skills: getSkills("ts", "android", "ios", "cicd", "reactnative"),
    type: "Position: React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Vendor1.toString(),
      },
      {
        label: "2",
        src: Assets.Vendor2.toString(),
      },
      {
        label: "3",
        src: Assets.Vendor3.toString(),
      },
      {
        label: "4",
        src: Assets.Vendor4.toString(),
      },
    ],
  },
  {
    slug: "Delino",
    color: "red",
    description: `<h3>Development Details:</h3>
		<ul>
     	 <li>Successfully identified and resolved 20+ bugs in the project.</li>
     	 <li>Created full compatibility with the new version of iOS and iPhone.</li>
    	 <li>Upgraded 10+ outdated packages, resulting in improved performance and bug fixes.</li>
		<ul/>`,
    shortDescription:
      "Delino is an online food ordering startup that was established in 2015 with the investment of System Group Co, the largest private sector software company",
    links: [
      { to: "https://sibapp.com/applications/OnlineDelino", label: "Sibapp" },
    ],
    logo: Assets.Delino,
    name: "Delino App - Delino",
    period: {
      from: new Date(),
    },
    skills: getSkills("js", "ios", "reactnative"),
    type: "Position: React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Delino1.toString(),
      },
      {
        label: "2",
        src: Assets.Delino2.toString(),
      },
      {
        label: "3",
        src: Assets.Delino3.toString(),
      },
      {
        label: "4",
        src: Assets.Delino4.toString(),
      },
    ],
  },
  {
    slug: "Vendo",
    color: "purple",
    description: `<h3>Development Details:</h3>
		<ul>
		<li>Develop high performance app for android & ios</li>
		<li>Base on monorepo for sharing codes with web</li>
		<li>Fully custom component/li>
		<li>Library: React Native Navigation, Redux ,Reanimated, Gesture Handler, Axios, Map, Web View</li>
		<ul/>`,
    shortDescription:
      "Vendo Application: online food ordering and delivery platform.",
    links: [],
    logo: Assets.Vendo,
    name: "Vendo online - Delino",
    period: {
      from: new Date(),
    },
    skills: getSkills("js", "android", "ios", "reactnative"),
    type: "Position: React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Vendo1.toString(),
      },
      {
        label: "2",
        src: Assets.Vendo2.toString(),
      },
      {
        label: "3",
        src: Assets.Vendo3.toString(),
      },
      {
        label: "4",
        src: Assets.Vendo4.toString(),
      },
      {
        label: "5",
        src: Assets.Vendo5.toString(),
      },
    ],
  },
  {
    slug: "Denj",
    color: "darkviolet",
    description: `<h3>Development Details:</h3>
		<ul>
		<li>Develop high performance app for Android, iOS and web</li>
		<li>Framework: Expo with TypeScript</li>
		<li>Built using Expo web for Progressive Web App (PWA) development</li>
		<li>Libraries: React Navigation, Reanimated, Gesture Handler, Fetch, Bottom Sheet, imageCropPicker, mmkv, track player, Context, Expo AV</li>
		<ul/>`,
    shortDescription:
      "Development of the new version of the Denj application as a freelancer",
    links: [
      {
        to: "https://play.google.com/store/apps/details?id=com.denjapp.android",
        label: "Google play",
      },
    ],
    logo: Assets.Denj,
    name: "Denj App - Karafs",
    period: {
      from: new Date(),
    },
    skills: getSkills("ts", "android", "ios", "pwa", "expo", "reactnative"),
    type: "Position: React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Denj1.toString(),
      },
      {
        label: "2",
        src: Assets.Denj2.toString(),
      },
      {
        label: "3",
        src: Assets.Denj3.toString(),
      },
      {
        label: "4",
        src: Assets.Denj4.toString(),
      },
      {
        label: "5",
        src: Assets.Denj5.toString(),
      },
      {
        label: "6",
        src: Assets.Denj6.toString(),
      },
    ],
  },
  {
    slug: "Taskyn",
    color: "plum",
    description: `<h3>Development Details:</h3>
		<ul>
		 <li>Developed for Android, iOS, and web</li>
		 <li>Based on Expo, TypeScript</li>
		 <li>Utilized Expo web for building Progressive Web Apps (PWA)</li>
		 <li>Fully custom components</li>
		 <li>Library: React Navigation, Mobx, Reanimated, Gesture Handler, Fetch, Bottom Sheet, imageCropPicker, mmkv</li>
		<ul/>`,
    shortDescription:
      "Taskyn is designed to manage Psychoanalytic psychotherapy sessions. I work as a React Native Developer and UI/UX Designer",
    links: [
      {
        to: "https://github.com/sssajjad007/react-native-psychology-app",
        label: "Github",
      },
    ],
    logo: Assets.Taskyn,
    name: "Taskyn App - Aba Soft",
    period: {
      from: new Date(),
    },
    skills: getSkills("ts", "android", "ios", "pwa", "expo", "reactnative"),
    type: "Co-Founder, React Native Developer",
    screenshots: [
      {
        label: "1",
        src: Assets.Taskyn1.toString(),
      },
      {
        label: "2",
        src: Assets.Taskyn2.toString(),
      },
      {
        label: "3",
        src: Assets.Taskyn3.toString(),
      },
      {
        label: "4",
        src: Assets.Taskyn4.toString(),
      },
      {
        label: "5",
        src: Assets.Taskyn5.toString(),
      },
      {
        label: "6",
        src: Assets.Taskyn6.toString(),
      },
      {
        label: "7",
        src: Assets.Taskyn7.toString(),
      },
      {
        label: "8",
        src: Assets.Taskyn8.toString(),
      },
    ],
  },
];

export default MY_PROJECTS;
