const EventEmiter = require("events");

const custumEvent = new EventEmiter();

// on ==> listen/register for an event
// once ==> listen/register for an event
// emit ==> emit/call an event

custumEvent.on("event name", () => {
  console.log(`cool events`);
});

custumEvent.on("event", () => {
  console.log(`events 111`);
});

custumEvent.emit("event name");
custumEvent.emit("event");
