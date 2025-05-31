export default class Worker {
  static workers = JSON.parse(localStorage.getItem("workers")) || [];
  constructor(name, serviceName, service,rating) {
    this.id = generateId();
    this.name = name;
    this.serviceName = serviceName;
    this.service = service;
    this.rating = rating;
  }
}
export function generateId() {
  return crypto.randomUUID();
}
