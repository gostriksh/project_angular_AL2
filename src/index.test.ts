import {Pokemon, Stat, getAttackOrder, attack, fight} from './index';

test('When we select the pokemon with the best speed', () => {
    const poke1 = new Pokemon('poke1', new Stat(0, 0, 0, 0));
    const poke2 = new Pokemon('poke2', new Stat(10, 0, 0, 0));
    expect(getAttackOrder(poke1, poke2)).toEqual([poke2, poke1]);
});

test('When a pokemon attack an other pokemon and make 1 damage', () => {
    const poke1 = new Pokemon('pika', new Stat(0, 10, 0, 0));
    const poke2 = new Pokemon('sala', new Stat(0, 0, 9, 10));
    attack(poke1, poke2);
    expect(poke2.stats.live).toBe(9);
});

test('When a pokemon attack an other pokemon and make 0 damage', () => {
    const poke1 = new Pokemon('pika', new Stat(0, 0, 0, 0));
    const poke2 = new Pokemon('sala', new Stat(0, 0, 10, 10));
    attack(poke1, poke2);
    expect(poke2.stats.live).toBe(9);
});

test('When a pokemon attack an other pokemon and make 100 damage', () => {
    const poke1 = new Pokemon('pika', new Stat(0, 100, 0, 0));
    const poke2 = new Pokemon('sala', new Stat(0, 0, 0, 10));
    attack(poke1, poke2);
    expect(poke2.stats.live).toBe(0);
});

test('When we create a fight with two pokemons', () => {
    const poke1 = new Pokemon('pika', new Stat(10, 10, 10, 10));
    const poke2 = new Pokemon('sala', new Stat(10, 10, 10, 10));
    const result = fight(poke1, poke2);

    expect(result).toBe(poke1);
});

test('When we create a fight with four pokemons', () => {
    const poke1 = new Pokemon('pika', new Stat(10, 10, 10, 10));
    const poke2 = new Pokemon('sala', new Stat(10, 10, 10, 10));
    const poke3 = new Pokemon('bulbi', new Stat(10, 10, 10, 10));
    const poke4 = new Pokemon('cara', new Stat(10, 10, 10, 10));
    const result = fight(poke1, poke2, poke3, poke4);

    //expect(result).toBe(poke4); Ceci n'est pas encore testable.
});