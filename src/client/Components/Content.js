import React from 'react';
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {Grid, Card, CardActions, CardContent} from '@material-ui/core'
import 'whatwg-fetch'

// export default class extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             resources: null
//         }
//     }
//
//     async componentDidMount() {
//         try {
//             const responseJson = await fetch('http://herbert.dynu.net:8080/api/res')
//                 .then(response => response.json());
//
//             this.setState({
//                 resources: responseJson,
//                 isLoading: false
//             });
//             console.log("Json loaded");
//         } catch (e) {
//             console.error(e);
//         }
//     }
//
//     uploadResourcesFromApi() {
//         const url = 'http://herbert.dynu.net:8080/api/res';
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 title: 'test title',
//                 desc: 'test desc',
//                 content: 'test content'
//             })
//         }).then(function (response) {
//             console.log(response.url);
//             console.log(response.statusText);
//             console.log(response.headers);
//         }, function (error) {
//             console.log(error.message)
//         })
//     }
// }

const styles = theme => ({
    toolbar: {
        display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
    ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    card: {
        minWidth: 460,
        minHeight: 270,
        marginBottom: 50

    },
    grid: {
        paddingTop: 50,
        paddingRight: 250,
    }
});

class Content extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography noWrap>{'You think water moves slow? You should see ice.'}</Typography>
                {/*    <Webcam/>*/}
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"
                    className={classes.grid}
                >
                    {[0, 1, 2, 3, 4, 5].map(value => (
                        <Grid key={value} item>
                            <Card className={classes.card}>
                                <CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);