//这个方法用于发送ajax之前进行配置相关的属性
//当发送$.ajax等请方法的时候，都会先触发这个方法
//option 是指ajax请求所有的配置

$.ajaxPrefilter(function (option) {
    console.log(option.url);
    option.url = 'http://ajax.frontend.itheima.net' + option.url
})