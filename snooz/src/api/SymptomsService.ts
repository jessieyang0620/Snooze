/**
 * symptoms for fake data for symptom components
 */

class SymptomsService {
    mental: String[];
    physical: String[];
    medications: String[];

    constructor () {
        this.mental = ['Anxious', 'Depressed', 'Happy'];
        this.physical = ['Headache', 'Nausea', 'Fever'];
        this.medications = ['Tylenol', 'Lexapro', 'Midol'];
    };

    public getMental() : String[] {
        return this.mental;
    }
    public getPhysical() : String[] {
        return this.physical;
    }
    public getMedications(): String[] {
        return this.medications;
    }

    public addMental(symptom: String): void {
        this.mental.push(symptom);
    }

    public addMPhysical(symptom: String): void {
        this.physical.push(symptom);
    }

    public addMedications(med: String): void {
        this.medications.push(med);
    }
}

export default SymptomsService;