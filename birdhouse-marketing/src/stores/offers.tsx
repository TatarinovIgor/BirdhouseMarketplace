import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {UserCRM, Entity, ServiceCRM} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"
import {EntitiesType, EntityType} from "../types/bh"

export class OfferStore {
    service: ServiceCRM;
    currentEntityID: number
    entitiesList: EntityType[]

    constructor() {
        this.currentEntityID = 0;
        this.entitiesList = [] as EntityType[];
        this.service = {
            name: '',
            description: '',
            category: '',
            price: 0,
            meta_data: '',
            partnerGuid: '',
        } as ServiceCRM;

        makeObservable(this, {
            service: observable,
            fetchData: action,
            setName: action,
            setDescription: action,
            setCategory: action,
            setPrice: action,
            setMetadata: action,
            setPartnerGuid: action,
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
    setPartnerGuid  = (text: string) => {
        this.service.partnerGuid = text;
    }
    fetchData = async () => {
        //ToDo fetch all data
    }
    uploadData = async () => {
        try {
            const data = {
                name: this.service.name,
                description: this.service.description,
                category: this.service.category,
                price: this.service.price.valueOf(),
                meta_data: this.service.meta_data,
                partnerGuid: this.service.partnerGuid
            }
            const response = await fetch(CRM_BASE_URL + '/users/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(response.json())

        } catch (error) {
            console.error('Error uploading data:', error);
        }
    }
}
export const OfferStoreG = new OfferStore()
const OfferStoreContext = createContext<OfferStore>(OfferStoreG)
export default OfferStoreContext;
