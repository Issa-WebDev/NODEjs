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



// import EventEmitter from "events";
// import fs from "fs";

// const customEmitter = new EventEmitter();

// customEmitter.on("read file", () => {
//   fs.readFile("index.html", "utf-8", (err, res) => {
//     err ? console.log(err) : console.log(res);
//   });
// });

// customEmitter.emit("read file");
// customEmitter.emit("read file");
// customEmitter.emit("read file");




// import EventEmitter from "events";

// class NewUser extends EventEmitter {
//   startEmit() {
//     console.log("New user.....");
//     setTimeout(() => {
//       this.emit("newUser", "KissCoder");
//     }, 2000);
//   }
// }

// const myNewUser = new NewUser();
// const welcome = (name) => {
//   console.log(`Welcome ${name}`);
// };
// myNewUser.on("newUser", welcome);

// setTimeout(() => {
//   myNewUser.off("newUser", welcome);
//   console.log("listerner is removed ");
// }, 1000);

// myNewUser.startEmit();
