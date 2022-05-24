import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material'
import React, { FC, MouseEvent, useCallback } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material'

export interface ScrollTopProps {
    backToTopId: string
}

const ScrollTop: FC<ScrollTopProps> = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector(`#${props.backToTopId}`)
        if (!anchor) {
            return
        }

        anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }, [props.backToTopId])

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom>
    )
}

export default ScrollTop
