function urlAuthentication_createHash(username, password, datetime) {
	var hash = b64_sha256(username + password + datetime);
	return hash;
}