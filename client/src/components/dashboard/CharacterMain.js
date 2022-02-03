import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import store from "../../utils/store";
import { ALL_CHARACTERS } from '../../utils/queries'
import { setCharacters } from "../../utils/actions";
import { Box } from "@mui/system";


const CharacterMain = (props) => {
    const state = store.getState()
    const { data, loading, error } = useQuery(ALL_CHARACTERS)

    useEffect(() => {
        if (error) {
            
        } else {
            loading ? console.log(loading) : store.dispatch(setCharacters(data?.characters))
        }

    }, [data, loading])


    return (
        <>
            {state.characters?.map((character) => (
                <Box key={character.name}>
                    {character.name}
                </Box>
            ))}
        </>
    )
}

export default CharacterMain