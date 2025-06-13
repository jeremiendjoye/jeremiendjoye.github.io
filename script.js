document.addEventListener('DOMContentLoaded', () => {
  const phrases = [
      "BIENVENUE SUR MON PORTFOLIO",
      "Ici, vous découvrirez mes premières réalisations, mes centres d'intérêts mais aussi un bilan de mon parcours."
  ];
  
  // Créer deux éléments pour les deux lignes de texte
  const container = document.getElementById('dynamic-text-container');
  const title = document.createElement('h1');
  title.id = 'dynamic-title';
  const subtitle = document.createElement('h2');
  subtitle.id = 'dynamic-subtitle';
  
  // Ajouter les éléments au conteneur
  container.appendChild(title);
  container.appendChild(subtitle);
  
  let phraseIndex = 0;
  let charIndex = 0;
  let currentElement = title;

  function typeEffect() {
      if (charIndex < phrases[phraseIndex].length) {
          // Ajouter un caractère à la fois
          currentElement.textContent += phrases[phraseIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeEffect,47); // Vitesse d'écriture (100ms par caractère)
      } else {
          // Phrase terminée
          if (phraseIndex < phrases.length - 1) {
              // Passer à la phrase suivante
              phraseIndex++;
              charIndex = 0;
              currentElement = subtitle; // Passer au second élément
              setTimeout(typeEffect, 500); // Pause avant de commencer la seconde phrase
          }
          // Si toutes les phrases sont écrites, on ne fait rien d'autre (texte reste affiché)
      }
  }

  typeEffect(); // Lance l'effet d'écriture
});

const projects = [

  {
    id: 1,
    title: "Analyse de données, reporting et datavisualisation",
    image: "/fichiers/imagesProjets/calyxis.png",
    description: `Dans le cadre de cette SAÉ, nous avions pour objectif de concevoir un outil interactif et dynamique destiné à Calyxis, en exploitant les données issues de l’observatoire MAVIE. Cet outil visait à analyser l’ampleur des Accidents de la Vie Courante (AcVC) en France, à en identifier les principales caractéristiques ainsi que les facteurs influençant leur survenue et leur gravité. À partir de cette analyse, nous avons également proposé des mesures de prévention innovantes, adaptées aux profils des individus et à leur environnement.
Pour mener à bien ce projet, nous avons travaillé à partir de plusieurs fichiers de données contenant : les informations personnelles des volontaires, les caractéristiques de leur logement, ainsi que le détail des accidents recensés. Ces fichiers étaient accompagnés de questionnaires explicatifs, qui nous ont permis de mieux comprendre le contexte et d’orienter efficacement la conceptualisation de notre outil.
Dans un premier temps, mon groupe et moi avons procédé au nettoyage des données fournies à l’aide du langage Python, en mobilisant notamment la bibliothèque pandas. Une fois les données traitées et rendues exploitables, nous avons conçu une interface graphique à l’aide de la bibliothèque Streamlit.
Depuis cette interface, l’utilisateur peut :
-importer un fichier Excel contenant les données brutes ; celui-ci est automatiquement nettoyé, générant en sortie deux fichiers CSV : l’un relatif aux individus, l’autre aux accidents ;
-visualiser le contenu des tables nettoyées ;
-effectuer des tests statistiques, notamment le test du Khi², pour étudier les liens entre certaines variables ;
-accéder à un onglet tutoriel présentant les différentes étapes de l’utilisation de l’outil et un guide explicatif ;
-consulter un onglet "Solutions" apportant des réponses concrètes à la problématique initiale.
En parallèle, j’ai développé un tableau de bord dynamique permettant de visualiser les tendances majeures des AcVC, à travers différents indicateurs.
Ce projet m’a permis de renforcer mes compétences dans plusieurs domaines essentiels à la science des données : l’analyse et le nettoyage de données avec pandas, le développement d’une interface utilisateur avec Streamlit, la conception d’outils d’aide à la décision avec Power Bi, mais aussi la gestion de projet, notamment grâce à l’application de la méthodologie SCRUM, qui a rythmé notre organisation collective.`,
    file: "/fichiers/dossier zip/mavie_dashboard.zip" 
  },
  {
    id: 2,
    title: "Conception et implémentation d'une base de données",
    image: "/fichiers/imagesProjets/conceptionBD.png",
    description: `L’objectif de ce projet était de concevoir un outil permettant la création et la gestion d’une base de données.
Dans un premier temps, nous avons conçu le Modèle Conceptuel de Données (MCD) à l’aide de Looping MCD, puis nous avons créé la base de données en l’hébergeant sur phpMyAdmin.
Une fois la base en place, nous avons développé une interface graphique avec Tkinter (Python). Cette interface permettait de :

- se connecter à une base de données ou d’en créer une nouvelle ;
- visualiser les tables existantes ;
- effectuer des opérations telles que l’ajout, la suppression ou la modification d’enregistrements ;
- importer des données depuis des fichiers CSV ou SQL ;
- exécuter des requêtes SQL personnalisées ;
- et bien d’autres fonctionnalités.

Ce projet m’a permis de monter en compétences, notamment en SQL, en Python, ainsi que dans la conception et l'interfaçage de bases de données.`,
    file: "fichiers/dossier zip/BD.zip" 
  },
  {
    id: 3,
    title: "DataViz",
    image: "/fichiers/imagesProjets/dataviz.png",
    description: `Le concours Dataviz est un événement organisé chaque année par l’Insee, réunissant tous les départements BUT Science des Données (SD) de France.
Le thème de cette édition portait sur la scolarisation des jeunes âgés de 19 à 25 ans en France. À partir des données fournies, chaque groupe devait définir une problématique pertinente et réaliser une infographie pour y répondre.
L’infographie réalisée par mon groupe a été jugée la plus pertinente et la mieux conçue. Nous avons ainsi été sélectionnés pour représenter le département BUT SD de Niort au niveau national.
Le 12 juin 2025, l’Insee a donné les résultats, nous avons eu l’honneur de recevoir le prix du jury pour la meilleure infographie devant Grenoble et Dole.`,
    file: "/fichiers/dossier zip/dataviz.zip" 
  },
  {
    id: 4,
    title: "Gestion de fichiers",
    image: "/fichiers/imagesProjets/gestionFichiers.png",
    description: `À l'origine, nous disposions d'un fichier au format JSON regroupant l'ensemble des événements ayant eu lieu pendant les Jeux Olympiques de Paris 2024.
    Cependant, ce fichier était difficilement exploitable en raison de sa mauvaise structuration et de son illisibilité.
    Pour le rendre utilisable, nous avons développé un script en Python permettant de :
              - sélectionner uniquement les colonnes pertinentes
              - modifier le type de certaines variables,
              - supprimer les doublons ainsi que les lignes vides ou incohérentes.
    Une fois le traitement terminé, le script génère automatiquement un fichier CSV, prêt à être exploité pour l'analyse.
    Ce projet a été réalisé en binôme avec Antonin Vion, avec qui j'ai eu grand plaisir à travailler.`,
    file: "/fichiers/dossier zip/gestionfichier.zip" 
  },
  {
    id: 5,
    title: "Régréssion linéaire sur des données réelles",
    image: "/fichiers/imagesProjets/regression.png",
    description: `L’objectif de ce projet était de prédire le prix des biens immobiliers dans le département des Deux-Sèvres à l’aide d’un modèle mathématique.
Pour cela, nous disposions d’un fichier d’entraînement (« train ») contenant plusieurs variables telles que le nombre de pièces, la surface du bien, etc.
À partir de ces données et à l'aide de R, nous avons entraîné notre modèle en cherchant à établir des relations pertinentes entre les différentes variables et la valeur foncière afin d’estimer au mieux le prix des biens.
Une fois le modèle construit, nous l’avons utilisé pour réaliser des prédictions sur un second fichier (« test »), structuré de la même manière que le fichier d’entraînement.
Ce projet m’a permis de mettre en pratique les notions abordées en mathématiques, notamment dans le choix et la mise en œuvre du modèle, tout en développant mes compétences en analyse de données et en modélisation.`,
    file: "/fichiers/dossier zip/regression.zip"
  },
  {
    id: 6,
    title: "Estimation par échantillonnage",
    image: "/fichiers/imagesProjets/statinf.png",
    description: `L’objectif de ce projet était de tester différentes méthodes d’échantillonnage afin de comparer leurs résultats et de déterminer laquelle était la plus efficace.

Nous disposions d’un fichier Excel contenant les données démographiques de toutes les régions de France. Pour cette étude, nous nous sommes concentrés uniquement sur la région Pays de la Loire. L’objectif était d’estimer sa population à partir d’un échantillon, puis de comparer cette estimation au chiffre réel.
Pour cela, nous avons sélectionné un échantillon de 100 communes, selon deux méthodes distinctes. L’étude a été divisée en deux phases :

1. Une première phase utilisant un sondage aléatoire simple à probabilité égale, où chaque commune avait la même chance d’être sélectionnée.
2. Une seconde phase basée sur un sondage stratifié, consistant à diviser les communes en groupes homogènes avant de tirer l’échantillon.

Enfin, nous avons comparé les résultats issus des deux méthodes pour évaluer laquelle fournissait l’estimation la plus précise de la population réelle.`,

    file: "/fichiers/dossier zip/echantillonnage_par_echantillonnage.zip"

  },

{
    id: 7,
    title: "Etude démographique des Hautes-Alpes",
    image: "/fichiers/imagesProjets/hautesAlpes.png",
    description: `L’objectif de ce projet était de rédiger un rapport à des fins d’aide à la décision, destiné au Nouveau Front Populaire (NFP), qui a largement remporté les dernières élections législatives dans cette partie du territoire français.
Pour ce faire, nous avons commencé par collecter, sur le site de l’INSEE, plusieurs fichiers Excel relatifs à la démographie, au chômage et à l’emploi dans le département concerné.
Une fois les données récupérées, nous les avons exploitées afin d’en tirer des conclusions pertinentes, en nous appuyant sur des graphiques produits et des indicateurs statistiques calculés.
Les graphiques et indicateurs obtenus ont ensuite été interprétés dans le but, d’une part, d’établir un diagnostic global de la situation socio-économique du département, et d’autre part, de proposer des pistes de solutions face aux principaux problèmes identifiés.`,
    file: "/fichiers/dossier zip/etudeHA.pdf"
},
  {
    id: 8,
    title: "Création d'un reporting",
    image: "/fichiers/imagesProjets/reporting.png",
    description: ` L’objectif de ce projet était de concevoir une application sous Excel à destination des étudiants de première année du BUT Science des Données. 
      Cette application leur permet de suivre l’évolution de leurs notes, d’identifier les blocs validés, et de savoir s’ils remplissent les conditions pour passer en deuxième année.
      Pour ce faire, nous avons utilisé Excel et le langage VBA. Nous avons notamment automatisé l’insertion et la suppression de notes ainsi que d’autres fonctionnalités à l’aide de UserForms que nous avons programmés en VBA. Excel nous a également permis de créer un tableau de bord dynamique, mis à jour automatiquement en fonction des modifications. 
      Ce projet a représenté une réelle montée en compétences, tant sur le plan technique (VBA) que sur le plan méthodologique (conception de tableaux de bord interactifs).
      Ce travail a été réalisé en binôme avec Antonin Vion, avec qui la collaboration a été enrichissante.`,
    file: "/fichiers/dossier zip/reporting.zip" 
  },
    {
    id: 9,
    title: "Indicateurs de performance",
    image: "/fichiers/imagesProjets/indicperf.png",
    description: `L’objectif de ce projet était de réaliser un bilan financier du groupe Fleury-Michon, puis de se concentrer plus spécifiquement sur sa filiale Fleury-Michon LS. Nous avons calculé différents indicateurs financiers, établi un diagnostic et conçu un tableau de bord intégrant des chiffres clés et des graphiques.
Pour ce faire, nous disposions de fichiers Excel à partir desquels nous avons effectué nos calculs et généré les visualisations.`,

    file: "/fichiers/dossier zip/rapport_final.pdf" // Exemple de chemin de fichier
  },
  {
    id: 10,
    title: "Enquête sur la pratique du sport des étudiants de l'IUT de Niort",
    image: "/fichiers/imagesProjets/sportEnq.png",
    description: `L’objectif de ce projet était de mener une enquête sur la pratique sportive des étudiants du campus de Niort.
Pour cela, un questionnaire a été administré en face à face auprès des étudiants des départements Gestion des Entreprises et des Administrations (GEA), Hygiène, Sécurité, Environnement (HSE) et Science des Données.
Les réponses recueillies ont ensuite été saisies dans le logiciel Sphinx IQ3, ce qui nous a permis de passer à l’analyse des données, à la production de graphiques et au calcul d’indicateurs pertinents.
Enfin, un rapport de restitution a été rédigé pour présenter les résultats de l’enquête de manière claire et structurée.

Ce projet m’a permis de renforcer mes compétences en rédaction, en analyse de données, ainsi qu’en utilisation du logiciel Sphinx IQ3.`,
    file: "/fichiers/dossier zip/enquetesport.zip" 
  },

  {
    id: 11,
    title: "Enquête sur la santé des étudiants de l'IUT de Niort",
    image: "/fichiers/imagesProjets/sphinx.png",
    description:`L’objectif de ce projet était de concevoir un questionnaire sur la santé des étudiants du campus de Niort à l’aide du logiciel Sphinx iQ3.
Dans un premier temps, nous avons segmenté le questionnaire en différentes thématiques, puis réfléchi au choix des questions les plus pertinentes à poser.
À partir de ces questions, nous avons construit un organigramme afin de structurer le questionnaire, avant de le finaliser dans Sphinx iQ3.

La principale difficulté de ce projet a été le temps limité, puisque nous ne disposions que d’une matinée pour tout réaliser.
Ce travail m’a permis de développer mes compétences en travail d’équipe, en répartition des tâches, ainsi qu’en prise en main rapide d’un outil professionnel.`,
    file: "/fichiers/dossier zip/questionnaire_sante.zip" 
  },
  
  {
    id: 12,
    title: "Présentation d'un territoire économique",
    image: "/fichiers/imagesProjets/PresentationBeijing.png",
    description: `Dans le cadre de ce projet, nous avons présenté les Jeux Olympiques de Pékin 2008, en mettant en lumière l’impact économique et symbolique qu’ils ont eu sur la Chine. Au-delà de l’aspect sportif, nous avons également abordé la richesse de l’histoire chinoise, son patrimoine architectural, ainsi que d’autres dimensions culturelles majeures.
La présentation a été réalisée en français et en anglais, appuyée par un diaporama PowerPoint. Cette présentation m’a permis d’en apprendre davantage sur l’histoire de la Chine, tout en renforçant mes compétences en communication orale et en anglais.`,
    file: "/fichiers/dossier zip/Beijing2008.pptx" 
  },

  {
    id: 13,
    title: "Portfolio",
    image: "/fichiers/imagesProjets/portfolio.png",
    description: `Nous devions concevoir un portfolio présentant les projets réalisés, un bilan de notre première année, ainsi qu'une section dédiée à nos activités extra-scolaires.
Ce portfolio pouvait être réalisé à l’aide d’outils de création de sites ou directement par le biais du code.
J’ai choisi de le développer moi-même, ce qui m’a permis de renforcer mes compétences en HTML, CSS et JavaScript.`  ,
    file: "/fichiers/dossier zip/site.docx"},



];

const carouselTrack = document.getElementById("carousel-track");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const indicators = document.getElementById("carousel-indicators");

let currentIndex = 0;

function renderSlides() {
  carouselTrack.innerHTML = '';
  projects.forEach((project, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    slide.dataset.index = index;
    slide.innerHTML = `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-counter">${index + 1}/${projects.length}</div>
        </div>
        <div class="project-content">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.title}</p>
          </div>
          <button class="btn-more">En savoir plus</button>
        </div>
      </div>`;
    carouselTrack.appendChild(slide);
  });
}

function renderIndicators() {
  indicators.innerHTML = '';
  projects.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = index;
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
    indicators.appendChild(indicator);
  });
}

function getPrevIndex(index) {
  return index === 0 ? projects.length - 1 : index - 1;
}

function getNextIndex(index) {
  return index === projects.length - 1 ? 0 : index + 1;
}

function updateCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "prev", "next");
    if (index === currentIndex) {
      slide.classList.add("active");
    } else if (index === getPrevIndex(currentIndex)) {
      slide.classList.add("prev");
    } else if (index === getNextIndex(currentIndex)) {
      slide.classList.add("next");
    }
  });

  const indicatorElems = document.querySelectorAll(".indicator");
  indicatorElems.forEach((ind, index) => {
    ind.classList.toggle("active", index === currentIndex);
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = getPrevIndex(currentIndex);
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = getNextIndex(currentIndex);
  updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
  renderSlides();
  renderIndicators();
  updateCarousel();
});

// Code de la fenêtre modale corrigé
const projectModal = document.getElementById("project-modal");
const closeButton = document.querySelector(".close-button");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDownload = document.getElementById("modal-download");
const modalContent = document.querySelector(".modal-content");

// Fonction pour afficher la modale avec les informations du projet
function openModal(project) {
  modalTitle.textContent = project.title;
  modalDescription.innerHTML = project.description.replace(/\n/g, '<br>');
  modalDownload.href = project.file;

  // Ajuster la taille de la modale
  modalContent.style.width = "80%";  // Augmentation de la largeur
  modalContent.style.maxWidth = "1000px";  // Augmentation de la largeur maximale
  modalContent.style.maxHeight = "80vh";  // Limiter la hauteur à 80% de la hauteur de la fenêtre
  modalContent.style.overflow = "auto";  // Ajouter un défilement si le contenu est trop grand

  // Afficher la modale
  projectModal.classList.remove("hidden");
  
  // Désactiver le scroll de la page principale
  document.body.style.overflow = "hidden";

  // Animation d'ouverture
  modalContent.style.opacity = "0";
  modalContent.style.transform = "scale(0.9)";
  setTimeout(() => {
    modalContent.style.transition = "all 0.3s ease-in-out";
    modalContent.style.opacity = "1";
    modalContent.style.transform = "scale(1)";
  }, 10);
  document.body.classList.add('modal-open')
}

// Fonction pour fermer la modale
function closeModal() {
  // Animation de fermeture
  modalContent.style.opacity = "0";
  modalContent.style.transform = "scale(0.9)";
  
  setTimeout(() => {
    projectModal.classList.add("hidden");
    modalContent.style.transition = "";
    
    // Réactiver le scroll de la page principale
    document.body.style.overflow = "";
  }, 300);
  setTimeout(() => {
    projectModal.classList.add("hidden");
    modalContent.style.transition = "";
    document.body.classList.remove('modal-open'); // Supprime la classe
  }, 300);
}

// Ajouter un écouteur d'événement pour fermer la modale
closeButton.addEventListener("click", closeModal);

// Fermer la modale si on clique en dehors du contenu
projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeModal();
  }
});

// Ajouter la possibilité de fermer avec la touche Echap
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !projectModal.classList.contains("hidden")) {
    closeModal();
  }
});

// Ajouter des écouteurs d'événements pour les boutons "En savoir plus"
document.addEventListener("DOMContentLoaded", () => {
  // Utiliser une délégation d'événements pour gérer les boutons dynamiquement créés
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-more")) {
      const slideIndex = event.target.closest(".carousel-slide").dataset.index;
      openModal(projects[slideIndex]);
    }
  });
});

 // Fonction pour toggle le menu burger
        function toggleMenu() {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('show');
        }
        
        // Fermer le menu quand on clique sur un lien (mobile)
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                const menu = document.getElementById('navMenu');
                menu.classList.remove('show');
            });
        });
        
        // Fermer le menu quand on clique ailleurs
        document.addEventListener('click', (e) => {
            const nav = document.querySelector('nav');
            const menu = document.getElementById('navMenu');
            if (!nav.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
