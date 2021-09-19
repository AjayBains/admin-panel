import { AccountBalanceOutlined, AccountBalanceWalletOutlined, LocalGroceryStoreSharp, PermIdentity, Pinterest, SettingsPower } from '@material-ui/icons'
import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarHeader">
                <Pinterest className='headerLogo' />
            </div>
            <div className="logoBox">
                <AccountBalanceOutlined className='logo' />
            </div>
            <div className="logoBox">
                <AccountBalanceWalletOutlined className='logo' />
            </div>
            <div className="logoBox active">
                <PermIdentity className='logo' />
            </div>
            <div className="logoBox">
                <LocalGroceryStoreSharp className='logo' />
            </div>



            <div className="sidebarFooter">
                <SettingsPower className='footerLogo' />
            </div>


        </div>
    )
}
