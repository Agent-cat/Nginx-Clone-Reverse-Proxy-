import {z} from "zod";
const upstreamSchema = z.object({
    id: z.string(),
    url: z.string().url(),
});
const headersSchema = z.object({
    key: z.string(),
    value: z.string(),
});

const rulesSchema = z.object({
    path: z.string(),
    upstreams: z.array(z.string()),
});
const serverSchema = z.object({
    listen: z.number(),
    workers: z.number().optional(),
    upstreams:z.array(upstreamSchema),
    headers: z.array(headersSchema).optional(),
    rules: z.array(rulesSchema),
});
export const rootSchema = z.object({
    server: serverSchema,
    });