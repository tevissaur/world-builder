import React from "react";
import store from "../../utils/store";
import { CardActionArea } from '@mui/material'
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholderImage from '../../assets/river_mountains.jpeg'


const CharacterMain = (props) => {
    const state = store.getState()



    return (
        <Box display='flex'>
            <Box display='flex'>
                <Card sx={{ minWidth: 200, maxWidth: 200, maxHeight: 200, margin: 2 }}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            src={placeholderImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box display='flex' flexGrow={1} flexWrap='wrap' justifyContent='center' >
                {state.openWorld.characters?.map((character) => (

                    <Card key={character.name} sx={{ minWidth: '30%', maxWidth: '30%', margin: 1 }}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                alt="green iguana"
                                src={placeholderImage}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {character.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {character.backstory}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>

    )
}

export default CharacterMain