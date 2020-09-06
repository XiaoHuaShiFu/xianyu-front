import Http from './Http';

const AddressApi = {};

/**
 * 查询地址
 */
AddressApi["listAddresses"] = async (addressQuery) => {
    let res = await Http.listAddresses(addressQuery);
    return res;
}

/**
 * 查询地址
 */
AddressApi["saveAddress"] = async (address) => {
    let res = await Http.postAddress(address);
    return res;
}



export default AddressApi