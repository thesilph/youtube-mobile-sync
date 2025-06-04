# YouTube Mobile Sync

## Overview

This project consists of two parts:

1. **Chrome Extension**  
   - Generates a unique user ID for you.
   - Monitors your activity on YouTube watch pages.
   - Every 10 seconds, it saves the current video ID and timestamp you are watching to an online key-value store, associated with your user ID.

2. **React Native App**  
   - You enter your user ID once.
   - When you open the app, it fetches your last watched YouTube video and timestamp from the online store.
   - The app then opens the YouTube app (or browser) directly to that video and timestamp, so you can resume watching where you left off.

## How It Works

- **Syncing:**  
  The Chrome extension runs in the background while you watch YouTube. It keeps track of your current video and playback position, and periodically updates this information online using your unique ID.

- **Resuming:**  
  On your mobile device, the React Native app retrieves your last watched video and position using your ID, and launches YouTube at the exact spot you left off.

## Usage

### Chrome Extension

1. Install the extension in Chrome.
2. Open the extension popup to see your generated user ID.
3. Watch YouTube videos as usual. The extension will automatically sync your progress.

### React Native App

1. Install the app on your mobile device.
2. Enter your user ID (from the extension) the first time you use the app.
3. Open the app whenever you want to resume watching on mobile. It will automatically open YouTube at your last watched position.

## Why?

This project is for anyone who wants a seamless way to continue watching YouTube videos across desktop and mobile, picking up exactly where they left off.

---
```# YouTube Mobile Sync

## Overview

This project consists of two parts:

1. **Chrome Extension**  
   - Generates a unique user ID for you.
   - Monitors your activity on YouTube watch pages.
   - Every 10 seconds, it saves the current video ID and timestamp you are watching to an online key-value store, associated with your user ID.

2. **React Native App**  
   - You enter your user ID once.
   - When you open the app, it fetches your last watched YouTube video and timestamp from the online store.
   - The app then opens the YouTube app (or browser) directly to that video and timestamp, so you can resume watching where you left off.

## How It Works

- **Syncing:**  
  The Chrome extension runs in the background while you watch YouTube. It keeps track of your current video and playback position, and periodically updates this information online using your unique ID.

- **Resuming:**  
  On your mobile device, the React Native app retrieves your last watched video and position using your ID, and launches YouTube at the exact spot you left off.

## Usage

### Chrome Extension

1. Install the extension in Chrome.
2. Open the extension popup to see your generated user ID.
3. Watch YouTube videos as usual. The extension will automatically sync your progress.

### React Native App

1. Install the app on your mobile device.
2. Enter your user ID (from the extension) the first time you use the app.
3. Open the app whenever you want to resume watching on mobile. It will automatically open YouTube at your last watched position.

## Why?

This project is for anyone who wants a seamless way to continue watching YouTube videos across desktop and mobile, picking up exactly where they left off.

---