document.addEventListener("DOMContentLoaded", () => {
    document
    .getElementById("myModal")
    // .getElementById("myBtn")
    // .getElementsByClassName("close")[0]
    .addEventListener("submit", async (event) => {
        event.preventDefault(); 

       
        const data = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
          };



          const response = await axios.post("http://localhost:4000/form", data);
          console.log(response.data);
    })
});
