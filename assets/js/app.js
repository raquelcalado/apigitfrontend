var apiURL = 'https://api.github.com/users/'

var app = new Vue({

  el: '#app',

  data: {
    user: null,
    response: null,
    responsestarred: null,
    responserepos: null,
    showcontent: null,
  },

  watch: {
    user: 'fetchData'
  },

  methods: {
    fetchData: function () {
      let self = this;
      fetch(apiURL + self.user)
        .then(response => response.json())
          .then(data => {
            self.response = data
          });
    },
    starred: function (event) {
      let self = this;
      fetch(apiURL + self.user + "/starred")
        .then(responsestarred => responsestarred.json())
          .then(data => {
            self.responsestarred = data
          });
    },
    repos: function (event) {
      let self = this;
      fetch(apiURL + self.user + "/repos")
        .then(responserepos => responserepos.json())
          .then(data => {
            self.responserepos = data
          });
    },
    seemore: function(event){
      let self = this;
      self.showcontent = true
      document.getElementsByClassName("result")[0].style.display = "block";
    },
    returnhome: function(event){
      location.reload();
    },
    isDisabled: function(){
      return !response;
    }
  }
});