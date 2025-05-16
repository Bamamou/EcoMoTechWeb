import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { jobPostings } from "@/utils/careersData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const ACADEMIC_LEVELS = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "Ph.D.",
  "Other"
];

const EXPERIENCE_LEVELS = [
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years"
];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobPostings.find(j => j.id === id);
  const [formData, setFormData] = useState({
    academicLevel: "",
    experience: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
    linkedin: "", // Add LinkedIn field
  });

  if (!job) {
    return <div>Job not found</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate file size (5MB limit)
    if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      alert('Resume file size must be less than 5MB');
      return;
    }

    // Handle form submission logic here
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });
    formDataToSend.append('jobId', id || '');
    formDataToSend.append('jobTitle', job.title);
    formDataToSend.append('academicLevel', formData.academicLevel);
    formDataToSend.append('experience', formData.experience);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      // Handle success (e.g., show success message, redirect)
      alert('Application submitted successfully!');
      navigate('/join-us');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-ecomotech-blue to-blue-600">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {job.department}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                📍 {job.location}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                💼 {job.type}
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Job Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Role</h2>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </section>

              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Responsibilities</h2>
                <ul className="space-y-3 text-gray-600">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Requirements</h2>
                <ul className="space-y-3 text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Benefits</h2>
                <ul className="space-y-3 text-gray-600">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            </motion.div>

            {/* Application Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-xl sticky top-8 h-fit"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Apply for this position</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                    <Input
                      id="firstName"
                      required
                      className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                    <Input
                      id="lastName"
                      required
                      className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-gray-700">LinkedIn Profile URL (Optional)</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                    className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="academicLevel" className="text-gray-700">Academic Level</Label>
                    <Select
                      value={formData.academicLevel}
                      onValueChange={(value) => setFormData({...formData, academicLevel: value})}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your academic level" />
                      </SelectTrigger>
                      <SelectContent>
                        {ACADEMIC_LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-gray-700">Years of Experience</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({...formData, experience: value})}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {EXPERIENCE_LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-gray-700">Resume (PDF only, max 5MB)</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size > 5 * 1024 * 1024) {
                        alert('File size must be less than 5MB');
                        e.target.value = '';
                        return;
                      }
                      setFormData({...formData, resume: file || null});
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Please upload your CV in PDF format, maximum size 5MB
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-gray-700">Cover Letter (Optional)</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    className="h-32 rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default JobDetails;