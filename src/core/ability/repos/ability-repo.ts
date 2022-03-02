import { JsonRepo } from '../../../utils/json-repo'
import { AbilityEntity } from '../entitys/ability-entity'
import ability from '../../../json/ability-db.json'

export class AbilityRepo extends JsonRepo<AbilityEntity> {
    constructor() {
        super({
            tableName: 'ability-jsop-repo',
            createFactory: (map, payload) => {
                const ability = new AbilityEntity({
                    id: payload.id,
                    name: payload.name,
                    description: payload.description,
                    digimonIds: Object.keys(payload.digimon)
                })
                map.set(ability.getId(), ability)
            },
            rawJson: ability,
        })
    }

    getAllAbility(): Map<string, AbilityEntity> {
        return this.dataMapping
    }
}
