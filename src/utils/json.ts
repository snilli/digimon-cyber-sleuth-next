export function serializer(obj: Record<string, any>): Record<string, any> {
    return JSON.parse(JSON.stringify(obj, (_, v) => (v == null ? null : v)))
}
