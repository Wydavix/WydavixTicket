module.exports = {
  init: {
    succes: {
      initialisation_success: {
        title: "Tentative de initialisation du serveur à était un succes",
        description: [
          "tout à était correctement installer, veuillez config votre serveur dans \n <#",
          "> \n avec les reactions",
        ],
      },
    },
    error: {
      initialisation_echec: {
        title: "Tentative de initialisation du serveur à échouer",
        description: "Car votre serveur est déjà initialiser",
      },
    },
    other: {
      channel: {
        name: "channel-config",
        type: "text",
        topic:
          "Channel pour configurer le bot pour votre serveur | by Wydavix.fr",
      },
    },
  },

  config: {
    succes: {
      init_message_config: {
        title: "Configuration",
        description: `Bonjour/ Bonsoir \n
        Bienvenue dans mon premier Stage de configuration pour votre serveur, \n Tout d'abord pour commencer, il me faudrais l'id du salon dans le qu'elle vous souhaitez que vos membre puisse soient tappez la commandes \`w!ticket [open/close]\` ou reagie, pour cela vous avez juste a envoyer a la suite de se message, l'id du salon, comme dans l'exemple ci-dessous`,
      },
      step_2: {
        title: "Configuration Stage 2",
        description: [
          "Dans le Stage 2 nous alons configurer le titre du message dans ",
          " .\n\n a la suite de se message vous allez envoyer le titre du message que vos utilisateurs verons\n\n **__ ou __** laisser celui par defaut qui est \n\n  **__titre :__** ",
          " \n\n si vous souhaitez ne pas modifier le titre veuillez juste, envoyer `next` ou  `suivant` \n\n **__Exemple__**",
        ],
      },
      step_2_valid: {
        title: "Tentative de modification du titre",
        description: [
          "le titre a était correctement modifier, \n\n **__Avant :__** ",
          "\n\n **__ Après : __** ",
          "\n\n pour enregistrer votre modification, il vous faut simplement envoyer `next` ou `suivant` dans le salon \n\n **__si vous souhaitez cependant modifier vous devez envoyer le titre dans le salon et enregistrer si cela vous va__**",
        ],
      },
      step_3: {
        title: "Configuration Stage 2.1",
        description: [
          "Dans le stage 2.1 nous allons configurer la description du message dans ",
          "\n\n a la suite de se message vous allez envoyer la description du message que vos utilisateur verons \n\n **__ou__** laisser celui par defaut qui est \n\n **__Description__** : ",
          "\n\n si vous souhaitza ne pas modifier la description veuillez juste, envoyer `next` ou `suivant` \n\n **__Exemple__**",
        ],
      },
      step_3_valid: {
        title: "Tentative de modification du titre",
        description: [
          "la description a était correctement modifier, \n\n **__Avant :__** ",
          "\n\n **__ Après : __** ",
          "\n\n pour enregistrer votre modification, il vous faut simplement envoyer `next` ou `suivant` dans le salon \n\n **__si vous souhaitez cependant modifier vous devez envoyer la description dans le salon et enregistrer si cela vous va__**",
        ],
      },
      step_4: {
        title: "Configuration Stage 3",
        description:
          "Dans le stage 3 nous allons configurer si le system de ticket vous souhaitez : \n\n > **-** systeme de ticket par reaction \n > **-** system de ticket par commande \n\n pour choisir le system, veuilez envoyer a la suite du message soient : \n > `reaction` pour le system de ticket fonctionne avec une reaction, ou soient : \n > `commande` pour que le system de ticket fonctionne avec une commandes",
      },
      step_6: {
        title: "Configuration Basique Terminé",
        description: [
          "la configuration basique du system de ticket ",
          " \nest terminer \n\n **__voici une view du message dans__** ",
          "***si le message vous va envoyer `suivant` ou `next` a la suite de message***",
        ],
      },
      configurateur_message: {
        title: "Configurateur",
        description: `**Bonjour/Bonsoir**, \n 
        Bienvenue sur mon configurateur pour votre serveur \n\n 
        **Configurateur :**
        > "🎨" : \`pour modifier la couleur des embeds\` `,
      },
      finish: {
        title: "Tentative d'enregistrement du channel à était un sucess",
        description: " est le channel défini pour vos membre",
      },
    },
    error: {
      step_1: {
        error_content_isnot_number: {
          title: "Tentative d'enregistrement du channel à échouer",
          description: " n'est pas un **id** possible pour un channel",
        },
        error_channel_unkwon: {
          title: "Tentative d'enregistrement du channel à échouer",
          description:
            " est introuvable parmis les channels, veuillez recommencer",
        },
      },
    },
    other: {
      ticket_basic: {
        title: "Ticket",
        description:
          "pour ouvrir un ticket veuillez réagir avec :envelope_with_arrow:",
        color: "#0000FF",
        react: ":envelope_with_arrow:",
      },
    },
  },

  other: {
    succes: {},
    error: {
      nohavepermission:
        "Vous n'avez pas la permission d'executez cette commande",
    },
  },
};
