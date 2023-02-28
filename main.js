const DB = {
	levels: [
		{ id: '1', name: 'junior' },
		{ id: '2', name: 'middle' },
		{ id: '3', name: 'senior' },
	],
	skills: [
		{ id: '1', name: 'html/css' },
		{ id: '2', name: 'js' },
		{ id: '3', name: 'nodejs' },
		{ id: '4', name: 'react' },
		{ id: '5', name: 'TypeScript' },
	],
	users: [
		{
			id: '11',
			levelId: '3',
			name: 'Andriy Petrash',
			skills: ['1', '2', '3', '4', '5'],
		},

		{
			id: '2',
			levelId: '1',
			name: 'Oleg',
			skills: ['1', '2'],
		},
	],
}



function findUserById(id) {
	const user = DB.users.find(user => user.id === id);
	if (!user) {
	  return 'Missing!';
	}
	const level = DB.levels.find(level => level.id === user.levelId)
	const skills = user.skills.map(skillId => {
		const skill = DB.skills.find(skill => skill.id === skillId);
		return skill.name;
	})
	const info = {
		name: user.name,
		position: level.name,
		skills:skills
	}
	return info
}
let h = findUserById('111')
console.log(h)