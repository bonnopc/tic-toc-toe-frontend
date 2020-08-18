import React, { memo, Fragment } from "react"
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
    },
    winnerDiv: {
        color: '#ffffff',
        fontSize: "5rem"
    }
}))

const LogItem = ({ classes, log }) => (
    <div className={classes.logItemContainer}>
        <div>{ log.value } is placed on row { log.rowIndex + 1 }, column { log.colIndex + 1 }</div>
    </div>
) 

function GameLog({ data, logs }){
    const theme = useTheme(),classes = useStyles({ theme })

    return (
        <div className={classes.container}>
            {
                data?.winner &&
                <h1 className={classes.winnerDiv}>
                    Winner is '{ data.winner }'
                </h1>
            }
            {
                logs?.length &&
                <Fragment>
                    <h3>Game Log</h3>
                    {
                        logs.map((log,i) => (
                            <LogItem 
                                key={i}
                                classes={classes}
                                log={log}
                            />
                        ))
                    }
                </Fragment>
            }
            
            
        </div>
    )
}

export default memo(GameLog)