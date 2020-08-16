import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(theme => ({
    app: {
        flexGrow: 1
    },
    '@global': {
        'body': {
            fontFamily: theme.fontFamily,
            height: '100%',
            lineHeight: '1.5',
            fontSize: '100%',
            backgroundColor: theme.colorBackground,
            color: theme.colorText
        },
        'body, form, fieldset, ol, ul, li, h1, h2, h3, h4, h5, h6, p': {
            margin: 0,
            padding: 0
        },
        'html': {
            height: "100%", 
            overflow: 'auto',
            overflowY: 'scroll'
        },
        'h1, h2, h3, h4, h5, h6, p': {
            margin: '0 0 1rem'
        },
        h1: {
            fontSize: '3rem'
        },
        h2: {
            fontSize: '2.5rem'
        },
        h3: {
            fontSize: '2rem'
        },
        h4: {
            fontSize: '1rem'
        },
        'body, *, ::after, ::before': {
            boxSizing: 'border-box'
        }
    }
}));

export default function DefaultLayout(props){
    const theme = useTheme(), classes = useStyles({ theme });

    return (
        <div className={classes.app}>
            { props.children }
        </div>
    );
}
