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
