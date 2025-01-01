"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = exports.parseYAMLConfig = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const config_schema_1 = require("./config-schema");
const yaml_1 = require("yaml");
const parseYAMLConfig = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    const filecontent = yield promises_1.default.readFile(filepath, 'utf-8');
    // Here I am parsing YAML to JSON
    const jsonText = (0, yaml_1.parse)(filecontent);
    return JSON.stringify(jsonText);
});
exports.parseYAMLConfig = parseYAMLConfig;
const validateConfig = (config) => __awaiter(void 0, void 0, void 0, function* () {
    // Here I am validating the JSON using zod
    const validatedConfig = config_schema_1.rootSchema.parseAsync(JSON.parse(config));
    return validatedConfig;
});
exports.validateConfig = validateConfig;
