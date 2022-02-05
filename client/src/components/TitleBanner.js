import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'


const ImageBanner = styled(Box, { shouldForwardProp: (prop) => prop !== 'image' })(({ image, theme }) => ({
    height: '200px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
}))

const Title = styled(Typography)(({ theme }) => ({
    color: 'white',
    padding: '10px 15px',
    position: 'absolute',
    fontSize: '32px',
    bottom: 0,
    left: 0,
    minWidth: 'max-content',
    backgroundColor: '#000000be',
    [theme.breakpoints.up('md')]: {
        color: 'red'
    }
}) )

const TitleBanner = ({ image, title }) => {


    return (
        <ImageBanner image={image}>
            <Title>
                {title}
            </Title>

        </ImageBanner>
    )
}


export default TitleBanner