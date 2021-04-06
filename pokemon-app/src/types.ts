export type Pokemon = {
    id: number
    name: string
    image: string
    abilities: any[]
}

export type ActionType = {
    type: Actions
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

export enum Actions {
    ADD_POKEMON_ARR
}

export enum AbilityColors {
    RED = 'red',
    GREEN = 'green'
}