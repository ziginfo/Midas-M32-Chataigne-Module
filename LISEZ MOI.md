## Contrôle des Consoles M32/X32 avec chataigne
Le port par défaut doit être 10023 !

Un grand Merci  à Norbertrostaing. Ce script  M32/X32 "advanced" est partiellement basé sur son script [M32forChataigne](https://github.com/norbertrostaing/M32forChataigne) spécialement pour l'affichage des compteurs qu'il a réalisé !

Si vous n'avez pas vraiment besoin de toutes ces fonctionnalités de mon module "Advanced", utilisez plutôt le [Module de Base](https://github.com/norbertrostaing/M32forChataigne) de Norbert, qui génère beaucoup moins de trafic de données et sera plus léger et plus rapide ...

Pour obtenir des retour-infos depuis la console de manière générale, "Listen to Feedback" dans les paramètres doit être activé ! (il est "ON" par défaut lors de l'insertion d'un module M32/X32).
Après le premier chargement d'un module M32/X32, il peut être nécessaire d'appuyer sur le bouton de synchronisation ("Click to Sync all") ou d'envoyer l'une des actions de synchronisation (dans le menu d'action "Requests")
Et veuillez noter qu'après avoir inséré pour la première fois un "nouveau" module M32/X32 et/ou après avoir modifié l'adresse IP de la console (HOST), le "Feedback" de la console peut ne pas être disponibles immédiatement et peut nécessiter un redémarrage de Chataigne ou au moins un rechargement de la session. => d'abord Sauvegarder : cmd-S puis Recharger : cmd-shift-O
(*sauf si vous aviez déjà saisi "l'adresse remoteHost" dans le fichier "module.json" avant d'insérer le module ; dans ce cas le feedback sera disponible instantanément !*) Mais quoi qu'il en soit, une fois que le fichier de session est enregistré/sauvegardé , le feedback sera ensuite toujours disponible !
Pour arrêter tous les Feedbacks de la console, désactivez simplement le bouton "Listen to Feedback"

### Mise à jour vers la version 2.8 (février 2026)    
Ajout de quelques actions et fonctions manquants , Load et Save for Scenes, Snippets, Cues, Libs etc etc...    
Ajout d'actions Headamp-Gain pour les préamplis AES50 locaux et externes    
Ajout de l'affichage du retour de Headamp-Gain pour les préamplis locaux et AES50...    
L'affichage des retours des "Meters" fonctionne grâce à Norbert Rostaing (il faut l'activer dans les "Paramètres" !)    
Nous avons du Feedback de la console M32/X32 pour les noms et les niveaux de fader, l'égalisation, le mute on/off, l'état dynamiques et panoramiques, etc...    
Il existe également un onglet de Feedback appelé **"Selected Channel"**. Vous pouvez sélectionner un canal donné par "target" et par numéro et obtenir son Feedback complet (nom, fader, paramètres d'égalisation et de dynamique, etc.). Après avoir modifié le target ou le numéro de canal, appuyez simplement sur "Click To Sync" pour demander les nouvelles valeurs de la console. Et vous pouvez également réinitialiser l'ensemble des valeurs affichées du canal sélectionné en cliquant sur le bouton "Reset".    
Comme tous ces feedbacks et le flux de données OSC assez conséquent qui en résulte peuvent ralentir Chataigne pour d'autres fonctions, vous devez demander/activer uniquement le feedback dont vous avez réellement besoin. Les "Meters" en particulier créent un énorme trafic de données qui pourrait ralentir d'autres fonctions de Chataigne ! Gardez cela à l'esprit ! Il y a une possibilité d'arrêter le feedback et de désactiver certains des "Tabs de Valeur" (décochez simplement les boutons radio dans l'onglet Paramètres)

Vous pouvez désormais également envoyer des valeurs directement depuis le **"Selected Channels-Container"** vers la console, par exemple après avoir modifié une valeur dans un Champ de Canal donné dans Chataigne !
Veuillez utiliser cette fonctionnalité avec précaution, car vous risquez d'effacer les paramètres et les valeurs de la console !! Par exemple si vous appuyez sur "SEND UPDATES" avant d'avoir des données et valeurs dans les cases, cela finira par une sorte de "RESET" sur la console !! En fait, la fonction **"Click To Send Updates"** enverra toutes les valeurs (et aussi les "valeurs zéro" et les "pas-de-valeur" !!) de tous ces champs de Canaux à la fois ! ! Et si les champs sont vides (ou mis à zéro), le résultat est un RESET complet des valeurs des canaux de la console !

#### La meilleure façon de procéder est :
Avant d'envoyer des données de Chataigne à la console via les "Champs" du Channel-Container, demandez d'abord toutes les données de la console en **"Click to Sync All"**. Cette action est "Request Only" ; puis faites éventuellement des modifications dans les cases et renvoyez les (nouvelles et/ou anciennes) valeurs à la console en **"Click to Send Updates"**.
Veuillez également noter que la fonctionnalité "Click to Sync All" demandera du Feedback à la console par une fonction "subscribe" qui sera active pendant environ 10 secondes, et vous ne pourrez pas modifier les valeurs dans les champs pendant ces 10 secondes...
La fonction "Send Updates" vers la console est limitée au conteneur de valeurs de "CHANNELS" uniquement (juste pour éviter les risques et la confusion) ; tout autre "Value-Tab" n'envoie aucune valeur à la console !

Pour en savoir plus sur Chataigne, rendez-vous sur : http://benjamin.kuperberg.fr/chataigne/
Et la chaîne Youtube de Ben où vous pourrez retrouver des tutoriels : https://youtu.be/RSBU9MwJNLY
