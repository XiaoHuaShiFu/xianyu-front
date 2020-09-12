import Http from './Http';

const IdleApi = {};

/**
 * 获取闲置信息
 * @param {*} id 
 */
IdleApi["getIdle"]  = async (id)=>{
    let getIdleResult = await Http.getIdle({},false,{},"/" + id);
    return getIdleResult
}

/**
 * 查询闲置
 */
IdleApi["listIdles"] = async (idleQuery) => {
    let res = await Http.listIdles(idleQuery);
    return res;
}

/**
 * 发布闲置
 */
//do publishIdle


export default IdleApi