import React, { Component } from 'react';
import { Grid, Button, TextField } from "@material-ui/core";

class EditTodo extends Component {
    render() {
        return (
            <Grid container justify='center'>
                <Grid item xs={6}>
                    <Button onClick={this.handleBack}>Back</Button>
                </Grid> 
            </Grid>
        );
    }
}

export default EditTodo;