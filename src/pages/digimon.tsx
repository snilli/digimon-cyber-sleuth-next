import { gql, useQuery } from '@apollo/client'
import { FC } from 'react'
import { DataGrid, GridRowsProp } from '@mui/x-data-grid'

export const ALL_DIGIMONS_QUERY = gql`
    query allDigimons {
        digimons {
            id
            no
            name
            icon
            img
            ability {
                id
                name
            }
            digimonType
            stage
            memory
            attribute
            equipSlot
            balanceStat {
                hp
                sp
                atk
                int
                def
                spd
            }
        }
    }
`

const Digimon: FC = () => {
    // const { loading, error, data, networkStatus } = useQuery(
    // const { loading, error, data } = useQuery(
    //     ALL_DIGIMONS_QUERY,
    //     { notifyOnNetworkStatusChange: true },
    // )
    // console.table(data)
    // if (error) {
    //     return <h1>err0r</h1>
    // }
    // if (loading) {
    //     return <h1>l0ading</h1>
    // }

    const rows: GridRowsProp = []

    return (
        // <table>
        //     <thead></thead>
        //     <tbody>
        //         {data?.digimons.map((digimon: any, idx: string) => (
        //             <tr key={idx}>
        //                 <td>{digimon['no']}</td>
        //                 <td>{digimon.name}</td>
        //                 <td>{digimon.stage}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                columns={[{ field: 'username' }, { field: 'age' }]}
                rows={[
                    {
                        id: 1,
                        username: '@MUI',
                        age: 20,
                    },
                ]}
            />
        </div>
    )
}

export default Digimon
