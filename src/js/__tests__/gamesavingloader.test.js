import GameSavingLoader from '../classes/gamesavingloader.js';

test('Проверка работы метода load()', async () => {
  const res = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(res);
});
