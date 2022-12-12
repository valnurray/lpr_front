import axios from 'axios';

const BASCET_API_BASE_URL = 'http://localhost:8080/api/bascet';

class BascetService{

    getBascet(){
        return axios.get(BASCET_API_BASE_URL);
    }

    getBascetbyId(bascetId){
        return axios.get(BASCET_API_BASE_URL + '/' + bascetId)
    }

    updateBascet(bascet) {
        return axios.put(BASCET_API_BASE_URL + '/' + bascet.bascetId, {
                countOrders: bascet.countOrders,
                totalOrderPrice: bascet.totalOrderPrice,
                orderFields: [{
                    orderInt: bascet.orderFields.orderInt,
                    timeOrder: bascet.orderFields.timeOrder,
                    totalPrice: bascet.orderFields.totalPrice,
                    product: {
                        productId: bascet.orderFields.product.productId,
                        title: bascet.orderFields.product.title,
                        visibility: bascet.orderFields.product.visibility,
                        price: bascet.orderFields.product.price,
                        info: bascet.orderFields.product.info,
                        imgpath: bascet.orderFields.product.imgpath,
                        contents: [{
                            contentId: bascet.orderFields.product.contents.contentId,
                            title: bascet.orderFields.product.contents.title,
                            info: bascet.orderFields.product.contents.info,
                            link: bascet.orderFields.product.contents.link
                        }]
                    }
                }]
        });
    }
}

export default new BascetService();