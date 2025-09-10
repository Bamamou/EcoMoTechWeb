import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Sun, 
  Heart, 
  MapPin, 
  Battery, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Zap,
  Share2,
  Calendar,
  Activity,
  Globe,
  Building,
  Leaf,
  TrendingUp,
  Clock,
  Settings,
  Award
} from "lucide-react";

const SolarHealthcareLighting = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Énergie Solaire pour les Centres de Santé Communautaires',
        text: 'Découvrez comment l\'énergie solaire révolutionne les soins de santé ruraux en Afrique subsaharienne.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Énergie Solaire pour les Centres de Santé Communautaires&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg">
              Santé & Énergie Solaire
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-600 to-emerald-500 drop-shadow-lg">
              Énergie Solaire pour les Centres de Santé Communautaires : Une Révolution pour la Santé Rurale
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 mb-6">
              <span className="font-semibold">10 septembre 2025</span>
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
              <span>Par l'équipe technique EcoMoTech</span>
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform text-xs sm:text-sm"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
                Partager
              </button>
            </div>
            <ResponsiveImage
              src="/EcoMoTechWeb/images/News/energie solaire.png"
              alt="Centre de santé rural éclairé par l'énergie solaire en Afrique"
              className="w-full h-48 sm:h-80 object-cover rounded-2xl shadow-xl mb-8"
              fallback="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16">
            {/* Introduction Contextuelle */}
            <Card className="bg-white/90 backdrop-blur-lg shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-700 flex items-center gap-3">
                  <Globe className="w-8 h-8" />
                  Introduction Contextuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  Dans de nombreuses régions rurales d'Afrique subsaharienne, l'accès à une électricité fiable demeure un défi majeur, particulièrement pour les infrastructures essentielles telles que les centres de santé.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h4 className="text-xl font-semibold text-red-800">Statistiques Alarmantes</h4>
                  </div>
                  <ul className="space-y-2 text-red-800">
                    <li>• <strong>25 000</strong> établissements de santé n'ont aucun accès à l'électricité</li>
                    <li>• <strong>70 000</strong> autres n'ont qu'un accès partiel ou intermittent</li>
                    <li>• Des millions de personnes privées de soins médicaux de qualité</li>
                  </ul>
                </div>

                <p>
                  Cette pénurie énergétique a des répercussions profondes et souvent dramatiques sur la prestation des soins de santé. L'absence d'électricité fiable signifie l'impossibilité de conserver les vaccins et les médicaments qui nécessitent une chaîne du froid, rendant la prévention des maladies et les traitements essentiels inefficaces.
                </p>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border border-green-200">
                  <p className="text-xl font-semibold text-green-800 text-center">
                    Face à ces défis, l'adoption de solutions d'éclairage solaire pour les centres de santé communautaires n'est pas seulement une amélioration, mais une <strong>véritable révolution</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Aperçu Technique */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-3">
                  <Settings className="w-8 h-8" />
                  Aperçu Technique
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  L'intégration de l'énergie solaire dans les centres de santé repose sur des technologies photovoltaïques éprouvées, offrant une solution robuste et durable aux problèmes d'accès à l'électricité.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Sun className="w-6 h-6 text-yellow-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Panneaux Solaires PV</h4>
                    </div>
                    <p className="text-gray-700">Convertissent directement la lumière du soleil en électricité avec une exposition maximale optimisée.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Contrôleur de Charge</h4>
                    </div>
                    <p className="text-gray-700">Régule le flux d'énergie pour protéger les batteries et prolonger leur durée de vie.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Battery className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Batteries Lithium</h4>
                    </div>
                    <p className="text-gray-700">Stockent l'énergie pour utilisation nocturne et par temps couvert avec efficacité maximale.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-purple-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Onduleur</h4>
                    </div>
                    <p className="text-gray-700">Convertit le courant continu en alternatif compatible avec les équipements médicaux.</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h4 className="text-xl font-semibold text-blue-800">Scalabilité</h4>
                  </div>
                  <p>Ces systèmes peuvent être dimensionnés précisément selon les besoins énergétiques spécifiques de chaque centre de santé, de l'éclairage de base aux équipements médicaux complexes.</p>
                </div>
              </CardContent>
            </Card>

            {/* Impact sur la Santé */}
            <Card className="bg-white/90 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-700 flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  Impact sur la Santé
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  L'implémentation de l'éclairage solaire dans les centres de santé communautaires a un impact transformateur et direct sur la qualité et l'accessibilité des soins.
                </p>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-green-800">Prolongation des Heures d'Ouverture</h4>
                    </div>
                    <p>Les centres peuvent désormais offrir des consultations, soins et services d'urgence 24h/24, cruciaux notamment pour les accouchements nocturnes.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-blue-800">Amélioration des Procédures Médicales</h4>
                    </div>
                    <p>Meilleure visibilité pour diagnostics précis, petites chirurgies optimales et stérilisation adéquate des équipements.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Battery className="w-6 h-6 text-purple-600" />
                      <h4 className="text-xl font-semibold text-purple-800">Conservation des Vaccins</h4>
                    </div>
                    <p>Alimentation des réfrigérateurs médicaux pour maintenir la chaîne du froid et éviter le gaspillage de ressources précieuses.</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                      <h4 className="text-xl font-semibold text-orange-800">Préparation aux Urgences</h4>
                    </div>
                    <p>Résilience énergétique garantie même lors de pannes du réseau national, permettant une gestion efficace des urgences médicales.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Avantages Socio-économiques */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-700 flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  Avantages Socio-économiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                <p>
                  Au-delà des améliorations directes des services de santé, l'adoption de l'éclairage solaire génère une multitude d'avantages socio-économiques transformateurs.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Résultats Patients</h4>
                    </div>
                    <p>Réduction notable de la mortalité infantile et maternelle, augmentation de l'espérance de vie grâce à des soins de meilleure qualité.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Rétention Personnel</h4>
                    </div>
                    <p>Conditions de travail améliorées attirent et retiennent les professionnels médicaux dans les zones rurales.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-6 h-6 text-purple-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Bien-être Communautaire</h4>
                    </div>
                    <p>Les centres éclairés deviennent des symboles de progrès, stimulant l'activité économique locale et créant des emplois.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6 text-orange-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Économies Significatives</h4>
                    </div>
                    <p>Réduction des coûts énergétiques permettant de réinvestir dans médicaments, infrastructures et formation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Avantages Environnementaux */}
            <Card className="bg-white/90 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-700 flex items-center gap-3">
                  <Leaf className="w-8 h-8" />
                  Avantages Environnementaux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-6 rounded-lg border border-emerald-200">
                  <p className="text-xl font-semibold text-emerald-800 mb-4">
                    L'adoption de l'éclairage solaire représente un pas significatif vers un avenir plus durable.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-green-800">Réduction de l'Empreinte Carbone</h4>
                    </div>
                    <p>Remplacement des générateurs diesel par l'énergie solaire, diminuant drastiquement les émissions de gaz à effet de serre.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-blue-800">Indépendance Énergétique</h4>
                    </div>
                    <p>Réduction de la dépendance aux combustibles fossiles, gagnant en autonomie énergétique et en sécurité d'approvisionnement.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Sun className="w-6 h-6 text-purple-600" />
                      <h4 className="text-xl font-semibold text-purple-800">Promotion des Énergies Renouvelables</h4>
                    </div>
                    <p>Chaque installation devient un exemple concret de viabilité des solutions énergétiques propres, inspirant d'autres initiatives.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Durabilité et Évolutivité */}
            <Card className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-700 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  Durabilité et Évolutivité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  La pérennité de l'initiative repose sur des stratégies solides garantissant que les bénéfices continuent de transformer les soins de santé ruraux sur le long terme.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6 text-blue-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Maintenance Régulière</h4>
                    </div>
                    <p className="text-sm text-gray-700">Programmes préventifs incluant nettoyage des panneaux et vérifications périodiques.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Formation Locale</h4>
                    </div>
                    <p className="text-sm text-gray-700">Personnel de santé et techniciens formés pour maintenance autonome et réparations de base.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-6 h-6 text-red-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Engagement Communautaire</h4>
                    </div>
                    <p className="text-sm text-gray-700">Comités locaux pour supervision, fonds de maintenance et sensibilisation communautaire.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg border border-green-300">
                  <div className="flex items-start gap-4">
                    <Globe className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-3">Évolutivité et Réplication</h4>
                      <p className="text-lg">
                        Le succès de cette initiative peut servir de modèle puissant pour la réplication dans d'autres régions, avec des modèles de financement durables et des partenariats public-privé.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Études de Cas */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700 flex items-center gap-3">
                  <MapPin className="w-8 h-8" />
                  Études de Cas et Données
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                <p>
                  L'efficacité de l'éclairage solaire dans les centres de santé ruraux est attestée par de nombreuses études de cas issues de projets menés à travers l'Afrique.
                </p>

                <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-sm">
                  <h4 className="text-xl font-bold text-blue-800 mb-6">Projets Réussis en Afrique</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-blue-800">Madagascar</h5>
                      <p className="text-sm text-blue-600">Cliniques 24h/24</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-green-800">RD Congo</h5>
                      <p className="text-sm text-green-600">Urgences nocturnes</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-purple-800">Zambie</h5>
                      <p className="text-sm text-purple-600">Accouchements sécurisés</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-yellow-800">Ghana</h5>
                      <p className="text-sm text-yellow-600">Conservation vaccins</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-red-800">Bénin</h5>
                      <p className="text-sm text-red-600">Équipements médicaux</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-indigo-800">Sénégal</h5>
                      <p className="text-sm text-indigo-600">Formations locales</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-800">Réduction dépendance combustibles fossiles</span>
                      <span className="text-2xl font-bold text-green-600">+60%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-800">Établissements sans électricité en Afrique</span>
                      <span className="text-2xl font-bold text-blue-600">1/4</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <span className="font-medium text-red-800">Accès électrique non fiable</span>
                      <span className="text-2xl font-bold text-red-600">28%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gray-50 border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Sun className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Conclusion</h2>
                </div>
                <div className="space-y-6 text-lg">
                  <p className="text-xl font-medium text-gray-800 leading-relaxed">
                    L'éclairage solaire pour les centres de santé communautaires représente bien plus qu'une simple solution énergétique : c'est un catalyseur de transformation sociale, économique et environnementale.
                  </p>
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-lg text-center">
                    <p className="text-xl font-bold mb-4">
                      Grâce à l'innovation et à l'engagement, nous pouvons :
                    </p>
                    <p className="text-2xl font-extrabold">
                      Illuminer l'avenir de la santé communautaire en Afrique
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Prêt à Transformer les Soins de Santé Ruraux ?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services/solar-consultancy"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Solutions Santé Solaire
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg border border-green-300 hover:bg-green-50 transition-colors"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Nous Contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default SolarHealthcareLighting;
