import { AllowedHttpMethods, APIKey, APILIST } from "../../apiList";

const signInApi = async (email:string,password:string) => {
    const response = await fetch(APILIST.signInWithEmailAPI,{
        method:AllowedHttpMethods.post,
        body:JSON.stringify({email:email,password:password,returnSecureToken:true}),
        headers: {'Content-type':'application/json'}
    })
    if (response.status === 200){
        const responseData = await response.json();
        if (responseData.error){return responseData}
        const data = {
            authenticatedUser:{
                email:responseData.email,
                token:responseData.idToken,
                isLoggedIn:"1"
            }
        }
        localStorage.setItem("token",data.authenticatedUser.token)
        localStorage.setItem("email",data.authenticatedUser.email)
        localStorage.setItem("isLoggedIn","1");
        return data;

    }
}

export default signInApi;