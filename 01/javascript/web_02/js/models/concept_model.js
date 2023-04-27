class ConceptModel {
  name;
  status;
  dateAdded;
  notes;
  constructor(name, status, dateAdded, notes) {
    this.name = name;
    this.status = status;
    this.dateAdded = dateAdded;
    this.notes = notes;
  }
}

export default ConceptModel;

const newConcept = new ConceptModel('karlo', 'new', new Date.now(), []);
