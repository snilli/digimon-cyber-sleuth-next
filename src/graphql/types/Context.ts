import { injectable } from "tsyringe";
import { GetAllAbilityUseCase } from "../../core/ability/use-cases/get-all-ability-use-case";
import { GetAbilityByIdUseCase } from "../../core/ability/use-cases/get-ability-by-id-use-case";

@injectable()
export class Context {
    constructor(
        private getAllAbilityUseCase: GetAllAbilityUseCase,
        private getAbilityById: GetAbilityByIdUseCase,
        private getAbilityById: GetAbilityByIdUseCase,
    ) {}
}