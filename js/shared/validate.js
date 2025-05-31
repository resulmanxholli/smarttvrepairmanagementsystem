export function validateInput(inputElement) {
  if (inputElement.value.trim() === "") {
    inputElement.classList.add("is-invalid");
    return true;
  } else {
    inputElement.classList.remove("is-invalid");
    return false;
  }
}

export function validateForm(inpName, inpServiceName, inpService,inpRating) {
  let isNameInvalid = validateInput(inpName);
  let isServiceNameInvalid = validateInput(inpServiceName);
  let isServiceInvalid = validateInput(inpService);
  let isRatingInvalid = validateInput(inpRating);
  return isNameInvalid || isServiceNameInvalid || isServiceInvalid || isRatingInvalid;
}
