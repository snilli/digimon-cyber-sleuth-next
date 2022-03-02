import { injectable } from 'tsyringe'
import { AbilityState } from '../entitys/ability-entity'
import { AbilityRepo } from '../repos/ability-repo'


@injectable()
export class GetAbilityByIdUseCase {
    constructor(private repo: AbilityRepo) {}

    execute(ids: string[]): AbilityState[] {
        const abilities = this.repo.multiGetById(ids)
        if (!abilities.length) {
            throw new Error('Ability not found')
        }

        return abilities.map((ability) => ability.getState())
    }
}
