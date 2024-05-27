async function getRandomActivity() {
  let apiUrl = "https://bored-api.appbrewery.com/random";
  let proxyUrl = "http://localhost:3000/proxy?url=";
  let finalUrl = proxyUrl + encodeURIComponent(apiUrl);

  try {
    let response = await fetch(finalUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    let data = await response.json();
    console.log(data);
    let { activity } = data;
    document.querySelector("#activityContainer").innerHTML = activity;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

document.querySelector("#getActivityButton").addEventListener("click", getRandomActivity);
