import {createContext} from "react";
import {makeObservable, observable, action, computed} from "mobx";
import {UserCRM, Entity} from "../types/crm";
import {CRM_BASE_URL} from "../constants/endpoins"

export class UserStore {
    user: UserCRM;
    is_uploaded: boolean;
    is_authenticated: boolean;
    current_agent: string;
    current_blogger: string;
    current_advertiser: string;
    current_merchant: string;

    constructor() {
        this.is_authenticated = false;
        this.is_uploaded = false;
        this.current_agent = '';
        this.current_blogger = '';
        this.current_advertiser = '';
        this.current_merchant = '';

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
            user: observable,
            fetchData: action,
            setFirstName: action,
            setLastName: action,
            setEmail: action,
            setCurrentAgent: action,
            setCurrentAdvertiser: action,
            setCurrentBlogger: action,
            setCurrentMerchant: action,
            uploadData: action,
            isAuthenticated: computed,
            isUploaded: computed,
            User: computed,
            Agent: computed,
            Advertiser: computed,
            Blogger: computed,
            Merchant: computed
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
    setCurrentAgent = (text: string) => {
        this.current_agent = text;
    }
    setCurrentAdvertiser = (text: string) => {
        this.current_advertiser = text;
    }
    setCurrentBlogger = (text: string) => {
        this.current_blogger = text;
    }
    setCurrentMerchant = (text: string) => {
        this.current_merchant = text;
    }
    fetchData = async () => {
        try {
            this.is_authenticated = false;
            const response = await fetch(CRM_BASE_URL + 'users/');

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
            const response = await fetch(CRM_BASE_URL + 'users/', {
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

    get isAuthenticated() {
        return this.is_authenticated;
    }

    get isUploaded() {
        return this.is_uploaded;
    }

    get User() {
        return this.user;
    }

    get Agent() {
        return this.current_agent;
    }

    get Advertiser() {
        return this.current_advertiser;
    }

    get Blogger() {
        return this.current_blogger;
    }

    get Merchant() {
        return this.current_merchant;
    }
};
const UserStoreContext = createContext<UserStore>(new UserStore())
export default UserStoreContext;
