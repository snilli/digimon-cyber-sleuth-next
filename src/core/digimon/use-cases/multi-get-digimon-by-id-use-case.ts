import { singleton } from 'tsyringe'
import { Digimon } from '../entitys/digimon-entity'
import { DigimonRepo } from '../repos/digimon-repo'
let i = 0
@singleton()
export class MultiGetDigimonByIdUseCase {
    constructor(private repo: DigimonRepo) {}

    execute(ids: string[]): Map<string, Digimon> {
        const stateMap = new Map<string, Digimon>()
        for (const [id, digimon] of this.repo.multiGetById(ids)) {
            stateMap.set(id, digimon.getState())
        }

        if (!stateMap.size) {
            throw new Error('Digimon not found')
        }

        return stateMap
    }
}
