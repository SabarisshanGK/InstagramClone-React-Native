export interface Ipost {
    id : string;
    createdAt : string;
    image ?: string;
    images ?: string[];
    video ?: string,
    description : string;
    noOfComments : number;
    noOfLikes : number;
    user : IUser;
    comments : IComment[];
    likedUser : IUser;
}
export interface IComment {
    id ?: string;
    content ?: string;
    createdAt?: string;
    user : IUser;
}

export interface IUser {
    id ?: string;
    ProfilePic ?: string;
    name ?: string;
    username ?: string;
    verified ?: boolean;
    email?: string;
}

