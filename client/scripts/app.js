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

    setTimeout(App.fetch(), 1000); // what do we want to pass as a callback function?
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // for (let message of data) {
      //   Messages._data.push(message);
      // }

      // clear messages array
      Messages._data = [];

      // iterate through incoming data array?
      // escape all scary characters?
      //escaping problems in message object strings
      // & --> &amp;
      // < --> &lt;
      // > --> &gt;
      // " --> &quot;
      // ' --> &#x27;
      for (let message of data) {

        message.username = message.username === null ? null : message.username.replaceAll('<', '&lt;');
        message.text = message.text === null ? null : message.text.replaceAll('<', '&lt;');
        message.roomname = message.roomname === null ? 'Main' : message.roomname.replaceAll('<', '&lt;');

        message.username = message.username === null ? null : message.username.replaceAll('\'', '&lt;');
        message.text = message.text === null ? null : message.text.replaceAll('\'', '&lt;');
        message.roomname = message.roomname === null ? 'Main' : message.roomname.replaceAll('\'', '&lt;');

        message.username = message.username === null ? null : message.username.replaceAll('(', '');
        message.text = message.text === null ? null : message.text.replaceAll('(', '');
        message.roomname = message.roomname === null ? 'Main' : message.roomname.replaceAll('(', '');

        message.username = message.username === null ? null : message.username.replaceAll(')', '');
        message.text = message.text === null ? null : message.text.replaceAll(')', '');
        message.roomname = message.roomname === null ? 'Main' : message.roomname.replaceAll(')', '');

        // add username to friend list
        Friends.add(message.username);

        // push to messsages._data
        Messages._data.push(message);
      }

      RoomsView.render();
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
