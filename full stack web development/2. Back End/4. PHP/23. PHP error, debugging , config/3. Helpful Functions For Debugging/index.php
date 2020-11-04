<?php
	//$foo = [0,1,2,3,4,5];
	//echo $foo;
	//print_r($foo);
/*
	class foo{
		private $name;

		function __construct($name){
			$this->name = $name;
		}
	}
	$foo = new Foo('Brad');
	$values = [1, true, 'foo', [0,1,2],null, $foo];
	foreach($values as $val){
		var_dump($val);
	}
	//var_dump($foo);
*/

/*
	function console_log($data){
		echo '<script>';
		echo 'console.log('.json_encode($data).')';
		echo '</script>';
	}

	$foo = [0,1,2,3,4];
	console_log($foo);
*/

function a($txt){
	b('Brad');
}

function b($txt){
	c('John');
}

function c($txt){
	var_dump(debug_backtrace());
}

a('Tom');
