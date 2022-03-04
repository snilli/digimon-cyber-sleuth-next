import { JsonRepo } from '../../../utils/json-repo'
import { DigimonEntity, DigimonEvoIntoRequire } from '../entitys/digimon-entity'
import digimon from '../../../json/digimon-db.json'
import { singleton } from 'tsyringe'

const requireKeys = [
    'atk',
    'abi',
    'hp',
    'def',
    'int',
    'spd',
    'cam',
    'item',
    'sp',
    'hackerCleared',
    'dlc',
    'changeMode',
    'jogress',
]
@singleton()
export class DigimonRepo extends JsonRepo<DigimonEntity> {
    constructor() {
        super({
            tableName: 'digimon-json-repo',
            createFactory: (map, payload) => {
                const digimon = new DigimonEntity({
                    id: payload.id,
                    no: payload.no,
                    name: payload.name,
                    img: payload.img,
                    icon: payload.icon,
                    digimonType: payload.type,
                    stage: payload.stage,
                    attribute: payload.attribute,
                    equipSlot: payload.equipSlot,
                    abilityId: payload.ability.id,
                    evoInto: !payload.evoInto
                        ? undefined
                        : Object.values(payload.evoInto as any[]).map(
                              (evoInto) => {
                                  const require: DigimonEvoIntoRequire = {
                                    atk: !evoInto.atk ? undefined : evoInto.atk,
                                    abi: !evoInto.abi ? undefined : evoInto.abi,
                                    hp: !evoInto.hp ? undefined : evoInto.hp,
                                    def: !evoInto.def ? undefined : evoInto.def,
                                    int: !evoInto.int ? undefined : evoInto.int,
                                    spd: !evoInto.spd ? undefined : evoInto.spd,
                                    cam: !evoInto.cam ? undefined : evoInto.cam,
                                    item: !evoInto.item ? undefined : evoInto.item,
                                    sp: !evoInto.sp ? undefined : evoInto.sp,
                                    hackerCleared: !evoInto.hackerCleared ? undefined : evoInto.hackerCleared,
                                    dlc: !evoInto.dlc ? undefined : evoInto.dlc,
                                    changeMode: !evoInto.changeMode ? undefined : evoInto.changeMode,
                                    jogress: !evoInto.jogress ? undefined : {
                                        id: Object.keys(evoInto.jogress)[0]
                                    },
                                  }
                          
                                  return {
                                      id: evoInto.id,
                                      lvl: evoInto.lvl,
                                      description: evoInto.description,
                                      require: Object.values(require).filter((req) => req).length ? require : undefined,
                                  }
                              }
                          ),
                    memory: payload.memory,
                    moves: Object.values(payload.move as any[]).map((move) => ({
                        id: move.id,
                        lvl: move.lvl,
                    })),
                    stats: Object.entries(payload.stat as any[]).map(([lvl, stat]) => ({
                        lvl: parseInt(lvl),
                        hp: stat.hp,
                        sp: stat.sp,
                        atk: stat.atk,
                        def: stat.def,
                        int: stat.int,
                        spd: stat.spd,
                    })),
                    evoFrom: !payload.evoFrom
                        ? undefined
                        : Object.values(payload.evoFrom as any[]).map(
                              (evoFrom) => ({ id: evoFrom.id })
                          ),
                })

                map.set(digimon.getId(), digimon)
            },
            rawJson: digimon,
        })
    }

    getAllDigimon(): Map<string, DigimonEntity> {
        return this.dataMapping
    }
}
