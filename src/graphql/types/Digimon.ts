import { enumType, objectType, extendType, interfaceType } from 'nexus'
import { DigimonInfo as IDigimonInfo } from '../../core/digimon/entitys/digimon-entity'

const DigimonType = enumType({
    name: 'DigimonType',
    members: ['Free', 'Vaccine', 'Virus', 'Data'],
    description: 'type of digimon in game',
})
const DigimonStage = enumType({
    name: 'DigimonStage',
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
        { name: 'Dark', value: 'Dark', description: 'digimon Dark' },
        { name: 'Neutral', value: 'Neutral', description: 'digimon Neutral' },
        { name: 'Neutral', value: 'Neutral', description: 'digimon Neutral' },
        { name: 'Fire', value: 'Fire', description: 'digimon Fire' },
        { name: 'Plant', value: 'Plant', description: 'digimon Plant' },
        { name: 'Earth', value: 'Earth', description: 'digimon Earth' },
        { name: 'Light', value: 'Light', description: 'digimon Light' },
        { name: 'Water', value: 'Water', description: 'digimon Water' },
        { name: 'Wind', value: 'Wind', description: 'digimon Wind' },
        { name: 'Electric', value: 'Electric', description: 'digimon Electric' },
    ],
    description: 'attribute of digimon in game',
})

export const DigimonStatInterface = interfaceType({
    name: 'DigimonStatInterface',
    description: 'DigimonStatInterface',
    definition(t) {
        t.nonNull.int('lvl', { description: 'Digimon stat at lvl' })
        t.nonNull.int('hp', { description: 'Digimon at lvl has hp' })
        t.nonNull.int('sp', { description: 'Digimon at lvl has sp' })
        t.nonNull.int('atk', { description: 'Digimon at lvl has atk' })
        t.nonNull.int('def', { description: 'Digimon at lvl has def' })
        t.nonNull.int('int', { description: 'Digimon at lvl has int' })
        t.nonNull.int('spd', { description: 'Digimon at lvl has spd' })
    },
    resolveType() {
        return 'DigimonStat'
    },
})

export const DigimonStat = objectType({
    name: 'DigimonStat',
    description: 'Digimon stat detail',
    definition(t) {
        t.implements('DigimonStatInterface')
    },
})

export const DigimonInfoInterface = interfaceType({
    name: 'DigimonInfoInterface',
    description: 'DigimonInfoInterface',
    definition(t) {
        t.nonNull.id('id', {description: 'Digimon id'})
        t.nonNull.int('no', {
            resolve(root) {
                const parent = root as IDigimonInfo
                return parent.no
            },
            description:'Digimon no'
        })
        t.nonNull.string('name', {
            resolve(root) {
                const parent = root as IDigimonInfo
                return parent.name
            },
            description: 'Digimon name'
        })
        t.nonNull.string('img', {
            resolve(root) {
                const parent = root as IDigimonInfo
                return parent.img
            },
            description: 'Digimon image'
        })
        t.nonNull.string('icon', {
            resolve(root) {
                const parent = root as IDigimonInfo
                return parent.icon
            },
            description: 'Digimon icon'
        })
    },

    resolveType() {
        return 'DigimonInfo'
    },
})

export const DigimonInfo = objectType({
    name: 'DigimonInfo',
    description: 'DigimonInfo',
    definition(t) {
        t.implements('DigimonInfoInterface')
    },
})

export const DigimonEvoFrom = objectType({
    name: 'DigimonEvoFrom',
    description: 'DigimonEvoFrom',
    definition(t) {
        t.implements('DigimonInfoInterface')
    },
})

export const DigimonEvoIntoRequireJogress = objectType({
    name: 'DigimonEvoIntoRequireJogress',
    description: 'DigimonEvoIntoRequireJogress',
    definition(t) {
        t.implements('DigimonInfoInterface')
    },
})

export const DigimonEvoIntoRequire = objectType({
    name: 'DigimonEvoIntoRequire',
    description: 'DigimonEvoIntoRequire',
    definition(t) {
        t.int('atk', {description: 'akt for Digimon of evo into to strong digimon require'})
        t.int('abi', {description: 'abi for Digimon of evo into to strong digimon require'})
        t.int('hp', {description: 'hp for Digimon of evo into to strong digimon require'})
        t.int('def', {description: 'def for Digimon of evo into to strong digimon require'})
        t.int('int', {description: 'int for Digimon of evo into to strong digimon require'})
        t.int('spd', {description: 'spd for Digimon of evo into to strong digimon require'})
        t.int('cam', {description: 'cam for Digimon of evo into to strong digimon require'})
        t.string('item', {description: 'itm neet to unloack for Digimon of evo into to strong digimon require'})
        t.int('sp', {description: 'sp for Digimon of evo into to strong digimon require'})
        t.boolean('hackerCleared', {description: 'need to cleared hacker memory frist for unlock requirement'})
        t.boolean('dlc', {description: 'need to has dlc frist for unlock requirement'})
        t.boolean('changeMode', {description: 'it can change mode to evo'})
        t.field('jogress',{
            type: 'DigimonEvoIntoRequireJogress',
            description: 'jogress with another digimon for unlock',
            resolve(root, _, ctx) {
                if (!root.jogress) {
                    return null
                }
                const digimon =
                    ctx.digimonUseCase.getDigimonByIdUseCase.execute(
                        root.jogress.id
                    )
                return {
                    id: digimon.id,
                    name: digimon.name,
                    no: digimon.no,
                    img: digimon.img,
                    icon: digimon.icon,
                }
            },
        })
    },
})

export const DigimonEvoInto = objectType({
    name: 'DigimonEvoInto',
    definition(t) {
        t.implements('DigimonInfoInterface')
        t.nonNull.int('lvl')
        t.nonNull.string('description')
        t.field('require', {
            type: 'DigimonEvoIntoRequire',
            resolve(root) {
                if (!root.require) {
                    return null
                }
                const require = root.require

                return {
                    hp: require.hp,
                    sp: require.sp,
                    atk: require.atk,
                    def: require.def,
                    int: require.int,
                    spd: require.spd,
                    abi: require.abi,
                    cam: require.cam,
                    item: require.item,
                    hackerCleared: require.hackerCleared,
                    dlc: require.dlc,
                    changeMode: require.changeMode,
                    jogress: require.jogress,
                }
            },
        })
    },
})

export const Digimon = objectType({
    name: 'Digimon',
    definition(t) {
        t.implements('DigimonInfoInterface')
        t.nonNull.field('ability', {
            type: 'AbilityInfo',
            resolve(root, _, ctx) {
                const ability =
                    ctx.abilityUseCase.getAbilityByIdUseCase.execute(
                        root.abilityId
                    )
                return {
                    id: ability.id,
                    name: ability.name,
                    description: ability.description,
                }
            },
        })
        t.nonNull.field('digimonType', { type: DigimonType })
        t.nonNull.field('stage', { type: DigimonStage })
        t.nonNull.int('memory')
        t.nonNull.field('attribute', { type: DigimonAttribute })
        t.nonNull.int('equipSlot')
        t.list.nullable.field('evoFrom', {
            type: 'DigimonEvoFrom',
            resolve(root, _, ctx) {
                if (!root.evoFrom) {
                    return null
                }
                const digimonMap =
                    ctx.digimonUseCase.multiGetDigimonByIdUseCase.execute(
                        root.evoFrom.map((evoFrom) => evoFrom.id)
                    )
                return Array.from(digimonMap).map(([_, digimon]) => {
                    return {
                        id: digimon.id,
                        name: digimon.name,
                        no: digimon.no,
                        img: digimon.img,
                        icon: digimon.icon,
                    }
                })
            },
        })
        t.list.nullable.field('evoInto', {
            type: 'DigimonEvoInto',
            resolve(root, _, ctx) {
                if (!root.evoInto) {
                    return null
                }
                const evoInto = root.evoInto
                const digimonMap =
                    ctx.digimonUseCase.multiGetDigimonByIdUseCase.execute(
                        evoInto.map((evoInto) => evoInto.id)
                    )
                return Array.from(digimonMap).map(([_, digimon], idx) => {
                    const evo = evoInto[idx]
                    return {
                        id: digimon.id,
                        name: digimon.name,
                        no: digimon.no,
                        img: digimon.img,
                        icon: digimon.icon,
                        description: evo.description,
                        lvl: evo.lvl,
                        require: evo.require,
                    }
                })
            },
        })
        t.nonNull.list.nonNull.field('moves', {
            type: 'MoveDigimon',
            resolve(root, _, ctx) {
                const moveMap = ctx.moveUseCase.multiGetMoveByIdUseCase.execute(
                    root.moves.map((move) => move.id)
                )
                return Array.from(moveMap).map(([_, move], idx) => {
                    return {
                        lvl: root.moves[idx].lvl,
                        id: move.id,
                        name: move.name,
                        sp: move.sp,
                        type: move.type,
                        power: move.power,
                        attribute: move.attribute,
                        inheritable: move.inheritable,
                        description: move.description,
                    }
                })
            },
        })
        t.nonNull.list.nonNull.field('stats', { type: 'DigimonStat' })
    },
})

export const Digimons = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('digimons', {
            type: 'Digimon',
            description: 'Digimon query',
            resolve(_root, _angs, ctx) {
                const digimonMap =
                    ctx.digimonUseCase.getAllDigimonUseCase.execute()

                return Array.from(digimonMap).map(([, digimon]) => {
                    return {
                        id: digimon.id,
                        no: digimon.no,
                        abilityId: digimon.abilityId,
                        name: digimon.name,
                        img: digimon.img,
                        icon: digimon.icon,
                        digimonType: digimon.digimonType,
                        stage: digimon.stage,
                        memory: digimon.memory,
                        attribute: digimon.attribute,
                        equipSlot: digimon.equipSlot,
                        moves: digimon.moves,
                        stats: digimon.stats,
                        evoFrom: digimon.evoFrom,
                        evoInto: digimon.evoInto,
                    }
                })
            },
        })
    },
})
