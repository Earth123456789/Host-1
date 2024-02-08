import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Host',
			social: {
				github: 'https://github.com/Earth123456789/Host-3',
			},
			sidebar: [
				
				{
					label: 'Host Configuration',
					autogenerate: { directory: 'hostconfiguration' },
				},
				{
					label: 'I/O Devices',
					autogenerate: { directory: 'iodevices' },
				},
				{
					label: 'Kernel',
					autogenerate: { directory: 'kernel' },
				},
				{
					label: 'Memory',
					autogenerate: { directory: 'memory' },
				},
				{
					label: 'reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
