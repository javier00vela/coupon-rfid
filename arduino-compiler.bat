
PowerShell.exe -Command "hardware/arduino-cli.exe core install arduino:avr@1.6.21 "
PowerShell.exe -Command "hardware/arduino-cli.exe lib install MFRC522   "
PowerShell.exe -Command "hardware/arduino-cli.exe compile  -b arduino:avr:uno  hardware/rfid-reader"
PowerShell.exe -Command "hardware/_python.hardware/Scripts/activate.bat"
PAUSE