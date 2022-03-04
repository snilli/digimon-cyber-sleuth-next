import { AbilityUseCase } from '../core/ability/use-cases'
import { DigimonUseCase } from '../core/digimon/use-cases'
import { MoveUseCase } from '../core/move/use-cases'

import { container, singleton } from 'tsyringe'

@singleton()
export class Context {
    constructor(
        public digimonUseCase: DigimonUseCase,
        public moveUseCase: MoveUseCase,
        public abilityUseCase: AbilityUseCase
    ) {}
}

export function getContent() {
    return container.resolve(Context)
}