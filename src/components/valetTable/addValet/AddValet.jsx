import { CloseOutlined } from '@material-ui/icons'
import React from 'react'
import "./addvalet.css"

export default function AddValet({closeAddValet}) {
    return (
        <div className = "addValet">
            <div className="addValet-wrapper">
                <div className="addValetHeader">
                    <div className="addValetTitle">
                        <h3 className="addValetHeading">Add Valet</h3>
                    </div>
                    <div className="closeValet">
                        <CloseOutlined className ="closeIcon" onClick ={closeAddValet}/>
                    </div>                    
                    
                </div>

                <div className="valetInfos">
                    <div className="addvaletTitle">
                        <h4 className="titleAdd">Valet Details</h4>
                        <div className="valetDetailsInput">
                             <input type="text" className="input input-title" placeholder ="Enter Name" />
                            <input type="tel" className="input input-title" placeholder = "+91-2342342345" />
                        </div>
                       
                    </div>
                    <div className="addvaletTitle">
                        <h4 className="titleAdd">Valet Address</h4>
                        <div className="valetDetailsInput">                            
                            <textarea name="address" id="" cols="30" rows="5"className="input input-address" placeholder = "Enter Adress"></textarea>
                        </div>
                       
                    </div>
                    <div className="addvaletTitle">
                        <h4 className="titleAdd">Deliverable Pincodes</h4>
                        <div className="valetDetailsInput">
                             <input type="text" className="input input-pincode" placeholder ="Enter Pincode" />                           
                        </div>
                        <p className="addPincode">Add More</p>
                       
                    </div>
                </div>

                <div className="addValetFooter">
                    <button className="addValetFooterButton">Save Valet</button>
                </div>
            </div>
            
        </div>
    )
}
