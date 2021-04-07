export type Pokemon = {
    id: number
    name: string
    image: string
    abilities: any[]
}

export type ActionType = {
    type: ACTIONS
    payload: Pokemon[]
}

export type AbilityType = {
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
    slot: number
}

export enum ACTIONS {
    ADD_POKEMON_ARR
}

export enum ABILITY_COLORS {
    RED = 'red',
    GREEN = 'green'
}
