<template>
    <v-snackbar v-model="snackbar" :bottom="y==='bottom'"
                                    :top="y==='top'"
                                    :right="x==='right'"
                                    :left="x==='left'"
                                    :color="color"
                                    :multi-line="mode==='multi-line'"
                                    :vertical="mode==='vertical'"
                                    :timeout="timeout"
                                    >
        <v-card color="transparent" elevation="0">
            <v-card-title>
                <v-icon v-if="icon" dark left>
                    {{icon}}
                </v-icon>
                <v-spacer></v-spacer>
                <span class="white--text">{{title}}</span>
                <v-tooltip bottom>
                    <template v-slot:activator="{on}">
                     <v-btn dark text small v-on="on" @click="snackbar=false">
                        <v-icon small>mdi-window-close</v-icon>
                     </v-btn>
                    </template>
                    <span>{{btnCloseText}}</span>
                </v-tooltip>
            </v-card-title>

            <v-card-text v-if="text">
                <span class="white--text">{{text}}</span>
            </v-card-text>
        </v-card>
    
    </v-snackbar>
</template>

<script>

const colors = {
    success: "check_circle",
    error: "close",
    info: "info",
    warning: 'warning'
}

export default{
    name: "AlertMessage",
    data(){
        return {
            snackbar: false,
            x: '',
            y: '',
            color:'',
            mode: '',
            icon: null,
            title:'',
            btnCloseText: '',
            text:'',
            timeout: 6000
        }
    }, 
    methods:{
        /**
         * Show the alert with main configuration options
         * @param {*} color Alert's Color: Success, error, info, warning
         * @param {*} title The text to be displayed in the Alert
         * @param {*} closeText The text of the close Tooltip
         */
        showAlertSimple(color, title, closeText)
        {
            this.color = color;
            this.title = title;
            this.x="right";
            this.y="bottom";
            this.icon = colors[color] || 'check_circle';

            this.text = '';
            this.mode = '';
            this.timeout = 6000;
            this.snackbar=true;
            this.btnCloseText = closeText;
        }
    }
}

</script>

<style>
    .v-snack__content{
        padding:0 !important;
    }
</style>