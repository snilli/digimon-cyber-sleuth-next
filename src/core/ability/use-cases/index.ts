import { GetAllAbilityUseCase } from './get-all-ability-use-case'
import { GetAbilityByIdUseCase } from './get-ability-by-id-use-case'
import { MultiGetAbilityByIdUseCase } from './multi-get-ability-by-id-use-case'
import { singleton } from 'tsyringe'

@singleton()
export class AbilityUseCase {
    constructor(
        public getAllAbilityUseCase: GetAllAbilityUseCase,
        public getAbilityByIdUseCase: GetAbilityByIdUseCase,
        public multiGetAbilityByIdUseCase: MultiGetAbilityByIdUseCase
    ) {}
}
