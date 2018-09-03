import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import 'whatwg-fetch'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        // fontSize: 5,
    }
});

class ScrollableTabsButtonAuto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            resources: [],
            value: 0,
        }
    }

    componentDidMount() {
        console.log("Mounted");
        const url1 = 'http://herbert.dynu.net:8080/api/res';
        const url2 = 'http://localhost:8080/api/res';
        fetch(url2)
            .then((response) => response.json())
            .then((response) => console.log(response));
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label={<span className={classes.tab}>Chat</span>} />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>Chat Here</TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Four</TabContainer>}
            </div>
        );
    }
}

ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);