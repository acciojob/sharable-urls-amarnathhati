// your code here
document.getElementById("button").addEventListener("click", function() {
      updateURL();
    });

    function updateURL() {
      const name = document.getElementById("name").value;
      const year = document.getElementById("year").value;

      const url = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
      document.getElementById("url").textContent = url;
    }