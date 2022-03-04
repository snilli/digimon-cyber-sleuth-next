import { NexusGenEnums } from '../../../nexus-typegen'
import { BaseEntity, BaseEntityState } from '../../../utils/base-entity'

export interface DigimonStat {
    lvl: number
    hp: number
    sp: number
    atk: number
    def: number
    int: number
    spd: number
}

export interface DigimonInfo {
    icon: string // String!
    id: string // ID!
    img: string // String!
    name: string // String!
    no: number // String!
}

export interface DigimonEvoFrom {
    id: string
}

export interface DigimonMove {
    id: string
    lvl: number
}

export interface DigimonEvoIntoRequire {
    atk?: number
    abi?: number
    hp?: number
    def?: number
    int?: number
    spd?: number
    cam?: number
    item?: string
    sp?: number
    hackerCleared?: boolean
    dlc?: boolean,
    jogress?: {
        id: string   
    }
    changeMode?: boolean
}
export interface DigimonEvoInto {
    id: string
    lvl: number
    description: string
    require?: DigimonEvoIntoRequire
}

export interface Digimon extends DigimonInfo, BaseEntityState {
    stage: NexusGenEnums['DigimonStage'] // DigimonState!
    digimonType: NexusGenEnums['DigimonType'] // DigimonType!
    attribute: NexusGenEnums['DigimonAttribute'] // DigimonAttribute!
    memory: number // Int!
    equipSlot: number // Int!
    abilityId: string
    evoFrom?: DigimonEvoFrom[]
    evoInto?: DigimonEvoInto[]
    moves: DigimonMove[]
    stats: DigimonStat[]
}

export class DigimonEntity extends BaseEntity<Digimon> {
    constructor(input: Digimon) {
        super(input)
    }
}
