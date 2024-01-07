// app.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the toggle switches and their corresponding images
  const toggleSwitches = [
    document.getElementById("toggleSwitch1"),
    document.getElementById("toggleSwitch2"),
    document.getElementById("toggleSwitch3"),
  ];

  const lampOnImages = [
    document.getElementById("lamp_on1"),
    document.getElementById("lamp_on2"),
    document.getElementById("lamp_on3"),
  ];

  const lampOffImages = [
    document.getElementById("lamp_off1"),
    document.getElementById("lamp_off2"),
    document.getElementById("lamp_off3"),
  ];

  // Add click event listeners to each toggle switch
  toggleSwitches.forEach((toggleSwitch, index) => {
    toggleSwitch.addEventListener("click", function () {
      // Toggle the switch
      toggleSwitch.checked = !toggleSwitch.checked;

      // Toggle the images based on the switch state
      if (toggleSwitch.checked) {
        lampOnImages[index].style.display = "block";
        lampOffImages[index].style.display = "none";
      } else {
        lampOnImages[index].style.display = "none";
        lampOffImages[index].style.display = "block";
      }

      // Update the text based on the switch state
      const toggleText = document.getElementById(`toggleText${index + 1}`);
      toggleText.textContent = toggleSwitch.checked ? "ON" : "OFF";
    });
  });
});
