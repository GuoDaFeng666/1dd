<?php

namespace app\shop\controller;

use app\shop\model\shop\User;

/**
 * 商户认证
 */
class Passport extends Controller
{
    /**
     * 商户后台登录
     */
    public function login()
    {
        // 登录前清空session
        session('jjjshop_store', null);
        // $user接收页面提交过来的账户及密码
        $user = $this->postData();
        // salt_hash将页面的密码进行加密处理
        $user['password'] = salt_hash($user['password']);
        $model = new User();
        // checkLogin() model\shop\Use.php
        if ($model->checkLogin($user)) {
            return $this->renderSuccess('登录成功', $user['username']);
        }
        return $this->renderError($model->getError()?:'登录失败');
    }

    /**
     * 退出登录
     */
    public function logout()
    {
        session('jjjshop_store', null);
        return $this->renderSuccess('退出成功');
    }

    /*
   * 修改密码
   */
    public function editPass()
    {
        $model = new User();
        if ($model->editPass($this->postData(), $this->store['user'])) {
            return $this->renderSuccess('修改成功');
        }
        return $this->renderError($model->getError()?:'修改失败');
    }
}
