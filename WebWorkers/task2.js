
addEventListener("message", functiom (e) {

	var data = e.data;

	switch (data.cmd) {
		case 'start':
		    postMessage("ПОТОК ЗАПИЩЕН : " + data.msg);
		    break;
		case 'stop':
		    postMessage("ПОТОК ОСТАНОВЛЕН : " + data.msg);
		    close();
		    break;
		default:
		     postMessage("НЕИЗВЕСТНАЯ КОМАНДА : " + data.msg);
	}
}, true);