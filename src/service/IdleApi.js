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
IdleApi["postIdleInfo"] =async(idleInfo)=> {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    let postIdleInfoResult=await Http.postIdle(idleInfo, true, config);
    return postIdleInfoResult;
}

/**
 * 获取推荐商品
 */
IdleApi["getRecommendation"] =async(pageInfo)=> {
    //console.log("getRecommendation");
    let getRecommendationResult=await Http.recommendationUsers(pageInfo);
    return getRecommendationResult;
}

/**
 * 关键子搜索闲置
 */
IdleApi["getSearch"] =async(searchInfo)=> {
    //console.log("getRecommendation");
    let getSearchResult=await Http.searchIdles(searchInfo);
    return getSearchResult;
}

/**
 * 获取商品信息
 */
IdleApi["getIdleInfo"] =async(id)=> {
    let getIdleInfoResult = await Http.getIdle({},false,{},"/" + id);
    return getIdleInfoResult;
}
export default IdleApi