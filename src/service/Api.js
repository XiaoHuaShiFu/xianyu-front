const APIS = {
    // token
    postToken: {
        method: 'post',
        url: '/v1/tokens'
    },

    // user
    postUser: {
        method: 'post',
        url: '/v1/users'
    },
    getUser: {
        method: 'get',
        url: '/v1/users'
    },
    listUsers: {
        method: 'get',
        url: '/v1/users'
    },
    putUser: {
        method: 'put',
        url: '/v1/users'
    },
    putUserAvatar: {
        method: 'put',
        url: '/v1/users/avatars'
    },

    // idle
    postIdle: {
        method: 'post',
        url: '/v1/idles'
    },
    getIdle: {
        method: 'get',
        url: '/v1/idles/ID'
    },
    listIdles: {
        method: 'get',
        url: '/v1/idles'
    },
    putIdle: {
        method: 'put',
        url: '/v1/idles'
    },

    // search
    searchIdles: {
        method: 'get',
        url: '/v1/search/idles'
    },
    searchUsers: {
        method: 'get',
        url: '/v1/search/users'
    },

    // recommendation
    recommendationUsers: {
        method: 'get',
        url: '/v1/recommendation/idles'
    },

    //address
     postAddress: {
        method: 'post',
        url: '/v1/users/addresses'
    },
    listAddresses: {
        method: 'get',
        url: '/v1/users/addresses'
    },

    //message
    listNotices: {
        method: 'get',
        url: '/v1/users/notices'
    },

    // order
    getBuyerOrder: {
        method: 'get',
        url: '/v1/orders/BuyerID'
    },
    getSellerOrder: {
        method: 'get',
        url: '/v1/orders/SellerID'
    },
    postOrder:{
        method: 'post',
        url: '/v1/orders'
    },
    putOrder:{
        method: 'put',
        url: '/v1/orders'
    },
    // comments
    getComments:{
        method: 'get',
        url: '/v1/comments'
    },
}

export default APIS