import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  FileCheck,
  Zap,
  Calendar,
  Share2,
  Globe,
  BookOpen,
  Target,
  Settings,
  TrendingUp,
  Battery,
  Flame,
  Truck,
  Car,
  Smartphone,
  Activity
} from "lucide-react";

const BatterySafetyStandards = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Comprehensive Guide to Lithium-Ion Battery Safety Standards',
        text: 'An authoritative reference for battery safety standards covering design, manufacturing, testing, and transportation.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Comprehensive Guide to Lithium-Ion Battery Safety Standards&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-blue-600 text-white">
              Battery Safety & Standards
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Comprehensive Guide to Lithium-Ion Battery Safety Standards
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>October 7, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>Technical Guide</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            
            <ResponsiveImage
              src="/EcoMoTechWeb/images/BESS/BESS.jpg"
              alt="Lithium-Ion Battery Safety Standards"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Introduction
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The rapid proliferation of lithium-ion batteries across a vast array of applications, from consumer electronics to electric vehicles and large-scale energy storage, has brought the issue of battery safety to the forefront. The high energy density that makes these batteries so attractive also introduces inherent risks, including the potential for thermal runaway, fire, and explosion. To mitigate these risks, a complex and evolving landscape of safety standards has been developed by international, national, and industry-specific organizations. This guide provides a comprehensive overview of the most critical safety standards governing the design, manufacturing, testing, and transportation of lithium-ion batteries. Its purpose is to serve as an authoritative reference for engineers, designers, manufacturers, and quality assurance professionals involved in the battery industry. Each section of this guide is dedicated to a major standard, providing a detailed analysis of its introduction, structure, purpose, scope, requirements, and implementation.
              </p>
            </div>
          </div>
          
          {/* UN 38.3 Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                1. UN 38.3 - Transportation of Dangerous Goods
              </h2>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The United Nations (UN) Recommendations on the Transport of Dangerous Goods, specifically subsection 38.3 of the UN Manual of Tests and Criteria, is the foundational standard for the safe transportation of lithium batteries. Compliance with UN 38.3 is a global requirement for shipping lithium batteries by any mode of transport: air, sea, rail, or road. The standard is designed to ensure that batteries can withstand the rigors of transportation and are not unduly susceptible to conditions that could lead to a hazardous event.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                    Parts of the Standard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    UN 38.3 is comprised of a series of eight tests, designated T.1 through T.8, that simulate various conditions a battery might encounter during transport. These tests are designed to evaluate the battery's ability to withstand mechanical, electrical, and environmental stresses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Purpose
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    The primary purpose of UN 38.3 is to ensure the safety of the public and all personnel involved in the transportation of lithium batteries. By subjecting batteries to a series of rigorous tests, the standard aims to identify and mitigate potential hazards before the batteries enter the supply chain.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Scope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  UN 38.3 applies to all lithium cells and batteries, including both lithium-metal (primary) and lithium-ion (rechargeable) chemistries. There are some exceptions for very small cells and for batteries that are contained within or packed with equipment, but in general, any lithium battery being shipped as a standalone product must be certified to this standard.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Summary of Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The eight tests of UN 38.3 are as follows:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">T.1</td>
                        <td className="border border-gray-300 px-4 py-2">Altitude Simulation</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the low-pressure environment of air transport.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">T.2</td>
                        <td className="border border-gray-300 px-4 py-2">Thermal Test</td>
                        <td className="border border-gray-300 px-4 py-2">Subjects the battery to extreme temperature cycling to evaluate its response to thermal stress.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">T.3</td>
                        <td className="border border-gray-300 px-4 py-2">Vibration</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the vibrations that can occur during transport by road, rail, or air.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">T.4</td>
                        <td className="border border-gray-300 px-4 py-2">Shock</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the impacts and shocks that can occur during handling and transport.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">T.5</td>
                        <td className="border border-gray-300 px-4 py-2">External Short Circuit</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's response to an external short circuit.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">T.6</td>
                        <td className="border border-gray-300 px-4 py-2">Impact / Crush</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates mechanical abuse from impact or crushing. This test is required for individual cells, not battery packs.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">T.7</td>
                        <td className="border border-gray-300 px-4 py-2">Overcharge</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's ability to withstand overcharging conditions. This test is required for rechargeable batteries only.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">T.8</td>
                        <td className="border border-gray-300 px-4 py-2">Forced Discharge</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the cell's ability to withstand forced discharge conditions. This test is required for individual cells only.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To pass the standard, batteries must not exhibit any signs of disassembly, leakage, venting, fire, or explosion, and must not have a voltage drop of more than 10% of their pre-test voltage.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To achieve UN 38.3 compliance, manufacturers must:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li><strong>Design for Compliance:</strong> Incorporate design features that enhance the battery's ability to withstand the tests, such as robust cell construction, proper venting, and a well-designed battery management system (BMS).</li>
                  <li><strong>Select an Accredited Test Lab:</strong> Engage a testing laboratory that is accredited to perform UN 38.3 testing.</li>
                  <li><strong>Prepare Test Samples:</strong> Provide the required number of cells and/or batteries for testing, as specified in the standard.</li>
                  <li><strong>Create a Test Summary:</strong> As of January 1, 2020, manufacturers and distributors of lithium batteries are required to make a test summary available to all parties in the supply chain. This summary must include a standardized set of information, including the name of the cell, battery, or product manufacturer; the test laboratory; a unique test report identification number; a description of the battery; and a list of the tests conducted and the results.</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 max-w-4xl mx-auto" />

          {/* IEC 62133 Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                2. IEC 62133 - Portable Applications
              </h2>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The International Electrotechnical Commission (IEC) 62133 standard is the primary safety standard for portable, sealed secondary cells and batteries containing alkaline or other non-acid electrolytes. The standard is divided into two parts: IEC 62133-1 for nickel systems and IEC 62133-2 for lithium systems. This guide will focus on IEC 62133-2, which is the most relevant standard for lithium-ion batteries used in portable applications.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  Parts of the Standard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-3">
                  IEC 62133-2 is organized into several key clauses that cover all aspects of battery safety, from design and manufacturing to testing and documentation. The most important clauses include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Clause 5: Design and manufacturing:</strong> This clause specifies requirements for the design and manufacturing of cells and batteries, including requirements for the separator, electrolyte, and case.</li>
                  <li><strong>Clause 7: Testing:</strong> This clause specifies the tests that must be performed on cells and batteries to evaluate their safety. These tests include both electrical and mechanical tests.</li>
                  <li><strong>Clause 8: Information for safety:</strong> This clause specifies the safety information that must be provided with the battery, including warnings and instructions for safe use.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Purpose
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    The purpose of IEC 62133-2 is to establish a set of internationally recognized safety requirements for portable lithium-ion batteries. The standard is designed to protect consumers from the risks of fire, explosion, and chemical burns that can be associated with these batteries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Scope
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    IEC 62133-2 applies to portable, sealed secondary lithium cells and batteries for use in portable applications. This includes batteries used in a wide range of products, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Laptops and tablets</li>
                    <li>Mobile phones and smartphones</li>
                    <li>Power tools</li>
                    <li>E-bikes and e-scooters</li>
                    <li>Medical devices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Summary of Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IEC 62133-2 includes a comprehensive set of tests that are designed to evaluate the safety of lithium-ion batteries under a variety of conditions. The key tests include:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electrical</td>
                        <td className="border border-gray-300 px-4 py-2">Continuous low-rate charging</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's ability to withstand a continuous low-rate charge.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Electrical</td>
                        <td className="border border-gray-300 px-4 py-2">External short circuit</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's response to an external short circuit.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electrical</td>
                        <td className="border border-gray-300 px-4 py-2">Overcharging of battery</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's ability to withstand overcharging.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Free fall</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the dropping of the battery from a height of 1 meter.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Thermal abuse</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's response to high temperatures.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Crush</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the crushing of the battery.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Moulded case stress</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the ability of the battery case to withstand high temperatures without deforming.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To achieve compliance with IEC 62133-2, manufacturers must:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li><strong>Implement a Quality Management System:</strong> The standard requires that manufacturers have a quality management system in place that covers all aspects of the design and manufacturing process.</li>
                  <li><strong>Design for Safety:</strong> The battery must be designed to meet the safety requirements of the standard. This includes the use of appropriate materials, the incorporation of safety features such as a BMS, and the provision of clear and concise safety information.</li>
                  <li><strong>Conduct Type Testing:</strong> The battery must be tested by an accredited testing laboratory to verify that it meets the requirements of the standard.</li>
                  <li><strong>Obtain CB Certification:</strong> While not mandatory, obtaining a CB Test Certificate for IEC 62133-2 can greatly simplify the process of obtaining national certifications in many countries around the world.</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 max-w-4xl mx-auto" />

          {/* UL 2580 Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                3. UL 2580 - Electric Vehicle Batteries
              </h2>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  UL 2580, the Standard for Batteries for Use in Electric Vehicles, is a critical safety standard developed by Underwriters Laboratories. It is specifically tailored to the unique demands and potential hazards of high-voltage, high-capacity battery packs used in electric vehicles (EVs). This standard has become a benchmark for EV battery safety in North America and is increasingly referenced globally. It addresses the comprehensive safety of the battery pack as an integrated system, evaluating its ability to withstand harsh automotive environments and a wide range of abuse conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  Parts of the Standard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-3">
                  UL 2580 is a comprehensive standard that covers the entire battery pack lifecycle, from design and construction to testing and end-of-life. The standard is organized into several key sections, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Construction:</strong> Specifies requirements for the battery enclosure, electrical connections, and the use of materials.</li>
                  <li><strong>Performance:</strong> Includes tests to evaluate the battery's performance under normal operating conditions.</li>
                  <li><strong>Abuse Testing:</strong> This is the core of the standard, and it includes a series of rigorous tests that are designed to simulate a wide range of abuse conditions, including electrical, mechanical, and thermal abuse.</li>
                  <li><strong>Marking and Instructions:</strong> Specifies the safety markings and instructions that must be provided with the battery.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Purpose
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    The primary purpose of UL 2580 is to minimize the risk of fire, explosion, and electric shock from EV batteries. The standard is designed to ensure that EV batteries are safe for their intended use and that they do not pose an undue risk to vehicle occupants, first responders, or the public.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Scope
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    UL 2580 applies to battery packs and modules for use in electric vehicles. This includes batteries used in:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Battery Electric Vehicles (BEVs)</li>
                    <li>Plug-in Hybrid Electric Vehicles (PHEVs)</li>
                    <li>Hybrid Electric Vehicles (HEVs)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Summary of Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  UL 2580 includes a wide range of tests that are designed to evaluate the safety of EV batteries under a variety of conditions. The key tests include:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electrical</td>
                        <td className="border border-gray-300 px-4 py-2">Overcharge</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's response to extreme overcharging.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Electrical</td>
                        <td className="border border-gray-300 px-4 py-2">Short Circuit</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's ability to withstand a short circuit without causing a fire or explosion.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Vibration</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the long-term vibrations experienced in a vehicle.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Shock</td>
                        <td className="border border-gray-300 px-4 py-2">Simulates the shocks and impacts that can occur during a vehicle crash.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">Crush</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's ability to withstand a crushing force.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Thermal</td>
                        <td className="border border-gray-300 px-4 py-2">Thermal Stability (Bake Test)</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's stability at high temperatures.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Thermal</td>
                        <td className="border border-gray-300 px-4 py-2">Thermal Cycling</td>
                        <td className="border border-gray-300 px-4 py-2">Subjects the battery to repeated temperature changes to evaluate its durability.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Fire</td>
                        <td className="border border-gray-300 px-4 py-2">External Fire Exposure</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the battery's resistance to an external fire.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To achieve compliance with UL 2580, manufacturers must:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li><strong>Integrate Safety into the Design:</strong> The battery pack must be designed from the ground up with safety in mind. This includes the use of a robust enclosure, a sophisticated BMS, and a well-designed thermal management system.</li>
                  <li><strong>Conduct a Hazard Analysis:</strong> A thorough hazard analysis, such as a Failure Mode and Effects Analysis (FMEA), should be conducted to identify and mitigate potential safety risks.</li>
                  <li><strong>Perform Comprehensive Testing:</strong> The battery pack must be subjected to the full range of tests specified in UL 2580. This testing should be performed at a Nationally Recognized Testing Laboratory (NRTL) such as UL, Intertek, or TUV SUD.</li>
                  <li><strong>Maintain Detailed Documentation:</strong> Manufacturers must maintain detailed documentation of the design, manufacturing, and testing of the battery pack to demonstrate compliance with the standard.</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 max-w-4xl mx-auto" />

          {/* IEC 62660 Series Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Battery className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                4. IEC 62660 Series - Electric Vehicle Cells
              </h2>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The IEC 62660 series of standards is specifically focused on the performance and safety of secondary lithium-ion cells used for the propulsion of electric road vehicles. Unlike standards that focus on the battery pack as a whole, the IEC 62660 series provides a detailed set of requirements for the individual cells that make up the pack. This series is critical for ensuring the quality, reliability, and safety of the fundamental building blocks of an EV battery.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  Parts of the Standard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The IEC 62660 series is divided into three main parts:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>IEC 62660-1: Performance testing:</strong> This part of the standard specifies the tests that are used to evaluate the performance of lithium-ion cells, including their capacity, power, and energy efficiency.</li>
                  <li><strong>IEC 62660-2: Reliability and abuse testing:</strong> This part of the standard specifies the tests that are used to evaluate the reliability and safety of lithium-ion cells under abuse conditions, such as short circuit, overcharge, and thermal abuse.</li>
                  <li><strong>IEC 62660-3: Safety requirements:</strong> This part of the standard specifies the safety requirements for lithium-ion cells, including requirements for the cell design, manufacturing, and quality control.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Purpose
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    The purpose of the IEC 62660 series is to provide a standardized set of requirements for the performance and safety of lithium-ion cells used in EVs. This helps to ensure that cells from different manufacturers are comparable and that they meet a minimum level of quality and safety.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Scope
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    The IEC 62660 series applies to secondary lithium-ion cells used for the propulsion of electric road vehicles, including Battery Electric Vehicles (BEVs) and Hybrid Electric Vehicles (HEVs).
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Summary of Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The IEC 62660 series includes a wide range of tests that are designed to evaluate the performance, reliability, and safety of EV cells. The key tests include:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Standard</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-1</td>
                        <td className="border border-gray-300 px-4 py-2">Performance</td>
                        <td className="border border-gray-300 px-4 py-2">Capacity</td>
                        <td className="border border-gray-300 px-4 py-2">Measures the cell's ability to store energy.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-1</td>
                        <td className="border border-gray-300 px-4 py-2">Performance</td>
                        <td className="border border-gray-300 px-4 py-2">Power</td>
                        <td className="border border-gray-300 px-4 py-2">Measures the cell's ability to deliver power.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-1</td>
                        <td className="border border-gray-300 px-4 py-2">Performance</td>
                        <td className="border border-gray-300 px-4 py-2">Hybrid Pulse Power Characterization</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the cell's power capability under dynamic load conditions.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-2</td>
                        <td className="border border-gray-300 px-4 py-2">Reliability</td>
                        <td className="border border-gray-300 px-4 py-2">Thermal Cycling</td>
                        <td className="border border-gray-300 px-4 py-2">Subjects the cell to repeated temperature changes to evaluate its durability.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-2</td>
                        <td className="border border-gray-300 px-4 py-2">Abuse</td>
                        <td className="border border-gray-300 px-4 py-2">Overcharge</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the cell's response to extreme overcharging.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-2</td>
                        <td className="border border-gray-300 px-4 py-2">Abuse</td>
                        <td className="border border-gray-300 px-4 py-2">External Short Circuit</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the cell's ability to withstand a short circuit without causing a fire or explosion.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">IEC 62660-3</td>
                        <td className="border border-gray-300 px-4 py-2">Safety</td>
                        <td className="border border-gray-300 px-4 py-2">Thermal Propagation</td>
                        <td className="border border-gray-300 px-4 py-2">Evaluates the risk of thermal runaway propagating from one cell to another.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Implementation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To achieve compliance with the IEC 62660 series, cell manufacturers must:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li><strong>Establish a Robust Quality Control System:</strong> The standards place a strong emphasis on quality control throughout the manufacturing process.</li>
                  <li><strong>Conduct Comprehensive Cell Testing:</strong> The full range of performance, reliability, and safety tests must be conducted on the cells.</li>
                  <li><strong>Provide Detailed Test Reports:</strong> Manufacturers must provide detailed test reports to their customers to demonstrate compliance with the standards.</li>
                  <li><strong>Collaborate with Battery Pack Manufacturers:</strong> Cell manufacturers must work closely with battery pack manufacturers to ensure that the cells are properly integrated into the pack and that the overall system meets all safety requirements.</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 max-w-4xl mx-auto" />

          {/* Other Key Standards Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                5. Other Key Standards
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              While the standards detailed above represent some of the most critical regulations for lithium-ion batteries, the safety landscape is vast and includes many other important standards. This section provides a brief overview of several other key standards that are frequently encountered in the battery industry.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">UL 1642 - Standard for Lithium Batteries (Cells)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Introduction:</h4>
                    <p className="text-gray-700 text-sm">UL 1642 is one of the foundational standards for the safety of lithium cells (both primary and rechargeable). It is often a prerequisite for obtaining certification for a larger battery pack under standards like UL 2054.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Purpose:</h4>
                    <p className="text-gray-700 text-sm">To reduce the risk of fire or explosion when lithium cells are used in a product.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scope:</h4>
                    <p className="text-gray-700 text-sm">Applies to individual lithium cells and is not intended to evaluate these cells in end-product applications.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                    <p className="text-gray-700 text-sm">The standard includes a series of abuse tests similar to other standards, including external short circuit, abnormal charging, forced discharge, crush, impact, shock, vibration, and thermal abuse.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">UL 1973 - Standard for Batteries for Use in Stationary Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Introduction:</h4>
                    <p className="text-gray-700 text-sm">UL 1973 is the primary safety standard for batteries used in stationary energy storage systems (ESS), as well as for vehicle auxiliary power and light electric rail (LER) applications.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Purpose:</h4>
                    <p className="text-gray-700 text-sm">To evaluate the battery's ability to safely withstand exposure to abuse conditions and to ensure the safety of the battery system during normal operation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scope:</h4>
                    <p className="text-gray-700 text-sm">Applies to the battery system as a whole, including the cells, the BMS, and the enclosure.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                    <p className="text-gray-700 text-sm">Includes a comprehensive set of electrical, mechanical, and environmental tests, with a strong focus on the functional safety of the BMS and the overall system's ability to manage and contain thermal events.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SAE J2464 - Electric and Hybrid Electric Vehicle Rechargeable Energy Storage System (RESS) Safety and Abuse Testing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Introduction:</h4>
                    <p className="text-gray-700 text-sm">Developed by the Society of Automotive Engineers (SAE), SAE J2464 provides a standardized set of abuse tests for RESS used in electric and hybrid vehicles.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Purpose:</h4>
                    <p className="text-gray-700 text-sm">To provide a common set of test procedures for evaluating the safety of EV battery systems under abuse conditions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scope:</h4>
                    <p className="text-gray-700 text-sm">Applies to the complete RESS, including the battery pack, BMS, and all associated hardware.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                    <p className="text-gray-700 text-sm">The standard includes a series of mechanical and electrical abuse tests, such as penetration, crush, immersion, overcharge, and short circuit. It is often used in conjunction with other standards like UL 2580.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ISO 12405 Series - Test Specification for Lithium-Ion Traction Battery Packs and Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Introduction:</h4>
                    <p className="text-gray-700 text-sm">The ISO 12405 series provides a comprehensive set of test procedures for lithium-ion traction battery packs and systems for use in electrically propelled road vehicles.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Purpose:</h4>
                    <p className="text-gray-700 text-sm">To provide a standardized framework for testing the performance and safety of EV battery systems.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scope:</h4>
                    <p className="text-gray-700 text-sm">The series is divided into several parts, covering high-power applications (Part 1), high-energy applications (Part 2), safety performance requirements (Part 3), and performance testing (Part 4).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Key Requirements:</h4>
                    <p className="text-gray-700 text-sm">The standards include a wide range of tests for evaluating the battery system's performance, reliability, and safety, including tests for capacity, power, energy efficiency, and resistance to abuse conditions.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-8 max-w-4xl mx-auto" />

          {/* Conclusion Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Conclusion
              </h2>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                The landscape of lithium-ion battery safety standards is complex, multi-layered, and continuously evolving. From the foundational transportation requirements of UN 38.3 to the application-specific standards like IEC 62133 for portable devices and UL 2580 for electric vehicles, each regulation plays a crucial role in mitigating the inherent risks of this high-energy technology. A thorough understanding of these standards is not merely a matter of regulatory compliance; it is a fundamental aspect of responsible product design, manufacturing, and distribution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As battery technology continues to advance, with new chemistries and higher energy densities on the horizon, the standards that govern their safety will undoubtedly continue to evolve. Staying abreast of these changes and embracing a culture of safety by design will be paramount for all stakeholders in the battery industry. This guide serves as a foundational reference to navigate this critical domain, but continuous learning and a steadfast commitment to safety will be the ultimate keys to success.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/commercial-pv-bess-systems" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Battery className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          Commercial PV-BESS Systems
                        </h4>
                        <p className="text-sm text-gray-600">
                          Discover our integrated solar and battery energy storage solutions for commercial applications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/news/bess-rental-services" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          BESS Rental Services
                        </h4>
                        <p className="text-sm text-gray-600">
                          Flexible battery energy storage system rental solutions for temporary power needs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BatterySafetyStandards;
