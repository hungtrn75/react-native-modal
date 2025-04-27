const fs = require('fs');
const path = require('path');

// Read package.json to get the module name
const packageJson = require('./package.json');
const moduleName = packageJson.name;

// Get all files in current directory
fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter .tgz files that contain the module name
  const tgzFiles = files.filter(
    file => file.includes(moduleName) && file.endsWith('.tgz'),
  );

  // Delete each matching file
  tgzFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    fs.unlink(filePath, err => {
      if (err) {
        console.error(`Error deleting ${file}:`, err);
      } else {
        console.log(`Successfully deleted: ${file}`);
      }
    });
  });
});
