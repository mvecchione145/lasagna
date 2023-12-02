
export interface FileMeta {
    name: string;
    _id: string;
    description: string;
};

export interface Config extends File {
    [key: string]: any;
};

export interface Schema extends File {
    [key: string]: any;
}