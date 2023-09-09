export const EntitiesType = {
    None: ``,
    Agents: 'agents',
    Advertisers: 'clients',
    Bloggers: 'partners',
    Admins: 'merchants'
};
export interface BHEntities {
    [guid: string]: EntityType
}
export type EntityType = {
    Type: string,
    ID: string
    Email: string,
    Name: string
}
