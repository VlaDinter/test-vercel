import { app } from './app';

const port = process.env.PORT || 3999;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
