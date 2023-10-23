import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {UserCRM, Entity, ServiceCRM, ServiceList, CategoryCRM} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"
import {MERCHANT_GUID} from "../constants/merchant"
import {BHEntities, EntitiesType, EntityType} from "../types/bh"
import axios from "axios";
import {EAuthLoginFlowId, kratos} from "../pages/auth/kratos";
import {GenericError, LogoutFlow} from "@ory/kratos-client";
import {redirect, useSearchParams} from "react-router-dom";
import {MappingPaths} from "../constants/mapping.paths";

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
        // @ts-ignore
        this.service.categories = [];
        this.service.name = '';
        this.service.description = '';
        this.service.images = [];
        this.service.state = '';
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
        // @ts-ignore
        this.service.categories.push(text);
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
        const response = await axios.get(`${CRM_BASE_URL}/public/merchants/${MERCHANT_GUID}/services`)
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
                this.service[response.data[i].guid] = response.data[i];
        }
    }
    uploadData = async () => {
        try {
            const data = {
                name: this.service.name,
                description: this.service.description,
                categories: this.service.categories,
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
            const resp = await response.json();
            console.log("Response:", resp)
            return resp

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

export const loader = async () => {

    const queryParam = window.location.search;
    const params = new URLSearchParams(queryParam);
    const guid = params.get("guid");
    const apiUrl = `${CRM_BASE_URL}/services/${guid}`;

    console.log(guid)
    try {
        const response = await axios.get(apiUrl)
        console.log("loader response: ", response.data)
        return {
            flow: response.data,
        };
    } catch (e: any) {
        // check for axios@0.21 Error
        if (!e.isAxiosError) {
            throw e;
        }

        const { data } = e.response;

        if (data.error) {
            if ((data.error as GenericError).id === EAuthLoginFlowId.SessionAlreadyAvailable) {
                return redirect(MappingPaths.PRIVATE.EXPLORE_ADVERTISES);
            }
        }

        if (data.ui) {
            return data;
        }
        throw e;
    }
};

export const OfferStoreG = new OfferStore()
const OfferStoreContext = createContext<OfferStore>(OfferStoreG)
export default OfferStoreContext;
