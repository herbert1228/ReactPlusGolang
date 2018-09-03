import React, {Fragment} from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Popover from './Popover'
import PropTypes from 'prop-types'
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import MenuIcon from  '@material-ui/icons/Menu'
import {drawerWidth} from "./index";

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    flex: {
        flex: 1
    },
    hide: {
        display: 'none',
    },
});

class Login extends React.Component {
    state = {open: false};

    handle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <Fragment>
                <Button color="inherit" onClick={() => this.handle()}>Login</Button>

                <Popover open={this.state.open} onClose={this.handle.bind(this)} title="Good Morning Student">
                    Login Form
                </Popover>
            </Fragment>
        )
    }
}


class Header extends React.Component{
    render(){
        const {classes, open} = this.props;
        return (
            <AppBar position="absolute" color="primary"
                    className={classNames(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar>
                    <IconButton
                        className={classNames(classes.menuButton, open && classes.hide)}
                        color="inherit" aria-label="Menu"
                        onClick={() => this.props.onClickOpen()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Classroom
                    </Typography>
                    <Login/>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Header);