import { singleton } from "tsyringe";
import { Ability } from "../entitys/ability-entity";
import { AbilityRepo } from "../repos/ability-repo";

@singleton()
export class GetAllAbilityUseCase {
    constructor(private repo: AbilityRepo) {}

    execute(): Map<string, Ability> {
        const stateMap = new Map<string, Ability>()
        for (const [id, ability] of this.repo.getAllAbility().entries()) {
            stateMap.set(id, ability.getState())
        }

        return stateMap
    }
}
