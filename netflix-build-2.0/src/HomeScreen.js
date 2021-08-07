import React from 'react';
import Banner from './Banner';
import "./HomeScreen.css"
import Nav from './Nav';
import { content } from './requests'
import parse from "html-react-parser"
import Row from './Row';
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner url={content[0]?.url} />
            {(content)?.map((_data, i) =>
            (
                <Row key={i} title={parse(_data.title)} url={_data.url} isRowDisplayed={_data.displayRow} isLargeRow={_data.largeRow} />
            )
            )}
        </div>
    )
}

export default HomeScreen
