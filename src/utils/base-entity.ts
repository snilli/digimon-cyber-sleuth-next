export interface BaseEntityState {
    id: string
}

export abstract class BaseEntity<T extends BaseEntityState = BaseEntityState> {
    protected state: T
 
    constructor(state: T) {
        this.state = state
    }

    getId(): string {
        return this.state.id
    }

    toJSON(): T {
        return this.state
    }

    getState(): T {
        return {
            ...this.state
        }
    }

    setState(state: T): void {
        this.state = state
    }
}