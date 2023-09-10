import {EntityType} from "./bh";

export type EntityData = {
    name: string;
    guid: string;
    email: string;
    meta_data: object;
};

export interface Entity {
    [guid: string]: EntityData
}

export type UserCRM = {
    first_name: string;
    last_name: string;
    identity: string;
    email: string;
    is_blocked: boolean;
    agents: Entity;
    clients: Entity;
    merchants: Entity;
    partners: Entity;
}


export type ServiceCRM = {
    name: string;
    description: string;
    category: string;
    price: number;
    meta_data: string;
}


export type CategoryCRM = {
    created_at: string;
    updated_at: string;
    guid: string;
    category: string;
    description: string;
}

export interface CategoryList {
    [guid: string]: CategoryCRM
}


export interface ServiceList {
    [guid: string]: ServiceCRM
}