import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { routerPaths } from './utils';
import { videosRouter } from './routes/videos-router';
import {videosLocalRepository} from "./repositories/videos-repository";
import {CodeResponsesEnum} from "./types";
// import { blogsRouter } from './routes/blogs-router';
// import { postsRouter } from './routes/posts-router';

export const app = express();

app.use(bodyParser({}));
app.use(routerPaths.videos, videosRouter);
// app.use(routerPaths.blogs, blogsRouter);
// app.use(routerPaths.posts, postsRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello back-end HomeWorks in it-incubator!!!');
});

app.delete('/testing/all-data', (req: Request, res: Response) => {
    videosLocalRepository.deleteAll();
    // blogsLocalRepository.deleteAll();
    // postsLocalRepository.deleteAll();
    res.sendStatus(CodeResponsesEnum.Not_content_204);
});
