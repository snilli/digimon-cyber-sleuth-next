import { singleton } from 'tsyringe'
import { GetAllDigimonUseCase } from './get-all-digimon-use-case'
import { GetDigimonByIdUseCase } from './get-digimon-by-id-use-case'
import { MultiGetDigimonByIdUseCase } from './multi-get-digimon-by-id-use-case'

@singleton()
export class DigimonUseCase {
    constructor(
        public getDigimonByIdUseCase: GetDigimonByIdUseCase,
        public getAllDigimonUseCase: GetAllDigimonUseCase,
        public multiGetDigimonByIdUseCase: MultiGetDigimonByIdUseCase
    ) {}
}
