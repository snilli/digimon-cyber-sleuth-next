import { injectable } from "tsyringe";
import { AbilityState } from "../entitys/ability-entity";
import { AbilityRepo } from "../repos/ability-repo";

@injectable()
export class GetAllAbilityUseCase {
    constructor(private repo: AbilityRepo) {}

    execute(): Map<string, AbilityState> {
        const stateMap = new Map<string, AbilityState>()
        for (const [id, ability] of this.repo.getAllAbility().entries()) {
            stateMap.set(id, ability.getState())
        }
        return stateMap
    }
}
