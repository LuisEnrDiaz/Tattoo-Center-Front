export const actionTypesUser = {
    startLogin: 'users@startLogin', //islogged false // isLoggin true // user null // token ""
    login: 'users@login', // islogged true // isLoggin false //user: User // token string
    logout: 'users@logout', //islogged false
    addFavorites: 'users@addFavorites', //user: User
    deleteFavorites: 'users@deleteFavorites', //user: User
    deleteUser: 'users@deleteUser',
};
