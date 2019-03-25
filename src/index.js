"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, stats) {
        this.name = name;
        this.stats = stats;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var Stat = /** @class */ (function () {
    function Stat(speed, attack, defense, live) {
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.live = live;
    }
    return Stat;
}());
exports.Stat = Stat;
function getAttackOrder() {
    var pokemons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pokemons[_i] = arguments[_i];
    }
    return pokemons.sort(function (a, b) { return a.stats.speed > b.stats.speed ? -1 : 1; });
}
exports.getAttackOrder = getAttackOrder;
function getSecond(poke1, poke2) {
    return poke1.stats.speed > poke2.stats.speed ? poke2 : poke1;
}
exports.getSecond = getSecond;
function attack(poke1, poke2) {
    if (poke2.stats.live <= 0)
        return;
    var result = poke1.stats.attack - poke2.stats.defense;
    poke2.stats.live -= result > 0 ? result : 1;
    if (poke2.stats.live < 0)
        poke2.stats.live = 0;
}
exports.attack = attack;
function pokemonsStillAlive() {
    var pokemons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pokemons[_i] = arguments[_i];
    }
    return pokemons.filter(function (p) { return p.stats.live > 0; });
}
exports.pokemonsStillAlive = pokemonsStillAlive;
function round(pokemons, pokemon, pokemonIndex) {
    if (pokemons.length < 2)
        throw new Error('Not enough pokemon to create a round');
    if (pokemon.stats.live <= 0)
        return;
    var indexToAttack = pokemonIndex;
    while (indexToAttack === pokemonIndex) {
        indexToAttack = Math.floor(Math.random() * pokemons.length);
    }
    attack(pokemon, pokemons[indexToAttack]);
}
exports.round = round;
function fight() {
    var pokemons = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pokemons[_i] = arguments[_i];
    }
    if (pokemons.length < 2)
        throw new Error('Not enough pokemon to create a fight');
    var alives = pokemons;
    while (alives.length !== 1) {
        var orderedPokemons = getAttackOrder.apply(void 0, pokemons);
        orderedPokemons.forEach(round.bind(null, pokemons));
        alives = pokemonsStillAlive.apply(void 0, pokemons);
    }
    return alives[0];
}
exports.fight = fight;
