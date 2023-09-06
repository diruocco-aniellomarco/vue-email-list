const { createApp } = Vue;

createApp({
  data() {
    return {
      mailList: [],
    };
  },

  methods: {
    randomMail() {
      let i = 0;
      while (i < 10) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.mailList.push(response.data.response);
            // console.log(response.data.response);
          });
        i++;
      }
      console.log(this.mailList);
    },
  },

  mounted() {
    this.randomMail();
  },
}).mount("#app");

/*
  
  axios.get('indirizzo')
  .then((response) => {
    console.log(response.data);
  })
  
  */
