import attack from '../types/attack.type.js';
import area from '../types/area.type.js';

export default class Pokemon {
  constructor(
    public name: string,
    public description: string,
    public types: string[],
    public attacks: attack[],
    public area: area[]
  ) {}
}
