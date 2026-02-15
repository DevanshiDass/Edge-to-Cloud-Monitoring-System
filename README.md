# Edge-to-Cloud Monitoring System

## Overview

This project is a unified IoT monitoring platform that collects real-time telemetry from devices using MQTT and visualizes it through a cloud-hosted dashboard.

The system demonstrates a complete IoT pipeline:

Device → MQTT Broker → Backend Service → Database → REST API → Web Dashboard

---

## Live Demo

Frontend Dashboard:
https://edge-to-cloud-monitoring-system.vercel.app

Backend API:
https://edge-to-cloud-monitoring-system.onrender.com/data/latest

---

## Features

* Real-time IoT data ingestion via MQTT
* Automatic data storage in database
* REST APIs for data access
* Live graphical visualization
* Cloud deployment
* Scalable architecture for multiple devices

---

## Architecture

1. IoT device publishes sensor data to MQTT broker
2. Node.js backend subscribes to topic
3. Data stored in SQLite database
4. REST API exposes telemetry
5. React dashboard fetches and displays live data

---

## Tech Stack

Backend:

* Node.js
* Express.js
* MQTT.js
* SQLite

Frontend:

* React.js
* Chart.js

Cloud:

* Render (Backend Hosting)
* Vercel (Frontend Hosting)
* HiveMQ Public Broker

---

## MQTT Test Command

Example simulation:

mosquitto_pub -h broker.hivemq.com -t omkar/demo/device1 -m 30

---

## API Endpoints

GET /data/latest
Returns latest sensor readings

GET /data/all
Returns historical readings

---

## Author

Devanshi Das
