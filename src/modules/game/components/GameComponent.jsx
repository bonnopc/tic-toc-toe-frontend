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
    const classes = useStyles();

    const handleUpdateGame = async (rowIndex,colIndex) => {
        console.log({rowIndex,colIndex})

        const gameResponse = await props.actionCreateOrUpdateGame({
            rowIndex,
            colIndex,
            isXturn: props.game.isXturn,
            gameUid: props.game.uid
        });

        if(gameResponse?.statusCode === 200 && gameResponse.result?.uid) props.actionGetGameLogs(gameResponse.result?.uid)
    }

    return (
        <Fragment>
            <Header {...props} />
            <div className={classes.container}>
                <div className="playground">
                    <PlayGround
                        updateGame={handleUpdateGame}
                        data={props.game.data}
                    />
                </div>
                <div className="game-log">
                    <GameLog
                        logs={props.game.logs}
                        data={props.game.data}
                    />
                </div>
            </div>
        </Fragment>
    )
}