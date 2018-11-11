基于chrome 的被动扫描xss 插件。

二次开发: https://github.com/BlackHole1/autoFindXssAndCsrf

## Usage

更多工具->扩展程序->开启开发者模式->加载已解压的程序(AutoFindXss目录下AutoFindXSS目录)

## 二次开发内容
- [x] 去除掉伪静态xss检测(伪需求)
- [x] 加入多个payload 检测
- [x] 重构项目，加入开关功能，可以一键关闭AutoFindXss的运行。

## dmeo:

GET:

```
<?php 

$x = $_GET['x'];
$d = htmlspecialchars($_GET['d']);
echo $x;
echo $d;
```

![](1.jpg)

POST:
```
<?php 
echo @$_POST['d'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="#" method="post">
		<input type="text" name="x"><br/>
		<input type="text" name="d"><br/>
		<input type="submit" value="submit">
	</form>
</body>
</html>
```

![](2.jpg)