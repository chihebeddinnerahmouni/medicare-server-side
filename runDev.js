const { exec } = require('child_process');
const path = require('path');

// Define the main folder and the subfolders you want to open and run the command in
const mainFolder = __dirname; // Assuming the script is in the main folder
const subfolders = ['users', 'doctors', "dentists", "pharmacies", "clinics", "nurses"];

// Function to run a command in a new terminal
const runCommandInNewTerminal = (folder) => {
    const folderPath = path.join(mainFolder, folder);
    const command = `cd ${folderPath} && npm run dev`;

    // For Windows
    const windowsCommand = `start cmd.exe /K "${command}"`;

    // For macOS and Linux
    const unixCommand = `gnome-terminal -- bash -c "${command}; exec bash"`;

    // Detect the platform and run the appropriate command
    const platform = process.platform;
    if (platform === 'win32') {
        exec(windowsCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`Stdout: ${stdout}`);
        });
    } else {
        exec(unixCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`Stdout: ${stdout}`);
        });
    }
};

// Run the command in each subfolder
subfolders.forEach(runCommandInNewTerminal);

