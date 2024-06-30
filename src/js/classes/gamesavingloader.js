import read from '../reader.js';
import json from '../parser.js';

export default class GameSavingLoader {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }

  static async load() {
    let data = await read();
    data = await json(data);
    const { id, created, userInfo } = JSON.parse(data);
    return new this(id, created, userInfo);
  }
}
