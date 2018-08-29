import React from 'react';
// import TeacherBoard from './TeacherBoard'
import {Grid} from '@material-ui/core'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const styles = {
    Paper: {padding: 20, margin: 10, height: 500}
};

// function getResourcesFromApi() {

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            resources: null
        }
    }

    async componentDidMount(){
        try {
            const responseJson = await fetch('http://herbert.dynu.net:8080/api/res')
                .then(response => response.json());

            this.setState({
                resources: responseJson,
                isLoading: false
            });
            console.log("Json loaded");
        } catch (e) {
            console.error(e);
        }
    }

    render(){
        return(
            <Grid container>
                <Grid item sm>
                    <LeftPanel styles={styles}/>
                </Grid>
                <Grid item sm>
                    <RightPanel styles={styles}/>
                </Grid>
            </Grid>
        )
    }
}