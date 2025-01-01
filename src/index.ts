import {program} from 'commander';// Used to prepare cli applications
import {parseYAMLConfig,validateConfig} from './config';

const main = async () => {
program.option("--config <path>", "Path to the config file");
program.parse();

const options = program.opts();
if(options &&"config" in options){
   const validatedConfig = await validateConfig(
     await parseYAMLConfig(options.config)
    ); 
    
    

}
}
main(); 