import { singleton } from 'tsyringe'
import { Move } from '../entitys/move-entity'
import { MoveRepo } from '../repos/move-repo'

@singleton()
export class MultiGetMoveByIdUseCase {
    constructor(private repo: MoveRepo) {}

    execute(ids: string[]): Map<string, Move> {
        const stateMap = new Map<string, Move>()
        for (const [id, move] of this.repo.multiGetById(ids)) {
            stateMap.set(id, move.getState())
        }
        if (!stateMap.size) {
            throw new Error('Ability not found')
        }

        return stateMap
    }
}
