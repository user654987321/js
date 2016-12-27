var uid = API.getUser().id;

API.on(API.CHAT, function(data) {
	if (data.uid == API.getUser().id && data.message.length > 0 && data.message[0] == '!') {
		API.moderateDeleteChat(data.cid);
	}
});
