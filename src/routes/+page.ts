import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
	 days: [
  {
		name: "Friday",
		subname: "22 Mar 2024",
		todos: [
		{
		$id: 'todo1',
		text: 'Spread love',
		completed: true
		}
		]
		},
		
  {
		name: "Saturday",
		subname: "23 Mar 2024",
		todos: [
		{
		$id: 'todo1',
		text: 'Study',
		completed: false
		},
		{
		$id: 'todo1',
		text: 'Study more',
		completed: false
		},
		{
		$id: 'todo1',
		text: 'Study some more',
		completed: false
		},
		{
		$id: 'todo1',
		text: 'Study even more',
		completed: false
		}
		]
		},
		
  {
		name: "Sunday",
		subname: "24 Mar 2024",
		todos: [
		{
		$id: 'todo1',
		text: 'Meet with Matej',
		completed: false
		},
		{
		$id: 'todo1',
		text: 'Recieve flowers',
		completed: false
		},
		{
		$id: 'todo1',
		text: 'Build LEGO',
		completed: false
		}
		]
		}
		],
		tabs: [
			{
				$id: 'tab1',
				title: 'Matej',
				lists: [
					{
						$id: 'list1',
						name: 'Work',
						todos: [
							{
								$id: 'todo1',
								text: 'Migration',
								completed: false
							},
							{
								$id: 'todo2',
								text: 'Yell at boss',
								completed: true
							}
						]
					},
					{
						$id: 'list2',
						name: 'Free time',
						todos: [
							{
								$id: 'todo1',
								text: 'Tell her I love her',
								completed: false
							},
							{
								$id: 'todo2',
								text: 'Tell her she is beautiful',
								completed: false
							},
							{
								$id: 'todo2',
								text: 'Tell her she never disturbs me',
								completed: false
							}
						]
					},
					{
						$id: 'list3',
						name: 'Family',
						todos: [
							{
								$id: 'todo1',
								text: 'Dont kill a sister',
								completed: true
							}
						]
					}
				]
			},
			{
				$id: 'tab2',
				title: 'Anet',				
				lists: [
					{
						$id: 'list1',
						name: 'School',
						todos: [
							{
								$id: 'todo1',
								text: 'Dont quit',
								completed: true
							},
							{
								$id: 'todo2',
								text: 'Cech',
								completed: false
							},
							{
								$id: 'todo2',
								text: 'Obcan',
								completed: false
							},
							{
								$id: 'todo2',
								text: 'Riman',
								completed: false
							},
							{
								$id: 'todo2',
								text: 'Nemec',
								completed: false
							}
						]
					},
					{
						$id: 'list2',
						name: 'My bby',
						todos: [
							{
								$id: 'todo1',
								text: 'Send reels',
								completed: true
							},
							{
								$id: 'todo2',
								text: 'Complain about friends',
								completed: true
							},
							{
								$id: 'todo2',
								text: 'Tell drbiky',
								completed: false
							}
						]
					},
					{
						$id: 'list3',
						name: 'Social',
						todos: [
						{
							$id: 'todo2',
							text: 'Call mom',
							completed: false
						},
						{
							$id: 'todo2',
							text: 'Send snap',
							completed: false
						}
						]
					}
				]
			}
		]
	};
};
