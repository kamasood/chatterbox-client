// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {}, // keys are roomnames from message objects

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  add: function(roomName) {
    if (!Rooms._data[roomName]) {
      Rooms._data[roomName] = false;
    }
  },

  updateList: function() {
    // clear rooms object
    Rooms._data = {};
    // iterate through messages
    for (let message of Messages._data) {
      // Rooms.addRoom(each message's roomname property)
      Rooms.add(message.roomname);
    }
  }


};

