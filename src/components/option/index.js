import React, { useContext, useState } from "react";
import CopyToClipboard from 'react-copy-to-clipboard';
import { Card } from 'react-bootstrap';

import { SocketContext } from "../socketContext";
import CallModel from "../notifications";

const Options = () => {
    const { name, callAccepted, me, setName, myVideo, userVideo, callEnded, stream, call, callUser, leaveCall } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');


    return(
        <div className="row">
            <div className="col-md-6">
                <Card>
                    <Card.Body>
                        <h5>Account Info</h5>
                        <input type = "text" name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Type Your Name Here"/>
                        <CopyToClipboard text={me}>
                            <button type="button" name="clipboard" id="clipboard">Copy Your ID</button>
                        </CopyToClipboard>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6">
                <Card>
                    <Card.Body>
                        <h5>Make a Call</h5>
                        <input type = "text" onChange={(e) => setIdToCall(e.target.value)} name="call" id="call" placeholder="ID to Call"/>
                        {
                            callAccepted && !callEnded?(
                                <button type="button" onClick={leaveCall} className="btn btn-danger" name="clipboard" id="clipboard">End Call</button>
                            ):(
                                <button type="button" onClick={() => callUser(idToCall)} className="btn btn-success" name="clipboard" id="clipboard">Call</button>
                            )
                        }
                    </Card.Body>
                </Card>
            </div>
            {
                call.isReceivedCall && !callAccepted?(
               
                    <CallModel show={true} name={name}/>
                ):''
            }
         
        </div>
    )
}

export default Options;