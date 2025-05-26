export const renderNavbarCartTotal = (total = 0) => {
  document.getElementById("headerCartBtn").innerHTML += `
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" aria-hidden="true">
            ${total}
        </span>
    `;
};
