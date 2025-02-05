import url from "url";

const myUrl = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);
// console.log(myUrl.href);
// console.log(myUrl.origin);
// console.log(myUrl.protocol);
// console.log(myUrl.username);
// console.log(myUrl.password);
// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.port);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);
// console.log(myUrl.hash);

myUrl.username = "kisscoder";
myUrl.password = "kiss@coder1";
myUrl.port = 1000;

console.log(myUrl.toJSON());
console.log(myUrl.toString());
