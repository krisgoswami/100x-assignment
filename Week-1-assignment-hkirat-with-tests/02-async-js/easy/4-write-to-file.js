// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
// const path = 'C:\\Users\\Krishanu\\Desktop\\100x assignment\\Week-1-assignment-hkirat-with-tests/README.md';

function write(filename, data) {
  fs.writeFile(filename, data, "utf8", (err) => {
    if (err) {
      console.log("Error reading file", err);
    } else {
      console.log(`write successful ${filename}`);
    }
  });
}

write("C:\\Users\\Krishanu\\Desktop\\100x assignment\\Week-1-assignment-hkirat-with-tests\\text.txt", "Some new text");
// console.log(
//   read(
//     "C:\\Users\\Krishanu\\Desktop\\100x assignment\\Week-1-assignment-hkirat-with-tests\\README.md"
//   )
// );
