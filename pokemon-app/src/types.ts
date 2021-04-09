//Types

// Main pokemon type
export type Pokemon = {
    abilities: AbilityType[],
    baseExperience: number,
    height: number,
    id: number,
    name: string,
    stats: PokemonStat[],
    types: PokemonType[],
    weight: number,
    image: string
}

export type ActionType = {
    type: ACTIONS,
    payload: Pokemon[]
}

export type AbilityType = {
    ability: {
        name: string
    },
    is_hidden: boolean
}

export type PokemonInput = {
    name: string,
    url: string
}

export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

export type PokemonType = {
    type: {
        name: string
    }
}

// Interfaces

export interface IInputPokemonsData {
    results: PokemonInput[]
}

export interface IInputPokemon {
    abilities: AbilityType[],
    base_experience: number,
    height: number,
    id: number,
    name: string,
    stats: PokemonStat[],
    types: PokemonType[],
    weight: number
}

// Enums

export enum ACTIONS {
    ADD_SAGA_POKEMON = 'ADD_SAGA_POKEMON',
    FETCH_POKEMON = 'FETCH_POKEMON'
}

export enum ABILITY_COLORS {
    RED = 'red',
    GREEN = 'green'
}
