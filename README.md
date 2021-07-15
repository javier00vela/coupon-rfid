# Aplicativo de cupones RFID

Programas como prerequisitos de instalación del proyecto:


> Docker Desktop - [Click para ingresar en la pagina de descarga](https://www.docker.com/products/docker-desktop)

> Python - [Click para ingresar en la pagina de descarga](https://www.python.org/downloads/)

Información recomendada para el despliegue del aplicativo :

~~~
 > Tener en cuenta tener los puertos del SERIAL 'COM3'

 > Tener en cuenta la instalación del driver dxe arduino 
   en caso que no se reconozca el driver de manera nativa

 > tener activado el servicio de docker desktop en su equipo

 > Conectar Dispositivo Arduino Uno con el equipo

~~~

 Pasos para desplegar el aplicativo : 

```properties
# Compilar script arduino 
foo@bar:~$ arduino-compiler.bat
# Activar contenedores principales
foo@bar:~$ docker-compose up 
# Activar lector de tarjetas RFID
foo@bar:~$ pip install -r hardware/_python.hardware/requirements.txt
foo@bar:~$ python hardware/_python.hardware/app.py
```


>[Click para descargar el manual de usuario y/o desarrollador](https://github.com/javier00vela/coupon-rfid/blob/master/docs/IEEE/projecto_rfid_diplomado.doc)