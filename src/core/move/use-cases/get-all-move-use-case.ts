import { singleton } from "tsyringe";
import { Move } from "../entitys/move-entity";
import { MoveRepo } from "../repos/move-repo";

@singleton()
export class GetAllMoveUseCase {
    constructor(private repo: MoveRepo) {}

    execute(): Map<string, Move> {
        const stateMap = new Map<string, Move>()
        for (const [id, move] of this.repo.getAllMove().entries()) {
            stateMap.set(id, move.getState())
        }
        return stateMap
    }
}
