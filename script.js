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
    title: "Conception et implémentation d'une base de données",
    image: "/fichiers/imagesProjets/conceptionBD.png",
    description: ``,
    file: "fichiers/dossier zip/BD.zip" 
  },
  {
    id: 2,
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
    id: 3,
    title: "Régréssion linéaire sur des données réelles",
    image: "/fichiers/imagesProjets/regression.png",
    description: `L'objectif de ce projet a été de prédire le prix des biens immobiliers dans le département des Deux-Sèvres en utilisant un modèle mathématique.
                  Pour le réaliser nous disposions d'un fichier "train" regroupant plusieurs variable telles que le nombre de pièces, la surface du bien etc.
                  A partir de ce fichier nous avons entrainé notre modèle en essayant d'établier une relation entre les différentes variables afin de prédire au mieux le prix des biens immobilers.
                  Une fois que notre modèle a été défini nous sommes passés à la prédiction de ces biens sur le fichier "test" comportant les meme variables que "train" fichier à partir duquel notre modèle a été entrainé.
                  Ce projet m'a permis de mettre en pratique les différentes notions vu en mathématiques à travers le choix du modèle etc et d'avoir..`,
    file: "/fichiers/dossier zip/regression.zip"
  },
  {
    id: 4,
    title: "Présentation d'un territoire économique",
    image: "/fichiers/imagesProjets/PresentationBeijing.png",
    description: `Dans le cadre de ce projet, nous avons présenté les Jeux Olympiques de Pékin 2008, en mettant en lumière l’impact économique et symbolique qu’ils ont eu sur la Chine. Au-delà de l’aspect sportif, nous avons également abordé la richesse de l’histoire chinoise, son patrimoine architectural, ainsi que d’autres dimensions culturelles majeures.
La présentation a été réalisée en français et en anglais, appuyée par un diaporama PowerPoint. Cette présentation m’a permis d’en apprendre davantage sur l’histoire de la Chine, tout en renforçant mes compétences en communication orale et en anglais.
Ce travail a été mené en binôme, avec Noé TOQUOY, avec qui j’ai eu le plaisir de collaborer.`,
    file: "/fichiers/dossier zip/Beijing2008.pptx" 
  },
  {
    id: 5,
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
    id: 6,
    title: "Enquête sur la pratique du sport des étudiants de l'IUT de Niort",
    image: "/fichiers/imagesProjets/sportEnq.png",
    description: "",
    file: "/fichiers/dossier zip/enquetesport.zip" 
  },

  {
    id: 7,
    title: "Etude démographique des Hautes-Alpes",
    image: "/fichiers/imagesProjets/hautesAlpes.png",
    description: `L"objectif ce projet a été de créer un rapport  à des fins décisionnelles déstonées au NFP qui ont largement remporté lors des dernièes élections législatives dans cette partie du territoire français.
    Pour réaliser le rapport nous avons premièrement du récupérer sur le site de l'INSEE des fichiers excel raltives à la démographie du département, du chomage et de l'emploi.
    Une fois récuperer nous avons du exploiter chacun de ces fichiers à fin d'en tirer des conclusions pertinentes  à partir  des graphiques créés et d'indicateurs calculés.
    Une fois indicateurs et graphiques formés. Nous avons du les interpreter dans le but premièrement de faire un bilan globale de ce département puis de proposer des solutions aux différents problèmes détectés`,
    file: "/fichiers/dossier zip/etudeHA.pdf"
  },
  {
    id: 8,
    title: "Enquête sur la santé des étudiants de l'IUT de Niort",
    image: "/fichiers/imagesProjets/sphinx.jpg",
    description: "",
    file: "/fichiers/telechargements/BD.zip" // Exemple de chemin de fichier
  },
  {
    id: 9,
    title: "DataViz",
    image: "/fichiers/imagesProjets/dataviz.png",
    description: `Le concours Dataviz est un événement organisé chaque année par l’Insee, réunissant tous les départements BUT Science des Données (SD) de France.
Le thème de cette édition portait sur la scolarisation des jeunes âgés de 19 à 25 ans en France. À partir des données fournies, chaque groupe devait définir une problématique pertinente et réaliser une infographie pour y répondre.
L’infographie réalisée par mon groupe a été jugée la plus pertinente et la mieux conçue. Nous avons ainsi été sélectionnés pour représenter le département BUT SD de Niort au niveau national.

Résultats à venir…`,
    file: "/fichiers/telechargements/BD.zip" // Exemple de chemin de fichier
  },

  {
    id: 10,
    title: "Estimation par échantillonage",
    image: "/fichiers/imagesProjets/statinf.png",
    description: `L’objectif de ce projet était de tester différentes méthodes d’échantillonnage afin de comparer leurs résultats et de déterminer laquelle était la plus efficace.

Nous disposions d’un fichier Excel contenant les données démographiques de toutes les régions de France. Pour cette étude, nous nous sommes concentrés uniquement sur la région Pays de la Loire. L’objectif était d’estimer sa population à partir d’un échantillon, puis de comparer cette estimation au chiffre réel.

Pour cela, nous avons sélectionné un échantillon de 100 communes, selon deux méthodes distinctes. L’étude a été divisée en deux phases :

1. Une première phase utilisant un sondage aléatoire simple à probabilité égale, où chaque commune avait la même chance d’être sélectionnée.
2. Une seconde phase basée sur un sondage stratifié, consistant à diviser les communes en groupes homogènes avant de tirer l’échantillon.

Enfin, nous avons comparé les résultats issus des deux méthodes pour évaluer laquelle fournissait l’estimation la plus précise de la population réelle.`,

    file: "/fichiers/telechargements/BD.zip" // Exemple de chemin de fichier

  },
  {
    id: 11,
    title: "Indicateurs de performance",
    image: "/fichiers/imagesProjets/indicperf.png",
    description: `L’objectif de ce projet était de réaliser un bilan financier du groupe Fleury-Michon, puis de se concentrer plus spécifiquement sur sa filiale Fleury-Michon LS. Nous avons calculé différents indicateurs financiers, établi un diagnostic et conçu un tableau de bord intégrant des chiffres clés et des graphiques.
Pour ce faire, nous disposions de fichiers Excel à partir desquels nous avons effectué nos calculs et généré les visualisations.`,

    file: "/fichiers/telechargements/BD.zip" // Exemple de chemin de fichier
  },
  {
    id: 12,
    title: "Portfolio",
    image: "/fichiers/imagesProjets/portfolio.png",
    description: `Nous devions concevoir un portfolio présentant les projets réalisés, un bilan de notre première année, ainsi qu'une section dédiée à nos activités extra-scolaires.
Ce portfolio pouvait être réalisé à l’aide d’outils de création de sites ou directement par le biais du code.
J’ai choisi de le développer moi-même, ce qui m’a permis de renforcer mes compétences en HTML, CSS et JavaScript.`  },

  {
    id: 13,
    title: "Analyse de données, reporting et datavisualisation",
    image: "",
    description: "Description courte du projet 4",
    file: "/fichiers/telechargements/BD.zip" // Exemple de chemin de fichier
  }

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

// commentaireee

