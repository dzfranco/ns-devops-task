import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';

import { SERVICE_IDENTIFIER } from '../../common/constants/identifiers';
import ILogger from '../../common/interfaces/ilogger';

/**
 * Sample Logging Middleware implemented
 * Add this to the controller when you require automated logging
 * The examples controller uses this middleware
 */
@injectable()
class LoggerMiddleware extends BaseMiddleware {
  @inject(SERVICE_IDENTIFIER.LOGGER)
  private logger: ILogger;
  public handler(req: Request, res: Response, next: NextFunction) {
    this.logger.info(
      '[Logger Middleware]',
      { url: req.url },
      { cookies: req.headers.cookie }
    );
    next();
  }
}

export default LoggerMiddleware;
