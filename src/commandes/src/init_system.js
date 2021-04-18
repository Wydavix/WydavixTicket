/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for commande "init" for initialisation for system bot

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

function cmd(option) {
  // programme
}

function info() {
  const info = {
    name: 'init',
    description:
      'cette commandes sert a initialiser le système du bot sur le serveur  ',
  };

  return info;
}

module.exports = { cmd, info };
