import { objectType, extendType } from 'nexus'
import ability from '../../json/ability-db.json'
import digimon from '../../json/digimon-db.json'

export const Ability = objectType({
    name: 'Ability',
    definition(t) {
        t.nonNull.id('id')
        t.nonNull.string('name')
        t.nonNull.string('description')
        t.list.field('digimons', {
            type: 'DigimonInfo',
            resolve(root) {
                const digimons = []
                for (const key of Object.keys(root.digimons)) {
                    const digi = digimon[key]
                    digimons.push({
                        id: digi.id,
                        no: digi.no.toString(),
                        name: digi.name,
                        img: digi.img,
                        icon: digi.icon,
                    })
                }
                console.log(digimons)
                
                return digimons
            }
        })
    },
})

export const Abilities = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('abilities', {
            type: 'Ability',
            async resolve(_, _args, ctx) {
                const q = []
                for (const [, w] of Object.entries(ability)) {
                    q.push({
                        id: w.id,
                        digimons: w.digimon,
                        name: w.name,
                        description: w.description,
                    })
                }
                return q
            },
        })
    },
})
