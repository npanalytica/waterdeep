
export const NavGroups = [
	{
		name: 'Grobash',
		icon: 'account_box',
		items: [
			{
				name: 'Sheet',
				icon: 'account_box',
				url: ['sheet']
			},
			{
				name: 'Inventory',
				icon: 'folder_shared',
				url: ['inventory']
			},
			{
				name: 'Edit',
				icon: 'build',
				url: ['edit']
			}
		]
	},
	{
		name: 'Party',
		icon: 'supervised_user_circle',
		items: [
			{
				name: 'contacts',
				icon: 'contact_mail',
				url: ['party', 'contacts']
			},
			{
				name: 'maps',
				icon: 'landscape',
				url: ['party', 'maps']
			},
			{
				name: 'quests & XP',
				icon: 'calendar_today',
				url: ['party', 'quests']
			}
		]
	},
	{
		name: 'Encyclopedia',
		icon: 'chrome_reader_mode',
		items: [
			{
				name: 'Bestiary',
				icon: 'adb',
				url: ['encyclopedia', 'bestiary']
			},
			{
				name: 'Spells',
				icon: 'whatshot',
				url: ['encyclopedia', 'spells']
			},
			{
				name: 'Magic items',
				icon: 'ac_unit',
				url: ['encyclopedia', 'magic-items']
			}
		]
	},
	{
		name: 'Settings',
		icon: 'settings',
		items: [
			{
				name: 'Toggle fullscreen',
				icon: 'fullscreen',
				url: null
			}
		]
	}
]