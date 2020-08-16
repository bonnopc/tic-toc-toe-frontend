import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import Header from "./Header";
import PlayGround from "./PlayGround";
import GameLog from "./GameLog";

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // margin: '0 -1rem',

        '& .playground': {
            maxWidth: '100%',
            flex: '0 0 100%',
            padding: '0 1rem',
            width: '100%'
        },

        "& .game-log": {
            maxWidth: '100%',
            flex: '0 0 100%',
            padding: '0 1rem',
            width: '100%'
        },

        '@media (min-width: 540px)': {
            '& .playground': {
                maxWidth: '66.66%',
                flex: '0 0 66.66%',
                padding: '0 1rem',
                width: '100%'
            },
    
            "& .game-log": {
                maxWidth: '33.33%',
                flex: '0 0 33.33%',
                padding: '0 1rem',
                width: '100%'
            },
        }
    }
})

export default function GameComponent(props){
    const classes = useStyles()

    return (
        <Fragment>
            <Header/>
            <div className={classes.container}>
                <div className="playground">
                    <PlayGround/>
                </div>
                <div className="game-log">
                    <GameLog/>
                </div>
            </div>
        </Fragment>
    )
}