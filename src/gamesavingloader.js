import read from './reader';
import toString from './parser';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static async load() {
    const binaryData = await read();
    const extractedString = await toString(binaryData);
    const obj = JSON.parse(extractedString);
    return new GameSaving(obj);
  }
}