import { createMuiTheme, Paper, ThemeProvider } from '@material-ui/core';
import React, { Component } from 'react';
import Main from './Main';

export default class App extends Component {

    constructor() {
        super();
        this.theme = createMuiTheme({
            palette: {
                type: "light"
            }
        })
    }


    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <Paper>
                    <Main />
                </Paper>
            </ThemeProvider>
        )
    }
}
