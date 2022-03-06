// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: When this view loads

    // put people in default room

    RoomsView.$button.on('click', RoomsView.handleClick);

    // event listener, can this be attached to $select?, for option selected, call handleChange
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // 1) Rooms.updateList()
    Rooms.updateList();
    // 2) Update DOM, based on the updated list

    // TODO: Render out the list of rooms.
    // clear current rooms
    RoomsView.$select.empty();
    RoomsView.$select.append('<option value="All" selected>All</option>');
    // go into rooms.js and iterate through
    for (let room in Rooms._data) {
      // create option dom element for each key and append
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(`<option value='${roomname}'>${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // Re-render messages to show only messaged from that room
    // FormView.$form.find('input[type=text]').val(),
    let room = RoomsView.$select.find(':selected').text();

    // clear chat
    MessagesView.$chats.empty();

    // if selecting all, render all
    if (room === 'All') {
      MessagesView.render();

    } else { // else, render only roomname matches
      for (let message of Messages._data) {
        if (message.roomname === room) {
          MessagesView.renderMessage(message);
        }
      }
    }
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // add new option and append to select
    var roomValue = prompt('Enter Room Name:') || 'new room';

    $newRoom = $(`<option value='${roomValue}'>${roomValue}</option>`);
    RoomsView.$select.append($newRoom);
    Rooms.add(roomValue);

    // invoke adding new room in data structure


  }

  // RoomsView.$select.append("<option value='testRoomName'>testRoomName</option>")

};
