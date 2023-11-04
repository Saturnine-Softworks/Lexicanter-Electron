// Generated by Xata Codegen 0.26.9. Please do not edit.
import { buildClient } from '@xata.io/client';
import type {
    BaseClientOptions,
    SchemaInference,
    XataRecord,
} from '@xata.io/client';

const tables = [
    {
        name: 'Languages',
        columns: [
            { name: 'Name', type: 'string' },
            { name: 'Owner', type: 'string' },
            { name: 'File', type: 'json' },
        ],
    },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Languages = InferredTypes['Languages'];
export type LanguagesRecord = Languages & XataRecord;

export type DatabaseSchema = {
    Languages: LanguagesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
    databaseURL:
    'https://Saturnine-s-workspace-cvl2j3.us-east-1.xata.sh/db/Lexicanter',
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
    constructor(options?: BaseClientOptions) {
        super({ ...defaultOptions, ...options }, tables);
    }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
    if (instance) return instance;
    
    instance = new XataClient();
    return instance;
};