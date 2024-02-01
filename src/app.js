const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

export default function getSpecialAttack({ special }) {
  const res = [];

  for (let i = 0; i < special.length; i += 1) {
    special[i].description === undefined ? special[i].description = 'Описание недоступно' : special[i].description 
    res.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }
  return res;
}

getSpecialAttack(character);
