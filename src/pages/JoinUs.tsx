import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { jobPostings, type JobPosting } from "@/utils/careersData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Linkedin, Briefcase, ArrowRight } from "lucide-react";

const departments = [...new Set(jobPostings.map(job => job.department))];

const LinkedInCTA = () => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-none text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 rounded-full -ml-24 -mb-24 opacity-20"></div>
        <CardContent className="pt-8 pb-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Linkedin className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <Briefcase className="w-6 h-6" />
                More Opportunities on LinkedIn
              </h3>
              <p className="text-blue-100 text-lg">
                Don't see the perfect role? Follow us on LinkedIn for the latest job openings, company updates, and insights into life at Ecomotech.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
                onClick={() => window.open('https://www.linkedin.com/company/ecomotech/', '_blank')}
              >
                Visit LinkedIn
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const JoinUs = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobPostings.filter(job => {
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Join Our Team</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Help us build a sustainable future through innovative clean energy solutions
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Join Ecomotech?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of a team that's driving the renewable energy revolution and making a real impact on the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ecomotech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Work with cutting-edge technology in renewable energy and sustainable transport.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ecomotech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities and career development paths.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ecomotech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">Make a real difference in the fight against climate change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          
          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                  aria-label="Search job positions"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="department-select">Department</Label>
                <select
                  id="department-select"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border rounded-md bg-white"
                  aria-label="Filter by department"
                >
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* LinkedIn CTA */}
          <LinkedInCTA />

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Bottom LinkedIn CTA */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border-2 border-blue-600">
              <CardContent className="pt-8 pb-8">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Linkedin className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    Stay Connected for Future Opportunities
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Follow Ecomotech on LinkedIn to stay updated on new job openings, company news, industry insights, and be the first to know about exciting career opportunities in renewable energy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
                      onClick={() => window.open('https://www.linkedin.com/company/ecomotech/?viewAsMember=true', '_blank')}
                    >
                      <Linkedin className="mr-2 w-5 h-5" />
                      Follow on LinkedIn
                    </Button>
                    <span className="text-gray-500">or</span>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8"
                      onClick={() => window.open('https://www.linkedin.com/company/ecomotech/?viewAsMember=true', '_blank')}
                    >
                      <Briefcase className="mr-2 w-5 h-5" />
                      View All Jobs on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const JobCard = ({ job }: { job: JobPosting }) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ecomotech-blue text-white">
              {job.department}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {job.location}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {job.type}
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <Button 
          variant="default"
          onClick={() => navigate(`/jobs/${job.id}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default JoinUs;