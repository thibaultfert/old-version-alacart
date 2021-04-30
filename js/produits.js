// Liste des produits
var vinsRouges = [
    {
        images: ["le-petit-pont-reserve-pays-doc.jpg", "le-petit-pont-reserve-pays-doc-2.jpg"],
        nom: "Le Petit Pont Réserve - Pays d'Oc",
        cepage : "Pays d'Oc",
        descriptif: "Ce vin extraordinaire est fait à partir de Grenache, Cinsault et Cabernet Sauvignon. Avec un goût de fruits rouges attrayant, généreux, juteux et des tanins d'une douceur infini.",
        volume: 0.75,
        prix: 24.00
    },
    {
        images: ["merlot-le-haut-pais.jpg", "merlot-le-haut-pais-2.jpg"],
        nom: "Merlot - Le Haut Païs",
        cepage : "Périgord",
        descriptif: "D'un rouge profond, ce vin livre un bouquet intense de fruits rouges. Une intensité fruitée à laquelle fait écho une bouche souple en attaque, plus charpentée dans son développement, fraîche et épicée en finale. Un joli caractère.",
        volume: 0.75,
        prix: 26.00
    },
    {
        images: ["cotes-du-roussillon-rouge-terres-des-schistes.jpg", "cotes-du-roussillon-rouge-terres-des-schistes-2.jpg"],
        nom: "Côtes du Roussillon Rouge - Terres des Schistes",
        cepage : "Pays d'Oc",
        descriptif: "La robe est d’un pourpre profond aux reflets grenats et violine. Arômes délicats de fruits noirs et de petits fruits des bois avec une touche d’épices douces. Tanins fondus et assouplis. Finale fruitée et glissante.",
        volume: 0.75,
        prix: 27.50    
    },
    {
        images: ["cotes-du-rhone-emma-flo.jpg", "cotes-du-rhone-emma-flo-2.jpg"],
        nom: "Côtes du Rhône - \"Emma & Flo\"",
        cepage : "Pays d'Oc",
        descriptif: "On ouvre une bouteille de Côtes du Rhône Emma - Flo pour passer un moment convivial entre amis ou en famille, en toute simplicité. Le nez est flatteur : cassis, prune, fraise. La bouche est soyeuse, toute en rondeur.",
        volume: 0.75,
        prix: 29.00    
    },
    {
        images: ["faugeres-rouge-chateau-de-sauvanes.jpg", "faugeres-rouge-chateau-de-sauvanes-2.jpg"],
        nom: "Faugères Rouge - Château de Sauvanes",
        cepage : "Pays d'Oc",
        descriptif: "Comblez les palais de vos convives avec ce Faugères AOC Château de Sauvanes. Frais et généreux, c'est un grand vin rouge très apprécié par les connaisseurs et les grands amateurs de cuvée.",
        volume: 0.75,
        prix: 29.00    
    },
    {
        images: ["le-petit-verdot-hauts-de-median.jpg", "le-petit-verdot-hauts-de-median-2.jpg"],
        nom: "Le Petit Verdot - Hauts de Médian",
        cepage : "Pays d'Oc",
        descriptif: "Couleur grenat d’un rouge profond avec un nez marqué par les fruits noirs, la violette et les épices. Très bel équilibre en bouche sur les fruits et des tanins racés.",
        volume: 0.75,
        prix: 30.00   
    },
    {
        images: ["cotes-rhodanienne-eritage-rouge-xavier-mourier.jpg", "cotes-rhodanienne-eritage-rouge-xavier-mourier-2.jpg"],
        nom: "Côtes Rhôdanienne - Eritage Rouge - Xavier Mourier",
        cepage : "Rhône",
        descriptif: "Vin rouge fruité",
        volume: 0.75,
        prix: 30.00    
    },
    {
        images: ["mas-belot-coteaux-du-languedoc-lbelot.jpg", "mas-belot-coteaux-du-languedoc-lbelot-2.jpg"],
        nom: "Mas Belot - Côteaux du Languedoc - L.Belot",
        cepage : "Pays d'Oc",
        descriptif: "Typiquement languedocien, bien fait, charnu et soyeux pour un moment simple et convivial et ce n'est pas filtré pour garder la matière et le fruit.",
        volume: 0.75,
        prix: 31.00    
    },
    {
        images: ["pinot-noir-1964-catalans.jpg", "pinot-noir-1964-catalans-2.jpg"],
        nom: "Pinot Noir 1964 - Catalans",
        cepage : "Pays d'Oc",
        descriptif: "Généreusement bouqueté autour de fruits rouges (framboise, cerise, groseille) et floraux (violette). Souple à l’attaque, offre du volume et de la fraîcheur, épaulée par des tanins fins et soyeux.",
        volume: 0.75,
        prix: 32.00    
    },
    {
        images: ["l-ort-des-schistes-rouge-faugeres.jpg", "l-ort-des-schistes-rouge-faugeres-2.jpg"],
        nom: "L'Ort des Schistes - Rouge - Faugères",
        cepage : "Pays d'Oc",
        descriptif: "Belle robe sombre et pourpre. Nez puissant de garrigues, de fruits noirs. La bouche est soyeuse et présente un superbe équilibre.",
        volume: 0.75,
        prix: 34.00    
    },
    {
        images: ["blaye-prestige-chateau-tertre-du-boilon.jpg", "blaye-prestige-chateau-tertre-du-boilon-2.jpg"],
        nom: "Blaye Prestige - Château Tertre du Boilon",
        cepage : "Bordeaux",
        descriptif: "Un beau fruité frais marié à un boisé élégant. En bouche, toujours les fruits frais, toujours ce même boisé racé, et des tanins enrobés et soyeux qui donnent beaucoup de relief à ce vin.",
        volume: 0.75,
        prix: 34.00    
    },
    {
        images: ["cotes-du-rhone-village-rochegude.jpg", "cotes-du-rhone-village-rochegude-2.jpg"],
        nom: "Côtes du Rhône Village - Rochegude",
        cepage : "Rhône",
        descriptif: "Introduit par un joli nez de fruits rouges et d'épices douces, cet assemblage grenache-syrah (55-45) déploie une bouche plaisante, souple, légère et fruitée (cassis).",
        volume: 0.75,
        prix: 35.00    
    },
    {
        images: ["saint-chinian-vignalet-de-belot.jpg", "saint-chinian-vignalet-de-belot-2.jpg"],
        nom: "Saint-Chinian - Vignalet de Belot",
        cepage : "Pays d'Oc",
        descriptif: "Gorgé de fraîcheur, de finesse et de fruits, Le Vignalet Rouge est un vin rouge de Saint-Chinian léger, gouleyant aux tanins fondus.",
        volume: 0.75,
        prix: 35.00    
    },
    {
        images: ["coteaux-bourguignon-empreinte-de-brossette.jpg"],
        nom: "Côteaux Bourguignon - Empreinte de Brossette",
        cepage : "Bourgogne",
        descriptif: "Couleur grenat soutenue aux parfums de mure, de myrtille et de fruits rouges. D’une attaque riche et ronde, il évoque les raisins très mûrs. Une note épicée est associée à la bonne structure tannique.",
        volume: 0.75,
        prix: 35.00    
    },
    {
        images: ["chinon-rouge-marie-dupin.jpg", "chinon-rouge-marie-dupin-2.jpg"],
        nom: "Chinon Rouge - Marie Dupin",
        cepage : "Loire",
        descriptif: "Nez aux notes de cerises et de violettes. Attaque ample et charnue. Belle évolution sur des tanins souples. Finale chaleureuse avec une belle persistance aromatique.",
        volume: 0.75,
        prix: 35.00    
    },
    {
        images: ["saumur-champigny-les-poyeux.jpg", "saumur-champigny-les-poyeux-2.jpg"],
        nom: "Saumur-Champigny \"Les Poyeux\"",
        cepage : "Loire",
        descriptif: "Nez élégant offrant une large palette aromatique allant des fruits rouges frais (framboise), aux fruits noirs bien murs (cassis, mûre). Une pointe empyreumatique (grillé) et épicée (poivre gris).",
        volume: 0.75,
        prix: 36.00    
    },
    {
        images: ["brouilly-les-secrets-de-maxence.jpg"],
        nom: "Brouilly \"Les Secrets de Maxence\"",
        cepage : "Beaujolais",
        descriptif: "Avec un nez très ouvert ce vin associe de puissants parfums de fruits rouges avec des notes d’épices. Ces parfums se retrouvent en bouche avec une chair fine et tendre qui sera très appréciée.",
        volume: 0.75,
        prix: 36.00    
    },
    {
        images: ["saint-nicolas-de-bourgueil-marie-dupin.jpg", "saint-nicolas-de-bourgueil-marie-dupin-2.jpg"],
        nom: "Saint-Nicolas de Bourgueil - Marie Dupin",
        cepage : "Loire",
        descriptif: "Le terroir de graviers donne à ce vin l'expression d'une rondeur et d'un fruité, aux arômes dominants de petits fruits rouges. Bonne longueur en bouche grâce aux tanins soyeux.",
        volume: 0.75,
        prix: 37.00    
    },
    {
        images: ["morgon-vieilles-vignes-cote-du-py.jpg", "morgon-vieilles-vignes-cote-du-py-2.jpg"],
        nom: "Morgon Vieilles Vignes \"Côte du Py\"",
        cepage : "Beaujolais",
        descriptif: "Il est apprécié par son côté Fruits rouges lorsqu'il est jeune qui, en se développant dans le temps, se « bourgonise » et lui confère un côté « Pinot ».",
        volume: 0.75,
        prix: 38.00    
    },
    {
        images: ["pic-saint-loup-seul-au-monde.jpg", "pic-saint-loup-seul-au-monde-2.jpg"],
        nom: "Pic Saint Loup - Seul au Monde",
        cepage : "Pays d'Oc",
        descriptif: "Les vignobles du Pic Saint loup bénéficient d’un majestueux paysage aux sculptures naturelles. Les sols calcaires y engendrent des vins lumineux, fins et élégants.",
        volume: 0.75,
        prix: 43.00    
    },
    {
        images: ["moulin-a-vent-l-empreinte-de-brossette.jpg"],
        nom: "Moulin à Vent - l'Empreinte de Brossette",
        cepage : "Beaujolais",
        descriptif: "Sa robe rubis foncée promet des arômes d'iris, de rose fanée, d'épices et de fruits mûrs. Vin de garde charpenté, il est digne de figurer parmi les plus grands.",
        volume: 0.75,
        prix: 46.00    
    },
    {
        images: ["lirac-rouge-lou-gaelou.jpg", "lirac-rouge-lou-gaelou-2.jpg"],
        nom: "Lirac Rouge - Lou Gaëlou",
        cepage : "Rhône",
        descriptif: "Les Lirac ont une couleur rubis, exhalent des arômes de fruits rouges et noirs de garrigue et d’épices. En vieillissant, ils tendent vers le cuir, la réglisse, la truffe et le cacao.",
        volume: 0.75,
        prix: 46.00 
    },
    {
        images: ["morgon-fut-de-chene-vgeoffroy.jpg", "morgon-fut-de-chene-vgeoffroy-2.jpg"],
        nom: "Morgon Fût de Chêne  - V.Geoffroy",
        cepage : "Beaujolais",
        descriptif: "Alliance de notes de fruits noirs et rouges, de notes épicées, et de notes florales (pivoine, violette). On retrouve cette complexité en bouche, sur des arômes de framboises et de cerises.",
        volume: 0.75,
        prix: 46.00 
    },
    {
        images: ["haut-medoc-2012-soc-brignot.jpg"],
        nom: "Haut Médoc 2012 - Soc Brignot",
        cepage : "Bordeaux",
        descriptif: "Ce vin dévoile un bouquet discret à dominante de vanille, le fruit restant pour l'heure à l'arrière-plan. Frais et alerte en attaque, ample et solidement charpenté, il s'affirme plus nettement en bouche.",
        volume: 0.75,
        prix: 49.00 
    },
    {
        images: ["rasteau-tradition-ortas.jpg", "rasteau-tradition-ortas-2.jpg"],
        nom: "Rasteau Tradition - Ortas",
        cepage : "Rhône",
        descriptif: "Son nez développe des senteurs de fruits rouges, d’épices et de réglisse. En bouche, le vin distille les mêmes saveurs qu’au nez et ses tanins sont fondus dans une belle harmonie.",
        volume: 0.75,
        prix: 52.00 
    },
    {
        images: ["sancerre-rouge-pdezat.jpg"],
        nom: "Sancerre Rouge P.Dezat",
        cepage : "Loire",
        descriptif: "Robe rouge grenat aux reflets pourpres. Intense arômes de fruits rouges. Ce vin souple garde les arômes en bouche et les tanins seront fondus de façon agréable avec une longue tenue.",
        volume: 0.75,
        prix: 54.00 
    },
    {
        images: ["crozes-hermitage-la-muselle.jpg", "crozes-hermitage-la-muselle-2.jpg"],
        nom: "Crozes Hermitage - La Muselle",
        cepage : "Rhône",
        descriptif: "Gourmand et tendre, sa robe est rouge grenat et son nez composé de fruits rouges et d’arômes floraux.",
        volume: 0.75,
        prix: 65.00 
    },
    {
        images: ["saint-joseph-ogier-2018.jpg", "saint-joseph-ogier-2018-2.jpg"],
        nom: "Saint Joseph - Ogier - 2018",
        cepage : "Rhône",
        descriptif: "Nez intense de fruits noirs (cassis, myrtille) et de griotte sur fond de suie et d'encaustique. Bouche franche avec une douce acidité présente tout au long de la dégustation. Complexité, équilibre et persistance en bouche.",
        volume: 0.75,
        prix: 76.00 
    },
    {
        images: ["lalande-de-pomerol-2016.jpg", "lalande-de-pomerol-2016-2.jpg"],
        nom: "Lalande de Pomerol - 2016",
        cepage : "Bordeaux",
        descriptif: "Une jolie robe mordorée chatoyante. Un bouquet délicat où les senteurs de sous-bois côtoient les fleurs séchées. Bouche très fine, d’un magnifique équilibre, révélant un joli soyeux agrémenté du subtiles notes boisées.",
        volume: 0.75,
        prix: 78.00 
    },
    {
        images: ["gigondas-dentellis-ogier-2018.jpg", "gigondas-dentellis-ogier-2018-2.jpg"],
        nom: "Gigondas Dentellis - Ogier - 2018",
        cepage : "Rhône",
        descriptif: "Le nez est d'une grande expression alliant fruit, notes de sous-bois, de grillé et de fumé. La bouche est ronde et puissante. Tout s'y exprime, puissance, structure et aromatique.",
        volume: 0.75,
        prix: 86.00 
    },
    {
        images: ["saint-estephe-2016-chateau-cossieu.jpg", "saint-estephe-2016-chateau-cossieu-2.jpg"],
        nom: "Saint-Estèphe 2016 - Château Cossieu",
        cepage : "Bordeaux",
        descriptif: "Un nez remarquable où se côtoient des senteurs de bois de santal mariées au fruit confit à l’eau de vie et de fleur séchée. Sa bouche révèle sa puissance et sa race dans un bel écrin de notes boisées.",
        volume: 0.75,
        prix: 119.00 
    },
    {
        images: ["pomerol-2015-bio-chateau-valois.jpg", "pomerol-2015-bio-chateau-valois-2.jpg"],
        nom: "Pomerol 2015 \"Bio\" - Château Valois",
        cepage : "Bordeaux",
        descriptif: "Parfumé et persistant, le nez mêle finesse et richesse aromatique : pruneau, cannelle et humus. En bouche, bel équilibre entre les tanins mûrs et les arômes de fraise et poivre.",
        volume: 0.75,
        prix: 164.00 
    },
    {
        images: ["cote-rotie-la-serine-ogier-2018.jpg", "cote-rotie-la-serine-ogier-2018-2.jpg"],
        nom: "Côte-Rôtie 2018 \"La Serine\" - Ogier",
        cepage : "Rhône",
        descriptif: "Le nez est intense et complexe. Il est difficile d'identifier une dominante entre caractères minéraux, notes fruitées et florales. La bouche est très franche, avec une touche minérale, une fraîcheur surprenante, des tanins fins et croquants.",
        volume: 0.75,
        prix: 208.00 
    },
    {
        images: ["aloxe-corton-domaine-du-pavillon-2016.jpg", "aloxe-corton-domaine-du-pavillon-2016-2.jpg"],
        nom: "Aloxe-Corton 2016 - Domaine du Pavillon",
        cepage : "Bourgogne",
        descriptif: "Développe au nez des arômes de boisé et d’épices très élégants, qui évoluent sur des notes de fruits rouges très mûrs. Ce vin équilibré présente des tanins veloutés et une pointe de sucrosité. La finale est, quant à elle, longue et aromatique rappelant les parfums fruités du premier nez.",
        volume: 0.75,
        prix:228.00 
    },
    {
        images: ["gevrey-chambertin-2018-château-marsannay.jpg", "gevrey-chambertin-2018-château-marsannay-2.jpg"],
        nom: "Gevrey-Chambertin 2018 - Château Marsannay",
        cepage : "Bourgogne",
        descriptif: "Un vin qui dévoile des arômes intenses et généreux, évoquant les épices, mêlées de notes kirchées, qui se fondent dans une structure élégante et affirmée, aux tanins fermes et ciselés.",
        volume: 0.75,
        prix:236.00 
    }

];
var vinsBlancs = [
    {
        images: ["chardonnay-de-loire-hallopiere.jpg", "chardonnay-de-loire-hallopiere-2.jpg"],
        nom: "Chardonnay de Loire - Hallopière",
        cepage : "Loire",
        descriptif: "Au nez, des arômes intenses de fruits frais (poire, pêche), des notes florales et une pointe caramel. Bouche ronde, harmonieuse et fluide, marquée par un très bel équilibre. Finale fraiche et ronde, sur des notes de fruits blancs et d’agrumes.",
        volume: 0.75,
        prix: 23.50
    },
    {
        images: ["sauvignon-le-haut-pais.jpg", "sauvignon-le-haut-pais-2.jpg"],
        nom: "Sauvignon - Le Haut Païs",
        cepage : "Périgord",
        descriptif: "Un vin blanc au nez exubérant et explosif, arômes de fruits exotiques et de pamplemousse. Equilibre sucre et acidité. Longue finale vive et émoustillante sur le pamplemousse, légèrement sucré.",
        volume: 0.75,
        prix: 25.50
    },
    {
        images: ["uby-blanc-collection-unique.jpg", "uby-blanc-collection-unique-2.jpg"],
        nom: "Uby Blanc Collection Unique",
        cepage : "Gascogne",
        descriptif: "La collection unique blanc UBY dévoile un nez intense de fruits exotiques et de pêche. Au palais, on retrouve ces notes chaleureuses et gourmandes, accompagnées d'une belle fraîcheur.",
        volume: 0.75,
        prix: 28.50
    },
    {
        images: ["gros-manseng-pigmentum.jpg", "gros-manseng-pigmentum-2.jpg"],
        nom: "Gros Manseng - Pigmentum",
        cepage : "Gascogne",
        descriptif: "Ce vin se distingue par une robe jaune intense aux reflets dorés. Le nez charmeur, d’agrumes et fruits tropicaux, se prolonge en bouche par une belle onctuosité. Un bel équilibre entre la fraîcheur de l’attaque et la sucrosité de l’ensemble.",
        volume: 0.75,
        prix: 39.00
    },
    {
        images: ["viognier-de-bourgogne-barral.jpg", "viognier-de-bourgogne-barral-2.jpg"],
        nom: "Viognier de Bourgogne - Barral",
        cepage : "Bourgogne",
        descriptif: "Très parfumé et subtil, il révèle des arômes mouvants, de fruits jaunes (mangues, poires, abricots), de fleurs fraiches (violette, iris, acacia) de musc et d’épices, mais aussi de fruits secs (amandes et noisettes grillées).",
        volume: 0.75,
        prix: 39.00
    },
    {
        images: ["bourgogne-blanc-chardonnay-empreinte-de-brossette.jpg"],
        nom: "Bourgogne Blanc - Chardonnay - Empreinte de Brossette",
        cepage : "Bourgogne",
        descriptif: " Complexité et puissance aromatique alliées à une structure veloutée lui permettra de se bonifier dans le temps.Arôme de fruits mûrs à noyaux : cerise, pêche, abricot, prune. C'est un vin riche, charnu et puissant.",
        volume: 0.75,
        prix: 40.50
    },
    {
        images: ["coteaux-du-layon-or-et-lumiere.jpg", "coteaux-du-layon-or-et-lumiere-2.jpg"],
        nom: "Côteaux du Layon - \"Or et Lumière\"",
        cepage : "Loire",
        descriptif: "Habillée de sa robe dorée, son nez dévoile un parfum de fruits confits. Sa bouche riche et charnue, accompagné d'une finale à la fois douce et fraiche.",
        volume: 0.75,
        prix: 41.00
    },
    {
        images: ["macon-village-brossette.jpg"],
        nom: "Macon Village - Brossette",
        cepage : "Bourgogne",
        descriptif: "Vous apprécierez ses arômes de genêt, pamplemousse, fruits éxotiques, fougère. Vin frais et agréable caractérisé par ses arômes explosifs de fruits.",
        volume: 0.75,
        prix: 44.00
    },
    {
        images: ["pouilly-fume-ngaudry.jpg"],
        nom: "Pouilly fumé - N.Gaudry",
        cepage : "Loire",
        descriptif: "Arômes floraux et fruités dominant qui illustrent bien sa complexité. Ce vin est minéral et fleuri avec des notes de vanille, digne de son appellation.",
        volume: 0.75,
        prix: 54.00
    },
    {
        images: ["sancerre-blanc-pdezat.jpg"],
        nom: "Sancerre Blanc P.Dezat",
        cepage : "Loire",
        descriptif: "Robe jaune pale. Arômes vifs d’agrumes, fruits exotiques et fleurs blanches. Persistant en bouche ses arômes seront accompagnés d’un pointe d’acidité.",
        volume: 0.75,
        prix: 54.00
    },
    {
        images: ["gewurstraminer-hschoepfer.jpg", "gewurstraminer-hschoepfer-2.jpg"],
        nom: "Gewurstraminer - H.Schoepfer",
        cepage : "Alsace",
        descriptif: "Il y a du détail et de la finesse ici, le tout arrondi d’une texture suave, homogène et longue. Jolis amers évoquant l’anis étoilé en finale.",
        volume: 0.75,
        prix: 54.00
    },
    {
        images: ["condrieu-2019-resurgence-xavier-mourier.jpg", "condrieu-2019-resurgence-xavier-mourier-2.jpg"],
        nom: "Condrieu 2019 - Résurgence - Xavier Mourier",
        cepage : "Rhône",
        descriptif: "Ce vin se caractérise par sa robe or pale et son nez puissant, très gras marqué d'un parfum subtil d’abricot et long en bouche.",
        volume: 0.75,
        prix: 163.00
    }
];
var vinsRoses = [
    {
        images: ["faisse-du-loup-rose-domaine-des-therons.jpg", "faisse-du-loup-rose-domaine-des-therons-2.jpg"],
        nom: "Faïsse du Loup Rosé - Domaine des Thérons",
        cepage : "Pays d'Oc",
        descriptif: "Les amateurs de vins rosés vont pouvoir se délecter avec ce pays d'OC IGP Faïsse du loup (Cinsault, Grenache), avec sa belle robe et ses notes délicieusesement fruité.",
        volume: 0.75,
        prix: 21.00
    },
    {
        images: ["oh-la-la-c-est-bon-rose.jpg"],
        nom: "Oh la la C'est Bon - Rosé",
        cepage : "Languedoc",
        descriptif: "Lumineux, ce rosé respire les agrumes et les fruits rouges pour donner un ensemble frais, pimpant et digeste : Oh la la! C’est un vrai vin de convivialité.",
        volume: 0.75,
        prix: 28.00
    },
    {
        images: ["prestige-gris-domaine-des-therons.jpg", "prestige-gris-domaine-des-therons-2.jpg"],
        nom: "Prestige Gris - Domaine des Thérons",
        cepage : "Pays d'Oc",
        descriptif: "Sa robe est rose pâle avec une belle brillance. Les parfums de fraises et de litchi sont bien perceptibles. L’ensemble apporte fraîcheur et rondeur en bouche avec une finale acidulée.",
        volume: 0.75,
        prix: 30.00
    },
    {
        images: ["cotes-du-roussillon-joya-rose.jpg"],
        nom: "Côtes du Roussillon - JOYA Rosé",
        cepage : "Pays d'Oc",
        descriptif: "Cet assemblage de Syrah et de Grenache est une véritable friandise. Le bouquet est d’une parfaite élégance aux senteurs acidulées et fleuries. La bouche expressive offre une agréable fraîcheur sur des notes de groseille, grenade et pêche blanche.",
        volume: 0.75,
        prix: 34.00
    },
    {
        images: ["cotes-de-provence-rose-mb-domaine-borrels.jpg", "cotes-de-provence-rose-mb-domaine-borrels-2.jpg"],
        nom: "Côtes de Provence Rosé MB - Domaine Borrels",
        cepage : "Provence",
        descriptif: "Un vin frais, minérale et désaltérant aux reflets saumonés. Arôme de petits fruits rouges avec une agréable rondeur.",
        volume: 0.75,
        prix: 43.00
    },
    {
        images: ["chateau-mandagot-millefleurs-bouchon-verre.jpg", "chateau-mandagot-millefleurs-bouchon-verre-2.jpg"],
        nom: "Château Mandagot - Millefleurs - Bouchon Verre",
        cepage : "Pays d'Oc",
        descriptif: "Une cuvée rose pâle, au nez élégant évoquant la rose fraîche et la framboise, prolongé par un palais charnu et rond, stimulé par une finale acidulée.",
        volume: 0.75,
        prix: 43.00
    },
    {
        images: ["cotes-provence-cantarelle-cuvee-madam.jpg", "cotes-provence-cantarelle-cuvee-madam-2.jpg"],
        nom: "Côtes Provence Cantarelle - Cuvée MADAM",
        cepage : "Provence",
        descriptif: "Une robe pêche brillante. Un nez complexe au fruit a chair jaune comme la mangue ou encore la pêche. La bouche est structurée avec beaucoup de rondeur et une belle persistance aromatique.",
        volume: 0.75,
        prix: 50.00
    }
];
var champBulles = [
    {
        images: ["vouvray-blanc-brut-excellence-methode-traditionnelle.jpg", "vouvray-blanc-brut-excellence-methode-traditionnelle-2.jpg"],
        nom: "Vouvray Blanc Brut Excellence Méthode Traditionnelle",
        cepage : "Loire",
        descriptif: "Vin à très fines bulles. Le nez mûr, éclatant et élégant évoque les fruits secs (noisette) puis les fruits mûrs (poire, ananas). La matière se révèle fraîche, avec une belle évolution en douceur. Exquise persistance aromatique sur des notes briochées et de fruits confits.",
        volume: 0.75,
        prix: 47.00   
    },
    {
        images: ["champagne-brut-carte-noire-fthomas.jpg", "champagne-brut-carte-noire-fthomas-2.jpg"],
        nom: "Champagne Brut Carte Noire - F.Thomas",
        cepage : "Vertus",
        descriptif: "La robe est jaune or, brillante et limpide avec de fines bulles. Le nez se révèle aromatique fin et fruité. La bouche est agréable, la texture fine et légère, expressive et fruitée.",
        volume: 0.75,
        prix: 96.00   
    },
    {
        images: ["champagne-brut-carte-noire-huot.jpg", "champagne-brut-carte-noire-huot-2.jpg"],
        nom: "Champagne Brut Carte Noire - HUOT",
        cepage : "Epernay",
        descriptif: "Belle robe jaune or chair brillante. Joli nez gourmand évoquant la gelée de fraise, l’abricot. Bouche élégante et appétissante avec de fines bulles aux notes de gelée de coing, pointe de miel. Longue finale gourmande sur la gentiane.",
        volume: 0.75,
        prix: 99.00   
    },
    {
        images: ["champagne-saint-sauveur-blanc-de-blancs-1er-cru-fthomas.jpg", "champagne-saint-sauveur-blanc-de-blancs-1er-cru-fthomas-2.jpg"],
        nom: "Champagne Saint-Sauveur Blanc de Blancs 1er Cru - F.Thomas",
        cepage : "Vertus",
        descriptif: "Ce Champagne Blanc de Blancs (100% chardonnay) trouve sa place idéalement à l'apéritif. Il apporte toute sa subtilité à un palais encore vierge de sensations et qui appréciera sa race et sa finesse.",
        volume: 0.75,
        prix: 115.00   
    },
        {
        images: ["champagne-blanc-de-blancs-huot.jpg", "champagne-blanc-de-blancs-huot-2.jpg"],
        nom: "Champagne Blanc de Blancs - HUOT",
        cepage : "Epernay",
        descriptif: "Robe paille intense aux reflets dorés, mousse fine et persistante. Un parfum riche et intense, complexe, sensuel rappelant les agrumes et le pain grillé. Doux, puissant en bouche. Élégamment équilibré avec une longue persistance.",
        volume: 0.75,
        prix: 172.00   
    },
    {
        images: ["champagne-louis-blanc-de-noirs-millesime-huot.jpg", "champagne-louis-blanc-de-noirs-millesime-huot-2.jpg"],
        nom: "Champagne \"LOUIS\" Blanc de Noirs Millésimé - HUOT",
        cepage : "Epernay",
        descriptif: "Le Champagne Blanc de Noirs «Cuvée Louis» est élaboré à partir de Pinot Noir et Pinot Meunier. C'est un champagne millésimé corsé, vif et dynamique. Aux parfums de fruits jaunes et de pain grillé. Le goût est frais, ample, agréable et persistant.",
        volume: 0.75,
        prix: 178.00   
    },
    {
        images: ["champagne-le-clos-saint-sauveur-jeroboam.jpg", "champagne-le-clos-saint-sauveur-jeroboam-2.jpg"],
        nom: "Champagne Le Clos Saint-Sauveur Jéroboam",
        cepage : "Vertus",
        descriptif: "Fraise des bois au nez, légèrement sucré, agréable et rond en bouche. Doté d'un bon équilibre, il comblera tout le monde avec ses notes fraîches et ses bulles très fines.",
        volume: 3,
        prix: 118.00   
    },
    {
        images: ["champagne-r-de-ruinart-brut.jpg", "champagne-r-de-ruinart-brut-2.jpg"],
        nom: "Champagne R de Ruinart Brut",
        cepage : "Reims",
        descriptif: "Un nez frais et fruité, mélange subtil de notes florales et pâtissières (brioche). Une bouche franche en attaque, jouant ensuite sur la rondeur et les fruits mûrs.",
        volume: 0.75,
        prix: 236.00   
    },
    {
        images: ["prosecco-extra-dry.jpg"],
        nom: "Prosecco Extra Dry",
        cepage : "Italie",
        descriptif: "De couleur jaune paille avec des nuances verdâtres, il offre des bulles délicates et persistantes. Au nez, on notera la fraîcheur et les notes aromatiques intenses. Son goût est bien équilibré, délicat et avec une finale agréable.",
        volume: 0.75,
        prix: 38.00
    },
    {
        images: ["red-spritz-pour-preparation-cocktail-spritz.jpg"],
        nom: "Red Spritz (pour préparation cocktail \"SPRITZ\")",
        cepage : "Italie",
        descriptif: "Apéritif rouge Italien avec un arôme intense et un goût d'orange très agréable. Bien structuré avec une couleur persistante même dilué. Idéal pour les Cocktails et long drinks. Ingrédient principal du fameux Cocktail SPRITZ.",
        volume: 0.75,
        prix: 60.00  
    }
];
var jambSerrano = [
    {
        images: ["chorizo-iberique.jpg", "chorizo-iberique-2.jpg"],
        nom: "Chorizo Ibérique",
        descriptif: "Chorizo ibérique élaboré avec du maigre de porc ibérique de cebo , nourri à base de glands, d’herbes de pâturage et de céréales.Un choix meilleur porc sans gras est sélectionné exclusivement pour la préparation de ce Chorizo. Le secret de sa qualité repose sur la viande fraîche, aromatisée au paprika et aux épices, selon d’anciennes méthodes culinaires traditionnelles.",
        poids: "env "+ 1.5,
        prix: 13.50,
        infoPrix: "kg"
    },
    {
        images: ["jambon-serrano-10-mois-tranche-barquette-500gr.jpg", "jambon-serrano-10-mois-tranche-barquette-500gr-2.jpg", "jambon-serrano-10-mois-tranche-barquette-500gr-3.jpg"],
        nom: "Jambon Serrano 10 mois Tranché Barquette 500gr",
        descriptif: "",
        poids: 0.5,
        prix: 8.40,
        infoPrix: "l'unité"
    },
    {
        images: ["jambon-serrano-entier-desosse-direct-producteur-12-mois.jpg",
        		 "jambon-serrano-entier-desosse-direct-producteur-12-mois-2.jpg"],
        nom: "Jambon Serrano Entier Désossé (direct producteur) - 12 mois",
        descriptif: "Jambon entier",
        poids: "env " + 5,
        prix: 12.70,
        infoPrix: "kg" 
    },
    {
        images: ["jambon-serrano-entier-desosse-direct-producteur-16-mois.jpg",
        		 "jambon-serrano-entier-desosse-direct-producteur-16-mois-2.jpg",
        		 "jambon-serrano-entier-desosse-direct-producteur-16-mois-3.jpg"],
        nom: "Jambon Serrano Entier Désossé (direct producteur) - 16 mois",
        descriptif: "Le jambon Serrano desossé provient de la patte arrière du cochon blanc.il est séché pendant 12 mois et affiné en cave pendant 4 mois. Il se caractérise par ses veines de graisse infiltrée dans les tissus. La couleur varie du rose au tons pourpres. Saveur douce, arôme légèrement salé et agréable. Texture homogène et légèrement fibreuse. La graisse est clair, couleur blanc jaunâtre, au goût aromatique et agréable.",
        poids: "env " + 6,
        prix: 13.90,
        infoPrix: "kg" 
    },
    {
        images: ["epaule-iberico-desossee-patta-negra-cebo.jpg",
        		 "epaule-iberico-desossee-patta-negra-cebo-2.jpg"],
        nom: "Epaule Ibérico Désossée - Cebo",
        descriptif: "L’épaule Ibérique est la patte avant de porcs ibériques espagnols élevés en liberté dans les pâturages et nourris d’un fourrage sélectionné.Saveur intense, arôme enveloppante, couleur rougeâtre. Petites infiltrations naturelles de graisse qui donne une texture très juteux.Cette épaule est un produit unique en la gastronomie espagnole.",
        poids: "env "+ 2.5,
        prix: 37.50,
        infoPrix: "kg"
    },
    {
        images: ["jambon-iberico-desosse-patta-negra-cebo.jpg",
        		 "jambon-iberico-desosse-patta-negra-cebo-2.jpg"],
        nom: "Jambon Ibérico Désossé - Cebo",
        descriptif: "De porc ibérique 50 % de leur propre élevage, élevé en liberté avec un régime exquis basé sur des pâturages, des céréales et des glands. Son affinage s’étend sur 30 mois sous le climat continental de Guijuelo dans des séchoirs et des caves naturelles.Désossé,découenné,dégraissé, avec une coupe appropriée de graisse de consistance très douce. La coupe présente une belle couleur rouge cerise, une bonne infiltration et des veinures, et une brillance (à la fois maigre et gras) caractéristique de sa haute qualité. Son goût est très agréable, doux et suave. Pour tous les goûts. Production propre numérotée.",
        poids: "env " + 5,
        prix: 49.80,
        infoPrix: "kg"  
    }
];
var huiles = [
    {
        images: ["huile-d-olive-extra-vierge-italie-bidon-5l.jpg",
                 "huile-d-olive-extra-vierge-italie-bidon-5l-2.jpg"],
        nom: "Huile d'Olive Extra Vierge - Italie - Bidon 5L",
        cepage: "Italie",
        descriptif: "",
        volume: 5,
        prix: 34.50, 
    },
    {
        images: ["huile-d-olive-extra-vierge-truffee-trinacria.jpg"],
        nom: "Huile d'Olive Extra Vierge \"Truffée\" - Trinacria",
        cepage: "Italie",
        descriptif: "",
        volume: 0.190,
        prix: 16.80, 
    }
];
var foieGras = [
    {
        images: [	"bloc-de-foie-gras-de-canard-avec-30pc-morceaux.jpg", 
        			"bloc-de-foie-gras-de-canard-avec-30pc-morceaux-2.jpg", 
        			"bloc-de-foie-gras-de-canard-avec-30pc-morceaux-3.jpg"],
        nom: "Bloc de Foie Gras de Canard avec 30% morceaux",
        descriptif: "",
        poids: 0.450,
        prix: 18.00,
        infoPrix: "pièce"
    },
    {
        images: ["foie-gras-de-canard-entier-au-jurançon.jpg", "url2"],
        nom: "Foie Gras de Canard Entier au Jurançon",
        descriptif: "",
        poids: 0.450,
        prix: 28.75,
        infoPrix: "pièce" 
    },
    {
        images: ["millefeuille-de-pintade-20pc-foie-gras-boite-rectangulaire.jpg", "url2"],
        nom: "Millefeuille de Pintade 20% Foie Gras",
        descriptif: "",
        poids: 0.310,
        prix: 13.95,
        infoPrix: "pièce"  
    },
    {
        images: [	"terrine-perigourdine-au-foie-gras.jpg", 
        			"terrine-perigourdine-au-foie-gras-2.jpg",
        			"terrine-perigourdine-au-foie-gras-3.jpg"],
        nom: "Terrine Périgourdine au Foie Gras",
        descriptif: "",
        poids: 1.00,
        prix: 22.80,
        infoPrix: "pièce"  
    },
    {
        images: [	"terrine-jarret-de-boeuf-au-foie-gras.jpg", 
        			"terrine-jarret-de-boeuf-au-foie-gras-2.jpg", 
        			"terrine-jarret-de-boeuf-au-foie-gras-3.jpg"],
        nom: "Terrine Jarret de boeuf au Foie Gras",
        descriptif: "",
        poids: 1.00,
        prix: 22.80,
        infoPrix: "pièce"  
    },
    {
        images: [	"terrine-pied-de-cochon-au-piment-d-espelette.jpg", 
        			"terrine-pied-de-cochon-au-piment-d-espelette-2.jpg",
        			"terrine-pied-de-cochon-au-piment-d-espelette-3.jpg"],
        nom: "Terrine Pied de Cochon au Piment d'Espelette",
        descriptif: "",
        poids: 1.00,
        prix: 21.70,
        infoPrix: "pièce"  
    }
];

var root = document.querySelector(':root') ;
var rootStyles = getComputedStyle(root) ;
var fontSizeLittle = rootStyles.getPropertyValue('--font-size-little') ;

// Récupération de l'élément <html>
var blocCorpsPage = document.getElementById("bloc_corps_page_produits");
// Récupération du bloc dédié à la liste des prdt 
var blocProduitElt = document.getElementById("bloc_produits");  
// Récupération de la balise titre pour savoir quelle page est ouverte
var BaliseTitleElt = document.getElementById("titre_page"); 
// Récupération du bloc réservé à la popup Image produit
var overlayElt = document.getElementById('overlay');
// Récupération du bouton fermant la popup produit 
var btnClose = document.getElementById('bouton_close');
// Récupération du bloc footer de la popup 
var popupFooterElt = document.getElementById("popup_footer"); // On récupère l'élément 'image de la popup'

// Sélection de l'affichage en fonction de la page ouverte
switch (BaliseTitleElt.innerHTML){
    case 'Alacart - Vins Rouges':
    creerListeProduitsBoisson (vinsRouges, "vins-rouges");
    blocCorpsPage.style.background = "url('../images/vins-rouges.jpg') no-repeat center";
    break;

    case 'Alacart - Vins Blancs':
    creerListeProduitsBoisson (vinsBlancs, "vins-blancs");
    blocCorpsPage.style.background = "url('../images/vins-blancs.jpg') no-repeat center";    
    break;

    case 'Alacart - Vins Rosés':
    creerListeProduitsBoisson (vinsRoses, "vins-roses");
    blocCorpsPage.style.background = "url('../images/vins-roses.jpg') no-repeat center";
    break;

    case 'Alacart - Champagnes et Bulles':
    creerListeProduitsBoisson (champBulles, "champagnes-bulles");
    blocCorpsPage.style.background = "url('../images/champagnes-bulles.jpg') no-repeat center";
    break;

    case 'Alacart - Serrano, Huiles et Truffe':
    creerListeProduitsAliment (jambSerrano, "jambons-serrano");
    creerListeProduitsBoisson (huiles, "huiles");
    blocCorpsPage.style.background = "url('../images/jambon-serrano.jpg') no-repeat center";

    break;

    case 'Alacart - Foie gras et Terrines':
    creerListeProduitsAliment (foieGras, "foie-gras");
    blocCorpsPage.style.background = "url('../images/foie-gras.jpg') no-repeat center";
    break;

    default:
    console.error('Aucun marque page reconnu');
}
// Propriété de l'affichage de l'image de fond
blocCorpsPage.style.backgroundSize = "cover";

// Pour chaque item du tab, on construit un bloc item et on y ajoute les infos de l'item
function creerListeProduitsBoisson (tab, dossierImg){
    tab.forEach(function (produit) {
        var blocItemElt = document.createElement("div");            // Création du bloc réservé à l'item 
        var blocImgProduitElt = document.createElement("div");      // Création du bloc réservé à l'image du prdt 
        var imgProduitElt = document.createElement("img");          // Création du bloc réservé à l'image du prdt 
        var blocInfoProduitElt = document.createElement("div");     // Création du bloc réservé aux infos du prdt 
        var blocNomProduitElt = document.createElement("div");      // Création du bloc réservé au nom du prdt
        var blocCepProduitElt = document.createElement("div");      // Création du bloc réservé au cepage du prdt
        var blocDescrProduitElt = document.createElement("div");    // Création du bloc réservé à la description du prdt   
        var blocPrixProduitElt = document.createElement("div");     // Création du bloc réservé au prix du prdt   
        var blocVolProduitElt = document.createElement("div");      // Création du bloc réservé au volume du prdt   
        
        // Association des éléments crées à un id ou une class
        blocItemElt.id = "bloc_item";
        blocImgProduitElt.id = "bloc_img_produit";
        imgProduitElt.id = "img_produit";
        blocInfoProduitElt.id = "bloc_info_produit";
        blocNomProduitElt.className = "element_bloc_info";
        blocNomProduitElt.id = "bloc_nom_produit";
       	blocCepProduitElt.className = "element_bloc_info";
       	blocDescrProduitElt.className = "element_bloc_info";
        blocDescrProduitElt.id = "bloc_descr_produit";
       	blocPrixProduitElt.className = "element_bloc_info";
       	blocVolProduitElt.className = "element_bloc_info";

        imgProduitElt.src = "../images/" + dossierImg +"/" + produit.images[0];	// Affichage image produit dans bloc item
        // Si Erreur lors du chgt de l'image dans le bloc image, on affiche un "Comming Soon"
        imgProduitElt.onerror = function() {afficherComingSoonImage(imgProduitElt)};

    	// Gestion évenement "click sur une image du bloc produit" -> fait apparaitre la popup image
        imgProduitElt.addEventListener('click',function() {afficherFenetrePopupImage(produit, dossierImg)});

        blocNomProduitElt.innerHTML = produit.nom;                      // Récupération du nom du produit
        blocDescrProduitElt.innerHTML = produit.descriptif;             // Récupération de la description du produit       
        blocCepProduitElt.innerHTML = produit.cepage;					// Récupération du cepage du produit
        blocVolProduitElt.innerHTML = produit.volume + "L";		       	// Récupération du volume du produit
        blocPrixProduitElt.innerHTML = "<strong>" + Number(produit.prix).toFixed(2) + "&euro; </strong>" + "<font size=\"-1\">&nbsp (carton 6 bouteilles)</font>"; // Prix avec deux chiffres après la virgule
        // Vin vendu dans une caisse en bois
        if (produit.nom == "Saint-Estèphe 2016 - Château Cossieu") {
             blocPrixProduitElt.innerHTML = "<strong>" + Number(produit.prix).toFixed(2) + "&euro; </strong>" + "<font size=\"-1\">&nbsp (caisse bois 6 bouteilles)";
        }
        // Vin vendu à l'unité
        if (produit.nom == "Champagne Le Clos Saint-Sauveur Jéroboam") {
             blocPrixProduitElt.innerHTML = "<strong>" + Number(produit.prix).toFixed(2) + "&euro; </strong>" + "<font size=\"-1\">&nbsp (l'unité)";
        }
        if (dossierImg == "huiles") {
             blocPrixProduitElt.innerHTML = "<strong>" + Number(produit.prix).toFixed(2) + "&euro; </strong>";
        }
        blocInfoProduitElt.style.gridTemplateRows = "25% 5% 40% 5% 20%";	   // Mise en forme bloc info : grid de 5 lignes
       	blocInfoProduitElt.appendChild(blocNomProduitElt); 		               // On insère les blocs nom, cepage, description, volume et prix dans le bloc infos  
        blocInfoProduitElt.appendChild(blocCepProduitElt);
        blocInfoProduitElt.appendChild(blocDescrProduitElt);
        blocInfoProduitElt.appendChild(blocVolProduitElt); 
        blocInfoProduitElt.appendChild(blocPrixProduitElt); 

        blocProduitElt.appendChild(blocItemElt);		// On insère le bloc item dans le tableau de produits    
        blocItemElt.appendChild(blocImgProduitElt);		// On insère les blocs images et info dans le bloc item
        blocItemElt.appendChild(blocInfoProduitElt); 	
        blocImgProduitElt.appendChild(imgProduitElt);	// On insère l'image du produit dans le bloc image	             
    });

}

function creerListeProduitsAliment (tab, dossierImg){
    tab.forEach(function (produit) {
        var blocItemElt = document.createElement("div");            // Création du bloc réservé à l'item 
        var blocImgProduitElt = document.createElement("div");      // Création du bloc réservé à l'image du prdt 
        var imgProduitElt = document.createElement("img");          // Création du bloc réservé à l'image du prdt 
        var blocInfoProduitElt = document.createElement("div");     // Création du bloc réservé aux infos du prdt 
        var blocNomProduitElt = document.createElement("div");      // Création du bloc réservé au nom du prdt
        var blocDescrProduitElt = document.createElement("div");    // Création du bloc réservé à la description du prdt   
        var blocPrixProduitElt = document.createElement("div");     // Création du bloc réservé au prix du prdt   
        var blocPoidsProduitElt = document.createElement("div");    // Création du bloc réservé au volume du prdt   
        
        // Association des éléments crées à un id ou une class
        blocItemElt.id = "bloc_item";
        blocImgProduitElt.id = "bloc_img_produit";
        imgProduitElt.id = "img_produit";
        blocInfoProduitElt.id = "bloc_info_produit";
        blocNomProduitElt.className = "element_bloc_info";
        blocNomProduitElt.id = "bloc_nom_produit";
        blocDescrProduitElt.className = "element_bloc_info";
        blocDescrProduitElt.id = "bloc_descr_produit";
        blocPrixProduitElt.className = "element_bloc_info";
        blocPoidsProduitElt.className = "element_bloc_info";

        imgProduitElt.src = "../images/" + dossierImg +"/" + produit.images[0]; // Affichage image produit dans bloc item
        // Si Erreur lors du chgt de l'image dans le bloc image, on affiche un "Comming Soon"
        imgProduitElt.onerror = function() {afficherComingSoonImage(imgProduitElt)};

        // Gestion évenement "click sur une image du bloc produit" -> fait apparaitre la popup image
        imgProduitElt.addEventListener('click',function() {afficherFenetrePopupImage(produit, dossierImg)});

        blocNomProduitElt.innerHTML = produit.nom;  // Récupération du nom du produit
        blocDescrProduitElt.innerHTML = produit.descriptif; // Récupération de la description du produit

        if (produit.poids < 1) {
            blocPoidsProduitElt.innerHTML = (produit.poids * 1000) + "gr";  // Récupération du poids du produit en grammes (si < 1kg)           
        } else {
            blocPoidsProduitElt.innerHTML = produit.poids + "kg";           // Récupération du poids du produit en kilos (si > 1kg)
        }   

        blocPrixProduitElt.innerHTML =  "<strong>" + Number(produit.prix).toFixed(2) + "&euro; </strong>" + "&nbsp/&nbsp" + produit.infoPrix; // Prix avec deux chiffres après la virgule

        blocInfoProduitElt.style.gridTemplateRows = "30% 30% 15% 25%";      // Mise en forme bloc info : grid de 4 lignes
        blocInfoProduitElt.appendChild(blocNomProduitElt);      // On insère les blocs nom, description, poids et prix dans le bloc infos
        blocInfoProduitElt.appendChild(blocDescrProduitElt);
        blocInfoProduitElt.appendChild(blocPoidsProduitElt); 
        blocInfoProduitElt.appendChild(blocPrixProduitElt);
        
        blocProduitElt.appendChild(blocItemElt);        // On insère le bloc item dans le tableau de produits    
        blocItemElt.appendChild(blocImgProduitElt);     // On insère les blocs images et info dans le bloc item
        blocItemElt.appendChild(blocInfoProduitElt);    
        blocImgProduitElt.appendChild(imgProduitElt);   // On insère l'image du produit dans le bloc image               
    });
}


// Gestion évenements liés à la navigation dans la popup image
btnClose.addEventListener('click',closeModal); // Fermer la popup

function closeModal() {
	overlayElt.style.display='none';
	popupFooterElt.innerHTML = '';
}

function afficherComingSoonImage(imageElt) { 
    imageElt.src = "../images/image-manquante.jpg";            
    imageElt.onerror = null;           // Evite la loop si erreur à nouveau
    imageElt.style.maxWidth ="95%";	        
}

function afficherFenetrePopupImage(produit, dossierImg) {
    var popupImageElt = document.getElementById("popup_image"); // On récupère l'élément 'image de la popup'
    var txtFooterPopupElt = document.createElement("div");  // Texte partie gauche du popup_footer
    txtFooterPopupElt.className = "element_bloc_popup";

    overlayElt.style.display="block";       // L'overlay apparait par dessus la page
    popupImageElt.src = "../images/" + dossierImg + "/big-size/" + produit.images[0]; // Affichage de l'image "big size" dans la popup
    popupImageElt.style.maxHeight = "100%";           
    popupImageElt.style.maxWidth ="95%"; 

    popupImageElt.onerror = function(){afficherComingSoonImage(popupImageElt)};
    
    // Création des boutons de navigation de la popup pour choisir l'image parmis celle présentes dans le tab images[] du produit
    if (produit.images.length > 1) {
        txtFooterPopupElt.innerHTML = "Photos du produit : ";
        popupFooterElt.appendChild(txtFooterPopupElt);  
                    
        for (var i = 0; i < produit.images.length; i++) {                   
            let blocAutrePopupImageElt = document.createElement("div");     // Création d'un bouton de navigation
            blocAutrePopupImageElt.className = "bouton_popup";              // Le CSS se charge de la mise en forme sur cette class
            blocAutrePopupImageElt.id = i;                                  // L'id de l'élément = i, utile lors du click sur ce dernier
            blocAutrePopupImageElt.innerHTML = (i + 1);                     // Numéro de la photo dans le bouton
            // Au clic, l'image popup devient celle associée au bouton (pour cet affichage, image "big size")
            blocAutrePopupImageElt.addEventListener('click',function() {    
                popupImageElt.src = "../images/" + dossierImg + "/big-size/" + produit.images[blocAutrePopupImageElt.id];
                // Si Erreur lors du chgt de l'image dans la popup, on affiche un "Comming Soon"
                popupImageElt.onerror = function(){afficherComingSoonImage(popupImageElt)};
            });
            // Ajout du bouton de navigation crée précédemment
            popupFooterElt.appendChild(blocAutrePopupImageElt);
        }     
    }
};