import { singleton } from "tsyringe";
import { Digimon } from "../entitys/digimon-entity";
import { DigimonRepo } from "../repos/digimon-repo";

@singleton()
export class GetAllDigimonUseCase {
    constructor(private repo: DigimonRepo) {}

    execute(): Map<string, Digimon> {
        const stateMap = new Map<string, Digimon>()
        for (const [id, digimon] of this.repo.getAllDigimon()) {
            stateMap.set(id, digimon.getState())
        }
        return stateMap
    }
}
