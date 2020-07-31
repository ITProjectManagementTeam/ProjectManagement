# Api文档

## 注册

> POST：/api/register

#### 描述

注册接口

#### 请求参数

| 参数名   | 参数类型 | 描述   |
| -------- | -------- | ------ |
| email    | string   | 邮箱   |
| userName | string   | 用户名 |
| password | string   | 密码   |
```json  {.line-numbers}
{
    "username": "username",
    "password": "password",
    "email": "example@mail.com"
}
```

#### 成功返回

| 参数名   | 参数类型 | 描述   |
| -------- | -------- | ------ |
| userId   | int      | 用户id |
| userName | string   | 用户名 |

```json  {.line-numbers}
{
    "msg": "success",
    "code": 0,
    "user": {
        "userId": 12,
        "username": "username",
        "password": "password",
        "email": "example@mail.com",
        "mobile": null
    }
}
```

#### 失败返回

| 参数名 | 参数类型 | 描述                                                  |
| ------ | -------- | ----------------------------------------------------- |
| code   | int      | 错误码，0正确，小于0表示有错误，错误信息会通过msg返回 |
| msg    | string   | 错误提示信息。                                        |

```json  {.line-numbers}
{
    "msg": "注册失败，用户已存在",
    "code": -1
}
```


## 登录

> POST：/api/login

#### 描述

登录接口

#### 请求参数

| 参数名   | 参数类型 | 描述   |
| -------- | -------- | ------ |
| userName | string   | 用户名 |
| password | string   | 密码   |

```json  {.line-numbers}
{
    "username": "username",
    "password": "password"
}
```

#### 成功返回

| 参数名   | 参数类型 | 描述   |
| -------- | -------- | ------ |
| userId   | int      | 用户id |
| userName | string   | 用户名 |
| email    | string   | 邮箱   |
| password | string   | 密码   |
| mobile   | string   | 手机号码|

```json  {.line-numbers}
{
    "msg": "success",
    "code": 0,
    "user": {
        "userId": 12,
        "username": "username",
        "password": "password",
        "email": "example@mail.com",
        "mobile": null
    },
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTU5NjIxMTIxOSwiZXhwIjoxNTk3NTA3MjE5fQ.D0VaGEUOCerkeUuXLH2ongUAdrJPaaBtzQ-Ulz9WAAPkfeh366WUcuM9gahEEDzO4bz33Xa6P1jUnGH1Q4UhIg"
}
```

#### 失败返回

| 参数名 | 参数类型 | 描述                                                  |
| ------ | -------- | ----------------------------------------------------- |
| code   | int      | 错误码，0正确，小于0表示有错误，错误信息会通过msg返回 |
| msg    | string   | 错误提示信息。 
                                       |
```json  {.line-numbers}
{
    "msg": "密码错误",
    "code": -1
}
```

## 修改邮箱

> POST：/api/users/{userId}/email

#### 描述

修改邮箱接口

#### 请求参数

| 参数名 | 参数类型 | 描述 |
| ------ | -------- | ---- |
| email  | string   | 邮箱 |

```json  {.line-numbers}
{
    "email": "example@163.com"
}
```

#### 成功返回

| 参数名 | 参数类型 | 描述 |
| ------ | -------- | ---- |
| email  | string   | 邮箱 |
```json  {.line-numbers}
{
    "msg": "success",
    "code": 0,
    "email": "hi@163.com"
}
```

#### 失败返回

| 参数名 | 参数类型 | 描述                                                  |
| ------ | -------- | ----------------------------------------------------- |
| code   | int      | 错误码，0正确，小于0表示有错误，错误信息会通过msg返回 |
| msg    | string   | 错误提示信息。                                        |

## 修改密码

> POST：/api/users/{userId}/password

#### 描述

修改密码接口

#### 请求参数

| 参数名   | 参数类型 | 描述 |
| -------- | -------- | ---- |
| password | string   | 原密码 |
| newPassword| string |新密码|

```json  {.line-numbers}
{
    "password": "password",
    "newPassword": "newPassword"
}
```

#### 成功返回

| 参数名   | 参数类型 | 描述 |
| -------- | -------- | ---- |
| password | string   | 新密码 |

``` json {.line-numbers}
{
    "msg": "success",
    "password": "newPassword",
    "code": 0
}
```

#### 失败返回

| 参数名 | 参数类型 | 描述                                                  |
| ------ | -------- | ----------------------------------------------------- |
| code   | int      | 错误码，0正确，小于0表示有错误，错误信息会通过msg返回 |
| msg    | string   | 错误提示信息。                                        |