# BioCreator

BioCreator is a modern single-page bio template for GitHub Pages.

## Features

- bilingual interface: Polish and English
- animated landing page
- clickable cards for YouTube, Discord, Minecraft, and Roblox
- hidden editor panel available under `/temp/`
- no backend required

## Files

- `index.html` - main public page
- `styles.css` - styling and animations
- `script.js` - language switching and editor logic
- `temp/index.html` - hidden editor page
- `favicon.svg` - tab icon

## Usage

1. Upload the files to a GitHub Pages repository.
2. Open the main page.
3. Open `/temp/` to edit the default data in your browser.
4. If you want permanent project defaults, update `script.js`.

## Notes

- The editor stores changes in `localStorage`, so it is browser-local.
- This project is provided as a template/reference, not as a reusable open-source package.
