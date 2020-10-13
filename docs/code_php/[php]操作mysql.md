---
title: 操作mysql
date: 2018-09-21 09:47:00
tags:
  - mysql
  - php
categories:
  - 代码
---
使用方法：
index.php：
```php
<?php
  require_once 'config/site_config.php';
  require_once 'config/mysql.php';
  $Seo = $db->get_one("MyGuests","openid='$openid'");
```

site_config.php：
```php
<?php
//*******************数据库相关配置（开始）****************
$db_host	=	'localhost';	//数据库地址
$db_port	=	'3306';		//数据库端口
$db_username	=	'root';		//数据库用户名
$db_database	=	'yunva-fesql';	//数据库名称
$db_password	=	'';		//数据库密码
$db_char	=	'utf8';		//数据库编码
//*******************数据库相关配置（结束）****************
?>
```

mysql.php：
```php
<?php
$db=new db_class();

class db_class{
	var $link_id  	=	0;
	var $query_id 	=	0;
	var $record   	=	array();
	var $errno		=	0;
	var $error		=	'';
	
	function connect(){	//连接数据库
		global $db_host, $db_username, $db_password, $db_database, $db_port, $db_char;
		$this->link_id=@mysql_connect($db_host.':'.$db_port, $db_username, $db_password);
		$this->link_id || $this->haltmsg('无法链接数据库，请检查数据库链接配置文件！');
		
		$db_char && @mysql_query("set names '$db_char'");
		@mysql_select_db($db_database) || $this->haltmsg('无法选择数据库，请检查数据库名称是否正确！');
	}
	function next_record(){	//返回记录集
		$this->record=@mysql_fetch_assoc($this->query_id);
		return is_array($this->record);
	}
	
	function haltmsg($msg){	//消息提示
		$this->errno=@mysql_errno($this->link_id);
		$this->error=@mysql_error($this->link_id);
		echo "$msg<br>错误代码：<i>#{$this->errno}</i> - {$this->error}";
	}
	
	function query($sql){	//直接执行SQL语句
		!$this->link_id && $this->connect();
		$this->query_id=mysql_query($sql, $this->link_id);
		!$this->query_id && $this->haltmsg('SQL语句出错：'.$sql);
		return $this->query_id;
	}
	
	//------------以下为查询相关的函数---------------------------------
	/*
	**	$Seo = $db->get_all("fesql");	//数据表名称
	** get_all("fesql","projects LIKE '%目%'"); // 模糊查询projects字段中带‘目’字
	*/ 
	function get_all($table,$where=1, $field='*',  $order=1){	//返回整个数据表
		$this->query("select $field from $table where $where order by $order");
		while($this->next_record()){
			$result[]=$this->record;
		}
		return $result;
	}
	/* 分页返回数据
	**	$Seo = $db->get_limit("fesql","11","5");// 11为起始行数，5为数据条数
	*/ 
	function get_limit($table, $start_row=0, $row_count=20, $where=1, $field='*', $order=1){	//分页返回记录集
		echo "select $field from $table where $where order by $order limit $start_row, $row_count"."------";
		$this->query("select $field from $table where $where order by $order limit $start_row, $row_count");
		$result=array();
		while($this->next_record()){
			$result[]=$this->record;
		}
		return $result;
	}
	/* 查询数据，多条时只返回符合条件的第一条
	** $Seo = $db->get_one("fesql","id=$id");
	** or
	** $Seo = $db->get_one("userlist","name=$name and pwd=$pwd");// name='admin' and pwd='123'
	*/
	function get_one($table, $field='*', $where=1, $order=1){	//返回一条记录
		$this->query("select $field from $table where $where order by $order limit 1");
		$this->next_record();
		$result=$this->record;
		return $result;
	}
	/* 返回一个字段值条
	** $Seo = $db->get_value("fesql","id=61","class");// 第二个参数为查询条件，第三个为字段名
	*/
	function get_value($table, $where=1, $field, $order=1){	//返回一个字段值
		$this->query("select $field from $table where $where order by $order limit 1");
		$this->next_record();
		$result=$this->record;
		return $result[$field];
	}
	/* 返回表的总记录数
	** $Seo = $db->get_value("fesql");
	*/
	function get_row_count($table, $where=1){	//返回总记录数
		$this->query("select count(*) as row_count from $table where $where");
		$this->next_record();
		$result=$this->record;
		return $result['row_count'];
	}
	/* 返回符合查询条件的记录数
	** $Seo = $db->get_sum("fesql","projects='元青诗谱'");// 查询条件
	*/
	function get_sum($table, $field, $where=1){
		$this->query("select sum($field) as sum_count from $table where $where");
		$this->next_record();
		$result=$this->record;
		return $result['sum_count'];
	}
	/*
	**	范围分区
	*/ 
	function get_max($table, $where=1, $field){
		$this->query("select max($field) as max_value from $table where $where");
		$this->next_record();
		$result=$this->record;
		return $result['max_value'];
	}
	/*
	**	最后一次操作关联ID号
	*/ 
	function get_insert_id(){	//最后一次操作关联ID号
		return mysql_insert_id($this->link_id);
	}
	/*  返回数据表字段
	**	show_columns("fesql"); // 返回字段详细信息（包含数据类型等）
	**  show_columns("fesql","1"); // 返回字段名（不含其他信息）
	*/ 
	function show_columns($table, $only_return_field_name=0){	//返回数据表字段
		$this->query("show columns from $table");
		$result=array();
		while($this->next_record()){
			$result[]=$only_return_field_name==0?$this->record:$this->record['Field'];
		}
		return $result;
	}
	/* 插入数据
	** $data = array('CateId'=>'2','name'=>'张三','password'=>'2');
	** $db->insert("info_category",$data);
	*/
	function insert($table, $data){	//插入记录
		$fields='';
		$values='';
		while(list($field, $value)=each($data)){
			$fields.="$field,";
			$values.="'$value',";
		}
		$fields=substr($fields, 0, -1);
		$values=substr($values, 0, -1);
		return $result = $this->query("insert into $table($fields) values($values)");
	}
	/* 更新数据表
	**	$data = array(
	**		'projects'=>$projects,
	**		'class'=>$class
		);
	$Seo = $db->update("fesql","id=0",$data);
	*/ 
	function update($table, $where=0, $data){	//更新数据表
		$upd_data = '';
		while(list($field, $value)=each($data)){
			$upd_data.="$field='$value',";
		}
		$upd_data=substr($upd_data, 0, -1);
		return $result = $this->query("update $table set $upd_data where $where");
	}
	/* 删除数据
	** $Seo = $db->delete("fesql","id=".$id);
	*/
	function delete($table, $where=0){	//删除数据
		return $result = $this->query("delete from $table where $where");
	}
}
?>
```