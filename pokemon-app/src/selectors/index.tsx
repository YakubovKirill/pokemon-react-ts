import { createSelector} from "reselect";
import { RootStateOrAny} from 'react-redux'

const selectAllPokemons = (state: RootStateOrAny) => state.pokemons

export const getAllPokemons = createSelector(
    selectAllPokemons,
    pokemons => pokemons
)