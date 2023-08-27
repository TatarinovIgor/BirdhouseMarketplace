import {createContext} from "react";
import {makeObservable, runInAction, observable, action, computed} from "mobx";
import {UserCRM, Entity} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"

export class UserStore {
    user: UserCRM;
    is_authenticated: boolean

    constructor() {
        this.is_authenticated = false;
        this.user = {
            first_name: '',
            last_name: '',
            identity: '',
            email: '',
            is_blocked: false,
            agents: {} as Entity[],
            clients: {} as Entity[],
            merchants: {} as Entity[],
            partners: {} as Entity[],
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
            const query = await fetch(CRM_BASE_URL + '/users/');
            const response = await query.json();
            runInAction(() => (this.user = response));
            this.is_authenticated = true;
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
};
export const UserStoreG = new UserStore()
const UserStoreContext = createContext<UserStore>(UserStoreG)
export default UserStoreContext;
