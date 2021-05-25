let platforms = document.querySelectorAll(".projectslist__listing__activities-counter")

if (platforms.length > 0) {
  fetch("/assets/github_issues.json")
    .then(response => response.json())
    .then(data => {
      for (let i = 0 ; i < data.length ; i++) {
        let selected = document.querySelector(`#projectslist-activity-counter-${data[i].project}`)
        if (selected) {
          let counter = parseInt(selected.innerHTML)
          counter++
          selected.innerHTML = `${counter}`
        }
      }
    });
}
