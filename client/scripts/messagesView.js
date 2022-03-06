// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $refreshButton: $('#refresh'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // template for event listener
    MessagesView.$refreshButton.on('click', MessagesView.refreshFeed);
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // clear chat, then add all messages
    MessagesView.$chats.empty();

    for (let i = 0; i < Messages._data.length; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $newMessage = $(MessageView.render(message));
    $newMessage.on('click', MessagesView.handleClick);
    MessagesView.$chats.append($newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    let $user = $(event.currentTarget.firstChild);
    Friends.toggleStatus($user.text());
    // toggle clicked username in friends list
  },

  refreshFeed: function(event) {
    App.fetch();
  }

};