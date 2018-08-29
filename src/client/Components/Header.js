import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'

export default func =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline">
                Classroom
            </Typography>
        </Toolbar>
    </AppBar>
