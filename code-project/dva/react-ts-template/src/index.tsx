
import dva from 'dva';
import Router from './router';
import injectModels from './models';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
injectModels(app);

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');
