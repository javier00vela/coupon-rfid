from aiohttp import web
import socketio

sio = socketio.AsyncServer(async_mode='aiohttp', logger=True, engineio_logger=True,cors_allowed_origins="*")

app = web.Application()
sio.attach(app)


@sio.on('_RFID_')
async def handle_message(sid, data):
    print(data)
    await sio.emit('_RID_READER_',data)


@sio.on('leave_room', namespace='/rfid')
def handle_message(sid, room):
    sio.leave_room(sid, room=room, namespace='/rfid')


@sio.on('join_room', namespace='/rfid')
def handle_message(sid, room):
    sio.enter_room(sid, room=room, namespace='/rfid')


if __name__ == '__main__':
    web.run_app(app, port=8089)