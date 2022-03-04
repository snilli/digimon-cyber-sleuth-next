import { BaseEntity, BaseEntityState } from './base-entity'

export type StoreCreateFactory<T extends Record<string, unknown>> = (
    payload: any
) => T
export type EntityCreateFactory<T extends BaseEntity = any> = (
    map: Map<string, T>,
    payload: any
) => void
export interface JsonRepoInput<T extends BaseEntity> {
    tableName: string
    createFactory: EntityCreateFactory<T>
    rawJson: Record<string, unknown>
}
export abstract class JsonRepo<T extends BaseEntity<any>> {
    protected readonly tableName: string
    protected createFactory: EntityCreateFactory
    protected rawJson: Record<string, unknown>
    protected dataMapping: Map<string, T>

    protected constructor(input: JsonRepoInput<T>) {
        this.tableName = input.tableName
        this.createFactory = input.createFactory
        this.rawJson = input.rawJson
        this.dataMapping = new Map<string, T>()
        for (const [_, value] of Object.entries(this.rawJson)) {
            this.createFactory(this.dataMapping, value)
        }
    }

    getById(id: string): T | undefined {
        return this.dataMapping.get(id)
    }

    multiGetById(ids: string[]): Map<string, T> {
        const map: Map<string, T> = new Map()
        for (const id of ids) {
            const data = this.dataMapping.get(id)
            if (data) {
                map.set(data.getId(), data)
            }
        }

        return map
    }
}
