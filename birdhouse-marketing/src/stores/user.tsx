import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {UserCRM, Entity} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"
import {BHEntities, EntitiesType, EntityType} from "../types/bh"

export class UserStore {
    user: UserCRM;
    is_authenticated: boolean
    currentEntityID: string
    entitiesList: BHEntities

    constructor() {
        this.is_authenticated = false;
        this.currentEntityID = '';
        this.entitiesList = {} as BHEntities;
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
            setCurrentEntity: action,
            uploadData: action,
            isAuthenticated: computed,
            User: computed,
            ListEntities: computed,
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
    setCurrentEntity = (id: string) => {
        this.currentEntityID = id;
    }
    fetchData = async () => {
        try {
            this.is_authenticated = false;
            const query = await fetch(CRM_BASE_URL + '/users/');
            const response = await query.json();
            runInAction(() => (this.user = response));
            this.is_authenticated = true;
            // define current entities
            console.log(response);

            this.entitiesList = {} as BHEntities
            (Object.keys(this.user.clients)).forEach(value => {
                this.entitiesList[this.user.clients[value].guid] = {
                    Type: EntitiesType.Advertisers,
                        Name: this.user.clients[value].name,
                    ID: this.user.clients[value].guid,
                    Email: this.user.clients[value].email
                } as EntityType
            });
            (Object.keys(this.user.partners)).forEach(value => {
                this.entitiesList[this.user.partners[value].guid] = {
                            Type: EntitiesType.Bloggers,
                             Name: this.user.partners[value].name,
                            ID: this.user.partners[value].guid,
                            Email: this.user.partners[value].email
                        } as EntityType
            });
            (Object.keys(this.user.agents)).forEach(value => {
                this.entitiesList[this.user.agents[value].guid] = {
                            Type: EntitiesType.Agents,
                            Name: this.user.agents[value].name,
                            ID: this.user.agents[value].guid,
                            Email: this.user.agents[value].email
                        } as EntityType
            });
            this.user.merchants ? (Object.keys(this.user.merchants)).forEach(value => {
                    this.entitiesList[this.user.merchants[value].guid] = {
                                Type: EntitiesType.Admins,
                                Name: this.user.merchants[value].name,
                                ID: this.user.merchants[value].guid,
                                Email: this.user.merchants[value].email
                            } as EntityType
                }) :
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

    get ListEntities() {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        return this.entitiesList;
    }

    get CurrentEntity() {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        if (!this.entitiesList || Object.keys(this.entitiesList).length < 1) {
            return {} as EntityType
        }
        if (!this.entitiesList.hasOwnProperty(this.currentEntityID)) {
            this.currentEntityID = Object.keys(this.entitiesList)[0];
        }
        return this.entitiesList[this.currentEntityID];
    }
};
export const UserStoreG = new UserStore()
const UserStoreContext = createContext<UserStore>(UserStoreG)
export default UserStoreContext;
