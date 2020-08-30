import Http from './Http';

const UserApi = {};

/**
 * 用于登录，信息保存到绘画
 * @param {} id 
 */
UserApi["getUserAndSaveInSessionStorage"] = async (id)=> {
    let user = await UserApi.getUser(id);
    if (user.status != 200) {
        return user;
    }
    sessionStorage.setItem("user", JSON.stringify(user.data));
    return user.data
}

/**
 * 获取用户信息
 * @param {*} id 
 */
UserApi["getUser"]  = async (id)=>{
    let getUserResult = await Http.getUser({},false,{},"/" + id);
    return getUserResult
}

/**
 * 查询用户
 */
UserApi["listUsers"] = async (pageNum, pageSize, orderBy) => {
    let res = await Http.listUsers({
        pageNum: pageNum,
        pageSize: pageSize,
        orderBy: orderBy
    });

    return res.data
}

/**
 * 更新用户
 */
UserApi["updateUser"] = async (user) => {
    let res = await Http.putUser(user);
    return res
}

/**
 * 更新用户头像
 */
UserApi["updateUserAvatar"] = async (id, avatar) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    let res = await Http.putUserAvatar({
        id:id,
        avatar:avatar
    }, true, config);
    return res
}




export default UserApi