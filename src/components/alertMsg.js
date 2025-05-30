export const alertMsg = (msg = "An example success alert with an icon") => {
  document.getElementById("main").innerHTML += `
        <div id="alert" class="position-absolute top-1 end-1 z-1 alert alert-success alert-dismissible fade hide" role="alert">
            <p class="m-0 p-0">${msg}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

  setTimeout(() => {
    showAlert(true);
  }, 100);

  setTimeout(() => {
    showAlert(false);
    removeAlert();
  }, 2500);
};

const showAlert = (show) => {
  const alert = document.getElementById("alert");
  alert.classList.remove(show ? "hide" : "show");
  alert.classList.add(show ? "show" : "hide");
};

const removeAlert = () => {
  document.getElementById("alert").remove();
};
