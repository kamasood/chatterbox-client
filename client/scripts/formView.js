// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // create message object from $form's current state

    // var message = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan'
    // };
    let message = {
      username: App.username,
      text: FormView.$form.find('input[type=text]').val(),
      roomname: RoomsView.$select.val()
    };

    // Parse.create(messageObject);
    Parse.create(message);
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};