# HealthLinkCenter

HealthLinkCenter is a web application that allows patients with physical disabilities or chronic conditions to easily measure their pulse from the comfort of their home. The app uses Bluetooth technology to communicate with a smartwatch to collect data and securely stores it in a Firebase database. This allows doctors and caregivers to remotely monitor the patient's health data.

Currently, you can visit the site at: [https://vmandic99.github.io/healthlinkcenter/](https://vmandic99.github.io/healthlinkcenter/)

## Demo Video

Watch the demo video here:

[![Demo Video](https://vumbnail.com/1045304319.jpg)](https://vimeo.com/1045304319)

## Features

- **Bluetooth Pulse Measurement**: Allows patients to easily measure their pulse using a smartwatch.
- **Data Visualization**: The measured data is displayed graphically in real-time.
- **Firebase Integration**: All collected data is securely stored in a Firebase database.
- **Remote Monitoring**: Doctors and caregivers can access and monitor the patient's health data without the patient needing to leave home.

## Technologies Used

This project uses the following technologies:

- **Bluetooth Web API**: Allows communication with Bluetooth devices directly from the web browser.
- **HTML5, CSS3, and JavaScript**: The core technologies used for building the front-end of the application.
- **Firebase**: Used for storing and managing data securely in real-time, as well as for user authentication.
- **Bangle.js 2**: To measure the heart rate, the Bangle.js 2 smartwatch was used. However, any other Bluetooth device that supports the Heart Rate Measurement characteristic (0x2A37) and the Heart Rate Service (0x180D) can also be used.

## Installation

### 1. Clone the Repository
```git clone https://github.com/vmandic99/healthlinkcenter.git```

### 2. Open the Project
```cd healthlinkcenter```

## 3. Install Dependencies
```npm install```

### 4. Firebase Configuration
You can keep the current settings to test with the existing database, or you can create your own Firebase project and use your own database depending on your needs.

## Important!
- Ensure that your Bluetooth device supports the Heart Rate Measurement characteristic (0x2A37) within the Heart Rate service (0x180D) on the GATT server. If your device uses custom services or characteristics, you may need to adapt these UUIDs accordingly.
- This project uses the Bluetooth Web API, making it compatible with browsers such as Chrome, Edge, and Opera. For more information on browser compatibility, visit [MDN Web Bluetooth API Compatibility](https://developer.mozilla.org/de/docs/Web/API/Web_Bluetooth_API#browser-kompatibilit%C3%A4t).


