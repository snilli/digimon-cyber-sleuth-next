import { NexusGenEnums } from '../../../nexus-typegen'
import { BaseEntity, BaseEntityState } from '../../../utils/base-entity'

export interface Move extends BaseEntityState {
    id: string // ID!
    name: string // String!
    attribute: NexusGenEnums['MoveAttribute'] // MoveAttribute!
    description: string // String!
    inheritable: boolean // Boolean!
    power: number // Int!
    sp: number // Int!
    type: NexusGenEnums['MoveType'] // MoveType!
    digimonIds: string[]
}

export class MoveEntity extends BaseEntity<Move> {
    constructor(input: Move) {
        super(input)
    }
}
