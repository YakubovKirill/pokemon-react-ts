export const LIMIT = 100 as const
export const START_POKEMONS_FROM = 0 as const
export const PROJECT_NAME = 'Pokemonix'

export const PATH = {
    DEFAULT: '/',
    POKEMON: '/pokemon/:id',
    POKEMON_API: 'https://pokeapi.co/api/v2/pokemon',
    POKEMON_IMAGE: 'https://pokeres.bastionbot.org/images/pokemon/'
} as const
