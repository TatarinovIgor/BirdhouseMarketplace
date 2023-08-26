import { createContext } from "react";
import { makeObservable, observable, action, computed } from "mobx";
import {UserCRM, Entity} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"

export class UserStore {
    user: UserCRM;
    is_uploaded: boolean;
    is_authenticated: boolean
    constructor() {
        this.is_authenticated = false;
        this.is_uploaded = false;
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
            isUploaded: computed,
            User: computed,
        });
    }
    setFirstName = (text: string) => {
        this.user.first_name = text;
        this.is_uploaded = false;
    }
    setLastName = (text: string) => {
        this.user.last_name = text;
        this.is_uploaded = false;
    }
    setEmail = (text: string) => {
        this.user.email = text;
        this.is_uploaded = false;
    }
    fetchData = async () => {
        try {
            this.is_authenticated = false;
            const response = await fetch(CRM_BASE_URL + '/users/');
            return response.json().then(res => {
                    console.log(res);
                    this.user = res;
                    this.is_authenticated = true;
                    return this.is_authenticated;
                }
            )
        } catch (e: any) {
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
            const response = await fetch(CRM_BASE_URL+ 'users/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                this.is_uploaded = true;
            } else {
                this.is_uploaded = false;
            }
        } catch (error) {
            console.error('Error uploading data:', error);
            this.is_uploaded = false;
        }
    }
    get isAuthenticated () {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        return this.is_authenticated;
    }
    get isUploaded () {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        return this.is_uploaded;
    }
    get User() {
        if (!this.is_authenticated) {
            this.fetchData().then();
        }
        return this.user;
    }
};
const UserStoreContext = createContext<UserStore>(new UserStore())
export default UserStoreContext;
