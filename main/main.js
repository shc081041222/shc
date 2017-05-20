module.exports = function main(email, suffixes) {
	var emailList = email.split("@");
	var str = emailList[1];
	var flag = false;
	for(var i = 0; i < suffixes.length; i++){
		if(str == suffixes[i]){
			flag = true;
		}
	}
	
	return flag;
};
