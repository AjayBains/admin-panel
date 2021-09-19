import React from 'react'
import './valetTable.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ValetInfo from './ValetInfo';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50 ;
  const left = 50; 
//   const top = 50 + rand();
//   const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '90vw',
    height:"90vh",
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // overflow:'scroll'
  },
}));

export default function ValetTable() {
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
     
      <ValetInfo handleClose ={handleClose}/>
    </div>
  );

    return (
        <table className="valetTable" >
            <tr className="valetTableHead">
                <td className='valetTableHeading'>reg number</td>
                <td className='valetTableHeading'>details</td>
                <td className='valetTableHeading'>valet address</td>
                <td className='valetTableHeading'>deliverable pincodes</td>
                <td className='valetTableHeading'>currently assigned</td>
                <td className='valetTableHeading'></td>
            </tr>
            <tbody className='valetTableBody'>
                <tr className='valetTableRow'>
                    <td className='valetTableData'>13442</td>
                    <td className='valetTableData'>
                        <span className="valetName">ValetName</span><br />
                        <span className="valetTel">+91 2321456423</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="valetAddress">Adress</span><br />
                        <span className="viewMore">View More</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="pincode">400080</span><br />
                        <span className="viewAll">View All</span>

                    </td>
                    <td className='valetTableData'>
                        <span className="assigned">5 deliveries</span>
                    </td>
                    <td className="valetTableData">
                        <button className="valetTableButton" type="button" onClick={handleOpen}>
                            More Info
                        </button>
                    </td>
                </tr>
                <tr className='valetTableRow'>
                    <td className='valetTableData'>13442</td>
                    <td className='valetTableData'>
                        <span className="valetName">ValetName</span><br />
                        <span className="valetTel">+91 2321456423</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="valetAddress">Adress</span><br />
                        <span className="viewMore">View More</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="pincode">400080</span><br />
                        <span className="viewAll">View All</span>

                    </td>
                    <td className='valetTableData'>
                        <span className="assigned">5 deliveries</span>
                    </td>
                    <td className="valetTableData">
                        <button className="valetTableButton" type="button" onClick={handleOpen}>
                            More Info
                        </button>
                    </td>
                </tr>
                <tr className='valetTableRow'>
                    <td className='valetTableData'>13442</td>
                    <td className='valetTableData'>
                        <span className="valetName">ValetName</span><br />
                        <span className="valetTel">+91 2321456423</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="valetAddress">Adress</span><br />
                        <span className="viewMore">View More</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="pincode">400080</span><br />
                        <span className="viewAll">View All</span>

                    </td>
                    <td className='valetTableData'>
                        <span className="assigned">5 deliveries</span>
                    </td>
                    <td className="valetTableData">
                        <button className="valetTableButton">
                            More Info
                        </button>
                    </td>
                </tr>
                <tr className='valetTableRow'>
                    <td className='valetTableData'>13442</td>
                    <td className='valetTableData'>
                        <span className="valetName">ValetName</span><br />
                        <span className="valetTel">+91 2321456423</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="valetAddress">Adress</span><br />
                        <span className="viewMore">View More</span>
                    </td>
                    <td className='valetTableData'>
                        <span className="pincode">400080</span><br />
                        <span className="viewAll">View All</span>

                    </td>
                    <td className='valetTableData'>
                        <span className="assigned">5 deliveries</span>
                    </td>
                    <td className="valetTableData">
                        <button className="valetTableButton">
                            More Info
                        </button>
                    </td>
                </tr>

                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>

            </tbody>


        </table>
    )
}
