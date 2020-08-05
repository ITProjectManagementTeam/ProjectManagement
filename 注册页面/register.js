function getinfo(){
	var user = document.getElementById('username').value;
	var email = document.getElementById('emailAdd').value;
	var password = document.getElementById('passwd').value;
	
	if(!user || user == ""){
		alert("请输入用户名");
		return false;
	}
	if(!email || email == ""){
		alert("请输入邮箱");
	}
	if(!password || password == ""){
		alert("请输入密码");
	}
	
	// 用户名格式检查：同时包含字母数字
	var regex = /^(\d+[a-zA-Z]+|[a-zA-Z]+\d+)([0-9a-zA-Z]*)$/; 
	// 邮箱格式检查
	var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;

	if (!regex.test(user)) { 
		alert("用户名必须同时包含字母和数字！");
	}
	else if(!reg.test(email)){
		alert("请输入正确格式的邮箱！");
	}
	else {
		alert("注册成功！");
	}
	
}

function returnToLogin(){
	
}