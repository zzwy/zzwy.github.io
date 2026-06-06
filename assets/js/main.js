const year = document.querySelector("#year");
const lastUpdated = document.querySelector("#last-updated");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (lastUpdated) {
  const date = new Date(document.lastModified);
  lastUpdated.textContent = date.toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
