import { singleton } from 'tsyringe'
import { Ability } from '../entitys/ability-entity'
import { AbilityRepo } from '../repos/ability-repo'

@singleton()
export class MultiGetAbilityByIdUseCase {
    constructor(private repo: AbilityRepo) {}

    execute(ids: string[]): Map<string, Ability> {
        const stateMap = new Map<string, Ability>()
        for (const [id, ability] of this.repo.multiGetById(ids)) {
            stateMap.set(id, ability.getState())
        }
        if (!stateMap.size) {
            throw new Error('Ability not found')
        }

        return stateMap
    }
}
