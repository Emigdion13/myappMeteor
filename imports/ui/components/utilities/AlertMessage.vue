<template>
    <v-snackbar v-model="snackbar" :bottom="y==='bottom'"
                                    :top="y==='top'"
                                    :right="x==='right'"
                                    :left="x==='left'"
                                    :color="color"
                                    :multi-line="mode==='multi-line'"
                                    :vertical="mode==='vertical'">
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
            text:''
        }
    }, 
    methods:{
        showAlertSimple(color, title)
        {
            this.color = color;
            this.title = title;
            this.x="right";
            this.y="bottom";
            if(color==="success")
            {
                this.icon = "check_circle";
            } else if (color==="error"){
                this.icon = "close";
            } else if (color==="info"){
                this.icon = "info";
            }
        }
    }
}

</script>