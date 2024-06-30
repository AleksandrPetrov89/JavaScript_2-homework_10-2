import GameSavingLoader from './classes/gamesavingloader.js';

(async () => {
  try {
    const res = await GameSavingLoader.load();
    // eslint-disable-next-line no-console
    console.log('Сохранение успешно загружено!');
    // eslint-disable-next-line no-console
    console.log(res);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Ошибка при загрузке сохранения!', err);
  }
})();
