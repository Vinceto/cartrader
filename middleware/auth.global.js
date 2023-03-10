export default defineNuxtRouteMiddleware((to,from) => {
    /*local middleware, 
        necesita definirlo en su página asi
        definePageMeta({
            layout: "custom",
            middleware:["auth"],
        });
    */
    if(to.path.includes("profile")){
        const user = useSupabaseUser();
        if(user.value){
        return;
        }
        return navigateTo("/login");
    }
}) 