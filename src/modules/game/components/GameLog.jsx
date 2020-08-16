import React, { memo } from "react"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
    }
})

const LogItem = ({ classes }) => (
    <div className={classes.logItemContainer}>
        <div>X is placed on row 3, column 2</div>
    </div>
) 

function GameLog(props){
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <h3>Game Log</h3>
            {
                [0,1].map(item => (
                    <LogItem 
                        key={item}
                        classes={classes}
                    />
                ))
            }
        </div>
    )
}

export default memo(GameLog)