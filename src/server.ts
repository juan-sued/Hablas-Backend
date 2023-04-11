import { serverHttp } from './Http';

import './websocket';

const PORT: string = process.env.PORT || '4000';

serverHttp.listen(PORT, () => {
  console.log('Servidor rodando na porta: ' + PORT);
});
