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

##### Store Window States (default: ctrl + alt + numpad 1 -- with numlock off)

Stores the position/size/state of each visible window.

##### Restore Window States (default: ctrl + alt + numpad 3 -- with numlock off)

Restores the position/size/state of each window whose state was previously stored.