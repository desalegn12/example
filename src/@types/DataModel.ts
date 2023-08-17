import { Timestamp } from 'firebase/firestore';

type FormatOptions = "YYYY-MM-DD" | "YYYY-MM" | "YYYY-WW" | "number" | "currency";

type DefaultAggregationOptions = "count" | "sum" | "avg";

type TypeOptions = "date" | "string" | "number";

export type SchemaItem = {
    defaultAggregaton: DefaultAggregationOptions;
    name: string;
    label: string;
    type: TypeOptions;
    format?: FormatOptions;
    description?: string;
    source?: string;
};

export type SchemaList = SchemaItem[];

export type DataModel = {
    dataSource: string;
    tableConfig: string;
    schema: SchemaList;
    id: string;
    updated?: Timestamp
};


export type DataModelList = DataModel[];