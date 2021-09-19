import React from 'react'
import { Search } from '@material-ui/icons'
import "./header.css"


export default function Header() {
    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="headerSearch">
                    <Search />
                    <input type="text" className="searchInput" />
                </div>
                <div className="headerImg">
                    <img src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="headerUserImg" />
                </div>
            </div>

        </div>
    )
}
