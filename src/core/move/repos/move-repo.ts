import { JsonRepo } from '../../../utils/json-repo'
import {MoveEntity } from '../entitys/move-entity'
import move from '../../../json/move-db.json'
import { singleton } from 'tsyringe'

@singleton()
export class MoveRepo extends JsonRepo<MoveEntity> {
    constructor() {
        super({
            tableName: 'move-json-repo',
            createFactory: (map, payload) => {
                const move = new MoveEntity({
                    id: payload.id,
                    name: payload.name,
                    attribute: payload.attribute,
                    description: payload.description,
                    inheritable: payload.inheritable,
                    power: payload.power,
                    sp: payload.sp,
                    type: payload.type,
                    digimonIds: Object.keys(payload.digimon)
                })
                map.set(move.getId(), move)
            },
            rawJson: move,
        })
    }

    getAllMove(): Map<string, MoveEntity> {
        return this.dataMapping
    }
}
