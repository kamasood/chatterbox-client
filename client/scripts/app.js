// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    setInterval(App.fetch(), 5000); // what do we want to pass as a callback function?
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // for (let message of data) {
      //   Messages._data.push(message);
      // }

      Messages._data = data;

      MessagesView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
