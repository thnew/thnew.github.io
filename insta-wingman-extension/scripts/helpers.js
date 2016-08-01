function DateTimeNow(secondsToAdd) {
	secondsToAdd = secondsToAdd || 0;
    var date = new Date();
	
	date.setSeconds(date.getSeconds() + secondsToAdd);
	
    return ((date.getUTCDate() < 10) ? "0" : "") + date.getUTCDate() + "/" + (((date.getUTCMonth() + 1) < 10) ? "0" : "") + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear() + "Z" + ((date.getUTCHours() < 10) ? "0" : "") + date.getUTCHours() + ":" + ((date.getUTCMinutes() < 10) ? "0" : "") + date.getUTCMinutes() + ":" + ((date.getUTCSeconds() < 10) ? "0" : "") + date.getUTCSeconds();
}