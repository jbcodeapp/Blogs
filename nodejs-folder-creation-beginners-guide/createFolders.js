const fs = require("fs");

const foldersToCreate = ["folder1", "folder2", "folder3", "folder4"];

foldersToCreate.forEach((folder) => {
  fs.mkdir(folder, (err) => {
    if (err) {
      console.error(`Error creating ${folder}: ${err.message}`);
    } else {
      console.log(`${folder} created successfully.`);
    }
  });
});
