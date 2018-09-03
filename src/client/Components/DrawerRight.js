import React from 'react';
import PropTypes from 'prop-types'
import {Tabpage} from "./Drawer_Components";
import {Drawer, Tabs, Tab}from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {drawerWidth} from "./index";

const styles = theme => ({
    drawerPaperRight: {
        position: 'absolute', //default 'relative',
        right: 0,
        width: drawerWidth,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

 class DrawerRight extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Drawer
                variant="permanent"
                anchor="right"
                classes={{
                    paperAnchorRight: classes.drawerPaperRight,
                }}
            >
                <div className={classes.toolbar} />
                <Tabpage/>
            </Drawer>
        )
    }
}

DrawerRight.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerRight);