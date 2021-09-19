import { CloseOutlined, Create, CreateOutlined, OpenInNew } from '@material-ui/icons'
import React from 'react'
import './valetInfo.css'

export default function ValetInfo({handleClose}) {
    return (
        <div className ='valetInfo'>
            <div className="valetInfo-wrapper">
                <div className="valetInfoHeader">
                    <h3 className="valetTitle">
                        Valet Info
                    </h3>
                    <div className="valetInfoClose">
                        <CloseOutlined className ="closeIcon" onClick ={handleClose}/>
                    </div>

                </div>
                 
                
                <div className=" valetInfoRow valetInfoRow1">
                    <div className="valetAccountDetails">
                        <div className="valetInfoAccountTitle">
                            <h4 className="valetInfoAccountTitleHeading">Account Details</h4>
                            <Create className = "valetInfoIcon"/>

                        </div>
                        <div className="valetInfoAccountDetails">
                            <p>Vishal Dubey</p>
                            <p>+91 2376456387</p> 
                        </div>


                    </div>
                    <div className="valetAccountDetails">
                        <div className="valetInfoAccountTitle">
                            <h4 className="valetInfoAccountTitleHeading">Valet Address</h4>
                            <Create className = "valetInfoIcon"/>

                        </div>
                        <div className="valetInfoAccountDetails">
                            <p>Lorem, ipsum dolor.</p>
                            <p>flat xyz,lorem ipsum.</p> 
                            <p>sample address</p> 
                            <p>Maharaashtra,414210</p> 
                            <p>India</p> 
                        </div>

                    </div>
                    <div className="valetAccountDetails">
                        <div className="valetInfoAccountTitle">
                            <h4 className="Deliverable Pincodes">Deliverable Pincodes</h4>
                            <Create className = "valetInfoIcon"/>

                        </div>
                        <div className="valetInfoAccountDetails">
                            <p>400800   &nbsp;  &nbsp;  400800</p>
                            <p>400800  &nbsp;  &nbsp;  400800</p> 
                            <p>400800  &nbsp;  &nbsp; 400800</p> 
                            <p>400800   &nbsp;  &nbsp; 400800</p> 
                            <p>400800   &nbsp;  &nbsp; 400800</p> 
                        </div>

                    </div>
                   
                </div>
                <div className="valetInfoRow valetInfoRow2">
                    <div className="valetAccountDetails">
                        <div className="valetInfoAccountTitle">
                            <h4 className="valetInfoAccountTitleHeading">Currently Assigned</h4>
                        </div>
                        <div className="valetInfoAccountDetails row2Content">
                            <span>5 deliveries</span>&nbsp;<OpenInNew  className = "valetInfoIcon"/>
                            
                        </div>


                    </div>
                    <div className="valetAccountDetails">
                        <div className="valetInfoAccountTitle">
                            <h4 className="valetInfoAccountTitleHeading">Past Deliveries</h4>
                        </div>
                        <div className="valetInfoAccountDetails row2Content">
                            <span>45 deliveries</span>&nbsp;<OpenInNew  className = "valetInfoIcon"/>
                            
                        </div>


                    </div>
                </div>
                <div className="valetInfoRow valetInfoRow3">
                    <button className ="btn fill-btn">Save Changes</button>
                    <button className ="btn outline-btn">Delete Valet</button>
                </div>


            </div>
           

        </div>
    )
}
