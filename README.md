# Edge-to-Cloud Monitoring System

A cloud-native IoT telemetry platform that ingests real-time device data over MQTT, processes it in a backend service, stores it in a database, and visualizes live and historical readings through a web dashboard.

This project demonstrates an end-to-end IoT data pipeline from device communication to cloud analytics.

---

## Objective

Design and deploy a complete online IoT monitoring system capable of:

- Receiving real-time telemetry from distributed devices
- Persisting data reliably in a database
- Providing programmatic access via REST APIs
- Visualizing live sensor values
- Running entirely on cloud infrastructure

---

## Live Deployment

**Dashboard**  
https://edge-to-cloud-monitoring-system.vercel.app

**Backend API (Latest Data)**  
https://edge-to-cloud-monitoring-system.onrender.com/data/latest

---

## System Architecture

IoT Device → MQTT Broker → Ingestion Service → Database → REST API → Dashboard


### Data Flow

1. Device publishes telemetry to an MQTT topic
2. Backend service subscribes to the topic
3. Payload is parsed and validated
4. Data stored with timestamp in database
5. REST API exposes stored telemetry
6. Frontend polls API and renders live charts

---

## Key Features

### Real-Time Ingestion
- MQTT-based device communication
- Topic-based device separation
- Continuous data streaming

### Data Persistence
- Lightweight relational storage (SQLite)
- Historical telemetry tracking
- Time-series compatible schema

### Backend API
- RESTful endpoints
- Latest reading retrieval
- Historical dataset retrieval

### Visualization
- Live updating graphs
- Responsive web dashboard
- Near real-time polling updates

### Deployment
- Fully cloud hosted
- Independently scalable frontend and backend

---

## Technology Stack

### Backend
- Node.js
- Express.js
- MQTT.js
- SQLite

### Frontend
- React.js
- Chart.js

### Cloud Infrastructure
- Render — Backend hosting
- Vercel — Frontend hosting
- HiveMQ Public Broker — MQTT messaging

---

## API Endpoints

| Endpoint        | Method | Description |
|--------------- |------ |----------- |
| `/data/latest` | GET | Returns most recent telemetry record |
| `/data/all`    | GET | Returns complete historical dataset |

---

## Simulating an IoT Device

Publish a sensor value to the MQTT broker:

mosquitto_pub -h broker.hivemq.com -t omkar/demo/device1 -m 30


The dashboard will automatically update with the new reading.

---

## Scalability Design

Devices can be uniquely identified using topic hierarchy:

omkar/demo/{device_id}


Examples:
omkar/demo/device1
omkar/demo/device2


This allows the system to scale to multiple devices without architecture changes.

---

## Author
Devanshi Das
