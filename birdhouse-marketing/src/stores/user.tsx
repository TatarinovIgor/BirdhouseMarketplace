import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {UserCRM, Entity} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"
import {EntitiesType, EntityType} from "../types/bh"

export class UserStore {
    user: UserCRM;
    is_authenticated: boolean
    currentEntityType: string
    currentEntityID: string

    constructor() {
        this.is_authenticated = false;
        this.currentEntityType = EntitiesType.None;
        this.currentEntityID = '';
        this.user = {
            first_name: '',
            last_name: '',
            identity: '',
            email: '',
            is_blocked: false,
            agents: {} as Entity,
            clients: {} as Entity,
            merchants: {} as Entity,
            partners: {} as Entity,
        } as UserCRM;
        makeObservable(this, {
            is_authenticated: observable,
            user: observable,
            fetchData: action,
            setFirstName: action,
            setLastName: action,
            setEmail: action,
            uploadData: action,
            isAuthenticated: computed,
            User: computed,
            CurrentEntity: computed,
        });
    }

    setFirstName = (text: string) => {
        this.user.first_name = text;
    }
    setLastName = (text: string) => {
        this.user.last_name = text;
    }
    setEmail = (text: string) => {
        this.user.email = text;
    }
    fetchData = async () => {
        try {
            this.is_authenticated = false;
            this.currentEntityType = EntitiesType.None;
            const query = await fetch(CRM_BASE_URL + '/users/');
            const response = await query.json();
            runInAction(() => (this.user = response));
            this.is_authenticated = true;
            // define current entities
            const keys = Object.keys(this.user.clients);
            if ((Object.keys(this.user.clients)).length > 0) {
                this.currentEntityType = EntitiesType.Advertisers;
                this.currentEntityID = Object.keys(this.user.clients)[0];
            } else if ((Object.keys(this.user.partners)).length > 0) {
                this.currentEntityType = EntitiesType.Bloggers;
                this.currentEntityID = Object.keys(this.user.partners)[0];
            } else if((Object.keys(this.user.agents)).length > 0) {
                this.currentEntityType = EntitiesType.Agents;
                this.currentEntityID = Object.keys(this.user.agents)[0];
            } else if((Object.keys(this.user.merchants)).length > 0) {
                this.currentEntityType = EntitiesType.Admins;
                this.currentEntityID = Object.keys(this.user.merchants)[0];
            } else {
                this.currentEntityType = '';
                this.currentEntityID = '';
            }
            console.log(response);
            return true;
        } catch (e: any) {
            this.is_authenticated = false;
            console.log(e.message)
        }
        return false;
    }
    uploadData = async () => {
        try {
            const data = {
                first_name: this.user.first_name,
                last_name: this.user.last_name,
            }
            const response = await fetch(CRM_BASE_URL + '/users/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    }

    get isAuthenticated() {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        return this.is_authenticated;
    }

    get User() {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        return this.user;
    }

    get CurrentEntity() {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        const current = {} as EntityType;
        current.Type = this.currentEntityType;
        current.ID = this.currentEntityID;
        current.Email = EntitiesType.None;
        current.Name = EntitiesType.None;
        switch (current.Type) {
            case EntitiesType.Agents:
                current.Email = this.user.agents[current.ID].email;
                current.Name = this.user.agents[current.ID].name;
                break;
            case EntitiesType.Advertisers:
                current.Email = this.user.clients[current.ID].email;
                current.Name = this.user.clients[current.ID].name;
                break;
            case EntitiesType.Bloggers:
                current.Email = this.user.partners[current.ID].email;
                current.Name = this.user.partners[current.ID].name;
                break;
            case EntitiesType.Admins:
                current.Email = this.user.merchants[current.ID].email;
                current.Name = this.user.merchants[current.ID].name;
        }
        return current;
    }
};
export const UserStoreG = new UserStore()
const UserStoreContext = createContext<UserStore>(UserStoreG)
export default UserStoreContext;
