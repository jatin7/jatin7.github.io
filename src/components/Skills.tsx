import React from 'react';
import { Database, Cloud, BarChart3, Cpu, Shield, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Platforms",
      skills: [
        { name: "Apache Spark", level: 95 },
        { name: "Hadoop Ecosystem", level: 90 },
        { name: "Kafka", level: 88 },
        { name: "Airflow", level: 85 },
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Technologies",
      skills: [
        { name: "AWS", level: 92 },
        { name: "Azure", level: 88 },
        { name: "GCP", level: 85 },
        { name: "Kubernetes", level: 82 },
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & BI",
      skills: [
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 88 },
        { name: "Looker", level: 85 },
        { name: "Databricks", level: 87 },
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 98 },
        { name: "Scala", level: 85 },
        { name: "R", level: 80 },
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Governance",
      skills: [
        { name: "Apache Atlas", level: 88 },
        { name: "Collibra", level: 85 },
        { name: "Data Privacy", level: 90 },
        { name: "Security", level: 87 },
      ]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps & MLOps",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Terraform", level: 85 },
        { name: "MLflow", level: 82 },
        { name: "CI/CD", level: 88 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning modern data technologies, cloud platforms, and enterprise-grade solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-cyan-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;