import getSpecialAttack from '../app';

test('function getSpecialAttack with description', () => {
  const pers = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http:/',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Накаутирующий удар',
        icon: 'http:/',
      },
    ],
  };

  expect(getSpecialAttack(pers)).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http:/',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Накаутирующий удар',
      icon: 'http:/',
      description: 'Описание недоступно',
    },
  ]);
});
