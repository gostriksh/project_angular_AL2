import { IPokemon, IStat } from "./Pokemon";

export class Pokemon implements IPokemon {
    public name: string;
    public stats: IStat;

    constructor(name, stats) {
        this.name = name;
        this.stats = stats;
    }
}

export class Stat implements IStat {
    public speed: number;
    public attack: number;
    public defense: number;
    public live: number;

    constructor(speed, attack, defense, live) {
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.live = live;
    }
}

export function getAttackOrder(... pokemons: IPokemon[]): IPokemon[] {
    return pokemons.sort((a, b) => a.stats.speed > b.stats.speed ? -1 : 1);
}

export function getSecond(poke1: IPokemon, poke2: IPokemon): IPokemon {
    return poke1.stats.speed > poke2.stats.speed ? poke2 : poke1;
}

export function attack(poke1: IPokemon, poke2: IPokemon): void {
    if (poke2.stats.live <= 0)
        return;

    const result: number = poke1.stats.attack - poke2.stats.defense;
    poke2.stats.live -= result > 0 ? result : 1;

    if (poke2.stats.live < 0)
        poke2.stats.live = 0;
}

export function pokemonsStillAlive(... pokemons: IPokemon[]): IPokemon[] {
    return pokemons.filter(p => p.stats.live > 0);
}

export function round(pokemons: IPokemon[], pokemon: IPokemon, pokemonIndex: number): void {
    if (pokemons.length < 2)
        throw new Error('Not enough pokemon to create a round');

    if (pokemon.stats.live <= 0)
        return;

    let indexToAttack = pokemonIndex;

    while (indexToAttack === pokemonIndex) {
        indexToAttack = Math.floor(Math.random() * pokemons.length);
    }

    attack(pokemon, pokemons[indexToAttack]);
}

export function fight(... pokemons: IPokemon[]): IPokemon {
    if (pokemons.length < 2)
        throw new Error('Not enough pokemon to create a fight');

    let alives = pokemons;

    while (alives.length !== 1) {
        const orderedPokemons = getAttackOrder(... pokemons);
        orderedPokemons.forEach(round.bind(null, pokemons));
        alives = pokemonsStillAlive(... pokemons);
    }

    return alives[0];
}

