const fs = require("fs").promises;

async function createFile() {
  const filename = "word.txt";
  const content = "This is the content present in word.txt";

  try {
    await fs.writeFile(filename, content);
    console.log(`File created: ${filename}`);
  } catch (e) {
    console.error("Error creating file: " + filename);
  }
}

createFile();
