var express = require('express');
var router = express.Router();

var aa = ""
//https://velog.io/@ckstn0777/Express-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%84%EB%8B%A8%EC%82%AC%EC%9A%A9%EB%B2%95
//https://expressjs.com/ko/starter/static-files.html
//https://junspapa-itdev.tistory.com/9?category=781922
//라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
var boardList = require('./boardList');

router.get('/', function(req, res, next) {
	
	aa = aa + "aa!";
	
	console.log(aa);

	boardList.run(req, res);
});


router.get('/insert', function(req, res, next) {
	
	aa = aa + "aa!";
	
	console.log(aa);
	
	boardInsert.run(req, res);
});

router.get('/update', function(req, res, next) {
	
	aa = aa + "aa!";
	
	console.log(aa);
	
	boardUpdate.run(req, res);
});

//모듈에 등록해야 web.js에서 app.use 함수를 통해서 사용 가능
module.exports = router;