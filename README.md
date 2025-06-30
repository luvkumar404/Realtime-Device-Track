# 📍 Real-Time Tracking App

This project is a real-time location tracking system built using **Node.js**, **Socket.IO**, **EJS**, and **OpenStreetMap (Leaflet.js)**. It allows multiple users/devices to share and view live location updates on an interactive map.

## 🚀 Features

- Real-time location updates using WebSockets
- Interactive map powered by Leaflet and OpenStreetMap
- Simple, responsive UI built with EJS
- Unique ID tracking for each connected client

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: HTML, CSS, EJS, JavaScript
- **Map**: Leaflet.js with OpenStreetMap tiles

## 📦 Installation

*Clone the repository:**
   ```bash
   git clone https://github.com/luvkumar404/Realtime-Device-Track.git
   cd Realtime-Device-Track

## 🧠 How It Works
When a client connects, it is assigned a unique socket ID.
Clients can send their live location via socket.emit('send-location', coords).
The server broadcasts this to all other clients using io.emit('receive-location').
On the map, markers are added or updated for each client based on their ID.

## 🗺️ Map Integration
The project uses Leaflet.js to display the map.
Map tiles are served by OpenStreetMap.
Markers are dynamically updated as new coordinates are received.

## 🔐 Security & Notes
This is a basic prototype. Do not use in production without HTTPS, authentication, and data sanitization.
GPS accuracy may vary depending on the client device and permissions.

## 🤝 Contributing
Feel free to fork this project and send a pull request with improvements or features!
