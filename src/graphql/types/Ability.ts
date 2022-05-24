import { objectType, extendType, interfaceType } from 'nexus'

export const AbilityInterface = interfaceType({
    name: 'AbilityInterface',
    description: 'AbilityInterface',
    definition(t) {
        t.nonNull.id('id', {
            description: 'Ability id',
        })
        t.nonNull.string('name', {
            description: 'Ability name',
        })
        t.nonNull.string('description', {
            description: 'Ability description',
        })
    },
    resolveType() {
        return 'Ability'
    },
})

export const AbilityInfo = objectType({
    name: 'AbilityInfo',
    description: 'AbilityInfo',
    definition(t) {
        t.implements(AbilityInterface)
    },
})

export const Ability = objectType({
    name: 'Ability',
    description: 'Ability state',
    definition(t) {
        t.implements(AbilityInterface)
        t.nonNull.list.nonNull.field('digimons', {
            type: 'DigimonInfo',
            description: 'Ability of digimons',
            resolve(root, _, ctx) {
                const digimonMap =
                    ctx.digimonUseCase.multiGetDigimonByIdUseCase.execute(
                        root.digimonIds,
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
    },
})

export const Abilities = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('abilities', {
            type: 'Ability',
            description: 'All abilities state',
            async resolve(_, _args, ctx) {
                const abilityMap =
                    ctx.abilityUseCase.getAllAbilityUseCase.execute()
                return Array.from(abilityMap).map(([, ability]) => {
                    return {
                        id: ability.id,
                        name: ability.name,
                        description: ability.description,
                        digimonIds: ability.digimonIds,
                    }
                })
            },
        })
    },
})
