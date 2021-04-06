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

export enum Actions {
    ADD_POKEMON_ARR
}