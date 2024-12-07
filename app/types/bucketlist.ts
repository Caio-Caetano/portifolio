type BucketlistItem = {
    item: string;
    done: boolean;
    date?: string; // Optional property for the date
};

export type BucketlistCategory = {
    icon: string;
    itens: BucketlistItem[];
};

export type Bucketlist = {
    [key: string]: BucketlistCategory;
};
