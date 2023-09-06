const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
}).mount("#app");

/*
  
  axios.get('indirizzo')
  .then((response) => {
    console.log(response.data);
  })
  
  */
