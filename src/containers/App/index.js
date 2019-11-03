import React, { Component } from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core';
import {ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../Taskboard/index.js';
import theme from './../../commons/theme'

class App extends Component {
  render() {
    const {classes} = this.props
    return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>

    )
  }
}


export default withStyles(styles)(App);
