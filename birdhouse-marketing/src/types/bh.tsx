export const EntitiesType = {
    None: ``,
    Agents: 'agents',
    Advertisers: 'clients',
    Bloggers: 'partners',
    Admins: 'merchants'
};
export type EntityType = {
    Type: string,
    ID: string
    Email: string,
    Name: string
}
