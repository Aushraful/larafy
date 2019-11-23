<template>
    <v-app>

        <!--<v-navigation-drawer app>
            <router-link tag="li" to="/">Home</router-link>
            <router-link tag="li" to="/about">About</router-link>
        </v-navigation-drawer>-->

        <v-app-bar app>
            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text>
                <router-link to="/">Home</router-link>
            </v-btn>
            <v-btn text>
                <router-link to="/about">About</router-link>
            </v-btn>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>
<script>
    export default {}
</script>
