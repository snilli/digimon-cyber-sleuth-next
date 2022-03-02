import { BaseEntity, BaseEntityState } from '../../../utils/base-entity'

export interface AbilityState extends BaseEntityState {
    id: string
    name: string
    description: string
    digimonIds: string[]
}

export class AbilityEntity extends BaseEntity<AbilityState> {
    constructor(input: AbilityState) {
        super(input)
    }
}
