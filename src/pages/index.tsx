// import { useState } from 'react'
// import clsx from 'clsx'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { useTheme } from '@mui/material/styles'
// import useScrollPosition from '@react-hook/window-scroll'
// import { gql, useQuery } from '@apollo/client'
// import { addApolloState, initializeApollo } from '../graphql/client'

// // import dynamic from 'next/dynamic'

// // const Layout = dynamic(import('../components/Layout'));
// // const Pricing = dynamic(import('../components/Pricing'));

// export const ALL_ABILITY_QUERY = gql`
//     query allData {
//         digimons {
//             id
//             no
//             name
//             im /g
//             icon
//             digimonType
//             stage
//         }
//     }
// `

// export default function LandPage(): JSX.Element {
//     // const { loading, error, data, fetchMore, networkStatus } = useQuery(
//     //     ALL_ABILITY_QUERY,
//     //     {
//     //         variables: {},
//     //         // Setting this value to true will make the component rerender when
//     //         // the "networkStatus" changes, so we are able to know if it is fetching
//     //         // more data
//     //         notifyOnNetworkStatusChange: true,
//     //     }
//     // )

//     return (

//     )
// }

// // export async function getServerSideProps() {
// //     const apolloClient = initializeApollo()

// //     const data = await apolloClient.query({
// //         query: ALL_ABILITY_QUERY,
// //         variables: {},
// //     })

// //     return addApolloState(apolloClient, {
// //         props: {data},
// //     })
// // }

export default function Index() {
    return (
        <>
            {/* <div className="drawer h-screen w-full">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label
                                htmlFor="my-drawer-3"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <li>
                                    <a>Navbar Item 1</a>
                                </li>
                                <li>
                                    <a>Navbar Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    Content
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="h-screen drawer drawer-mobile w-full">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
