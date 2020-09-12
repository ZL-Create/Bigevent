//这个方法用于发送ajax之前进行配置相关的属性
//当发送$.ajax等请方法的时候，都会先触发这个方法
//option 是指ajax请求所有的配置

$.ajaxPrefilter(function (option) {
    console.log(option.url);
    option.url = 'http://ajax.frontend.itheima.net' + option.url


    // 统一为有权限的接口，设置 headers 请求头
    if (option.url.indexOf('/my/') !== -1) {
        option.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // 不论成功还是失败，最终都会调用 complete 回调函数
    option.complete = function (res) {
        // console.log('执行了 complete 回调：')
        // console.log(res)
        // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 1. 强制清空 token
            localStorage.removeItem('token')
            // 2. 强制跳转到登录页面
            location.href = '/login.html'
        }
    }
})