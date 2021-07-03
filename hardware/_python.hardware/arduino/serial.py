import serial

class ArduinoSerial:
    device = ''
    itc = 0

    def __init__(self, port='COM3', itc=9600):
        self.device = port
        self.itc = itc

    def connectPort(self):
        try:
            self.arduino = serial.Serial(self.device, self.itc) 
            if not self.arduino.isOpen():
                arduino.open()
            return True
        except Exception as e:
            print("Error al conectar el puerto",e)
            return False


    def listenBytes(self):
        return self.arduino.readline()
