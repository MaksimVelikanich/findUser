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
			id: '1',
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
	let level = DB.levels
	let user = DB.users
	let skill = DB.skills
	let levelNumb
	let skil 
	let info = {}

	if(!user[id-1]){ 
		return 'Missing' 
	}



	user.forEach(function(item){
		if(item.id == id){
			levelNumb = item.levelId
			info.name = item.name
			skil = item.skills
		}
		return item
	})

	level.forEach(function(item){
		if(item.id == levelNumb){
			info.position = item.name;
		}
	})
	info.skills = []
	skil.forEach(function(item){
		skill.find(function(items){
			if(item == items.id){
				info.skills.push(items.name)

			}
		})
	})
	return info
}
let h = findUserById(1)
console.log(h)