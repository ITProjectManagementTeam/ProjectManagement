function getinfo(){
	var user = document.getElementById('username').value;
	var passwd = document.getElementById('passwd').value;
	if(!user || user == ""){
		alert("请输入用户名");
		return false;
	}
	if(!passwd || passwd == ""){
		alert("请输入密码");
	}

	if(user=="123" && passwd == "123123"){
		alert("登陆成功，正在跳转，请耐心等待")
	}
	else{
		alert("用户或密码错误")
	}
}

function forget(){
	alert("不会吧不会吧，不会真有人记不住密码的?")
}