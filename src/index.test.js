"use strict";
exports.__esModule = true;
var index_1 = require("./index");
test('When we select the pokemon with the best speed', function () {
    var poke1 = new index_1.Pokemon('poke1', new index_1.Stat(0, 0, 0, 0));
    var poke2 = new index_1.Pokemon('poke2', new index_1.Stat(10, 0, 0, 0));
    expect(index_1.getAttackOrder(poke1, poke2)).toEqual([poke2, poke1]);
});
test('When a pokemon attack an other pokemon and make 1 damage', function () {
    var poke1 = new index_1.Pokemon('pika', new index_1.Stat(0, 10, 0, 0));
    var poke2 = new index_1.Pokemon('sala', new index_1.Stat(0, 0, 9, 10));
    index_1.attack(poke1, poke2);
    expect(poke2.stats.live).toBe(9);
});
test('When a pokemon attack an other pokemon and make 0 damage', function () {
    var poke1 = new index_1.Pokemon('pika', new index_1.Stat(0, 0, 0, 0));
    var poke2 = new index_1.Pokemon('sala', new index_1.Stat(0, 0, 10, 10));
    index_1.attack(poke1, poke2);
    expect(poke2.stats.live).toBe(9);
});
test('When a pokemon attack an other pokemon and make 100 damage', function () {
    var poke1 = new index_1.Pokemon('pika', new index_1.Stat(0, 100, 0, 0));
    var poke2 = new index_1.Pokemon('sala', new index_1.Stat(0, 0, 0, 10));
    index_1.attack(poke1, poke2);
    expect(poke2.stats.live).toBe(0);
});
test('When we create a fight with two pokemons', function () {
    var poke1 = new index_1.Pokemon('pika', new index_1.Stat(10, 10, 10, 10));
    var poke2 = new index_1.Pokemon('sala', new index_1.Stat(10, 10, 10, 10));
    var result = index_1.fight(poke1, poke2);
    expect(result).toBe(poke1);
});
test('When we create a fight with four pokemons', function () {
    var rand = Math.random();
    Math.random = function () {
        // @ts-ignore
        var result = rand();
        console.log("coucou");
        return result > 0.75 ? 0.74 : result;
    };
    var poke1 = new index_1.Pokemon('pika', new index_1.Stat(10, 10, 10, 10));
    var poke2 = new index_1.Pokemon('sala', new index_1.Stat(10, 10, 10, 10));
    var poke3 = new index_1.Pokemon('bulbi', new index_1.Stat(10, 10, 10, 10));
    var poke4 = new index_1.Pokemon('cara', new index_1.Stat(10, 10, 10, 10));
    var result = index_1.fight(poke1, poke2, poke3, poke4);
    expect(result).toBe(poke4);
    // @ts-ignore
    Math.random = rand;
});
