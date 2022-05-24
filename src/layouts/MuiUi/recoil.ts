import { atom } from 'recoil'

export interface LayoutState {
    mobileOpen: boolean
}

export const layoutState = atom<LayoutState>({
    key: 'layout',
    default: {
        mobileOpen: false
    },
})
