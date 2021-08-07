import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import "./YouTubeTrailerDialog.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function YouTubeTrailerDialog({ content, title, updateModalState, isOpen, }) {
    const opts = {
        height: "800",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    return (
        <div className="youTubeTrailerDialog">
            <Dialog  
                fullScreen 
                open={isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={updateModalState}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <div >
                        <div className="youTubeTrailerDialog__trailerTitle">
                            {title} | Trailer
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>

                    <YouTube videoId={content} opts={opts} />

                </DialogContent>
                <DialogActions>
                    <div>
                        <Button className="youTubeTrailerDialog__trailerButton" onClick={updateModalState}>
                            Close
                        </Button>
                    </div>
                </DialogActions>


            </Dialog>
        </div>
    )
}

export default YouTubeTrailerDialog
