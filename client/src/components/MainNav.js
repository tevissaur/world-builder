import * as React from 'react';
import ProfileNavIcons from './ProfileNavIcons'
import { styled, useTheme } from '@mui/material/styles';
import { Menu, InboxSharp, MailSharp } from '@mui/icons-material'
import { AppBar as MuiAppBar, Toolbar, Box, Typography, Slide, Drawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText, useScrollTrigger } from '@mui/material'

const drawerWidth = 240;

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(0),
        marginTop: '64px',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    background: '#201209',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft({ main }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true)
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <HideOnScroll>

                <AppBar position="fixed" open={open} >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawer}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                            <Typography variant="h6" alignSelf="center">
                                World Name
                            </Typography>
                            <ProfileNavIcons />

                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box', background: '#372B1B',
                        color: 'white'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>

                </DrawerHeader>
                <List>

                    <Divider light />
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'white' }}>

                        </ListItemIcon>
                        <ListItemText primary="">
                            Dashboard
                        </ListItemText>
                    </ListItem>
                </List>
                <List>

                    <ListItem button>
                        <ListItemIcon sx={{ color: 'white' }}>

                        </ListItemIcon>
                        <ListItemText>
                            
                        </ListItemText>
                    </ListItem>
                </List>

            </Drawer>
            <Main
                open={open}
                maxWidth='100%'
            >
                {main}

            </Main>
        </Box>
    );
}