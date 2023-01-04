<template>
        <v-container>
        <h1>Login</h1>
        <h3>Username:</h3>
            <v-text-field
            v-model="userName"
            />
        <h3>User Password:</h3>
            <v-text-field
            v-model="password"
            />
        <v-btn @click="updateCall">
        Update
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: 'ProfilePage',
                
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                apiUrl: process.env.VUE_APP_API_URL,
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                userName: "",
            }
        },
        methods: {
            registerCall(){
                axios.request({
                    url: 'https://foodierest.ml/api/client',
                    method: "PATCH",
                    headers: {
                        "x-api-key": this.apiKey,
                        token: tokenNum
                    },
                    data: {
                        email: this.email,
                        password: this.password,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        username: this.userName,
                    }
                }).then((response)=>{
                    cookies.get('token', response.data.token);
                    cookies.get('clientId', response.data.clientId);
                    
                    router.push('/signin');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>