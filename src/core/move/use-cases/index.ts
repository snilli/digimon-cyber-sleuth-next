import { singleton } from 'tsyringe'
import { GetAllMoveUseCase } from './get-all-move-use-case'
import { GetMoveByIdUseCase } from './get-move-by-id-use-case'
import { MultiGetMoveByIdUseCase } from './multi-get-move-by-id-use-case'

@singleton()
export class MoveUseCase {
    constructor(
        public getAllMoveUseCase: GetAllMoveUseCase,
        public getMoveByIdUseCase: GetMoveByIdUseCase,
        public multiGetMoveByIdUseCase: MultiGetMoveByIdUseCase
    ) {}
}
