import { Inbox, Mail } from '@mui/icons-material'
import {
    Box,
    Divider,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from '@mui/material'
import { FC } from 'react'

export interface SideDrawerProps {
    menuDetails: MenuDetail[]
    pathname: string
}
const SideDrawer: FC<SideDrawerProps> = (props) => (
    <>
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
                {props.menuDetails.map((menuDetail, idx) => (
                    <ListItemButton
                        key={`${idx}-${menuDetail.name}`}
                        component="a"
                        href={menuDetail.urlPath}
                        selected={props.pathname === menuDetail.urlPath}
                    >
                        <ListItemIcon>{menuDetail.icon}</ListItemIcon>
                        <ListItemText primary={menuDetail.name} />
                    </ListItemButton>
                ))}
            </ListItem>
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        {index % 2 === 0 ? <Inbox /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </>
)

export interface SideBarProps {
    mobileOpen: boolean
    width: number
    handleToggle: () => void
    pathname: string
}

export interface MenuDetail {
    icon: JSX.Element
    urlPath: string
    name: string
}

const menu: MenuDetail[] = [
    {
        icon: <Inbox />,
        urlPath: '/digimon',
        name: 'Digimon',
    },
]

const SideBar: FC<SideBarProps> = (props) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: props.width }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={props.mobileOpen}
                onClose={props.handleToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: props.width,
                    },
                }}
            >
                <SideDrawer menuDetails={menu} pathname={props.pathname} />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: props.width,
                    },
                }}
                open
            >
                <SideDrawer menuDetails={menu} pathname={props.pathname} />
            </Drawer>
        </Box>
    )
}
export default SideBar
