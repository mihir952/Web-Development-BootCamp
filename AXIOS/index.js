document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const activityName = document.querySelector(".card-activity");
    const activityType = document.querySelector(".card-type");
    const activityParticipants = document.querySelector(".card-participants");
    const errorContainer = document.getElementById("tag-error");
  
    form.addEventListener("click", async function () {
      // Get selected values from the form
      const type = form.type.value;
      const participants = form.participants.value;
  
      try {
        const response = await fetch(
          `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
        );
        const data = await response.json();
  
        if (data.length === 0) {
          errorContainer.textContent = "No activities that match your criteria.";
          activityName.textContent = "";
          activityType.textContent = "";
          activityParticipants.textContent = "";
        } else {
          errorContainer.textContent = "";
          const randomActivity = data[Math.floor(Math.random() * data.length)];
          activityName.textContent = randomActivity.activity;
          activityType.textContent = randomActivity.type;
          activityParticipants.textContent = `participants: ${randomActivity.participants}`;
        }
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
        errorContainer.textContent = "Failed to fetch data. Please try again later.";
        activityName.textContent = "";
        activityType.textContent = "";
        activityParticipants.textContent = "";
      }
    });
  });

  // var obj1={
  //   'name':'airbnb-style',
  //   'version':'2.0.0',
  //   'description':"A mostly reasonable approach to Javascript.",
  //   'scripts':{
  //     'preinstall':'npm run install:config && npm run install:config:base',
  //     'lint':'markdownlint  --config linters/.markdown.json'
  //   }
  // }



  hayy 

