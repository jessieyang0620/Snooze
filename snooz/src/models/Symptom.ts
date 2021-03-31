/**
 * represents a symptom
 */

export interface Symptom {
    name: string, // name of symptom as selected from SymptomService
    why?: string, // user input commentary about why symptom may be happening
    severity: number // some value 1-5 depicting how bad it is
}
