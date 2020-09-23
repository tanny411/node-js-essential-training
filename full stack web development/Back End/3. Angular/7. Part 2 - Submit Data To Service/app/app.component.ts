import { Component } from '@angular/core';
import {Post} from './Post';

import {PostService} from './services/post.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>My Blog</h1>
        <form (submit)="addPost()">
            <input [(ngModel)]="title" name="title" type="text" placeholder="Post Title">
            <br><br>
            <textarea [(ngModel)]="body" name="body" placeholder="Post Body"></textarea>
            <br><br>
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li *ngFor="let post of posts">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </li>
        </ul>
    `,
    providers: [PostService]
})
export class AppComponent {
    posts:Post[];
    title: string;
    body: string;
    
    constructor(private _postService:PostService){
        this._postService.getPosts().then(posts => {
            this.posts = posts;
        });
    }
    
    addPost(){
        var newPost = {
            title: this.title,
            body: this.body
        }
        
        this._postService.addPost(newPost);
        return false;
    }
}