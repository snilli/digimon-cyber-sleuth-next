import { FC } from 'react'
import { Box, Toolbar, Paper } from '@mui/material'

export interface ContentProps {
    width: number
    backToTopId: string
}

const Content: FC<ContentProps> = (props) => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${props.width}px)` },
                bgcolor: '#e7ebf0',
            }}
        >
            <Toolbar id={props.backToTopId} />
            <Paper
                elevation={8}
                sx={{
                    p: 3,
                    width: 1 / 1,
                    minHeight: 'calc(100vh - 110px)',
                }}
            >
                {props.children}
            </Paper>
        </Box>
    )
}
export default Content
