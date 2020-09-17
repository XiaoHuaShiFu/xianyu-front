import Http from './Http';

const OrderApi = {};
/**
 * 创建订单
 * @param {*} id 
 */
OrderApi["postOrder"]  = async (orderInfo)=>{
    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    let postOrderResult=await Http.postOrder(orderInfo, true, config);
    return postOrderResult;
}