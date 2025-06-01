# YouTube API Extension

This Chrome extension is designed to interact with YouTube by calling a specified API endpoint every 10 seconds with the current URL of the active YouTube page.

## Features

- Calls an API endpoint every 10 seconds.
- Retrieves the current URL of the active YouTube tab.
- Lightweight and easy to use.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd youtube-api-extension
   ```

3. Install dependencies (if any):
   ```
   npm install
   ```

4. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the `src` directory of the project.

## Usage

Once the extension is loaded, it will automatically start calling the specified API endpoint every 10 seconds with the current URL of the active YouTube tab.

## API Endpoint

Make sure to specify the API endpoint in the `background.js` file where the API call is made.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.