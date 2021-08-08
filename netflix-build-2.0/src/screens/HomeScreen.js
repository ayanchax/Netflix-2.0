import React, { useEffect } from 'react';
import Banner from '../Banner';
import "./HomeScreen.css"
import Nav from '../Nav';
import { content } from '../requests'
import parse from "html-react-parser"
import Row from '../Row';
import Footer from '../Footer';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function HomeScreen() {

    useEffect(() => {
        const urlParams = new URLSearchParams(new URL(window.location.href).search);
        if (urlParams.get('z') && urlParams.get('z') === "0" && urlParams.get('paymentConsoleMessage')) {
            toast.success(atob(urlParams.get('paymentConsoleMessage')), {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        }
        else if (urlParams.get('z') && urlParams.get('z') === "1" && urlParams.get('paymentConsoleMessage')) {
            toast.error(atob(urlParams.get('paymentConsoleMessage')), {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
            });
        }
        else {
            // do nothing
        }
    }, [])
    return (
        <div className="homeScreen">
            <Nav />
            <Banner url={content[0]?.url} />
            {(content)?.map((_data, i) =>
            (
                <Row key={i} allow={_data.slice} title={parse(_data.title)} url={_data.url} isRowDisplayed={_data.displayRow} isLargeRow={_data.largeRow} />
            )
            )}

            <Footer />
        </div>
    )
}

export default HomeScreen
