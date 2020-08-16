import React, { memo } from "react"
import { createUseStyles, useTheme } from "react-jss";

const results = [
    {
        rowIndex: 0,
        colIndex: 0,
        value: null
    },
    {
        rowIndex: 0,
        colIndex: 1,
        value: null
    },
    {
        rowIndex: 0,
        colIndex: 2,
        value: null
    },
    {
        rowIndex: 1,
        colIndex: 0,
        value: null
    },
    {
        rowIndex: 1,
        colIndex: 1,
        value: 'X'
    },
    {
        rowIndex: 1,
        colIndex: 2,
        value: null
    },
    {
        rowIndex: 2,
        colIndex: 0,
        value: null
    },
    {
        rowIndex: 2,
        colIndex: 1,
        value: 'O'
    },
    {
        rowIndex: 2,
        colIndex: 2,
        value: null
    }
];

const getDynamicBorder = (rowIndex, colIndex) => {
    let style = {}
    
    const BORDER_WIDTH = '0.1rem'

    if(rowIndex !== 0 && rowIndex !== 2) {
        style.borderTopWidth = BORDER_WIDTH
        style.borderBottomWidth = BORDER_WIDTH
    }

    if(colIndex !== 0 && colIndex !== 2) {
        style.borderLeftWidth = BORDER_WIDTH
        style.borderRightWidth = BORDER_WIDTH
    }

    return style
}

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '2rem',

        '@media (min-width: 540px)': {
            marginBottom: 0
        }
    },
    box: {
        height: 'calc((100vw - 2rem) / 3)',
        border: `0px solid rgba(84,84,84,0.2)`,
        maxWidth: '33.33%',
        flex: '0 0 33.33%',
        maxHeight: 'calc((100vh - 12rem) / 3)',
        cursor: 'pointer',
        fontSize: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '@media (min-width: 540px)': {
            height: 'calc((66.66vw - 2rem) / 3)'
        },

        "&:hover, &:active": {
            backgroundColor: 'rgba(84,84,84,0.15)',
            transition: 'all 0.3s'
        },
    }
}))

function PlayBox({ classes, rowIndex, colIndex, value }){
    return (
        <div className={`${classes.box}`} style={getDynamicBorder(rowIndex,colIndex)}>
            { value }
        </div>
    )
}

function PlayGround(props){
    const theme = useTheme(), classes = useStyles({ theme })

    const getValueByBox = (rowIndex, colIndex) => {
        if(results?.filter(result => result.rowIndex === rowIndex && result.colIndex === colIndex)?.length){
            return results.filter(result => result.rowIndex === rowIndex && result.colIndex === colIndex)[0].value
        }

        return null
    }

    return (
        <div className={classes.container}>
            {
                [0,1,2].map(rowIndex => {
                    return [0,1,2].map(colIndex => (
                        <PlayBox
                            key={`${rowIndex}-${colIndex}`}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            classes={classes}
                            value={getValueByBox(rowIndex,colIndex)}
                        />
                    ))
                })
            }
        </div>
    )
}

export default memo(PlayGround)