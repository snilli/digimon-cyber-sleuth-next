import { BaseEntity } from '../../../utils/base-entity'

export interface DigimonAbility {
    id: string
    name: string
    description: string
}

export interface DigimonState {
    hp: number
    sp: number
    atk: number
    def: number
    int: number
    spd: number
}

export interface DigimonMove {
    level: number
    id: string
    name: string
    sp: number
    type: string
    power: number
    attribute: string
    inheritable: boolean
    description: string
}

export interface DigimonEvoTo {
    id: string
    name: string
    icon: string
    level: number
    hp?: number
    sp?: number
    atk?: number
    def?: number
    int?: number
    spd?: number
    cam?: number
}

export interface DigimonEvoFrom {
    id: string
    name: string
    icon: string
}

export interface DigimonEntityState {
    id: string
    no: number
    name: string
    icon: string
    stage: string
    type: string
    attribute: string
    memory: number
    equipSlot: number
    hp: number
    sp: number
    atk: number
    def: number
    int: number
    spd: number
    ability: Map<string, DigimonAbility>
    img: string
    evoFrom: {}
    evoTo: Map<string, DigimonEvoTo>
    move: Map<string, DigimonMove>
    stat: Map<string, DigimonState>
}

export class DigimonEntity extends BaseEntity {
    readonly state: DigimonEntityState
    constructor(input: DigimonEntityState) {
        super()
        this.state = input
    }
}
