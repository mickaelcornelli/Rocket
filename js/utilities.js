function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 0.68 * (250 - 200 +1) = 34,68 alors qu'on veut entre 200 et 255 donc on avec + min 34 + 200 = 234 arrondis