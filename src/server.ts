import app from './app';
import { Config } from './config';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Listening at port ${Config.PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

startServer();
