import {LogModel} from '../../database';
import {LogInterface} from '../../models';

class LogService {
  createLog(log: Partial<LogInterface>): Promise<LogInterface> {
    const logToCreate = new LogModel(log);

    return logToCreate.save();
  }
}

export const logService = new LogService();
