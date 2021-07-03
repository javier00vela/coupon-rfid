import socket   
import time          
s = socket.socket()         # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345                # Reserve a port for your service.
s.connect((host, port))

while True:
    time.sleep(2)
    print (s.recv(1024))
 