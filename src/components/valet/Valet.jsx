import { AddSharp } from '@material-ui/icons'
import React from 'react'
import ValetTable from '../valetTable/ValetTable'
import './valet.css'
import AddValet from '../valetTable/addValet/AddValet'


export default function Valet() {
     const [addValet,setAddValet] = React.useState(false);

  const showAddValet = ()=> {
      setAddValet(true);
  }

  const closeAddValet = ()=>{
      setAddValet(false);
  }

    return (
        <div className='valet'>
            {addValet ? <AddValet closeAddValet = {closeAddValet}/> : ''}
        
            <div className="valetWrapper">
                <div className="valetHeader">
                    <div className="valetHeaderLeft">
                        <h3>All Valets</h3>
                        <button onClick ={showAddValet}><AddSharp className='icon' /> Add New</button>

                    </div>
                    <div className="valetHeaderRight">
                        <div className="item1">
                            <p className="itemTitle">Sort By</p>
                            <p className="itemDetail">Reg number</p>
                        </div>
                        <div className="item2">
                            <p className="itemTitle">Filter By</p>
                            <p className="itemDetail">Assigned</p>
                        </div>

                    </div>

                </div>
                <ValetTable />

            </div>

        </div>
    )
}
