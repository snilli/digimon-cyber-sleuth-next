import { singleton } from 'tsyringe'
import { Digimon } from '../entitys/digimon-entity'
import { DigimonRepo } from '../repos/digimon-repo'


@singleton()
export class GetDigimonByIdUseCase {
    constructor(private repo: DigimonRepo) {}

    execute(id: string): Digimon {
        const digimon = this.repo.getById(id)
        if (!digimon) {
            throw new Error('Digimon not found')
        }

        return digimon.getState()
    }
}
