import React from 'react'
import '/src/components/Whoami/Whoami.css';

const Whoami = () => {
	return (
		<div className='whoami'>
			<h2 className='titleWhoami'>Who am i?</h2>

			<h2 className='miniTitleWhoami'>Je suis un développeur Frontend avec un background solide en programmation bas niveau.</h2>
			<p>Ancien étudiant de l'école 42Born2Code, j'ai commencé par etudier le language C dans le domaine de la programmation systeme/reseau avant de me diriger vers du Web.<br />
				Je peux m'adapter à tout environnement de développement mais je me suis surtout spécialisé sur ReactJS et son écosystème.</p>

			<h2 className='miniTitleWhoami'>Je maitrise par exemple (liste non exhaustive) :</h2>

			<p>
				- ReactJs (React Hook)<br />
				- Typescript<br />
				- Storybook<br />
				- NextJS<br />
				- Redux<br />
				- SCSS/CSS<br />
				- HTML5<br />
			</p>
			<h2 className='miniTitleWhoami'>En quoi suis-je different d'un autre developpeur ?</h2>

			<p>Je mets un point d'honneur à ce que le code produit soit fonctionnel mais aussi :<br /><br />

          🛀 Propre (facilement lisible -> bon nommage des variables / fonctions / fichiers)<br /><br />
				🧑‍🔧 Maintenable (documenter/versionner son code ... il n'y a rien de mieux ! Et c’est un gain de temps, PR détaillée)<br /><br />
				♻️ Réutilisable 📈 (react fonctionnel)</p><br />

			<h2 className='contact'>👋 N'hesitez pas à me contacter 👋</h2><br /><br />
		</div>
	)
}

export default Whoami;
