import {
  btnEdit,
  form,
  inpId,
  inpName,
  inpService,
  inpServiceName,
  inpRating,
} from "./selector.js";
import { validateForm } from "../../shared/validate.js";
import Worker from "./worker.js";
import {
  addWorker,
  deleteWorker,
  editWorker,
  getWorkerById,
  filterWorker,
} from "./workerSerivce.js";
import { displayData } from "./domWorker.js";
import { createElement } from "../../shared/helper.js";

export function handleSubmitBtn(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm(inpName, inpServiceName, inpService, inpRating)) {
      return;
    }
    addWorker(
      inpName.value.trim(),
      inpServiceName.value.trim(),
      inpService.value.trim(),
      inpRating.value.trim()
    );
    displayData(Worker.workers);
    form.reset();
  });
}

export function handleEditBtn() {
  btnEdit.addEventListener("click", (e) => {
    e.preventDefault();

    const isInvalid = validateForm(
      inpName,
      inpServiceName,
      inpService,
      inpRating
    );
    if (isInvalid) return;

    const confirmed = confirm("Are you sure you want to edit this worker?");
    if (!confirmed) return;

    editWorker(
      inpId.value,
      inpName.value.trim(),
      inpServiceName.value.trim(),
      inpService.value.trim(),
      inpRating.value.trim()
    );

    displayData(Worker.workers);

    form.reset();
    btnEdit.classList.add("d-none");
  });
}

export function handleSearch() {
  inpSearch.addEventListener("input", function (e) {
    const filterWorkerr = filterWorker(e.target.value);
    displayData(filterWorkerr);
  });
}

export function createRemoveButton(worker, tdActions) {
  const removeBtn = createElement("button", "btn btn-danger", "❌", tdActions);
  removeBtn.addEventListener("click", () => {
    handleWorkerRemoval(worker.id);
  });
}

export function createEditBtn(worker, tdActions) {
  const editBtn = createElement("button", "btn btn-info", "✏", tdActions);

  editBtn.addEventListener("click", () => {
    populateEditForm(worker.id);
  });
}

function handleWorkerRemoval(id) {
  if (confirm("Are you sure?")) {
    deleteWorker(id);
    displayData(Worker.workers);
  }
}

function populateEditForm(id) {
  const worker = getWorkerById(id);
  inpId.value = worker.id;
  inpName.value = worker.name;
  inpServiceName.value = worker.serviceName;
  inpService.value = worker.service;
  inpRating.value = worker.rating;
  btnEdit.classList.remove("d-none");
}
