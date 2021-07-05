import time
from arduino.serial import ArduinoSerial
import requests
import socketio
PORT_CONECTION = 'http://localhost:8089'
sio = socketio.Client()
sio.connect(PORT_CONECTION)
serial = ArduinoSerial()
if serial.connectPort():
    while True:
        time.sleep(1)
        print("Escuchando petición")
        datos = serial.listenBytes()
        print(datos)
        sio.emit('_RFID_', {'data': datos})
else:
     print("Error al conectar puerto...")