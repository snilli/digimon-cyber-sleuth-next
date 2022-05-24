import { enumType, interfaceType, objectType, extendType } from 'nexus'

export const MoveAttribute = enumType({
    name: 'MoveAttribute',
    members: [
        'Fire',
        'Water',
        'Plant',
        'Earth',
        'Wind',
        'Light',
        'Dark',
        'Neutral',
        'Electric',
    ],
    description: 'attribute of move in game',
})

export const MoveType = enumType({
    name: 'MoveType',
    members: ['Physical', 'Magic', 'Support', 'Fixed', 'Direct'],
    description: 'type of move in game',
})

export const MoveInterface = interfaceType({
    name: 'MoveInterface',
    description: 'MoveInterface',
    definition(t) {
        t.nonNull.id('id', {
            description: 'Move ID',
        })
        t.nonNull.string('name', {
            description: 'Move name',
        })
        t.nonNull.int('sp', {
            description: 'Move consume sp',
        })
        t.nonNull.field('type', { type: MoveType, description: 'Move type' })
        t.nonNull.int('power', { description: 'Move power' })
        t.nonNull.field('attribute', {
            type: MoveAttribute,
            description: 'Move atrribute',
        })
        t.nonNull.boolean('inheritable', {
            description: 'Move can inheritable',
        })
        t.nonNull.string('description', {
            description: 'Move description',
        })
    },
    resolveType() {
        return 'Move'
    },
})

export const MoveDigimon = objectType({
    name: 'MoveDigimon',
    description: 'MoveDigimon',
    definition(t) {
        t.nullable.int('lvl', {
            description: 'Get move when level',
        })
        t.implements(MoveInterface)
    },
})

export const Move = objectType({
    name: 'Move',
    description: 'Move state',
    definition(t) {
        t.implements(MoveInterface)
        t.nonNull.list.nonNull.field('digimons', {
            type: 'DigimonInfo',
            description: 'Move state',
            resolve(root, _, ctx) {
                const digimonMap =
                    ctx.digimonUseCase.multiGetDigimonByIdUseCase.execute(
                        root.digimonIds,
                    )

                return Array.from(digimonMap).map(([, digimon]) => {
                    return {
                        id: digimon.id,
                        name: digimon.name,
                        no: digimon.no,
                        icon: digimon.icon,
                        img: digimon.img,
                    }
                })
            },
        })
    },
})

export const Moves = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('moves', {
            type: 'Move',
            description: 'All move state',
            async resolve(_root, _args, ctx) {
                const moveMap = ctx.moveUseCase.getAllMoveUseCase.execute()
                return Array.from(moveMap).map(([, move]) => {
                    return {
                        attribute: move.attribute,
                        description: move.description,
                        id: move.id,
                        inheritable: move.inheritable,
                        name: move.name,
                        power: move.power,
                        sp: move.sp,
                        type: move.type,
                        digimonIds: move.digimonIds,
                    }
                })
            },
        })
    },
})
