import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {UserCRM, Entity, ServiceCRM, ServiceList} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"
import {MERCHANT_GUID} from "../constants/merchant"
import {BHEntities, EntitiesType, EntityType} from "../types/bh"
import axios from "axios";

export class OfferStore {
    service: ServiceCRM;
    currentEntityID: number
    entitiesList: ServiceList
    guid: string;

    constructor() {
        this.currentEntityID = 0;
        this.entitiesList = {} as ServiceList;
        this.service = {
        } as ServiceCRM;

        makeObservable(this, {
            service: observable,
            fetchData: action,
            setName: action,
            setDescription: action,
            setCategory: action,
            setPrice: action,
            setMetadata: action,
            setGuid: action,
            uploadData: action,
        });
    }

    setName = (text: string) => {
        this.service.name = text;
    }
    setDescription = (text: string) => {
        this.service.description = text;
    }
    setCategory = (text: string) => {
        this.service.category = text;
    }
    setPrice  = (price: number) => {
        this.service.price = price;
    }
    setMetadata  = (text: string) => {
        this.service.meta_data = text;
    }
    setGuid = (text: string) => {
        this.guid = text;
    }
    fetchData = async () => {
        const response = await axios.get(`${CRM_BASE_URL}/public/merchants/${MERCHANT_GUID}/tags`)
        for (let i = 0; i < response.data.length; i++) {
            this.service[response.data[i].guid] = response.data[i];
        }
    }
    uploadData = async () => {
        try {
            const data = {
                name: this.service.name,
                description: this.service.description,
                //category: this.service.category,
                price: this.service.price.valueOf(),
                meta_data: this.service.meta_data,
            }
            console.log(data)
            const response = await fetch(CRM_BASE_URL + '/partners/' + this.guid + '/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(response.json())
            return response.json()

        } catch (error) {
            console.error('Error uploading data:', error);
        }
    }
    GetOffers(){
        if (!this.service || Object.keys(this.service).length ==  0) {
            this.fetchData().then();
        }
        console.log(Object.keys(this.service))

        return this.service
    }
}
export const OfferStoreG = new OfferStore()
const OfferStoreContext = createContext<OfferStore>(OfferStoreG)
export default OfferStoreContext;
