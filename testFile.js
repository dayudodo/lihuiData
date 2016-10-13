var fs = require('fs');

strArr = [
	'abc',
	123,
	true,
	'\n',
	'thanks',

]
fs.writeFile('message.txt', strArr, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
// fs.appendFile('message.txt', '\n', (err) => {
//   if (err) throw err;
//   console.log('write line');
// });
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
// fs.appendFile('message.txt', '\n', (err) => {
//   if (err) throw err;
//   console.log('write line');
// });
// fs.appendFile('message.txt', 'data to append', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });