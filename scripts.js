document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const submission = new FormData(event.target);
  const data = Object.fromEntries(submission);
  //   document.querySelector(".form__title").textContent = `You rated us ${data.rating} out of 5`;
  document.querySelector(".form__title").textContent = `Thank you!`;
  document.querySelector(
    ".form__subtitle"
  ).textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
});
