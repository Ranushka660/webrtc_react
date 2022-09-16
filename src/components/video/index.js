import React, { useContext } from "react";

import { SocketContext } from "../socketContext";

const VideoMode = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return(
        <div className="row">
            <div className="col-md-6">
                {
                    stream && (
                        <div className="video-container">
                            <h5>{name||'Name'}</h5>
                            <video playsInline autoPlay muted ref={myVideo} />
                        </div>
                    )
                }
         
            </div>
            <div className="col-md-6">
                {
                    callAccepted && !callEnded && (
                        <div className="video-container">
                            <h5>{call.name||'Name'}</h5>
                            <video playsInline autoPlay  ref={userVideo} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default VideoMode;