import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Battery, 
  Zap, 
  TrendingUp, 
  Settings, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Users,
  Share2,
  Calendar,
  Activity,
  Globe,
  Building,
  Leaf,
  DollarSign,
  Clock,
  Wrench,
  BarChart3
} from "lucide-react";

const BESSRentalServices = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Location de Systèmes de Stockage d\'Énergie Tout-en-Un (BESS)',
        text: 'Découvrez le modèle innovant de location BESS au service de la transition énergétique.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Location de Systèmes de Stockage d'Énergie Tout-en-Un (BESS)&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg">
              Stockage d'Énergie BESS
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-green-400 drop-shadow-lg">
              Location de Systèmes de Stockage d'Énergie Tout-en-Un (BESS) : Un Modèle Innovant au Service de la Transition Énergétique
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 mb-6">
              <span className="font-semibold">14 septembre 2025</span>
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block bg-gray-600" />
              <span>Par l'équipe technique EcoMoTech</span>
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block bg-gray-600" />
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform text-xs sm:text-sm"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
                Partager
              </button>
            </div>
            <ResponsiveImage
              src="/EcoMoTechWeb/images/News/battery-3kw black.png"
              alt="Système de stockage d'énergie BESS tout-en-un en location"
              className="w-full h-44 sm:h-66 lg:h-[450px] object-contain bg-gray-800 rounded-2xl shadow-xl mb-8 p-4"
              fallback="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16">
            {/* 1️⃣ Définition et aperçu des services de location BESS */}
            <Card className="bg-gray-800/90 backdrop-blur-lg shadow-lg border border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
                  <Battery className="w-8 h-8" />
                  1️⃣ Définition et aperçu des services de location BESS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <p className="text-xl font-medium text-gray-200 leading-relaxed">
                  Un BESS ou (Battery Energy Storage System) tout-en-un est une solution intégrée combinant batteries, onduleurs, systèmes de gestion (BMS/EMS) et dispositifs de sécurité dans un seul module prêt à l'emploi.
                </p>
                <p>
                  La location de ces systèmes consiste à mettre à disposition, pour une durée déterminée, un équipement complet permettant de stocker et restituer l'énergie sans que l'utilisateur ait à supporter les coûts d'acquisition ni la gestion technique lourde.
                </p>
              </CardContent>
            </Card>

            {/* 2️⃣ Principaux avantages de la location */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-3">
                  <DollarSign className="w-8 h-8" />
                  2️⃣ Principaux avantages de la location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <div className="grid gap-6">
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-6 h-6 text-emerald-400" />
                      <h4 className="text-xl font-semibold text-gray-200">Efficacité économique</h4>
                    </div>
                    <p>Aucun investissement initial élevé, paiement uniquement pour l'usage.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6 text-blue-400" />
                      <h4 className="text-xl font-semibold text-gray-200">Flexibilité et évolutivité</h4>
                    </div>
                    <p>Possibilité d'ajuster la capacité en fonction de la demande ou d'un projet pilote.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-green-400" />
                      <h4 className="text-xl font-semibold text-gray-200">Réduction des risques</h4>
                    </div>
                    <p>Maintenance, mise à jour logicielle et garantie souvent incluses.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-400" />
                      <h4 className="text-xl font-semibold text-gray-200">Optimisation des flux de trésorerie</h4>
                    </div>
                    <p>Les dépenses passent en charges d'exploitation (OPEX) plutôt qu'en immobilisations (CAPEX).</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-yellow-400" />
                      <h4 className="text-xl font-semibold text-gray-200">Accès à la dernière technologie</h4>
                    </div>
                    <p>Remplacement facile en cas d'évolution rapide du marché.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3️⃣ Cas d'usage et applications */}
            <Card className="bg-gray-800/90 border border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  3️⃣ Cas d'usage et applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <p className="text-xl font-medium text-gray-200 leading-relaxed">
                  Les BESS en location s'adaptent à de nombreux scénarios :
                </p>

                <div className="space-y-6">
                  <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Leaf className="w-6 h-6 text-emerald-400" />
                      <h4 className="text-xl font-semibold text-emerald-300">Intégration des énergies renouvelables</h4>
                    </div>
                    <p>Stockage de l'excédent solaire ou éolien pour une utilisation différée.</p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-blue-400" />
                      <h4 className="text-xl font-semibold text-blue-300">Stabilisation du réseau</h4>
                    </div>
                    <p>Soutien en fréquence, régulation de tension.</p>
                  </div>
                  
                  <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-700">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-400" />
                      <h4 className="text-xl font-semibold text-purple-300">Gestion des pointes (peak shaving)</h4>
                    </div>
                    <p>Réduction des coûts liés aux pics de consommation.</p>
                  </div>
                  
                  <div className="bg-red-900/30 p-6 rounded-lg border border-red-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-red-400" />
                      <h4 className="text-xl font-semibold text-red-300">Alimentation de secours</h4>
                    </div>
                    <p>Continuité de service pour les sites critiques (centres de santé, data centers, télécoms).</p>
                  </div>
                  
                  <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-yellow-400" />
                      <h4 className="text-xl font-semibold text-yellow-300">Événements temporaires</h4>
                    </div>
                    <p>Concerts, chantiers isolés, interventions humanitaires.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4️⃣ Tendances du marché et moteurs de croissance */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  4️⃣ Tendances du marché et moteurs de croissance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <p>
                  La demande mondiale pour des solutions de stockage flexibles augmente, portée par :
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Leaf className="w-6 h-6 text-green-400" />
                      <h4 className="text-lg font-semibold text-gray-200">Décarbonation</h4>
                    </div>
                    <p className="text-sm">Des systèmes électriques.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      <h4 className="text-lg font-semibold text-gray-200">Énergies intermittentes</h4>
                    </div>
                    <p className="text-sm">L'essor des énergies renouvelables.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <h4 className="text-lg font-semibold text-gray-200">Résilience</h4>
                    </div>
                    <p className="text-sm">Face aux coupures de réseau.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-6 h-6 text-purple-400" />
                      <h4 className="text-lg font-semibold text-gray-200">Modèles "as-a-service"</h4>
                    </div>
                    <p className="text-sm">Adoption par les secteurs industriel et tertiaire.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 p-6 rounded-lg border border-emerald-700">
                  <p className="text-xl font-semibold text-emerald-300 text-center">
                    Les analystes prévoient une croissance annuelle de plus de <strong>20%</strong> du marché des BESS en location d'ici 2030.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5️⃣ Étude de cas : ecomowatt.com */}
            <Card className="bg-gray-800/90 border border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
                  <Globe className="w-8 h-8" />
                  5️⃣ Étude de cas : ecomowatt.com
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <p className="text-xl font-medium text-gray-200 leading-relaxed">
                  Ecomowatt propose un service de location de systèmes BESS tout-en-un allant de 3 kW à 50 kW, adaptés aux usages domestiques, professionnels ou industriels.
                </p>
                
                <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-700">
                  <h4 className="text-xl font-bold text-emerald-300 mb-4">Ses points forts :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Solutions modulaires livrées prêtes à l'emploi.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Installation, formation des utilisateurs et maintenance incluses.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Suivi à distance via une plateforme web intuitive.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Options de contrat souples (court ou long terme).</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Accompagnement technique pour optimiser les cycles de charge/décharge.</span>
                    </li>
                  </ul>
                </div>

                <p className="italic text-center text-xl font-medium text-emerald-400 bg-gray-700/30 p-4 rounded-lg border border-emerald-700">
                  Cette approche "clé en main" facilite l'adoption du stockage même pour des organisations peu familières avec les aspects techniques.
                </p>
              </CardContent>
            </Card>

            {/* 6️⃣ Comparaison avec d'autres prestataires */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8" />
                  6️⃣ Comparaison avec d'autres prestataires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <p>
                  Les acteurs internationaux (Aggreko, Powin, Fluence) proposent également des BESS en location, mais souvent pour des puissances supérieures (&gt;100 kW).
                </p>
                
                <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-700">
                  <h4 className="text-xl font-bold text-emerald-300 mb-4">Les points différenciants d'Ecomowatt :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Orientation vers les petites et moyennes puissances, idéales pour PME, sites isolés ou événements.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Proximité avec le marché africain, facilitant logistique et support.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span>Contrats plus accessibles pour les clients ayant des besoins ponctuels.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 7️⃣ Considérations techniques pour le déploiement */}
            <Card className="bg-gray-800/90 border border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                  <Wrench className="w-8 h-8" />
                  7️⃣ Considérations techniques pour le déploiement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <div className="space-y-6">
                  <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-6 h-6 text-yellow-400" />
                      <h4 className="text-xl font-semibold text-yellow-300">Installation</h4>
                    </div>
                    <p>Évaluation du site, respect des normes électriques et de sécurité.</p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Wrench className="w-6 h-6 text-blue-400" />
                      <h4 className="text-xl font-semibold text-blue-300">Maintenance préventive</h4>
                    </div>
                    <p>Vérification des cellules, calibrage du BMS, contrôle thermique.</p>
                  </div>
                  
                  <div className="bg-green-900/30 p-6 rounded-lg border border-green-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-green-400" />
                      <h4 className="text-xl font-semibold text-green-300">Surveillance en temps réel</h4>
                    </div>
                    <p>Via SCADA ou applications mobiles pour anticiper toute anomalie.</p>
                  </div>
                  
                  <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-purple-400" />
                      <h4 className="text-xl font-semibold text-purple-300">Gestion du cycle de vie</h4>
                    </div>
                    <p>Remplacement des modules en fin de vie, recyclage des batteries selon les réglementations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 8️⃣ Impacts environnementaux et économiques */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-400 flex items-center gap-3">
                  <Leaf className="w-8 h-8" />
                  8️⃣ Impacts environnementaux et économiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <div className="bg-green-900/30 p-6 rounded-lg border border-green-700">
                  <h4 className="text-xl font-bold text-green-300 mb-4">La location favorise :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Leaf className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>L'économie circulaire : réutilisation optimale des équipements.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>La réduction des déchets électroniques grâce à une meilleure planification de la fin de vie.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>La baisse de l'empreinte carbone en remplaçant les groupes électrogènes diesel.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Sur le plan économique, les entreprises optimisent leurs coûts énergétiques et améliorent leur compétitivité.
                </p>
              </CardContent>
            </Card>

            {/* 9️⃣ Défis et stratégies d'atténuation */}
            <Card className="bg-gray-800/90 border border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-400 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  9️⃣ Défis et stratégies d'atténuation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-gray-300">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-600">
                    <thead>
                      <tr className="bg-gray-700">
                        <th className="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Défi</th>
                        <th className="border border-gray-600 px-4 py-3 text-left text-blue-400 font-semibold">Stratégie</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-800/50">
                        <td className="border border-gray-600 px-4 py-3 text-gray-200 font-medium">Compatibilité technologique</td>
                        <td className="border border-gray-600 px-4 py-3">Sélection de standards ouverts et mise à jour régulière du firmware</td>
                      </tr>
                      <tr className="bg-gray-700/30">
                        <td className="border border-gray-600 px-4 py-3 text-gray-200 font-medium">Cadre réglementaire</td>
                        <td className="border border-gray-600 px-4 py-3">Conformité aux normes locales (sécurité électrique, environnement)</td>
                      </tr>
                      <tr className="bg-gray-800/50">
                        <td className="border border-gray-600 px-4 py-3 text-gray-200 font-medium">Clauses contractuelles</td>
                        <td className="border border-gray-600 px-4 py-3">Transparence sur les obligations, assurances et conditions de restitution</td>
                      </tr>
                      <tr className="bg-gray-700/30">
                        <td className="border border-gray-600 px-4 py-3 text-gray-200 font-medium">Disponibilité des stocks</td>
                        <td className="border border-gray-600 px-4 py-3">Planification logistique et partenariats avec les fabricants</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gray-700 border border-gray-600 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-900/50 rounded-lg border border-emerald-600">
                    <Battery className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-200">Conclusion</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-300">
                  <p className="text-xl font-medium text-gray-200 leading-relaxed">
                    La location de BESS tout-en-un est un levier puissant pour démocratiser l'accès au stockage d'énergie. Grâce à des acteurs comme Ecomowatt, entreprises, collectivités et particuliers peuvent profiter d'une énergie fiable, durable et flexible sans immobiliser des capitaux importants.
                  </p>
                  <div className="bg-gradient-to-r from-emerald-800 to-blue-800 text-white p-8 rounded-lg border border-emerald-600">
                    <p className="text-2xl font-extrabold text-center">
                      Ce modèle, aligné sur la transition énergétique, devrait connaître une adoption massive dans les années à venir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-200">Intéressé par la Location BESS ?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products/energy-storage"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Battery className="w-5 h-5 mr-2" />
                  Solutions BESS
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-700 text-emerald-400 font-semibold rounded-lg border border-emerald-600 hover:bg-gray-600 transition-colors"
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

export default BESSRentalServices;