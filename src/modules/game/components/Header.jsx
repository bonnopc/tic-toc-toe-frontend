import React, { memo } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '2rem'
    },
    heading: {
        marginBottom: '2rem'
    },
    statHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        fontSize: '1.5rem',
        fontWeight: 'bold',

        '& div': {
            maxWidth: '33.33%',
            flex: '0 0 33.33%',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem'
        },

        '@media (min-width: 540px)': {
            padding: '0 7rem'
        },

        '& .button:hover': {
            backgroundColor: 'rgba(84,84,84,0.15)',
            transition: 'all 0.3s',
            cursor: 'pointer'
        },
        
        '& .active': {
            backgroundColor: '#ffffff',
        }
    }
})

function Header(props){
    const classes = useStyles()

    return (
        <header className={classes.container}>
            <h1>Tic Toc Toe</h1>
            <div className={classes.statHeader}>
                <div className={props.game.isXturn ? "active" : ""}>X's turn</div>
                <div className={props.game.isXturn ? "" : "active"}>O's turn</div>
                <div 
                    className='button'
                    onClick={() => props.actionResetGame()}
                >
                    Reset Game
                </div>
            </div>
        </header>
    )
}

export default memo(Header)