const progressBar = document.querySelector(".page-progress");
const copyBtn = document.querySelector(".copy-btn");
const code = document.querySelector("code");
const repoUrl = "https://api.github.com/repos/atharva20-coder/nortonjs";
const headers = {
  Authorization:
    "Bearer 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",
};

const setProgress = () => {
  // Cal max scroll height
  const scrollHeight = document.body.scrollHeight;
  const viewPortHeight = window.innerHeight;
  const maxScrollHeight = scrollHeight - viewPortHeight;

  // Set percentage
  const percentage = (window.scrollY / maxScrollHeight) * 100;
  progressBar.style.width = `${percentage}%`;
};

window.addEventListener("scroll", () => {
  setProgress();
});

window.addEventListener("resize", () => {
  setProgress();
});

// Add event listener to button
copyBtn.addEventListener("click", () => {
  // Create a new textarea element to copy the text
  const textarea = document.createElement("textarea");
  textarea.value = code.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change the button text to "Copied!"
  copyBtn.textContent = "Copied!";

  // Reset the button text after a short delay
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 2000);
});

// Retrieve the repository information from the GitHub API
fetch(repoUrl, { headers })
  .then((response) => response.json())
  .then((data) => {
    // Extract the fork and star counts from the response
    const forks = data.forks;
    const stars = data.stargazers_count;

    // Display the fork and star counts on the static site
    document.getElementById("forks").textContent = forks;
    document.getElementById("stars").textContent = stars;
  });
