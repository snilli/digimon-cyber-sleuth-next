import {
    enumType,
    objectType,
    queryType,
    interfaceType,
    FieldResolver
} from 'nexus'
import digimon from '../../json/digimon-db.json'
import { NexusGenEnums } from '../../nexus-typegen/index'
import ability from '../../json/ability-db.json'

const DigimonType = enumType({
    name: 'DigimonType',
    members: ['Free', 'Vaccine', 'Virus', 'Data'],
    description: 'type of digimon in game',
})
const DigimonState = enumType({
    name: 'DigimonState',
    members: [
        { name: 'Baby', value: 'Baby', description: 'state Baby' },
        {
            name: 'In_Training',
            value: 'In-Training',
            description: 'state In-Training',
        },
        { name: 'Rookie', value: 'Rookie', description: 'state Rookie' },
        { name: 'Champion', value: 'Champion', description: 'state Champion' },
        { name: 'Ultimate', value: 'Ultimate', description: 'state Ultimate' },
        { name: 'Mega', value: 'Mega', description: 'state Mega' },
        { name: 'Ultra', value: 'Ultra', description: 'state Ultra' },
        { name: 'Armor', value: 'Armor', description: 'state Armor' },
        { name: 'None', value: 'None', description: 'state None' },
    ],
    description: 'state of digimon in game',
})
const DigimonAttribute = enumType({
    name: 'DigimonAttribute',
    members: [
        'Neutral',
        'Dark',
        'Fire',
        'Plant',
        'Earth',
        'Light',
        'Water',
        'Wind',
        'Electric',
    ],
    description: 'attribute of digimon in game',
})

export const DigimonInfo = interfaceType({
    name: 'DigimonInfo',
    definition(t) {
        t.nonNull.id('id')
        t.nonNull.string('no')
        t.nonNull.string('name')
        t.nonNull.string('img')
        t.nonNull.string('icon')
    },
    resolveType() {
       return 'Digimon'
    },
})

export const Digimon = objectType({
    name: 'Digimon',
    definition(t) {
        t.implements('DigimonInfo')
        t.nonNull.field('digimonType', { type: DigimonType })
        t.nonNull.field('state', { type: DigimonState })
        t.nonNull.int('memory')
        t.nonNull.field('attribute', { type: DigimonAttribute })
        t.nonNull.int('equipSlot')
        t.nonNull.field('ability', {type: 'Ability' ,resolve(root) {
            const abi = ability[root.ability.id]
            return {
                id: abi.id,
                name: abi.name,
                description: abi.description
            }
        }})
    },
})

export const Digimons = queryType({
    definition(t) {
        t.nonNull.list.field('digimons', {
            type: 'Digimon',
            resolve(_, __, ctx, info) {
                return Object.entries(digimon).map(([k, v]) => ({
                    id: v.id,
                    no: v.no.toString(),
                    ability: v.ability,
                    name: v.name,
                    img: v.img,
                    icon: v.icon,
                    digimonType: v.type as NexusGenEnums['DigimonType'],
                    state: v.state as NexusGenEnums['DigimonState'],
                    memory: v.memory,
                    attribute: v.attribute as NexusGenEnums['DigimonAttribute'],
                    equipSlot: v.equipSlot,
                }))
            },
        })
    },
})
