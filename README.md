# VDM Window Manager

Utility for managing window states. Examples: preserve window positions/sizes through sleep, move sets of windows between monitors

### Installation

Note: These instructions are old; some steps might not be needed.

1) Clone or download repo to disk.
2) Install NodeJS version compatible with node-ffi. (recommend using nvm-windows)
3) Run `npm install --global --production windows-build-tools`.
4) Run `npm install` in root folder.
5) Run `npm install` in `node_modules/robotjs` folder. (needed on 2nd-computer, anyway)

### Usage

Run the `Start.bat` file.

### Actions

##### Restore Windows (default: ctrl + alt + numpad 1 -- with numlock off)

Restores the position/size of each window to what it was just prior to the last time the computer entered sleep mode.