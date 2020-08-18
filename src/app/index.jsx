import React from 'react';
import { Provider } from "react-redux";
import WebFont from "webfontloader";
import { ThemeProvider } from 'react-jss';

import configureStore from "store";
import GameContainer from 'modules/game/containers/GameContainer';
import { Theme } from 'config';
import DefaultLayout from 'layouts/DefaultLayout';
import RehydrationCheckPost from './RehydrationCheckPost';

const { store } = configureStore();

WebFont.load({
    google: {
        families: ['Indie+Flower:300,400,700', 'cursive']
    }
})

function App(props) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme} >
                <DefaultLayout>
                    <RehydrationCheckPost {...props} >
                        <GameContainer/>
                    </RehydrationCheckPost>
                </DefaultLayout>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
