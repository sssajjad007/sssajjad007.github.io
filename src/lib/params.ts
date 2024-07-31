import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Resume';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};
const description = `Highly skilled and dedicated React Native Developer with 4 years of experience in developing high performance and
user-friendly mobile applications. My strong motivation and creative mindset enable me to approach challenges with
innovative solutions, while my passion for learning ensures I stay up-to-date with the latest industry trends and
technologies.`;

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Sajjad',
	lastName: 'Seyfollah',
	description: description,
	description1: `Seeking a challenging role as a React Native Developer to contribute my expertise and drive innovation in a dynamic
	software development team.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/sssajjad007' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/sajjad-seyfollah'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/sssajjad007'
		},
		// {
		// 	platform: Platform.StackOverflow,
		// 	link: 'https://stackoverflow.com/'
		// },
		{
			platform: Platform.Email,
			link: 'sssajjad.76@gmail.com'
		}
		// {
		// 	platform: Platform.Youtube,
		// 	link: 'https://www.youtube.com'
		// },
		// {
		// 	platform: Platform.Facebook,
		// 	link: 'https://www.facebook.com'
		// }
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resume',
	item: 'https://drive.google.com/file/d/1EWCEChF_LrD70PoZWQjw9vhgp7Vhsqtn/view?usp=sharing'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
