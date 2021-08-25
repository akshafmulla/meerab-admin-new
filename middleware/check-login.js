export default function (context) {
    context.store.dispatch("initAuth", context.req);
    if (context.store.getters.isAuthenticated) {
        context.redirect("/properties/dashboard");
    }
}
