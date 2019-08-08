import axios from "axios";
import urls from "./URLs";
const appkey = {
    appkey: "dongmeiqi_1547441744650"
};
const size = 5;
const myAJAX = axios.create({
    baseURL: urls.baseURL,
    method: "get",
    params: {
        ...appkey
    }
});

export default {
    findByPage(page) {
        return myAJAX({
            url: urls.findByPage,
            params: {
                page,
                size
            }
        });
    },
    updateStu(stu) {
        return myAJAX({
            url: urls.updateStu,
            params: {
                ...stu
            }
        });
    },
    delStuBySno(sNo) {
        return myAJAX({
            url: urls.delStuBySNo,
            params: {
                sNo
            }
        });
    },
    stuSearch(search, page) {
        return myAJAX({
            url: urls.searchStu,
            params: {
                sex: -1,
                search,
                page,
                size
            }
        });
    },
    addStu(data) {
        return myAJAX({
            url: urls.addStu,
            params: {
                ...data
            }
        });
    }
};
