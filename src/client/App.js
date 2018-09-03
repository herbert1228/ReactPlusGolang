import React from 'react'
// import "./css/App.css"
import {Header, Content} from './Components'
import PropTypes from 'prop-types'
import { withStyles} from '@material-ui/core'
// import Webcam from './Components/Webcam'
import DrawerLeft from './Components/DrawerLeft'
import DrawerRight from './Components/DrawerRight'

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 943, //100% after adding more components
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class App extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });

};
      render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header open={this.state.open} onClickOpen={() => this.handleDrawerOpen()}/>
                <DrawerLeft open={this.state.open} onClickClose={() => this.handleDrawerClose()}/>
                <DrawerRight/>
                <Content/>
            </div>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(App);