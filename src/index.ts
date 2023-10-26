import { app } from './app';

const port = process.env.PORT || 3999;

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default server;
