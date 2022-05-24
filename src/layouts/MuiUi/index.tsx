import React, { FC } from 'react'
import {useRecoilState} from 'recoil'
import Box from '@mui/material/Box'
import ScrollTop from './ScrollTop'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './Content'
import { useRouter } from 'next/router'
import { layoutState } from './recoil'

const MuiLayout: FC = (props) => {
    const router = useRouter()
    const drawerWidth = 240
    const backToTopId = 'back-to-top-anchor'
    const [{mobileOpen}, setLayoutState] = useRecoilState(layoutState)
    const handleDrawerToggle = () => {
        setLayoutState((state) => ({
            mobileOpen: !state.mobileOpen
        }))
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar handleToggle={handleDrawerToggle} />
            <SideBar
                pathname={router.pathname}
                width={drawerWidth}
                handleToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />
            <Content width={drawerWidth} backToTopId={backToTopId}>{props.children}</Content>
            <ScrollTop backToTopId={backToTopId} />
        </Box>
    )
}

export default MuiLayout
