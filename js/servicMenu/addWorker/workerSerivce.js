import Worker from "./worker.js";

export function addWorker(name, serviceName, service, rating) {
  const newWorker = new Worker(name, serviceName, service, rating);
  Worker.workers.push(newWorker);
  localStorage.setItem("workers", JSON.stringify(Worker.workers));
}
export function editWorker(id, name, serviceName, service, rating) {
  const editedWorker = Worker.workers.find((worker) => worker.id == id);
  if (editedWorker) {
    editedWorker.id = id;
    editedWorker.name = name;
    editedWorker.serviceName = serviceName;
    editedWorker.service = service;
    editedWorker.rating = rating;
  }
  localStorage.setItem("workers", JSON.stringify(Worker.workers));
}

export function deleteWorker(id) {
  const indexOfWorker = Worker.workers.findIndex((worker) => worker.id === id);
  if (indexOfWorker !== -1) {
    Worker.workers.splice(indexOfWorker, 1);
  }
  localStorage.setItem("workers", JSON.stringify(Worker.workers));
}
export function filterWorker(searchValue) {
  const filteredList = Worker.workers.filter(
    (worker) =>
      worker.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      worker.serviceName.toLowerCase().includes(searchValue.toLowerCase()) ||
      worker.service.toLowerCase().includes(searchValue.toLowerCase()) ||
      worker.rating.toLowerCase().includes(searchValue.toLowerCase())
  );
  return filteredList;
}
export function getWorkerById(id) {
  return Worker.workers.find((worker) => worker.id === id);
}
