import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {CategoryCRM, CategoryList} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"
import {MERCHANT_GUID} from "../constants/merchant"
import {EntityType} from "../types/bh"
import axios from "axios";


export class CategoryStore {
    category: CategoryList;

    constructor() {
        this.category = {
        } as CategoryList;

        makeObservable(this, {
            category: observable,
            fetchData: action,
            Category : computed
        });
    }
    fetchData = async () => {
        this.category = {}
        const response = await axios.get(`${CRM_BASE_URL}/public/merchants/${MERCHANT_GUID}/tags`)
        for (let i = 0; i < response.data.length; i++) {
            this.category[response.data[i].guid] = response.data[i];
        }
    }
    get Category() {
        if (!this.category || Object.keys(this.category).length ==  0) {
            this.fetchData().then();
        }
        console.log(Object.keys(this.category))

        return this.category
    }
}
export const CategoryStoreG = new CategoryStore()
const CategoryStoreContext = createContext<CategoryStore>(CategoryStoreG)
export default CategoryStoreContext;
