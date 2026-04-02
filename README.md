# BioCreator

BioCreator is a modern single-page bio template for GitHub Pages.

## Features

- bilingual interface: Polish and English
- animated landing page
- clickable cards for YouTube, Discord, Minecraft, and Roblox
- hidden editor panel available under `/temp/`
- no backend required
- no localStorage dependency

## Files

- `index.html` - main public page
- `styles.css` - styling and animations
- `script.js` - language switching, default profile dictionary, and editor logic
- `temp/index.html` - hidden editor page
- `favicon.svg` - tab icon

## Usage

1. Upload the files to a GitHub Pages repository.
2. Open the main page.
3. Edit the `defaultProfile` dictionary in `script.js` to set your project defaults.
4. Open `/temp/` to preview and test edits through the panel.

## Notes

- The editor does not save to `localStorage`.
- The panel is for live preview and editing convenience.
- Permanent defaults should be changed in the `defaultProfile` dictionary in `script.js`.
- This project is provided as a template/reference, not as a reusable open-source package.
