import { enumType, objectType } from 'nexus'
import { extendType } from 'nexus'
import a from '../../json/move-db.json'

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

export const Move = objectType({
    name: 'Move',
    definition(t) {
        t.nonNull.id('id')
        t.nonNull.string('name')
        t.nonNull.int('sp')
        t.nonNull.field('type', { type: MoveType })
        t.nonNull.int('power')
        t.nonNull.field('attribute', { type: MoveAttribute })
        t.nonNull.boolean('inheritable')
        t.nonNull.string('description')
    },
})

export const Moves = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('moves', {
            type: 'Move',
            async resolve(_, _args, ctx) {
                const q = []
                for (const [, w] of Object.entries(a)) {
                    q.push({
                        attribute: w.attribute,
                        description: w.description,
                        id: w.id,
                        inheritable: w.inheritable,
                        name: w.name,
                        power: w.power,
                        sp: w.sp,
                        type: w.type,
                    })
                }
                if (!q.length) {
                    throw new Error('sadsfdsf')
                }
                return q
            },
        })
    },
})
