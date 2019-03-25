export interface IStat {
    speed: number;
    attack: number;
    defense: number;
    live: number;
}

export interface IPokemon {
    name: string;
    stats: IStat;
}