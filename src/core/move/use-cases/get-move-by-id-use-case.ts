import { singleton } from 'tsyringe'
import { Move } from '../entitys/move-entity'
import { MoveRepo } from '../repos/move-repo'


@singleton()
export class GetMoveByIdUseCase {
    constructor(private repo: MoveRepo) {}

    execute(id: string): Move {
        const move = this.repo.getById(id)
        if (!move) {
            throw new Error('Move not found')
        }

        return move.getState()
    }
}
