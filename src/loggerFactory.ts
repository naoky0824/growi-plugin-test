import Logger from 'bunyan';
import { createLogger } from 'universal-bunyan';

import configForDev from '/config.dev';
import configForProd from '/config.prod';

const isProduction = false;
const config = isProduction ? configForProd : configForDev;

const loggerFactory = function(name: string): Logger {
  return createLogger({
    name,
    config,
  });
};

export default loggerFactory;
