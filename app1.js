const NodeMediaServer = require("node-media-server");
var ffmpegCodec = require("ffmpeg");

const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60,
	},
	http: {
		port: 8000,
		allow_origin: "*",
	},
	relay: {
		ffmpeg: "./ffmpeg-snapshot.tar/ffmpeg-snapshot/ffmpeg/libavcodec",
		tasks: [
			{
				app: "live",
				mode: "push",
				edge: "rtmp://localhost:1936",
			},
		],
	},
};

var nms = new NodeMediaServer(config);
nms.run();
