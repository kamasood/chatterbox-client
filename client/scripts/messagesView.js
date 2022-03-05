// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // template for event listener
    // MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // clear chat, then add all messages
    MessagesView.$chats.empty();

    for (let i = 0; i < Messages._data.length; i++) {
      let messageNode = MessageView.render(Messages._data[i]);
      MessagesView.$chats.append(messageNode);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.


  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};