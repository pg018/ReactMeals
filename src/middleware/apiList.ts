export const APIKey = process.env.APIKey;

export enum AllowedHttpMethods{
    get = 'get',
    post = 'post',
    update = 'update',
    delete = 'delete',
    put = 'put'
}

export enum ApiLoadingState {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
}

export const APILIST = {
    createAccountAPI:`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`,
    signInWithEmailAPI:`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`,
    getMeals:'https://food-order-c7bb3-default-rtdb.firebaseio.com/meals.json'
}

export const APIPATH = {
    signUp:'/signup',
    signIn:'/signin',
    meals:'/meals'
}