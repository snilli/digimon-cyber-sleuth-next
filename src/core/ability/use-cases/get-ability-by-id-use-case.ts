import { singleton } from 'tsyringe'
import { Ability } from '../entitys/ability-entity'
import { AbilityRepo } from '../repos/ability-repo'


@singleton()
export class GetAbilityByIdUseCase {
    constructor(private repo: AbilityRepo) {}

    execute(id: string): Ability {
        const ability = this.repo.getById(id)
        if (!ability) {
            throw new Error('Ability not found')
        }

        return ability.getState()
    }
}
