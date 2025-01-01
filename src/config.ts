import fs from 'node:fs/promises';
import {rootSchema} from "./config-schema";
import{parse} from 'yaml';
export const parseYAMLConfig = async(filepath: string)=>{
    const filecontent = await fs.readFile(filepath, 'utf-8');
    // Here I am parsing YAML to JSON
    const jsonText = parse(filecontent); 
    return JSON.stringify(jsonText);
}

export const validateConfig = async(config: string)=>{ 
    // Here I am validating the JSON using zod
    const validatedConfig = rootSchema.parseAsync(JSON.parse(config));
    return validatedConfig; 
}