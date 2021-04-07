export type Pokemon = {
    abilities: AbilityType[]
    baseExperience: number
    height: number
    id: number
    name: string
    stats: PokemonStat[]
    types: PokemonType[]
    weight: number
    image: string
}

export type ActionType = {
    type: ACTIONS
    payload: Pokemon[]
}

export type AbilityType = {
    ability: {
        name: string
    }
    is_hidden: boolean
}

export type PokemonInput = {
    name: string,
    url: string
}

export interface IInputPokemonsData {
    results: PokemonInput[]
}

export type PokemonStat = {
    base_stat: number
    stat: {
        name: string
    }
}

export type PokemonType = {
    type: {
        name: string
    }
}

export interface IInputPokemon {
    abilities: AbilityType[]
    base_experience: number
    height: number
    id: number
    name: string
    stats: PokemonStat[]
    types: PokemonType[]
    weight: number
}

export enum ACTIONS {
    ADD_POKEMON_ARR
}

export enum ABILITY_COLORS {
    RED = 'red',
    GREEN = 'green'
}
