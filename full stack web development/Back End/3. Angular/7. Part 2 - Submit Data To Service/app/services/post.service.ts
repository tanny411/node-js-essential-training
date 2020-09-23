import {Injectable} from '@angular/core';
import {Post} from '../Post';

import {POSTS} from '../mock-posts';

@Injectable()
export class PostService{
    getPosts():Promise<Post[]>{
        return Promise.resolve(POSTS);
    }
    
    addPost(post:any){
        POSTS.push(post);
    }
}