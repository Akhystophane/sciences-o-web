import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-accent/5 mt-16 md:mt-16 pt-8 md:pt-12 pb-16 md:pb-20 overflow-hidden">
          <div className="container-page relative z-10">
            <div className="max-w-4xl mx-auto" data-reveal-children>
              <div className="text-center mb-12" data-reveal>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
                  Mentions Légales
                </h1>
                <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-4"></div>
                <p className="text-sm text-gray-600">Mise à jour : Octobre 2025</p>
              </div>

              <div className="space-y-8" data-reveal>
                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Éditeur du site
                  </h2>
                  <div className="space-y-2 text-gray-800">
                    <p><strong>Raison sociale :</strong> Sciences Ô</p>
                    <p><strong>Association loi 1901</strong></p>
                    <p><strong>Email de contact :</strong> scienceso.outremer@gmail.com</p>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Directeur de la publication
                  </h2>
                  <p className="text-gray-800">Le bureau de Sciences Ô</p>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Hébergement
                  </h2>
                  <p className="text-gray-800">
                    Le site est hébergé par Vercel Inc.<br />
                    Address: 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Protection des données personnelles
                  </h2>
                  <p className="text-gray-800 mb-4">
                    Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, 
                    aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification 
                    et de suppression des données personnelles vous concernant.
                  </p>
                  <p className="text-gray-800">
                    Pour exercer ce droit, veuillez nous contacter à l'adresse suivante : 
                    <a href="mailto:scienceso.outremer@gmail.com" className="text-primary hover:text-accent ml-1">
                      scienceso.outremer@gmail.com
                    </a>
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Propriété intellectuelle
                  </h2>
                  <p className="text-gray-800">
                    L'ensemble de ce site relève de la législation française et internationale 
                    sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                    reproduction sont réservés, y compris pour les documents téléchargeables 
                    et les représentations iconographiques et photographiques.
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Cookies
                  </h2>
                  <p className="text-gray-800">
                    Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
                    En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Liens externes
                  </h2>
                  <p className="text-gray-800">
                    Sciences Ô ne peut être tenue responsable du contenu des sites externes 
                    vers lesquels des liens sont proposés.
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl px-6 py-8 shadow-sm border border-primary/10">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                    Contact
                  </h2>
                  <p className="text-gray-800">
                    Pour toute question ou réclamation concernant ce site, vous pouvez nous 
                    contacter à l'adresse suivante : 
                    <a href="mailto:scienceso.outremer@gmail.com" className="text-primary hover:text-accent ml-1">
                      scienceso.outremer@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center" data-reveal>
                <a href="/" className="btn-primary px-8 py-3 rounded-full">
                  Retour à l'accueil
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

