# Aplicativo | RFID Cupones



![RFID coupons](https://github.com/javier00vela/coupon-rfid/blob/master/docs/imagenes/login.png)

Programas como prerequisitos de instalación del proyecto:

> Docker Desktop - [Click para ingresar en la pagina de descarga](https://www.docker.com/products/docker-desktop)

> Python - [Click para ingresar en la pagina de descarga](https://www.python.org/downloads/)

> Arduino IDE - [Click para ingresar en la pagina de descarga](https://www.arduino.cc/en/software)

Información recomendada para el despliegue del aplicativo :

~~~
 > Tener en cuenta tener los puertos del SERIAL 'COM' que se asigne para su dispositivo arduino

 > Tener en cuenta la instalación del driver dxe arduino en caso que no se reconozca el driver de manera nativa

 > tener activado el servicio de docker desktop en su equipo

 > Conectar Dispositivo Arduino Uno con el equipo
 
 > cliente de mysql (opcional)

~~~

 Pasos para desplegar el aplicativo : 

```properties
# Compilar script arduino 
foo@bar:~$ arduino-compiler.bat
#Construir contenedores
foo@bar:~$ docker-compose build 
# Desplegar contenedores principales
foo@bar:~$ docker-compose up 
# Activar lector de tarjetas RFID
foo@bar:~$ pip install -r hardware/_python.hardware/requirements.txt
foo@bar:~$ python hardware/_python.hardware/app.py
```
![RFID coupons](https://github.com/javier00vela/coupon-rfid/blob/master/docs/imagenes/arduino_vista.jpeg)

>[Click para descargar el manual de usuario y/o desarrollador](https://github.com/javier00vela/coupon-rfid/blob/master/docs/IEEE/projecto_rfid_diplomado.pdf)
