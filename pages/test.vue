<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-card
                color="tertiary"
                class="mx-auto"
                max-width="375"
                title="Bob Barker"
                subtitle="Travel when Price is Right"
                >
                    <template v-slot:append>
                        <v-avatar size="50" class="avatarDrop">
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/john.png"
                                alt="John"
                            ></v-img>
                        </v-avatar>
                    </template>
                    <v-card-text class="pa-5" style="background-color:#ffffff;color:#000000">
                        The advantage in combining one-to-one meetings/roundtable meetings with a 
                        trade show is that you don't feel like you missed out on connecting with 
                        other participants. Then throw in informational sessions and you have the 
                        ideal trade show!
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>

  <style scoped>
  .avatarDrop {
    position: realative;
    top: 30px;
  }
  </style>