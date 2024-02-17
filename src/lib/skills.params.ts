import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description: '',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: '',
		logo: Assets.TypeScript,
		name: 'Typescript'
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
		slug: 'reactjs',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'reactnative',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'React Native'
	}),
	s({
		slug: 'expo',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'Expo'
	}),
	s({
		slug: 'electron',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'Electron Js'
	}),
	s({
		slug: 'android',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'Android'
	}),
	s({
		slug: 'ios',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'iOS'
	}),
	s({
		slug: 'pwa',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'PWA'
	}),
	s({
		slug: 'flipper',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'Flipper'
	}),
	s({
		slug: 'xcode',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'Xcode'
	}),
	s({
		slug: 'cicd',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'CI/CD'
	})
	// s({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte'
	// })
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
