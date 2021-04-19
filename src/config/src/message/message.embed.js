module.exports = {
  init: {
    succes: {
      initialisation_success: {
        title: 'Tentative de initialisation du serveur à était un succes',
        description: [
          'tout à était correctement installer, veuillez config votre serveur dans \n <#',
          '> \n avec la commande `w!config`',
        ],
      },
    },
    error: {
      initialisation_echec: {
        title: 'Tentative de initialisation du serveur à échouer',
        description: 'Car votre serveur est déjà initialiser',
      },
    },
    other: {
      channel: {
        name: 'channel-config',
        type: 'text',
        topic:
          'Channel pour configurer le bot pour votre serveur | by Wydavix.fr',
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
