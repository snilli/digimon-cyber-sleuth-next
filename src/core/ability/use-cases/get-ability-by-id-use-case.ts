import { injectable } from 'tsyringe'
import { AbilityState } from '../entitys/ability-entity'
import { AbilityRepo } from '../repos/ability-repo'


@injectable()
export class GetAbilityByIdUseCase {
    constructor(private repo: AbilityRepo) {}

    execute(id: string): AbilityState {
        const ability = this.repo.getById(id)
        if (!ability) {
            throw new Error('Ability not found')
        }

        return ability.getState()
    }
}
