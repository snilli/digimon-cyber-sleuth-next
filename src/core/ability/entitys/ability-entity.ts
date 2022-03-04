import { BaseEntity, BaseEntityState } from '../../../utils/base-entity'

export interface Ability extends BaseEntityState {
    id: string // ID!
    name: string // String!
    description: string // String!
    digimonIds: string[] // [String!]!
}

export class AbilityEntity extends BaseEntity<Ability> {
    constructor(input: Ability) {
        super(input)
    }
}
