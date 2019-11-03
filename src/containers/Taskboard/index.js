import React, { Component } from 'react'
import { withStyles, Container } from '@material-ui/core';
import styles from './styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid';
import {STATUSES} from '../../constants/index'

class TaskBoard extends Component {
    renderBoard(){
        let xhtml = null
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status,index)=>{
                        return (
                            <Grid item md={4} xs={12} key={status.value}>
                                {status.label}
                            </Grid>
                        )
                    })
                }

              
               
                
            </Grid>            
        )
        return xhtml
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.taskboard}>
                <Button variant='contained'color='primary' className={classes.button}>
                    <AddIcon /> Add Tasks
                </Button>
                {this.renderBoard()}
            </div>
        )        
    }
}

export default withStyles(styles)(TaskBoard)
