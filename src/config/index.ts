import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const env = process.env.NODE_ENV || 'production';
const envType = {
  development: 'development',
  production: 'production',
  test: 'test',
};
console.log('config配置ENV环境', envType[env]);

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, `./${envType[env]}.yml`), 'utf8'),
  );
};
