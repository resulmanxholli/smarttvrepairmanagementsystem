import {
  card,
  inpService,
  inpServiceName,
  serviceIcons,
  subcategoryOptions,
} from "./selector.js";
import { createRemoveButton, createEditBtn } from "./workerEvents.js";
import { createElement } from "../../shared/helper.js";

export function displayData(workers) {
  card.innerHTML = "";

  workers.forEach((worker) => {
    const cardContainer = createElement(
      "div",
      "card m-2 flex-grow-1",
      "",
      card
    );

    const cardBody = createElement("div", "card-body", "", cardContainer);

    createElement("h5", "card-title", worker.name, cardBody);

    createElement(
      "h6",
      "card-title mb-2 text-body-secondary text-capitalize",
      `${serviceIcons[worker.serviceName] || ""} ${worker.serviceName}`,
      cardBody
    );
    createElement("p", "card-text", worker.service, cardBody);
    createElement("p", "card-text", `Rating: ${worker.rating}/5`, cardBody);

    const tdActions = createElement("h5", "", "", cardBody);

    createRemoveButton(worker, tdActions);
    createEditBtn(worker, tdActions);
  });
}

export function serviceDropdown() {
  document.addEventListener("DOMContentLoaded", () => {
    const mainSelect = inpServiceName;
    const subSelect = inpService;

    mainSelect.addEventListener("change", () => {
      const selectedMain = mainSelect.value;
      subSelect.innerHTML =
        '<option value="">Zgjedh nën-kategorinë...</option>';

      if (subcategoryOptions[selectedMain]) {
        subcategoryOptions[selectedMain].forEach((opt) => {
          const option = document.createElement("option");
          option.value = opt;
          option.textContent = opt;
          subSelect.appendChild(option);
        });
      }
    });
  });
}
