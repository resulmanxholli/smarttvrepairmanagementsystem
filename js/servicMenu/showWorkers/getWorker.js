const params = new URLSearchParams(window.location.search);
const selectedService = params.get("service");

const workers = JSON.parse(localStorage.getItem("workers")) || [];

const filteredWorkers = workers.filter(
  (w) => w.serviceName === selectedService
);

const serviceIcons = {
  power: "🔌 Power & Display Issues",
  audio: "🔊 Audio Issues",
  software: "🧠 Software / Logic Control",
  input: "🎮 Input/Control Hardware",
};


function createCard(filteredWorkers) {
const container = document.querySelector(".container");

filteredWorkers.forEach((worker) => {

  container.innerHTML += `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title"><strong>${worker.name}</strong></h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            ${serviceIcons[worker.serviceName] || worker.serviceName}
          </h6>
          <p class="card-text">${worker.service}</p>
          <p class="card-text"><strong>Rating:</strong> ${worker.rating}/5</p>
        </div>
        </div>
      `;

});}

createCard(filteredWorkers)