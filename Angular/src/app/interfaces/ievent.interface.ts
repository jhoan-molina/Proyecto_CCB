export interface IEvent{
    id?:string;
    title: string;
    start: Date;
    end?: Date | null;
}