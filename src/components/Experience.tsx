import React from 'react';
import { MapPin, Calendar, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Architect",
      company: "TechCorp Global",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led migration of 500TB+ data infrastructure to cloud, reducing costs by 40%",
        "Designed and implemented real-time analytics platform serving 10M+ users",
        "Built MLOps pipeline reducing model deployment time from weeks to hours",
        "Mentored team of 12 data engineers and established best practices"
      ],
      technologies: ["AWS", "Spark", "Kafka", "Kubernetes", "Python", "Terraform"]
    },
    {
      title: "Principal Data Engineer",
      company: "DataFlow Solutions",
      location: "New York, NY",
      period: "2019 - 2022",
      type: "Full-time",
      achievements: [
        "Architected data lake serving 100+ internal teams and external clients",
        "Implemented data governance framework improving data quality by 60%",
        "Developed automated testing suite reducing data pipeline failures by 80%",
        "Led cross-functional team for major platform modernization project"
      ],
      technologies: ["Azure", "Databricks", "Airflow", "SQL Server", "Python", "Docker"]
    },
    {
      title: "Senior Data Engineer",
      company: "Analytics Inc",
      location: "Austin, TX",
      period: "2017 - 2019",
      type: "Full-time",
      achievements: [
        "Built end-to-end data pipelines processing 50TB daily across multiple sources",
        "Optimized query performance resulting in 70% faster report generation",
        "Implemented monitoring and alerting system reducing downtime by 90%",
        "Collaborated with data scientists to productionize ML models"
      ],
      technologies: ["GCP", "BigQuery", "Apache Beam", "Kubernetes", "Java", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Over 7+ years of experience building scalable data solutions for enterprise organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                        <h4 className="text-lg text-gray-200">{exp.company}</h4>
                      </div>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-200 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-cyan-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 text-sm flex items-start">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;