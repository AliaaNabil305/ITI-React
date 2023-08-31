function Service(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      });
  }
  
  const serviceURL = "https://jsonplaceholder.typicode.com/users";
  
  Service(serviceURL)
    .then(data => {
      console.log("Service data:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  