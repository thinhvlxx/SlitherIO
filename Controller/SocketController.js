var Players = [];

function _encode(data) {
    return JSON.stringify(data);
}
function _decode(data) {
    return JSON.parse(data);
}
function DestroyPlayer(player_name){

}
function CreatePlayer(player_name){

}

module.exports = function SocketController(io) {
    io.on("connection", function(socket)
	{
		socket.on("disconnect", function() {

			});
         //server lắng nghe dữ liệu từ client
		socket.on("msg", function(data) {
				data = _encode(data);
                if(!!data.Create){
                    CreatePlayer(data.create.name);
                }
                if(!!data.Destroy){
                    DestroyPlayer(data.destroy.name);
                }
                
			});
	});
    //socket.emit("Server-sent-data", data);

}