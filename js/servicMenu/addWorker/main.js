import { validateForm } from "../../shared/validate.js";
import {
  inpName,
  inpServiceName,
  inpService,
  form,
  inpRating,
} from "./selector.js";
import { handleSubmitBtn, handleEditBtn, handleSearch } from "./workerEvents.js";
import Worker from "./worker.js";
import { displayData, serviceDropdown } from "./domWorker.js";

validateForm(inpName, inpServiceName, inpService ,inpRating);
handleSubmitBtn(form);
handleEditBtn();
handleSearch();
displayData(Worker.workers);
serviceDropdown();
